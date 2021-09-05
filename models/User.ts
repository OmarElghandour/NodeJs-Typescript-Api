import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface User {
  userName: string;
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password : {type : String , required : true}
});

// 3. Create a Model.
const User = model<User>('User', schema);


export default User;