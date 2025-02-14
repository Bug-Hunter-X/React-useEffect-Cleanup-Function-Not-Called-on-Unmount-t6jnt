# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React bug where the cleanup function in a `useEffect` hook is not called when the component unmounts. This can lead to memory leaks or other unexpected behavior.  The bug and solution are provided in separate Javascript files.

## Bug Description

The provided `MyComponent` uses `useEffect` with an empty dependency array `[]`. This makes the effect run only once after the initial render. The cleanup function, meant to run before the component unmounts, isn't consistently called in certain scenarios such as rapid rerenders or component switching during certain animations that interrupt the unmounting phase.

## Solution

The solution focuses on ensuring the cleanup function is reliably executed.  This might involve more robust state management or other architectural changes depending on the specific application.