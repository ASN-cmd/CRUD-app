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

    static getSingleUser = async (req,res) => {
        const {id} = req.params;
        try{
            if(id){
                const getSingleData = await userModel.findById(id);
                return res.status(200).json(getSingleData)
            }
            else{
                return res.status(400).json("Id not found!");
            }
        }
        catch(error){
            return res.status(400).json(error);
        }
}

static updateuser = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "Id not found!" });
        }

        const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!getUpdatedData) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.status(200).json({ message: "User updated successfully", data: getUpdatedData });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};


    static deleteuser = async (req, res) => {
        const { id } = req.params;
        try{
            if(id){
                const getDeletedData = await userModel.findByIdAndDelete(id);
                return res.status(200).json(getDeletedData)
            }
            else{
                return res.status(400).json("Id not found!");
            }
        }
        catch(error){
            return res.status(400).json(error);
        }
    }

}

export default userController;