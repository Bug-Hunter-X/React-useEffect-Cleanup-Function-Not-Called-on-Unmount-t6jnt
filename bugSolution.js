```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // This effect runs only once after the first render
    console.log('Mounted!');
    return () => {
      isMounted.current = false; //this is now a more reliable way to check if the component is unmounted
      console.log('Unmounting!');
    };
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;
    // Perform operations only if component is mounted
    // ... your logic here
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```