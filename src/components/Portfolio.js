import data from "./Portfolio.data.js"
console.log(data);

export const Portfolio = () => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-2">    
                {data.map(({ id, title }) => (
                    <div key={id} className="p-4 bg-slate-300">
                        {title}
                    </div>
                ))}            
        </div>
    )
};