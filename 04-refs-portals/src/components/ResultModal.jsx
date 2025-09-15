export function ResultModal({ result, targetTime, elementRef }) {
    return (
    <dialog className="result-modal" ref={elementRef} >
        <h2>You {result}!!</h2>
        <p>Target Time: {targetTime} seconds...</p>
        <p>You stopped the timer with left...</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    );
}