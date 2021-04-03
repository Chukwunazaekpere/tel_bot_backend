import mongoose, { Document, Model, SchemaOptions } from 'mongoose';


export interface IAccountShema extends Document {
    user: string,
    balance: number,
    investment: number,
    availableWithdrawal: number,
    createdAt: number
};

export interface IAccountQuery extends IAccountShema, Document {
    balance: number,  
}

export interface IAccountModel extends Model<IAccountShema, IAccountQuery>{
    getBalance(): Promise<IAccountQuery>;
    setBonus(): Promise<IAccountQuery>
}

const accountSchema = new mongoose.Schema<IAccountShema>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    balance: {
        type: Number,
        required: true
    },
    investment: {
        type: Number,
        required: true
    },
    availableWithdrawal: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true, createdAt: false}as SchemaOptions );


accountSchema.methods.setBonus = async function() {
    const bonus = 1.25;
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //=============== registration details ==================
    const createdAt = new Date(this.createdAt);
    const registeredMonth = createdAt.getMonth();
    const registeredDay = createdAt.getDate();
    //=======================================================
    //================ presentDay details ===================
    const presentDate = new Date();
    const presentMonth = presentDate.getMonth();
    //========================================================
    const monthDifference = presentMonth+1 - registeredMonth+1;
    
    let startDayDiff = 0;
    let presentDayDiff = 0;
    if(daysInMonth[registeredMonth+1] === 30 ){
        startDayDiff = 30 - Number(registeredDay);
    };
    startDayDiff = 31 - Number(registeredDay);

    let count = 1;
    let days = 0;
    Promise.resolve().then(() => {
        while(count < monthDifference){
            days += 1;
            count++;
        }
    })
    presentDayDiff = daysInMonth[presentMonth+1] - 1;
    const totalDays = startDayDiff + days + presentDayDiff;
    const totalInterset = totalDays * bonus * 3600 * 24;
    this.availableWithdrawal = totalInterset;
};

accountSchema.methods.getBalance = async function(){
    return this.balance;
};

const Account = mongoose.model<IAccountQuery>("Account", accountSchema);
export default Account;


