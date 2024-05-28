import Item from "./Item";

const Day = ({ day, dayIndex }) => {
	const dayNames = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

	return (
		<div className="day"
		data-cy="day">
			<h2 data-cy="weekday-header">{dayNames[dayIndex]}</h2>
			{day.map((item) => (
				<div key={item.id}>
					<Item item={item} />
				</div>
			))}
			<div className="controls">
				<button
				data-cy="btn">Ny uppgift</button>
			</div>
		</div>
	);
};

export default Day;
