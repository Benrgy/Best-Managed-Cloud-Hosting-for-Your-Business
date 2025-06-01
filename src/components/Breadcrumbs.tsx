
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export const Breadcrumbs = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];

    if (pathname === '/') {
      return breadcrumbs;
    }

    // Add more breadcrumb logic here as we add more pages
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4 bg-gray-50">
      <ol 
        className="flex items-center space-x-2 text-sm max-w-6xl mx-auto"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((item, index) => (
          <li 
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={(index + 1).toString()} />
            {index < breadcrumbs.length - 1 ? (
              <>
                <a 
                  href={item.href}
                  itemProp="item"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <span itemProp="name">{item.name}</span>
                </a>
                <span className="mx-2 text-gray-500">/</span>
              </>
            ) : (
              <span 
                itemProp="item"
                className="text-gray-900 font-medium"
              >
                <span itemProp="name">{item.name}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
