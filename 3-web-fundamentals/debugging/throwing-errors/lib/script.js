
try{
  throw new Error("Lawrence, 'YOU CAN NEVER CATCH MEEE!'")
} catch(e) {
  console.log("What kind of error?", err.name);
  console.log("What is the message?", err.message);
  console.log("Where did it happen?", err.stack);
}