ARG DENO_VERSION=1.36.4

FROM denoland/deno:bin-${DENO_VERSION} AS deno
FROM debian:11-slim

COPY --from=deno /deno /usr/local/bin/deno
ENV TZ=Asia/Tokyo
COPY src /srv
RUN deno cache --reload --lock=lock.json /srv/main.ts

CMD ["deno", "run", "-A", "/srv/main.ts"]