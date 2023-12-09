import './App.css';
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Tags from './Tags';

function App() { return (
  <>
    <Header titulo = 'Adopta un perrito'/>
    <div className='d-flex flex-row justify-content-center'>
      <div className='d-flex flex-column align-items-center'>
        <MyCard 
          image = "https://cdn.pixabay.com/photo/2019/05/10/13/21/husky-4193503_1280.jpg"      
          Title = "Bartolo"
          Parrafo = "Lleno de energía y listo para jugar. Dale a Bartolo el hogar amoroso que se merece!"
        />
        <Tags
          textButton = "Husky"
          colorButton = "success" 
        />
      </div>
      <div className='d-flex flex-column align-items-center'>
        <MyCard 
          image = "https://cdn.pixabay.com/photo/2015/03/09/16/09/bobtail-665956_1280.jpg"      
          Title = "Messi"
          Parrafo = "Es juguetón, amigable y se lleva bien con niños y otros animales. Haz de Messi parte de tu familia hoy mismo! "
        />
        <Tags
          textButton = "Bobtail"
          colorButton = "primary"
        />
      </div>
      <div className='d-flex flex-column align-items-center'>
        <MyCard 
          image = "https://cdn.pixabay.com/photo/2022/05/26/16/09/dog-7223233_1280.jpg"      
          Title = "Gohan"
          Parrafo = "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
        />
        <Tags
          textButton = "Shar Pei"
          colorButton = "danger"
        />
      </div>
      <div className='d-flex flex-column align-items-center'>  
        <MyCard 
          image = "https://cdn.pixabay.com/photo/2018/04/23/22/05/dog-3345737_1280.jpg"      
          Title = "Princesa"
          Parrafo = "Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a princesa a encontrar su final feliz!"
        />
        <Tags
          textButton = "Beagle"
          colorButton = "warning"
        />
      </div>  
    </div> 
  <Footer/>
  </>
  )
};
export default App;

//Esto sirve para importar cada elemento creado, es la página principal.
