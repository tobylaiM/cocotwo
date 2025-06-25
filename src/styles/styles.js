// src/styles/styles.js
export const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '12px 24px'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoSquare: {
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    borderRadius: '2px'
  },
  searchContainer: {
    position: 'relative'
  },
  searchInput: {
    paddingLeft: '36px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    width: '320px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '14px',
    color: '#374151'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    width: '16px',
    height: '16px'
  },
  copilotButton: {
    backgroundColor: '#ea580c',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer'
  },
  breadcrumb: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '8px 24px'
  },
  breadcrumbContent: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6b7280'
  },
  main: {
    padding: '24px'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },
  titleText: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#111827',
    marginRight: '8px'
  },
  description: {
    marginBottom: '24px',
    fontSize: '14px',
    color: '#6b7280'
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline'
  },
  tabs: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  },
  tab: {
    padding: '8px 16px',
    borderBottom: '2px solid transparent',
    fontSize: '14px',
    fontWeight: '500',
    marginRight: '24px',
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },
  activeTab: {
    borderBottomColor: '#2563eb',
    color: '#2563eb'
  },
  inactiveTab: {
    color: '#6b7280'
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px'
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  filterLabel: {
    fontSize: '14px',
    color: '#374151'
  },
  select: {
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    padding: '4px 12px',
    fontSize: '14px'
  },
  resetButton: {
    color: '#2563eb',
    fontSize: '14px',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  rightFilters: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  appIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '32px'
  },
  appItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  appIconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px',
    marginBottom: '8px'
  },
  appName: {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: '80px',
    lineHeight: '1.2'
  },
  table: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '24px'
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '16px'
  },
  tableElement: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    textAlign: 'left',
    padding: '16px 24px',
    fontWeight: '500',
    color: '#111827',
    borderBottom: '1px solid #e5e7eb'
  },
  thCenter: {
    textAlign: 'center',
    padding: '16px 12px',
    fontWeight: '500',
    color: '#111827',
    borderBottom: '1px solid #e5e7eb',
    minWidth: '96px'
  },
  thContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  thIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    marginBottom: '4px'
  },
  thText: {
    fontSize: '12px',
    lineHeight: '1.2'
  },
  td: {
    padding: '12px 24px',
    borderBottom: '1px solid #f3f4f6'
  },
  tdCenter: {
    padding: '12px',
    borderBottom: '1px solid #f3f4f6',
    textAlign: 'center',
    fontSize: '14px'
  },
  metricRow: {
    display: 'flex',
    alignItems: 'center'
  },
  expandButton: {
    marginRight: '8px',
    color: '#9ca3af',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  metricText: {
    fontSize: '14px',
    color: '#111827'
  },
  sectionHeader: {
    backgroundColor: '#f9fafb',
    fontWeight: '500'
  },
  valueText: {
    color: '#111827',
    fontWeight: '500'
  },
  emptyValue: {
    color: '#9ca3af'
  },
  toggle: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  toggleInput: {
    position: 'absolute',
    opacity: 0
  },
  toggleSlider: {
    width: '44px',
    height: '24px',
    backgroundColor: '#d1d5db',
    borderRadius: '12px',
    position: 'relative',
    transition: 'background-color 0.2s'
  },
  toggleKnob: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.2s'
  }
};