use super::{Family, Id, Table};
use sqlx::postgres::PgQueryResult;
use sqlx::Row;

impl Table<'_, Family> {
    pub async fn create_family(&self, family: &Family) -> Result<i32, sqlx::Error> {
        sqlx::query(
            r#"
            INSERT INTO Families(author, family_name)
            VALUES ($1, $2)
            RETURNING id"#,
        )
        .bind(&family.author_username)
        .bind(&family.family_name)
        .fetch_one(&*self.pool)
        .await?
        .try_get(0)
    }

    pub async fn get_family_id_by_author(&self, author: String) -> Result<i32, sqlx::Error> {
        sqlx::query(
            r#"
            select id from families where author_username = $1
            "#,
        )
        .bind(author)
        .fetch_one(&*self.pool)
        .await?
        .try_get(0)
    }

    pub async fn get_family(&self, ind_id: i32, family_id: i32) -> Result<Family, sqlx::Error> {
        let x = sqlx::query_as(
            r#"
            SELECT * FROM individualtofamilies itf
            LEFT JOIN families f ON itf.family_id=f.id
            WHERE itf.individual_id=$1
            AND f.id=$2"#,
        )
        .bind(ind_id)
        .bind(family_id)
        .fetch_one(&*self.pool)
        .await;
        println!("{:?}", x);
        x
    }
}
