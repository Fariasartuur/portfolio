const Display = ({ number, label }) => {
    const style = "p-4 bg-purple-900/10 border border-purple-700/20 rounded-xl text-center"
    return (
        <div className={style}>
            <span className="text-purple-400 font-bold text-2xl">{number}</span>
            <p className="text-xs text-slate-500 uppercase">{label}</p>
        </div>
    );
}

export default Display;