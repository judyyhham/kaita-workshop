# 베이스 이미지. 이런 경우는 DockerHub 에서 불러옵니다 - 제일 최신 
# https://hub.docker.com/_/node?tab=tags
FROM node:latest 

# 컨테이너에서 파일을 저장하는 경로
WORKDIR /app

# 카피하는 파일들, 소스, last one is destination 
COPY ["package.json", "package-lock.json", "./"]

RUN npm install

# 처음 . 은 우리가 현재 카피할 모든 파일들 & 마지막 . 은 컨테이너 (destination) 
COPY . . 

# syntax 다양함. 실행
CMD ["npm", "start"]