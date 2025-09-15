export function ResultModal({ result, targetTime, elementRef, ...props }) {
    return (
    <dialog className="result-modal" ref={elementRef}>
        {Object.keys(props).map((key) => <h6 key={key}>{ props[key] }</h6>)}
        <h2>You {result}!!</h2>
        <p>Target Time: {targetTime} seconds...</p>
        <p>You stopped the timer with left...</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    )
}