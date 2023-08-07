import express from 'express';
const router = express.Router();
const users = [
    {
        firstName: "Elvis",
        lastName: "Prisley",
        age: 28
    },
    {
        firstName: "John",
        lastName: "Denver",
        age: 35
    }
]

// routing get method 
router.get('/',(req,res)=>
{
 res.send(users);
});
export default router;