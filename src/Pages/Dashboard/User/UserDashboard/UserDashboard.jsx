import { useAuth } from "../../../../hooks/useAuth";

const UserDashboard = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <section className="flex items-stretch mt-10">
            <div className="flex flex-col justify-center items-center bg-[#FFEDD5] w-full py-20">
                <img
                    src={user.photoURL}
                    className="rounded-full w-60 h-60 object-contain"
                />
                <h1 className="text-3xl font-semibold font-cinzel mt-3">
                    {user.displayName}
                </h1>
            </div>
            <div className="bg-[#FEF9C3] w-full">
                <h1>Your Activities</h1>
            </div>
        </section>
    );
};

export default UserDashboard;
