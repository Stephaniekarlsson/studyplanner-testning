// TODO: hämta dagens datum från store
import { useStore } from "../data/store"


const Footer = () => {

	const todayName = useStore(state => state.todayName)

 return (
	<footer>
		<p data-cy="today-name" > Idag är det: {todayName} </p>
		<p> Studieguide | 2024 </p>
	</footer>

 )

}


export default Footer
