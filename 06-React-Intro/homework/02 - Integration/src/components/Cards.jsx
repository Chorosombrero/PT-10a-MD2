import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>

      {characters.map((e) => 
         <Card name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            key={e.name}
               />)}

   </div>;
}
