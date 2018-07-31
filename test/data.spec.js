describe('data', () => {

  it('Debería ser una función', () => {
    assert.isFunction(editPost);
  });

  describe('editPost(postId, postData)', () => {
    let postData = {
      title: 'Titulo de prueba'
    };
    
    it('Debería editar un post con el titulo "Titulo de prueba"', (done) => {
      editPost('LHgicvU_FDayzfKl7LJ', postData)
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