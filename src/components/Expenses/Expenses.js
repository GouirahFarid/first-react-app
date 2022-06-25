 import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
 import Card from "../UI/Card";
function Expenses(props) {
    return (
        <Card className="expenses">
            {
                         props.expenesItems.map(ex=>{
                    return <ExpenseItem key={ex.id} expense={ex} />
                })
            }
        </Card>
    )
}

export default Expenses;
