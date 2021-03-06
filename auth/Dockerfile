ARG PG_AUTH_USERNAME
ARG PG_AUTH_PASSWORD
ARG PG_HOST
ARG PG_AUTH_DB

FROM lukemathwalker/cargo-chef:latest-rust-1.57.0 AS chef
WORKDIR app

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --recipe-path recipe.json
# Build application
COPY . .
RUN cargo build --release && \
    cargo install diesel_cli --no-default-features --features postgres

# We do not need the Rust toolchain to run the binary!
FROM debian:buster-slim AS auth_migrator

ARG PG_AUTH_USERNAME
ARG PG_AUTH_PASSWORD
ARG PG_HOST
ARG PG_AUTH_DB

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR app
COPY ./migrations /migrations
COPY --from=builder /usr/local/cargo/bin/diesel /usr/local/bin

ENV DATABASE_URL="postgres://${PG_AUTH_USERNAME}:${PG_AUTH_PASSWORD}@${PG_HOST}/${PG_AUTH_DB}"
ENTRYPOINT diesel migration run --migration-dir /migrations

FROM debian:buster-slim AS auth_api

ARG PG_AUTH_USERNAME
ARG PG_AUTH_PASSWORD
ARG PG_HOST
ARG PG_AUTH_DB

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR app
COPY --from=builder /app/target/release/auth /usr/local/bin
ENV DATABASE_URL="postgres://${PG_AUTH_USERNAME}:${PG_AUTH_PASSWORD}@${PG_HOST}/${PG_AUTH_DB}"
ENTRYPOINT ["/usr/local/bin/auth"]
