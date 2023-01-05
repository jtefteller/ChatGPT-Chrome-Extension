export function Button({ onClick }) {
	return (
		<button
			className="inline-flex items-center rounded-md border border-emerald-300 bg-emerald-500 
							px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm 
							hover:bg-emerald-50 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
			onClick={onClick}
		>
			Get Answer
		</button>
	);
}
