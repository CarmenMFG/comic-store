(async () => {
    try {
      const comicView = new ComicView();
      const comicService =new ComicService();
      new ComicController(comicService, comicView);
            
    } catch (error) {
      console.error(error);
    }
  })();