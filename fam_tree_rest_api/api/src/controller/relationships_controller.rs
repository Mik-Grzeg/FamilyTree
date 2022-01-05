use actix_web::{delete, get, post, put, web, HttpResponse, Responder};
use serde::Serialize;

use super::AppState;

use crate::errors::AppError;
use crate::models::{FamTree, Individual, IndividualBaseInfo, Relationship};

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(create_relationship)
        .service(get_family_tree)
        .service(edit_relationship);
}

#[derive(Serialize)]
struct RelId {
    id: i32,
}

#[post("/relationships")]
async fn create_relationship(
    app_state: web::Data<AppState<'_>>,
    relationship: web::Json<Relationship>,
) -> Result<impl Responder, AppError> {
    let relationship = relationship.into_inner();

    let query_res = app_state
        .context
        .relationships
        .create_relationship(&relationship)
        .await?;

    let rel_id = RelId { id: query_res };
    Ok(HttpResponse::Created().json(rel_id))
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct FamTreeWithInfo {
    relations: Vec<FamTree>,
    infos: Vec<IndividualBaseInfo>,
    root_id: String,
}

#[get("/tree/{username}")]
async fn get_family_tree(
    username: web::Path<String>,
    app_state: web::Data<AppState<'_>>,
) -> Result<HttpResponse, AppError> {
    let (fam_id, root_id): (i32, i32) = app_state
        .context
        .families
        .get_family_id_by_author(username.into_inner())
        .await?;

    let relations = app_state
        .context
        .relationships
        .get_family_as_relationships(fam_id)
        .await?;

    let infos = app_state
        .context
        .individuals
        .get_base_info_ind_in_family(fam_id)
        .await?;

    Ok(HttpResponse::Ok().json(FamTreeWithInfo {
        relations,
        infos,
        root_id: root_id.to_string(),
    }))
}

#[put("/relationships")]
async fn edit_relationship(
    app_state: web::Data<AppState<'_>>,
    relationship: web::Json<Relationship>,
) -> Result<HttpResponse, AppError> {
    let relationship = relationship.into_inner();

    let query_res = app_state
        .context
        .relationships
        .edit_relationship(&relationship)
        .await?;

    Ok(HttpResponse::Created().json(query_res))
}
