# 유투브 댓글 분석 웹앱 - Youtuview(유튜뷰)

## 1. 설치 방법

설치방법 url

## 2. 개요

- 프로젝트 이름: 유투브 댓글 분석 웹앱-유튜뷰
- 개발 기간: Next.js, Typescript, mongoDB, tanstack_query
- 작업 관리: Git
- 배포: AWS

- installed Library

- #### installed Library
       @emotion/react
       @fortawesome/fontawesome-svg-core
       @fortawesome/free-brands-svg-icons
       @fortawesome/free-regular-svg-icons
       @fortawesome/free-solid-svg-icons
       @fortawesome/react-fontawesome
       @google-cloud/language
       @tanstack/react-query
       axios
       bootstrap
       eslint-config-next
       eslint
       formidable
       moment-timezone
       mongodb
       next-auth
       next-pwa
       next-recaptcha-v3
       next
       rate-limiter-flexible
       react-d3-cloud
       recharts
       zustand

## 3. 프로젝트 설명
- #### tanstack_query를 통해 개발한 댓글 분석 모델을 활용하여 입력한 영상의 댓글과 유투버의 정보를 제공하는 웹입니다.
  - 영상을 쉽게 분석하기 위한 목표를 가지며 제작했습니다. 
 
- #### TypeScript로 타입 에러 제어
  - TypeScript를 사용하여 Type Error로 인한 사고 발생을 미연에 방지하고자 하였습니다.
 
- #### Zustand를 활용한 전역적 상태 관리
  - 문법이 쉽고 가벼운 Zustand를 사용했습니다.

- #### ChaptCha를 이용한 봇 침입 방지
  - ChaptCha를 이용한 봇 침입 방지.
  - 사용자가 API이용에 접근하는 모든 코드에 ChapCha를 걸어놓았습니다.
 
- #### Google 소셜 로그인
  - Google을 통한 로그인이 가능하며, 로그인 정보를 통해 사용자의 구독 정보를 마이 페이지에서 보여줍니다.

- #### localstorage에 최근 검색 정보 저장

  - 사용자가 최근에 검색한 영상 정보를 localstorage에 저장하였습니다.
  - 로그인을 할 시 이용자의 정보를 받아와 메인화면에 localstorage에 저장된 정보를 보여줍니다.


- #### localstorage에 게임 데이터 저장
  - 게임의 플레이 정보 (정답을 맞혔는지, 추측 단어들의 배열, 플레이 시간, 오늘 날짜) 등을 localstorage에 저장하였습니다.
  - 로그인 한 경우 localstorage에 저장됨과 동시에 DB에도 플레이 정보를 저장하여 다른 디바이스에서 로그인하여도 같은 플레이 정보를 확인 가능하도록 설정하였습니다. 
 
- #### PWA로 네이티브 앱 처럼 다운 가능
  - PWA를 사용하여 네이티브 앱 처럼 홈 화면에 추가 가능합니다.
 
## 4. 이용 방법과 주요 기능
### 4-0-1. 랜딩 페이지


<div style="display: flex; justify-content: center;">
    <img src="https://github.com/user-attachments/assets/5e6a7d0c-4769-404f-a6c6-d618ec7cb1b9" width="98%" />
</div>

- 사용자가 해당 사이트에 처음 들어오면 만나게 되는 화면입니다. 사용자가 어떤 웹인지 추측할 수 있게 합니다
- 하단에 fouter를 구현하여 제작자 정보를 열람할 수 있도록 하였습니다.

  
### 4-0-2. 로그인 페이지

<div style="text-align: center;">
    <img src="https://github.com/user-attachments/assets/71563a75-3724-4f45-9d3d-267f17693ef1" alt="로그인 페이지" style="max-width: 100%; height: auto;" />
</div>


- 상단의 Navbar의 로그인 버튼을 눌러 구글 로그인으로 이동합니다.
- 한번 로그인을 할 시 한 달간 토큰을 저장해 로그인을 간소화합니다.

- - - 





![로그인 페이지](https://github.com/user-attachments/assets/71563a75-3724-4f45-9d3d-267f17693ef1)

![메인 페이지](https://github.com/user-attachments/assets/8b687885-eb5a-4114-aadd-74cfbbd769a9)

![URL 검색 gIf](https://github.com/user-attachments/assets/5fa793f8-58b6-4361-acf6-883869464cdc)

![인기 차트](https://github.com/user-attachments/assets/f0050209-8cf5-44fc-afab-8cee12bf4ecb)

![최근 검색 기록](https://github.com/user-attachments/assets/b7e1f174-8b16-4e2c-b042-7b6a2cbcd8ee)

![유투버 디테일 페이지](https://github.com/user-attachments/assets/0d101d2c-4d0e-448c-a8bf-7c6e50d572e5)

![영상 디테일 페이지](https://github.com/user-attachments/assets/f3b0e56c-58da-40b4-b326-5f72650139fb)

![찜기능 구현](https://github.com/user-attachments/assets/c0bfa848-4c22-41c8-a95d-dc4ca95dc7c9)

![Honeycam 2024-11-29 13-20-37](https://github.com/user-attachments/assets/df9bb110-5376-4390-bfa7-b44e12aedd31)

<div align="center">

<!-- logo -->
<img src="https://user-images.githubusercontent.com/80824750/208554558-490845c9-959a-4823-9003-350ec4d221bf.png" width="400"/>

### 깃 리드미 템플릿 🖍️

[<img src="https://img.shields.io/badge/-readme.md-important?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/-tech blog-blue?style=flat&logo=google-chrome&logoColor=white" />]() [<img src="https://img.shields.io/badge/release-v0.0.0-ㅎㄱㄷ두?style=flat&logo=google-chrome&logoColor=white" />]() 
<br/> [<img src="https://img.shields.io/badge/프로젝트 기간-2022.12.10~2022.12.19-fab2ac?style=flat&logo=&logoColor=white" />]()

</div> 

## 📝 소개
프론트엔드 깃 레파지토리의 README.md를 빠르게 작성하기 위해 만든 템플릿입니다.

다음과 같은 내용을 작성할 수 있습니다.
- 프로젝트 소개
- 프로젝트 화면 구성
- 사용한 기술 스택
- 기술적 이슈와 해결 과정
- 프로젝트 팀원

필요한 기술 스택에 대한 logo는 [skills 폴더](/skills/)에서 다운로드 받을 수 있습니다.

<br />

### 화면 구성
|화면 명|
|:---:|
|<img src="https://user-images.githubusercontent.com/80824750/208456048-acbf44a8-cd71-4132-b35a-500047adbe1c.gif" width="450"/>|
|화면에 대한 설명을 입력합니다.|


|화면 명|
|:---:|
|<img src="https://user-images.githubusercontent.com/80824750/208456234-fb5fe434-aa65-4d7a-b955-89098d5bbe0b.gif" width="450"/>|
|화면에 대한 설명을 입력합니다.|

<br />

## ⚙ 기술 스택
> skills 폴더에 있는 아이콘을 이용할 수 있습니다.
### Front-end
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JWT.png?raw=true" width="80">
</div>

### Infra
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/AWSEC2.png?raw=true" width="80">
</div>

### Tools
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Notion.png?raw=true" width="80">
</div>

<br />

## 🤔 기술적 이슈와 해결 과정
- CORS 이슈
    - [Axios message: 'Network Error'(CORS 오류)](https://leeseong010.tistory.com/117)
- api 호출 시 중복되는 헤더 작업 간소화하기
    - [axios interceptor 적용하기](https://leeseong010.tistory.com/133)
- axios 요청하기
    - [axios delete 요청 시 body에 data 넣는 방법](https://leeseong010.tistory.com/111)

<br />

## 💁‍♂️ 프로젝트 팀원
|Backend|Frontend|
|:---:|:---:|
| ![](https://github.com/yewon-Noh.png?size=120) | ![](https://github.com/SeongHo-C.png?size=120) |
|[노예원](https://github.com/yewon-Noh)|[이성호](https://github.com/SeongHo-C)|


### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc






// 두개로 나뉜 형태
<div style="display: flex; justify-content: center;">
    <img src="https://github.com/user-attachments/assets/01793d96-ded0-4399-a514-28825b3e1146" width="48%" />
    <img src="https://github.com/user-attachments/assets/5e6a7d0c-4769-404f-a6c6-d618ec7cb1b9" width="48%" />
</div>
