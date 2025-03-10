// @ts-nocheck
import { MessageMethod } from './message';
import { NotificationMethod } from './notification';
import { ModalMethod } from './modal';
import { DrawerMethod } from './drawer';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AAffix: typeof import('@arco-design/web-vue')['Affix'];
    AAlert: typeof import('@arco-design/web-vue')['Alert'];
    AAnchor: typeof import('@arco-design/web-vue')['Anchor'];
    AAnchorLink: typeof import('@arco-design/web-vue')['AnchorLink'];
    AAutoComplete: typeof import('@arco-design/web-vue')['AutoComplete'];
    AAvatar: typeof import('@arco-design/web-vue')['Avatar'];
    AAvatarGroup: typeof import('@arco-design/web-vue')['AvatarGroup'];
    ABackTop: typeof import('@arco-design/web-vue')['BackTop'];
    ABadge: typeof import('@arco-design/web-vue')['Badge'];
    ABreadcrumb: typeof import('@arco-design/web-vue')['Breadcrumb'];
    ABreadcrumbItem: typeof import('@arco-design/web-vue')['BreadcrumbItem'];
    AButton: typeof import('@arco-design/web-vue')['Button'];
    AButtonGroup: typeof import('@arco-design/web-vue')['ButtonGroup'];
    ACalendar: typeof import('@arco-design/web-vue')['Calendar'];
    ACard: typeof import('@arco-design/web-vue')['Card'];
    ACardMeta: typeof import('@arco-design/web-vue')['CardMeta'];
    ACardGrid: typeof import('@arco-design/web-vue')['CardGrid'];
    ACarousel: typeof import('@arco-design/web-vue')['Carousel'];
    ACarouselItem: typeof import('@arco-design/web-vue')['CarouselItem'];
    ACascader: typeof import('@arco-design/web-vue')['Cascader'];
    ACascaderPanel: typeof import('@arco-design/web-vue')['CascaderPanel'];
    ACheckbox: typeof import('@arco-design/web-vue')['Checkbox'];
    ACheckboxGroup: typeof import('@arco-design/web-vue')['CheckboxGroup'];
    ACollapse: typeof import('@arco-design/web-vue')['Collapse'];
    ACollapseItem: typeof import('@arco-design/web-vue')['CollapseItem'];
    AComment: typeof import('@arco-design/web-vue')['Comment'];
    AConfigProvider: typeof import('@arco-design/web-vue')['ConfigProvider'];
    ADatePicker: typeof import('@arco-design/web-vue')['DatePicker'];
    AWeekPicker: typeof import('@arco-design/web-vue')['WeekPicker'];
    AMonthPicker: typeof import('@arco-design/web-vue')['MonthPicker'];
    AYearPicker: typeof import('@arco-design/web-vue')['YearPicker'];
    AQuarterPicker: typeof import('@arco-design/web-vue')['QuarterPicker'];
    ARangePicker: typeof import('@arco-design/web-vue')['RangePicker'];
    ADescriptions: typeof import('@arco-design/web-vue')['Descriptions'];
    ADescriptionsItem: typeof import('@arco-design/web-vue')['DescriptionsItem'];
    ADivider: typeof import('@arco-design/web-vue')['Divider'];
    ADrawer: typeof import('@arco-design/web-vue')['Drawer'];
    ADropdown: typeof import('@arco-design/web-vue')['Dropdown'];
    ADoption: typeof import('@arco-design/web-vue')['Doption'];
    ADgroup: typeof import('@arco-design/web-vue')['Dgroup'];
    ADsubmenu: typeof import('@arco-design/web-vue')['Dsubmenu'];
    AEmpty: typeof import('@arco-design/web-vue')['Empty'];
    AForm: typeof import('@arco-design/web-vue')['Form'];
    AFormItem: typeof import('@arco-design/web-vue')['FormItem'];
    AGrid: typeof import('@arco-design/web-vue')['Grid'];
    AGridItem: typeof import('@arco-design/web-vue')['GridItem'];
    ACol: typeof import('@arco-design/web-vue')['Col'];
    ARow: typeof import('@arco-design/web-vue')['Row'];
    AImage: typeof import('@arco-design/web-vue')['Image'];
    AImagePreview: typeof import('@arco-design/web-vue')['ImagePreview'];
    AImagePreviewAction: typeof import('@arco-design/web-vue')['ImagePreviewAction'];
    AImagePreviewGroup: typeof import('@arco-design/web-vue')['ImagePreviewGroup'];
    AInput: typeof import('@arco-design/web-vue')['Input'];
    AInputGroup: typeof import('@arco-design/web-vue')['InputGroup'];
    AInputSearch: typeof import('@arco-design/web-vue')['InputSearch'];
    AInputPassword: typeof import('@arco-design/web-vue')['InputPassword'];
    AInputNumber: typeof import('@arco-design/web-vue')['InputNumber'];
    AInputTag: typeof import('@arco-design/web-vue')['InputTag'];
    ALayout: typeof import('@arco-design/web-vue')['Layout'];
    ALayoutHeader: typeof import('@arco-design/web-vue')['LayoutHeader'];
    ALayoutContent: typeof import('@arco-design/web-vue')['LayoutContent'];
    ALayoutFooter: typeof import('@arco-design/web-vue')['LayoutFooter'];
    ALayoutSider: typeof import('@arco-design/web-vue')['LayoutSider'];
    ALink: typeof import('@arco-design/web-vue')['Link'];
    AList: typeof import('@arco-design/web-vue')['List'];
    AListItem: typeof import('@arco-design/web-vue')['ListItem'];
    AListItemMeta: typeof import('@arco-design/web-vue')['ListItemMeta'];
    AMention: typeof import('@arco-design/web-vue')['Mention'];
    AMenu: typeof import('@arco-design/web-vue')['Menu'];
    AMenuItem: typeof import('@arco-design/web-vue')['MenuItem'];
    AMenuItemGroup: typeof import('@arco-design/web-vue')['MenuItemGroup'];
    ASubMenu: typeof import('@arco-design/web-vue')['SubMenu'];
    AModal: typeof import('@arco-design/web-vue')['Modal'];
    APageHeader: typeof import('@arco-design/web-vue')['PageHeader'];
    APagination: typeof import('@arco-design/web-vue')['Pagination'];
    APopconfirm: typeof import('@arco-design/web-vue')['Popconfirm'];
    APopover: typeof import('@arco-design/web-vue')['Popover'];
    AProgress: typeof import('@arco-design/web-vue')['Progress'];
    ARadio: typeof import('@arco-design/web-vue')['Radio'];
    ARadioGroup: typeof import('@arco-design/web-vue')['RadioGroup'];
    ARate: typeof import('@arco-design/web-vue')['Rate'];
    AResizeBox: typeof import('@arco-design/web-vue')['ResizeBox'];
    AResult: typeof import('@arco-design/web-vue')['Result'];
    ASelect: typeof import('@arco-design/web-vue')['Select'];
    AOption: typeof import('@arco-design/web-vue')['Option'];
    AOptgroup: typeof import('@arco-design/web-vue')['Optgroup'];
    ASkeleton: typeof import('@arco-design/web-vue')['Skeleton'];
    ASkeletonLine: typeof import('@arco-design/web-vue')['SkeletonLine'];
    ASkeletonShape: typeof import('@arco-design/web-vue')['SkeletonShape'];
    ASlider: typeof import('@arco-design/web-vue')['Slider'];
    ASpace: typeof import('@arco-design/web-vue')['Space'];
    ASpin: typeof import('@arco-design/web-vue')['Spin'];
    ASplit: typeof import('@arco-design/web-vue')['Split'];
    AStatistic: typeof import('@arco-design/web-vue')['Statistic'];
    ACountdown: typeof import('@arco-design/web-vue')['Countdown'];
    ASteps: typeof import('@arco-design/web-vue')['Steps'];
    AStep: typeof import('@arco-design/web-vue')['Step'];
    ASwitch: typeof import('@arco-design/web-vue')['Switch'];
    ATable: typeof import('@arco-design/web-vue')['Table'];
    AThead: typeof import('@arco-design/web-vue')['Thead'];
    ATd: typeof import('@arco-design/web-vue')['Td'];
    ATh: typeof import('@arco-design/web-vue')['Th'];
    ATr: typeof import('@arco-design/web-vue')['Tr'];
    ATbody: typeof import('@arco-design/web-vue')['Tbody'];
    ATableColumn: typeof import('@arco-design/web-vue')['TableColumn'];
    ATabs: typeof import('@arco-design/web-vue')['Tabs'];
    ATabPane: typeof import('@arco-design/web-vue')['TabPane'];
    ATag: typeof import('@arco-design/web-vue')['Tag'];
    ATextarea: typeof import('@arco-design/web-vue')['Textarea'];
    ATimePicker: typeof import('@arco-design/web-vue')['TimePicker'];
    ATimeline: typeof import('@arco-design/web-vue')['Timeline'];
    ATimelineItem: typeof import('@arco-design/web-vue')['TimelineItem'];
    ATooltip: typeof import('@arco-design/web-vue')['Tooltip'];
    ATransfer: typeof import('@arco-design/web-vue')['Transfer'];
    ATree: typeof import('@arco-design/web-vue')['Tree'];
    ATreeSelect: typeof import('@arco-design/web-vue')['TreeSelect'];
    ATrigger: typeof import('@arco-design/web-vue')['Trigger'];
    ATypography: typeof import('@arco-design/web-vue')['Typography'];
    ATypographyParagraph: typeof import('@arco-design/web-vue')['TypographyParagraph'];
    ATypographyTitle: typeof import('@arco-design/web-vue')['TypographyTitle'];
    ATypographyText: typeof import('@arco-design/web-vue')['TypographyText'];
    AUpload: typeof import('@arco-design/web-vue')['Upload'];
    AVerificationCode: typeof import('@arco-design/web-vue')['VerificationCode'];
    AWatermark: typeof import('@arco-design/web-vue')['Watermark'];
  }

  export interface ComponentCustomProperties {
    $message: MessageMethod;
    $notification: NotificationMethod;
    $modal: ModalMethod;
    $drawer: DrawerMethod;
  }
}

export {};
