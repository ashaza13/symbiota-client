import { Auth } from "aws-amplify";
import "../App.css";
import Nav from "../components/Navbar";

export default function DashboardPage() {

    return (
        <>
            <Nav />
            <button onClick={
                () => Auth.signOut()
            }>Sign Out</button>
        </>
    )
}