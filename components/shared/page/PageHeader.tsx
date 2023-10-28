

interface PageHeaderProps {
  pageTitle?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle = 'Page Title', children }) => {
  return (
    <div className="flex items-center justify-between space-y-2 mb-6">
      <h2 className="text-3xl font-bold tracking-tight">{pageTitle}</h2>
      <div className="flex items-center space-x-2 m-0">
        { children }
      </div>
    </div>
  )
}

export default PageHeader;