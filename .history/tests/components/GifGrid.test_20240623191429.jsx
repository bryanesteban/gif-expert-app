describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 
        

        render( <GifGrid category={ category }/> );

     });
 });