type Props = {
  params: Promise<{ id: string }>;
};

export default async function Chats( {params}: Props ){
    const { id } = await params;

    return <div>User ID: {id}</div>;
}