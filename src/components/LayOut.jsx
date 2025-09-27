import Sidebar from "./SideBar";

export default function LayOut() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </main>
    </div>
  );
}
