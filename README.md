# 유투브 댓글 분석 웹앱 - Youtuview(유튜뷰)

<div align="center">

<!-- logo -->
<img src="https://github.com/user-attachments/assets/02f355d3-7283-46c7-aee6-8aa2e87cb0bc" alt="리드미 상단 사진" />

### 📝 0. 기본 정보 ✅

<br/> [<img src="https://img.shields.io/badge/프로젝트 기간-2024.09.10~2024.12.03-fab2ac?style=flat&logo=&logoColor=white" />]()
<br/> [<img src="https://img.shields.io/badge/팀원-김동우, 조정민-fab2ac?style=flat&logo=&logoColor=white" />]()

</div> 


## 1. 설치 방법

### [유튜뷰](https://youtuview.site) 👈 클릭

## 2. 개요
- 프로젝트 이름: 유투브 댓글 분석 웹앱-유튜뷰
- 개발 기간: 2024.09.10 ~ 2024.12.03
- Next.js, Typescript, mongoDB, tanstack_query
- 작업 관리: Git
- 배포: AWS
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

### 4-1. 메인페이지


##### 기본 기능 (URL 검색)

|URL 검색|
|:---:|
|  <img src="https://github.com/user-attachments/assets/5fa793f8-58b6-4361-acf6-883869464cdc" alt="URL 검색 gIf" style="max-width: 100%; height: auto;" />|
|URL을 이용, API를 통해 분석 화면 데이터를 만들어냅니다.|


- 검색창에 URL을 입력해여 해당 영상의 정보와 분석을 진행하는 페이지로 이동합니다.
- 유투버 정보와 해당 영상의 댓글들을 보여줍니다.


##### 기본 기능 (인기 유튜버, 영상을 표시)

|인기 유튜버, 영상을 표시|
|:---:|
| <img src="https://github.com/user-attachments/assets/f0050209-8cf5-44fc-afab-8cee12bf4ecb" alt="인기 차트" style="max-width: 100%; height: auto;" />|
|사이트 자체적인 인기 차트를 표시합니다.|

- 인기 차트는 분석량이 많은 순으로 좌측부터 정렬됩니다.
- 메인 페이지는 첫 랜더링 시 DataBase에서 분석 횟수를 바탕으로 정렬합니다.
- 화살표 버튼을 이용 최대 10개까지의 인기 차트를 확인할 수 있습니다.


##### 기본 기능 (찜기능 구현)



|찜기능 구현|
|:---:|
| <img src="https://github.com/user-attachments/assets/c0bfa848-4c22-41c8-a95d-dc4ca95dc7c9" alt="찜기능 구현" style="max-width: 100%; height: auto;" />|
|사이트 자체적으로 찜기능을 구현합니다.|

- 이용자 개인이 찜을 해놓은 영상과 유투버를 찾아볼 수 있게해줍니다.
- 랜덤하게 4개를 볼 수 있으며 마이페이지에서 전체 찜목록을 확인할 수 있습니다.

##### 기본 기능 (최근 검색한 영상)

|local 저장소|
|:---:|
|<img src="https://github.com/user-attachments/assets/c5093e66-2315-48a8-81ad-21ec0bd332e9" alt="로컬 저장소 2" style="max-width: 100%; height: auto;" width="48%"/> <img src="https://github.com/user-attachments/assets/cb91d690-7dbf-41ab-b44c-4ae272aafc15" alt="로컬 저장소 1" style="max-width: 100%; height: auto;" width="48%" />|
|local 저장소에 데이터가 새롭게 들어갑니다.|

- 이용자가 최근에 검색한 영상을 4개까지 보여줍니다.
- 영상을 새롭게 데려오면 저장소가 업데이트 되어 최근 4개 항목이 갱신됩니다.

- - - 

### 4-2. 유튜버 페이지


##### 기본 기능 (댓글 감정 평가 그래프)

|댓글 감정 평가 그래프|
|:---:|
|<img src="https://github.com/user-attachments/assets/452a8d96-fe63-4fc3-aa99-869425f52710" alt="댓글 감정 평가" />|
|그동안 검색했던 해당 유튜버의 모든 영상을 감정 평가한 것을 그래프로 보여줍니다.|

- 모든 이용자가 해당 유튜버에 대해 분석한 영상들의 댓글 데이터를 활용하여 그래프를 보여줍니다.
- 긍정도와 부정도를 통해 영상이 어떤 평가를 받는지 살펴볼 수 있습니다.


##### 기본 기능 (댓글 키워드 추출 그래프)

|댓글 키워드 추출 그래프|
|:---:|
|<img src="https://github.com/user-attachments/assets/8e5752a8-8808-4526-9c33-db50eebde3ed" alt="댓글 키워드 추출" />|
|그동안 검색했던 해당 유튜버의 모든 영상 댓글에서 키워드를 추출해 보여줍니다.|

- 모든 이용자가 해당 유튜버에 대해 분석한 영상들의 댓글 데이터를 활용하여 키워드를 보여줍니다.
- 순서대로 나열되는 키워드를 통해 유튜버의 영상들이 대체적으로 어떤 주제를 가지는 지 살펴볼 수 있습니다.


- - - 


### 4-3. 비디오 페이지

##### 기본 기능 (유투버 정보 표시)

|유투버 정보 표시|
|:---:|
|<img src="https://github.com/user-attachments/assets/cd0cec09-3d10-4c2c-a2b0-8a2674cb706e" alt="비디오 디테일 페이지" />|
|API를 통해 유튜버 정보를 데려옵니다.|

- 해당 유투버의 구독자와 모든 영상의 조회수와 전체 영상 갯수를 보여줍니다.

##### 기본 기능 (댓글 정보 표시)

|댓글 정보 표시|
|:---:|
|<img src="https://github.com/user-attachments/assets/8709eed9-62af-4abf-8e92-f2492a055469" alt="비디오 디테일 페이지2" />|
|API를 통해 영상 댓글 정보를 데려옵니다.|

- 해당 영상에 대한 댓글 전체와 댓글이 달린 시기를 활용하여 화제성 분석 그래프를 제공합니다.

##### 기본 기능 (댓글 분석)

|댓글 분석|
|:---:|
|<img src="https://github.com/user-attachments/assets/bc503f30-ffdd-49b5-95cd-86299dde11b7" alt="분석하기1" width="48%" /> <img src="https://github.com/user-attachments/assets/3f4d3597-af28-4cb1-8af4-6ce650097da7" alt="분석하기2" width="48%" />|
|댓글을 분석합니다.|

- 기존 분석 데이터가 있는 경우 그 일시를 알려주며 분석을 직접 보낼 수 있는 기회를 사용자에게 제공합니다.

- - - 

### 4-3. 마이 페이지

##### 기본 기능 (구독 목록)

|구독 목록|
|:---:|
|<img src="https://github.com/user-attachments/assets/bc503f30-ffdd-49b5-95cd-86299dde11b7" alt="분석하기1" width="48%" /> <img src="https://github.com/user-attachments/assets/3f4d3597-af28-4cb1-8af4-6ce650097da7" alt="분석하기2" width="48%" />|
|사용자의 구글 로그인 데이터를 활용하여 구독 목록을 표시합니다.|

- 평소 자주 확인해볼 일이 없는 구독 유튜버 전체를 볼 수 있는 경험을 제공합니다.

##### 기본 기능 (찜 목록)

|찜 목록|
|:---:|
|<img src="https://github.com/user-attachments/assets/bc503f30-ffdd-49b5-95cd-86299dde11b7" alt="분석하기1" width="48%" /> <img src="https://github.com/user-attachments/assets/3f4d3597-af28-4cb1-8af4-6ce650097da7" alt="분석하기2" width="48%" />|
|이용자의 찜 목록을 표시합니다.|

- 사이트 내에서 찜한 유투버와 영상을 살펴볼 수 있는 공간을 제공합니다.


@@ 아직 디자인 미정이라 gif xx

## 5. 프로젝트 회고
- #### 이곳은 살펴보니 velog 시리즈를 작성하시던데. 일단 비워뒀습니다.


## 6. 후기
### 느낀 점

- 솔직히 이런 식의 프로젝트를 처음 해봤습니다. 여러 어려움이 있었지만 그 중 제일은 팀원에게 피해를 주는 것이었습니다. 모르는 것 정도는 괜찮다고 생각합니다. 배우면 되니까요. 그런데 어디서 부터 어디까지를 내가 모르고 있는지 조차 모르겠는 건 정말 미치겠더라고요. 여러모로 많이 공부하며 한 프로젝트입니다.
- 전역적으로 상태를 관리하는 것에대해 많이 배웠습니다. 다만 이런 방법을 어떻게 사용하는게 더 효율이 좋은지는 공부를 더 해봐야겠습니다.
- 프로젝트가 처음이니 협업도 처음이었습니다. 느낀 점은 주석 그리고 정형화된 틀을 지키지 않은 코드는 해석하기 정말 어렵다는 것입니다. 코드를 짜며 어느정도의 규칙과 틀을 지키려고 노력했습니다.
- 저는 솔직히 기여를 많이 하지 못했습니다. 그런데도 이 웹은 참 좋다고 생각됩니다. 꽤나, 상당히 유용합니다 많이 이용해주세요.



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
