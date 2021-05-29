(async () => {
    try {
      const pontgrupView = new PontgrupView();
      const pontgrupService =new PontgrupService();
      new PontgrupController(pontgrupService, pontgrupView);
    } catch (error) {
      console.error(error);
    }
  })();