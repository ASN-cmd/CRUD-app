import userModel from "../models/user.js";


class userController
{
    static getAllUsers = async (req,res) => {

    try {
       const allUsers = await userModel.find({});
       if(allUsers)
       {
        return res.status(200).json(allUsers);
       }
    } catch (error){
        return res.status(400).json(error);
    }
    };

    static createUser = async (req,res) => {

        const {name, email, age } = req.body;
        try {
            if(name && email && age)
            {
                const newUser = userModel({
                    name,
                    email,
                    age,
                });

            const saved_user = await newUser.save();
            if (saved_user) {
                return res.status(201).json(saved_user);
            }   
            else {
                return res.status(400).json({message: "something wrong"});
            } 
        } else{
            return res.status(400).json({message: "Please fill all fields"});
        }
            
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}

export default userController;