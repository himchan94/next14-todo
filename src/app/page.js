import connectMongoDB from "../../libs/connect";
import Link from "next/link";
import PlusIcon from "@/app/components/PlusIcon";
import Todo from "../../models/todoModel";
async function getTodos() {
  try {
    await connectMongoDB();
    const todos = await Todo.find({});
    if (!todos) {
      throw new Error("Couldn't fetch the todos.");
    }
    return todos;
  } catch (error) {
    console.log("Error while fetching the todos.");
  }
}

export default async function Home() {
  const data = await getTodos();

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Todo App</h1>
        <span className="plusbtn">
          <Link href={"/addTodo"}>
            <PlusIcon className={"icon plus"} />
          </Link>
        </span>
      </div>
    </div>
  );
}
