
describe('Prueba en <GifItem />  ', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';


    test('debe de hacer match con el snapshot ', () => { 




        const { container } = render ( <GifItem title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot();

     }) 

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={ title } url={ url } /> );

        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole(' img ');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
      });


      test('debe de mostrar el titutlo en el componente ', () => { 
        
        render( <GifItem title= { title }  url={ url } /> );
        expect( screen.getByText( title )).toBeTruthy();

       });

 })