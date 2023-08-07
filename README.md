# yukukuru
今年の経過日数と進捗を Nostr に投稿する。

# 環境変数
| 環境変数名 | 設定値 |
| ---- | ---- |
| PRIVATE_KEY | POST 時に利用するプライベートキー |

# 利用方法
```
# ビルド
docker build -t yukukuru -f ./docker/Dockerfile .

# ローカルでは src をマウントして作業
docker run -it --rm --mount type=bind,source="$(pwd)"/src,target=/srv -w /srv \
  -e PRIVATE_KEY="nsecxxxxxxxxxxxxxxxxxxxxx" \
  yukukuru bash

# コンテナ実行
docker run --rm \
  -e PRIVATE_KEY="nsecxxxxxxxxxxxxxxxxxxxxx" \
  yukukuru
```
# 実行結果
```
# こんな感じです。
2023年が219日経過しました。
■■■■■■■■■□□□□□□ 60%
```