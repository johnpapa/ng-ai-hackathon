// tslint:max-line-length
export const environment = {
  production: false,
  apiServer: 'https://southcentralus.api.cognitive.microsoft.com',
  apiKeys: {
    computerVision: '0427ac6c10ef4564b4883f704b708740',
    face: '',
    textAnalytics: ''
  },
  faceImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-6.jpg'
  ],
  faceImagePairs: [
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BMjIyMDI4MzY0OV5BMl5BanBnXkFtZTgwMDYyODgxMzE@._V1_SY1000_CR0,0,1480,1000_AL_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTkxNzAwODEzN15BMl5BanBnXkFtZTYwMDIzODM2._V1_.jpg'
    },
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BYzcxZDliNzgtYjQ0NS00MDI0LTkzMDctMjUwMDhhODg4YTFiXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMjA5ODgwNzA1NV5BMl5BanBnXkFtZTcwNDA0MzYyNw@@._V1_.jpg'
    },
    {
      image1: 'https://ia.media-imdb.com/images/M/MV5BMjA1NDM0MDc3NF5BMl5BanBnXkFtZTYwOTA4MDU2._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTI4ODEzNzkzM15BMl5BanBnXkFtZTYwMjczMTQ2._V1_.jpg'
    }
  ],
  emotionImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-6.jpg'
  ],
  textImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-6.jpg'
  ],
  objectImageUrls: [
    'http://d1466nnw0ex81e.cloudfront.net/n_iv/600/3180776.jpg',
    'http://vignette.wikia.nocookie.net/spiderman/images/e/ea/Spidey_1.png/revision/latest?cb=20140816173914',
    'http://www.writeups.org/wp-content/uploads/Superman-Robot-DC-Comics.jpg',
    'http://img.wennermedia.com/social/rs-239344-chris-evans.jpg',
    'https://www.wikihow.com/images/8/84/Draw-Wonder-Woman-Step-18.jpg',
    'https://vignette.wikia.nocookie.net/ironman/images/5/59/Robert-Downey-Jr-Tony-Stark-Iron-Man-3-Marvel-Disney.jpg/revision/latest?cb=20130611164804',
    'https://i.ytimg.com/vi/4KtJ9pQVLSU/maxresdefault.jpg',
    'https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554',
    'https://pmcvariety.files.wordpress.com/2017/02/spidermanavengersdowney.jpg?w=1000&h=563&crop=1',
    'https://cdn1.thr.com/sites/default/files/2016/08/batman_begins_2005_bd-6468-h_2016.jpg',
    'https://static1.cbrimages.com/wp-content/uploads/2017/11/justice-league-ben-affleck-6.jpg?q=35&w=984&h=518&fit=crop',
    
    
    'https://pbs.twimg.com/profile_images/888397702391902208/CupdIngs_400x400.jpg',
    'http://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/11/deadpool-2.jpg',
  ]
};
