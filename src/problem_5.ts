function stringChecking(param: unknown): void {
    
    if (typeof param === 'string') {
        console.log(param); 
    } else {
        console.error('Error: The input is not a string.'); 
    }
}


stringChecking("Hello");