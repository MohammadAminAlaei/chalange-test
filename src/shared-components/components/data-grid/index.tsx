import { FC, memo, JSX } from 'react';
import MaterialReactTable, { MaterialReactTableProps } from 'material-react-table';
import { MRT_Localization_FA } from 'material-react-table/locales/fa';
import Lazy_EmptyList from 'shared-components/components/empty-list';

const DataGrid: FC<MaterialReactTableProps & unknown> = (props) => {
  return (
    <MaterialReactTable
      renderEmptyRowsFallback={() => <Lazy_EmptyList />}
      localization={MRT_Localization_FA}
      enableTopToolbar={false}
      {...props}
    />
  );
};

export default memo(DataGrid) as <T extends Record<string, any>>(
  props: MaterialReactTableProps<T>
) => JSX.Element;
