export default function TabButton(props) {
    //inner function to handle click event from js - will work inside component only
    function handleClick() {
        console.log(`${props.children} tab clicked`);
    }

    return (
        <button onClick={handleClick}>
        {props.children}
        </button>
    );
}

/* Using destructuring props
export default function TabButton({children}) {
  return (
    <button>
      {children}
    </button>
  );
}
*/