type Props = {
  params: Promise<{ id: string }>;
};

export default async function Chats( {params}: Props ){
    const { id } = await params;

    return <div className="md:hidden overflow-hidden">User ID: {id}</div>;
}