type Title = {
  title: string;
};

const PageTitle = ({ title }: Title) => {
  return <h2 className="text-2xl max-sm:text-xl mb-6 text-center">{title}</h2>;
};

export default PageTitle;
