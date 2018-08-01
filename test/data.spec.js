describe('data', () => {

  it('Debería ser una función', () => {
    assert.isFunction(logIn);
  });

  it('Debería ser una función', () => {
    assert.isFunction(logInWithProvider);
  });

  it('Debería ser una función', () => {
    assert.isFunction(createUser);
  });

  it('Debería ser una función', () => {
    assert.isFunction(registerUserProfile);
  });

  it('Debería ser una función', () => {
    assert.isFunction(createPost);
  });

  it('Debería ser una función', () => {
    assert.isFunction(editPost);
  });

  it('Debería ser una función', () => {
    assert.isFunction(getPostList);
  });

  it('Debería ser una función', () => {
    assert.isFunction(deletePost);
  });

  it('Debería ser una función', () => {
    assert.isFunction(likePost);
  });

  it('Debería ser una función', () => {
    assert.isFunction(sortPosts);
  });

  it('Debería ser una función', () => {
    assert.isFunction(filterPosts);
  });

  it('Debería ser una función', () => {
    assert.isFunction(showMyPosts);
  });

  it('Debería ser una función', () => {
    assert.isFunction(showPosts);
  });

  describe('editPost(postId, postData)', () => {
    let postData = {
      category: 'SOS',
      content: 'Proteger a los animales en peligro de extinción se ha convertido casi en una obligación en éstos últimos tiempos, ya que aunque hayamos progresado mucho social y tecnológicamente, también hemos dado un pequeño paso hacia atrás en cuanto a la protección del medio ambiente y de sus habitantes.',
      date: 1532987413183,
      id: '-LIh9tDQaDR2c2VPorwe',
      image: "",
      likes: 0,
      state: 'publico',
      title: 'Proteger animales en peligro de extincion',
      uid: 'MfDWbdirEfWpJraJ4IOjJLWpqjy1'
    }
  

  it('Debería editar un post con el titulo "Titulo de prueba"', (done) => {
    editPost('-LIkuB5igQh_6do1qHgN', postData)
      .then(() => getPostList())
      .then((postList) => {
        const data = Object.entries(
          postList.val()
        ).find(post => post[1].title === 'Titulo de prueba');
        console.log(data);
        assert.exists(data[1]); // verifica que exista algo en particular
        assert.equal(data[1].title, 'Titulo de prueba');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

});