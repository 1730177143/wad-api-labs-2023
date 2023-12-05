import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true }
});

const passwordValidator = (password) => {
<<<<<<< HEAD
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);    
=======
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
>>>>>>> e151496aaa36a1300dc81a0765173e527eb93383
}
UserSchema.path("password").validate(passwordValidator);
export default mongoose.model('User', UserSchema);
