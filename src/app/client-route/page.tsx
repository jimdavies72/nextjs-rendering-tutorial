'use client';
import { useTheme } from '@/components/themeProvider';
import { clientSideFunction } from '@/utils/clientUtils';

const ClientRoute = () => {
  const theme = useTheme();
  const result =clientSideFunction();
  
  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>
        Client Route: {result}
      </h1>
    </div>
  );
};

export default ClientRoute;
