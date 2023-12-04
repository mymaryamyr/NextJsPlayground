import NewTodoForm from '@/app/components/NewTodoForm';

const DocsPage = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div>
      Docs Page
      <NewTodoForm />
    </div>
  );
};

export default DocsPage;
