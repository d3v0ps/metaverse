/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Int, Field, ObjectType, createUnionType, registerEnumType, Scalar, CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

// #region Dependecy Imports
/**
 * ==================
 * Dependency Imports
 * ==================
 */


// #endregion

// #region Enumerations
/**
 * ============
 * Enumerations
 * ============
 */

export enum StatusEnumeration {
}
registerEnumType(StatusEnumeration, {
  name: 'StatusEnumeration',
  description: '',
});

export enum NLNonprofitType {
  NonprofitANBI = 'NonprofitANBI',
  NonprofitSBBI = 'NonprofitSBBI',
}
registerEnumType(NLNonprofitType, {
  name: 'NLNonprofitType',
  description: '',
});

export enum WearableSizeGroupEnumeration {
  WearableSizeGroupShort = 'WearableSizeGroupShort',
  WearableSizeGroupExtraTall = 'WearableSizeGroupExtraTall',
  WearableSizeGroupMaternity = 'WearableSizeGroupMaternity',
  WearableSizeGroupWomens = 'WearableSizeGroupWomens',
  WearableSizeGroupBig = 'WearableSizeGroupBig',
  WearableSizeGroupRegular = 'WearableSizeGroupRegular',
  WearableSizeGroupMens = 'WearableSizeGroupMens',
  WearableSizeGroupMisses = 'WearableSizeGroupMisses',
  WearableSizeGroupHusky = 'WearableSizeGroupHusky',
  WearableSizeGroupPetite = 'WearableSizeGroupPetite',
  WearableSizeGroupInfants = 'WearableSizeGroupInfants',
  WearableSizeGroupGirls = 'WearableSizeGroupGirls',
  WearableSizeGroupPlus = 'WearableSizeGroupPlus',
  WearableSizeGroupJuniors = 'WearableSizeGroupJuniors',
  WearableSizeGroupTall = 'WearableSizeGroupTall',
  WearableSizeGroupExtraShort = 'WearableSizeGroupExtraShort',
  WearableSizeGroupBoys = 'WearableSizeGroupBoys',
}
registerEnumType(WearableSizeGroupEnumeration, {
  name: 'WearableSizeGroupEnumeration',
  description: '',
});

export enum DrugCostCategory {
  Wholesale = 'Wholesale',
  ReimbursementCap = 'ReimbursementCap',
  Retail = 'Retail',
}
registerEnumType(DrugCostCategory, {
  name: 'DrugCostCategory',
  description: '',
});

export enum MedicalProcedureType {
  PercutaneousProcedure = 'PercutaneousProcedure',
  NoninvasiveProcedure = 'NoninvasiveProcedure',
}
registerEnumType(MedicalProcedureType, {
  name: 'MedicalProcedureType',
  description: '',
});

export enum PriceTypeEnumeration {
  SalePrice = 'SalePrice',
  Srp = 'SRP',
  ListPrice = 'ListPrice',
  InvoicePrice = 'InvoicePrice',
  MinimumAdvertisedPrice = 'MinimumAdvertisedPrice',
  Msrp = 'MSRP',
}
registerEnumType(PriceTypeEnumeration, {
  name: 'PriceTypeEnumeration',
  description: '',
});

export enum PaymentStatusType {
  PaymentDue = 'PaymentDue',
  PaymentDeclined = 'PaymentDeclined',
  PaymentAutomaticallyApplied = 'PaymentAutomaticallyApplied',
  PaymentComplete = 'PaymentComplete',
  PaymentPastDue = 'PaymentPastDue',
}
registerEnumType(PaymentStatusType, {
  name: 'PaymentStatusType',
  description: '',
});

export enum BoardingPolicyType {
  GroupBoardingPolicy = 'GroupBoardingPolicy',
  ZoneBoardingPolicy = 'ZoneBoardingPolicy',
}
registerEnumType(BoardingPolicyType, {
  name: 'BoardingPolicyType',
  description: '',
});

export enum OfferItemCondition {
  DamagedCondition = 'DamagedCondition',
  RefurbishedCondition = 'RefurbishedCondition',
  UsedCondition = 'UsedCondition',
  NewCondition = 'NewCondition',
}
registerEnumType(OfferItemCondition, {
  name: 'OfferItemCondition',
  description: '',
});

export enum MeasurementTypeEnumeration {
}
registerEnumType(MeasurementTypeEnumeration, {
  name: 'MeasurementTypeEnumeration',
  description: '',
});

export enum MusicAlbumReleaseType {
  EPRelease = 'EPRelease',
  BroadcastRelease = 'BroadcastRelease',
  SingleRelease = 'SingleRelease',
  AlbumRelease = 'AlbumRelease',
}
registerEnumType(MusicAlbumReleaseType, {
  name: 'MusicAlbumReleaseType',
  description: '',
});

export enum EventAttendanceModeEnumeration {
  OfflineEventAttendanceMode = 'OfflineEventAttendanceMode',
  MixedEventAttendanceMode = 'MixedEventAttendanceMode',
  OnlineEventAttendanceMode = 'OnlineEventAttendanceMode',
}
registerEnumType(EventAttendanceModeEnumeration, {
  name: 'EventAttendanceModeEnumeration',
  description: '',
});

export enum PaymentMethod {
}
registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
  description: '',
});

export enum BodyMeasurementTypeEnumeration {
  BodyMeasurementHand = 'BodyMeasurementHand',
  BodyMeasurementHips = 'BodyMeasurementHips',
  BodyMeasurementUnderbust = 'BodyMeasurementUnderbust',
  BodyMeasurementWeight = 'BodyMeasurementWeight',
  BodyMeasurementHeight = 'BodyMeasurementHeight',
  BodyMeasurementChest = 'BodyMeasurementChest',
  BodyMeasurementFoot = 'BodyMeasurementFoot',
  BodyMeasurementHead = 'BodyMeasurementHead',
  BodyMeasurementNeck = 'BodyMeasurementNeck',
  BodyMeasurementBust = 'BodyMeasurementBust',
  BodyMeasurementInsideLeg = 'BodyMeasurementInsideLeg',
  BodyMeasurementWaist = 'BodyMeasurementWaist',
  BodyMeasurementArm = 'BodyMeasurementArm',
}
registerEnumType(BodyMeasurementTypeEnumeration, {
  name: 'BodyMeasurementTypeEnumeration',
  description: '',
});

export enum PhysicalActivityCategory {
  Balance = 'Balance',
  AnaerobicActivity = 'AnaerobicActivity',
  Flexibility = 'Flexibility',
  OccupationalActivity = 'OccupationalActivity',
  LeisureTimeActivity = 'LeisureTimeActivity',
  AerobicActivity = 'AerobicActivity',
  StrengthTraining = 'StrengthTraining',
}
registerEnumType(PhysicalActivityCategory, {
  name: 'PhysicalActivityCategory',
  description: '',
});

export enum InfectiousAgentClass {
  Bacteria = 'Bacteria',
  Protozoa = 'Protozoa',
  Fungus = 'Fungus',
  Virus = 'Virus',
  Prion = 'Prion',
  MulticellularParasite = 'MulticellularParasite',
}
registerEnumType(InfectiousAgentClass, {
  name: 'InfectiousAgentClass',
  description: '',
});

export enum ItemAvailability {
  OutOfStock = 'OutOfStock',
  Discontinued = 'Discontinued',
  OnlineOnly = 'OnlineOnly',
  InStock = 'InStock',
  InStoreOnly = 'InStoreOnly',
  SoldOut = 'SoldOut',
  PreSale = 'PreSale',
  BackOrder = 'BackOrder',
  PreOrder = 'PreOrder',
  LimitedAvailability = 'LimitedAvailability',
}
registerEnumType(ItemAvailability, {
  name: 'ItemAvailability',
  description: '',
});

export enum DayOfWeek {
  Thursday = 'Thursday',
  Saturday = 'Saturday',
  Tuesday = 'Tuesday',
  Friday = 'Friday',
  Monday = 'Monday',
  Wednesday = 'Wednesday',
  PublicHolidays = 'PublicHolidays',
  Sunday = 'Sunday',
}
registerEnumType(DayOfWeek, {
  name: 'DayOfWeek',
  description: '',
});

export enum Specialty {
}
registerEnumType(Specialty, {
  name: 'Specialty',
  description: '',
});

export enum ContactPointOption {
  HearingImpairedSupported = 'HearingImpairedSupported',
  TollFree = 'TollFree',
}
registerEnumType(ContactPointOption, {
  name: 'ContactPointOption',
  description: '',
});

export enum HealthAspectEnumeration {
  SideEffectsHealthAspect = 'SideEffectsHealthAspect',
  AllergiesHealthAspect = 'AllergiesHealthAspect',
  BenefitsHealthAspect = 'BenefitsHealthAspect',
  SymptomsHealthAspect = 'SymptomsHealthAspect',
  StagesHealthAspect = 'StagesHealthAspect',
  PrognosisHealthAspect = 'PrognosisHealthAspect',
  HowItWorksHealthAspect = 'HowItWorksHealthAspect',
  PregnancyHealthAspect = 'PregnancyHealthAspect',
  SelfCareHealthAspect = 'SelfCareHealthAspect',
  SeeDoctorHealthAspect = 'SeeDoctorHealthAspect',
  TreatmentsHealthAspect = 'TreatmentsHealthAspect',
  HowOrWhereHealthAspect = 'HowOrWhereHealthAspect',
  OverviewHealthAspect = 'OverviewHealthAspect',
  EffectivenessHealthAspect = 'EffectivenessHealthAspect',
  TypesHealthAspect = 'TypesHealthAspect',
  ContagiousnessHealthAspect = 'ContagiousnessHealthAspect',
  SafetyHealthAspect = 'SafetyHealthAspect',
  PreventionHealthAspect = 'PreventionHealthAspect',
  LivingWithHealthAspect = 'LivingWithHealthAspect',
  ScreeningHealthAspect = 'ScreeningHealthAspect',
  MayTreatHealthAspect = 'MayTreatHealthAspect',
  UsageOrScheduleHealthAspect = 'UsageOrScheduleHealthAspect',
  RisksOrComplicationsHealthAspect = 'RisksOrComplicationsHealthAspect',
  IngredientsHealthAspect = 'IngredientsHealthAspect',
  CausesHealthAspect = 'CausesHealthAspect',
  GettingAccessHealthAspect = 'GettingAccessHealthAspect',
  PatientExperienceHealthAspect = 'PatientExperienceHealthAspect',
  RelatedTopicsHealthAspect = 'RelatedTopicsHealthAspect',
  MisconceptionsHealthAspect = 'MisconceptionsHealthAspect',
}
registerEnumType(HealthAspectEnumeration, {
  name: 'HealthAspectEnumeration',
  description: '',
});

export enum CarUsageType {
  TaxiVehicleUsage = 'TaxiVehicleUsage',
  DrivingSchoolVehicleUsage = 'DrivingSchoolVehicleUsage',
  RentalVehicleUsage = 'RentalVehicleUsage',
}
registerEnumType(CarUsageType, {
  name: 'CarUsageType',
  description: '',
});

export enum AdultOrientedEnumeration {
  ReducedRelevanceForChildrenConsideration = 'ReducedRelevanceForChildrenConsideration',
  SexualContentConsideration = 'SexualContentConsideration',
  UnclassifiedAdultConsideration = 'UnclassifiedAdultConsideration',
  HealthcareConsideration = 'HealthcareConsideration',
  NarcoticConsideration = 'NarcoticConsideration',
  WeaponConsideration = 'WeaponConsideration',
  TobaccoNicotineConsideration = 'TobaccoNicotineConsideration',
  AlcoholConsideration = 'AlcoholConsideration',
  DangerousGoodConsideration = 'DangerousGoodConsideration',
  ViolenceConsideration = 'ViolenceConsideration',
}
registerEnumType(AdultOrientedEnumeration, {
  name: 'AdultOrientedEnumeration',
  description: '',
});

export enum NonprofitType {
}
registerEnumType(NonprofitType, {
  name: 'NonprofitType',
  description: '',
});

export enum ReturnFeesEnumeration {
  ReturnFeesCustomerResponsibility = 'ReturnFeesCustomerResponsibility',
  OriginalShippingFees = 'OriginalShippingFees',
  ReturnShippingFees = 'ReturnShippingFees',
  FreeReturn = 'FreeReturn',
  RestockingFees = 'RestockingFees',
}
registerEnumType(ReturnFeesEnumeration, {
  name: 'ReturnFeesEnumeration',
  description: '',
});

export enum MedicalEvidenceLevel {
  EvidenceLevelA = 'EvidenceLevelA',
  EvidenceLevelB = 'EvidenceLevelB',
  EvidenceLevelC = 'EvidenceLevelC',
}
registerEnumType(MedicalEvidenceLevel, {
  name: 'MedicalEvidenceLevel',
  description: '',
});

export enum LegalForceStatus {
  NotInForce = 'NotInForce',
  InForce = 'InForce',
  PartiallyInForce = 'PartiallyInForce',
}
registerEnumType(LegalForceStatus, {
  name: 'LegalForceStatus',
  description: '',
});

export enum EnergyEfficiencyEnumeration {
}
registerEnumType(EnergyEfficiencyEnumeration, {
  name: 'EnergyEfficiencyEnumeration',
  description: '',
});

export enum Enumeration {
}
registerEnumType(Enumeration, {
  name: 'Enumeration',
  description: '',
});

export enum MedicalImagingTechnique {
  XRay = 'XRay',
  Pet = 'PET',
  Mri = 'MRI',
  Ultrasound = 'Ultrasound',
  Ct = 'CT',
}
registerEnumType(MedicalImagingTechnique, {
  name: 'MedicalImagingTechnique',
  description: '',
});

export enum LegalValueLevel {
  DefinitiveLegalValue = 'DefinitiveLegalValue',
  UnofficialLegalValue = 'UnofficialLegalValue',
  OfficialLegalValue = 'OfficialLegalValue',
  AuthoritativeLegalValue = 'AuthoritativeLegalValue',
}
registerEnumType(LegalValueLevel, {
  name: 'LegalValueLevel',
  description: '',
});

export enum MedicineSystem {
  Homeopathic = 'Homeopathic',
  TraditionalChinese = 'TraditionalChinese',
  Chiropractic = 'Chiropractic',
  Osteopathic = 'Osteopathic',
  WesternConventional = 'WesternConventional',
  Ayurvedic = 'Ayurvedic',
}
registerEnumType(MedicineSystem, {
  name: 'MedicineSystem',
  description: '',
});

export enum QualitativeValue {
}
registerEnumType(QualitativeValue, {
  name: 'QualitativeValue',
  description: '',
});

export enum ReturnMethodEnumeration {
  ReturnByMail = 'ReturnByMail',
  ReturnAtKiosk = 'ReturnAtKiosk',
  ReturnInStore = 'ReturnInStore',
}
registerEnumType(ReturnMethodEnumeration, {
  name: 'ReturnMethodEnumeration',
  description: '',
});

export enum GameAvailabilityEnumeration {
  FullGameAvailability = 'FullGameAvailability',
  DemoGameAvailability = 'DemoGameAvailability',
}
registerEnumType(GameAvailabilityEnumeration, {
  name: 'GameAvailabilityEnumeration',
  description: '',
});

export enum RsvpResponseType {
  RsvpResponseNo = 'RsvpResponseNo',
  RsvpResponseMaybe = 'RsvpResponseMaybe',
  RsvpResponseYes = 'RsvpResponseYes',
}
registerEnumType(RsvpResponseType, {
  name: 'RsvpResponseType',
  description: '',
});

export enum MedicalObservationalStudyDesign {
  Registry = 'Registry',
  CohortStudy = 'CohortStudy',
  Observational = 'Observational',
  CrossSectional = 'CrossSectional',
  CaseSeries = 'CaseSeries',
  Longitudinal = 'Longitudinal',
}
registerEnumType(MedicalObservationalStudyDesign, {
  name: 'MedicalObservationalStudyDesign',
  description: '',
});

export enum DrugPregnancyCategory {
  FDAcategoryC = 'FDAcategoryC',
  FDAcategoryA = 'FDAcategoryA',
  FDAcategoryX = 'FDAcategoryX',
  FDAcategoryB = 'FDAcategoryB',
  FDAcategoryD = 'FDAcategoryD',
  FDAnotEvaluated = 'FDAnotEvaluated',
}
registerEnumType(DrugPregnancyCategory, {
  name: 'DrugPregnancyCategory',
  description: '',
});

export enum SizeSpecification {
}
registerEnumType(SizeSpecification, {
  name: 'SizeSpecification',
  description: '',
});

export enum EUEnergyEfficiencyEnumeration {
  EUEnergyEfficiencyCategoryD = 'EUEnergyEfficiencyCategoryD',
  EUEnergyEfficiencyCategoryA2Plus = 'EUEnergyEfficiencyCategoryA2Plus',
  EUEnergyEfficiencyCategoryE = 'EUEnergyEfficiencyCategoryE',
  EUEnergyEfficiencyCategoryA3Plus = 'EUEnergyEfficiencyCategoryA3Plus',
  EUEnergyEfficiencyCategoryA1Plus = 'EUEnergyEfficiencyCategoryA1Plus',
  EUEnergyEfficiencyCategoryA = 'EUEnergyEfficiencyCategoryA',
  EUEnergyEfficiencyCategoryB = 'EUEnergyEfficiencyCategoryB',
  EUEnergyEfficiencyCategoryF = 'EUEnergyEfficiencyCategoryF',
  EUEnergyEfficiencyCategoryC = 'EUEnergyEfficiencyCategoryC',
  EUEnergyEfficiencyCategoryG = 'EUEnergyEfficiencyCategoryG',
}
registerEnumType(EUEnergyEfficiencyEnumeration, {
  name: 'EUEnergyEfficiencyEnumeration',
  description: '',
});

export enum UKNonprofitType {
  UnincorporatedAssociationCharity = 'UnincorporatedAssociationCharity',
  UKTrust = 'UKTrust',
  CharitableIncorporatedOrganization = 'CharitableIncorporatedOrganization',
  LimitedByGuaranteeCharity = 'LimitedByGuaranteeCharity',
}
registerEnumType(UKNonprofitType, {
  name: 'UKNonprofitType',
  description: '',
});

export enum SteeringPositionValue {
  LeftHandDriving = 'LeftHandDriving',
  RightHandDriving = 'RightHandDriving',
}
registerEnumType(SteeringPositionValue, {
  name: 'SteeringPositionValue',
  description: '',
});

export enum RefundTypeEnumeration {
  StoreCreditRefund = 'StoreCreditRefund',
  ExchangeRefund = 'ExchangeRefund',
  FullRefund = 'FullRefund',
}
registerEnumType(RefundTypeEnumeration, {
  name: 'RefundTypeEnumeration',
  description: '',
});

export enum EnergyStarEnergyEfficiencyEnumeration {
  EnergyStarCertified = 'EnergyStarCertified',
}
registerEnumType(EnergyStarEnergyEfficiencyEnumeration, {
  name: 'EnergyStarEnergyEfficiencyEnumeration',
  description: '',
});

export enum SizeGroupEnumeration {
}
registerEnumType(SizeGroupEnumeration, {
  name: 'SizeGroupEnumeration',
  description: '',
});

export enum GameServerStatus {
  OnlineFull = 'OnlineFull',
  OfflinePermanently = 'OfflinePermanently',
  Online = 'Online',
  OfflineTemporarily = 'OfflineTemporarily',
}
registerEnumType(GameServerStatus, {
  name: 'GameServerStatus',
  description: '',
});

export enum MedicalStudyStatus {
  Recruiting = 'Recruiting',
  NotYetRecruiting = 'NotYetRecruiting',
  ResultsNotAvailable = 'ResultsNotAvailable',
  Suspended = 'Suspended',
  ActiveNotRecruiting = 'ActiveNotRecruiting',
  EnrollingByInvitation = 'EnrollingByInvitation',
  Completed = 'Completed',
  ResultsAvailable = 'ResultsAvailable',
  Terminated = 'Terminated',
  Withdrawn = 'Withdrawn',
}
registerEnumType(MedicalStudyStatus, {
  name: 'MedicalStudyStatus',
  description: '',
});

export enum DeliveryMethod {
  ParcelService = 'ParcelService',
  OnSitePickup = 'OnSitePickup',
  LockerDelivery = 'LockerDelivery',
}
registerEnumType(DeliveryMethod, {
  name: 'DeliveryMethod',
  description: '',
});

export enum DigitalPlatformEnumeration {
  MobileWebPlatform = 'MobileWebPlatform',
  AndroidPlatform = 'AndroidPlatform',
  GenericWebPlatform = 'GenericWebPlatform',
  DesktopWebPlatform = 'DesktopWebPlatform',
  IOSPlatform = 'IOSPlatform',
}
registerEnumType(DigitalPlatformEnumeration, {
  name: 'DigitalPlatformEnumeration',
  description: '',
});

export enum MedicalAudienceType {
  MedicalResearcher = 'MedicalResearcher',
  Clinician = 'Clinician',
}
registerEnumType(MedicalAudienceType, {
  name: 'MedicalAudienceType',
  description: '',
});

export enum GamePlayMode {
  MultiPlayer = 'MultiPlayer',
  CoOp = 'CoOp',
  SinglePlayer = 'SinglePlayer',
}
registerEnumType(GamePlayMode, {
  name: 'GamePlayMode',
  description: '',
});

export enum OrderStatus {
  OrderCancelled = 'OrderCancelled',
  OrderProblem = 'OrderProblem',
  OrderDelivered = 'OrderDelivered',
  OrderReturned = 'OrderReturned',
  OrderPaymentDue = 'OrderPaymentDue',
  OrderInTransit = 'OrderInTransit',
  OrderProcessing = 'OrderProcessing',
  OrderPickupAvailable = 'OrderPickupAvailable',
}
registerEnumType(OrderStatus, {
  name: 'OrderStatus',
  description: '',
});

export enum DigitalDocumentPermissionType {
  CommentPermission = 'CommentPermission',
  ReadPermission = 'ReadPermission',
  WritePermission = 'WritePermission',
}
registerEnumType(DigitalDocumentPermissionType, {
  name: 'DigitalDocumentPermissionType',
  description: '',
});

export enum GenderType {
  Male = 'Male',
  Female = 'Female',
}
registerEnumType(GenderType, {
  name: 'GenderType',
  description: '',
});

export enum USNonprofitType {
  Nonprofit501c4 = 'Nonprofit501c4',
  Nonprofit501c23 = 'Nonprofit501c23',
  Nonprofit501k = 'Nonprofit501k',
  Nonprofit501c1 = 'Nonprofit501c1',
  Nonprofit501n = 'Nonprofit501n',
  Nonprofit501c7 = 'Nonprofit501c7',
  Nonprofit501c9 = 'Nonprofit501c9',
  Nonprofit501c3 = 'Nonprofit501c3',
  Nonprofit501c2 = 'Nonprofit501c2',
  Nonprofit501a = 'Nonprofit501a',
  Nonprofit501c21 = 'Nonprofit501c21',
  Nonprofit501e = 'Nonprofit501e',
  Nonprofit501c14 = 'Nonprofit501c14',
  Nonprofit501c28 = 'Nonprofit501c28',
  Nonprofit501c18 = 'Nonprofit501c18',
  Nonprofit501c27 = 'Nonprofit501c27',
  Nonprofit501d = 'Nonprofit501d',
  Nonprofit501c25 = 'Nonprofit501c25',
  Nonprofit501c15 = 'Nonprofit501c15',
  Nonprofit501c12 = 'Nonprofit501c12',
  Nonprofit501c13 = 'Nonprofit501c13',
  Nonprofit501c26 = 'Nonprofit501c26',
  Nonprofit501c8 = 'Nonprofit501c8',
  Nonprofit501c10 = 'Nonprofit501c10',
  Nonprofit501c11 = 'Nonprofit501c11',
  Nonprofit501f = 'Nonprofit501f',
  Nonprofit501c5 = 'Nonprofit501c5',
  Nonprofit501c20 = 'Nonprofit501c20',
  Nonprofit501c6 = 'Nonprofit501c6',
  Nonprofit527 = 'Nonprofit527',
  Nonprofit501c19 = 'Nonprofit501c19',
  Nonprofit501c16 = 'Nonprofit501c16',
  Nonprofit501c24 = 'Nonprofit501c24',
  Nonprofit501q = 'Nonprofit501q',
  Nonprofit501c22 = 'Nonprofit501c22',
  Nonprofit501c17 = 'Nonprofit501c17',
}
registerEnumType(USNonprofitType, {
  name: 'USNonprofitType',
  description: '',
});

export enum BusinessEntityType {
}
registerEnumType(BusinessEntityType, {
  name: 'BusinessEntityType',
  description: '',
});

export enum ItemListOrderType {
  ItemListUnordered = 'ItemListUnordered',
  ItemListOrderDescending = 'ItemListOrderDescending',
  ItemListOrderAscending = 'ItemListOrderAscending',
}
registerEnumType(ItemListOrderType, {
  name: 'ItemListOrderType',
  description: '',
});

export enum DriveWheelConfigurationValue {
  FrontWheelDriveConfiguration = 'FrontWheelDriveConfiguration',
  FourWheelDriveConfiguration = 'FourWheelDriveConfiguration',
  AllWheelDriveConfiguration = 'AllWheelDriveConfiguration',
  RearWheelDriveConfiguration = 'RearWheelDriveConfiguration',
}
registerEnumType(DriveWheelConfigurationValue, {
  name: 'DriveWheelConfigurationValue',
  description: '',
});

export enum BedType {
}
registerEnumType(BedType, {
  name: 'BedType',
  description: '',
});

export enum WarrantyScope {
}
registerEnumType(WarrantyScope, {
  name: 'WarrantyScope',
  description: '',
});

export enum EventStatusType {
  EventCancelled = 'EventCancelled',
  EventScheduled = 'EventScheduled',
  EventRescheduled = 'EventRescheduled',
  EventPostponed = 'EventPostponed',
  EventMovedOnline = 'EventMovedOnline',
}
registerEnumType(EventStatusType, {
  name: 'EventStatusType',
  description: '',
});

export enum MapCategoryType {
  SeatingMap = 'SeatingMap',
  VenueMap = 'VenueMap',
  ParkingMap = 'ParkingMap',
  TransitMap = 'TransitMap',
}
registerEnumType(MapCategoryType, {
  name: 'MapCategoryType',
  description: '',
});

export enum SizeSystemEnumeration {
  SizeSystemMetric = 'SizeSystemMetric',
  SizeSystemImperial = 'SizeSystemImperial',
}
registerEnumType(SizeSystemEnumeration, {
  name: 'SizeSystemEnumeration',
  description: '',
});

export enum WearableMeasurementTypeEnumeration {
  WearableMeasurementSleeve = 'WearableMeasurementSleeve',
  WearableMeasurementChestOrBust = 'WearableMeasurementChestOrBust',
  WearableMeasurementOutsideLeg = 'WearableMeasurementOutsideLeg',
  WearableMeasurementCup = 'WearableMeasurementCup',
  WearableMeasurementCollar = 'WearableMeasurementCollar',
  WearableMeasurementWaist = 'WearableMeasurementWaist',
  WearableMeasurementHips = 'WearableMeasurementHips',
  WearableMeasurementWidth = 'WearableMeasurementWidth',
  WearableMeasurementBack = 'WearableMeasurementBack',
  WearableMeasurementLength = 'WearableMeasurementLength',
  WearableMeasurementHeight = 'WearableMeasurementHeight',
  WearableMeasurementInseam = 'WearableMeasurementInseam',
}
registerEnumType(WearableMeasurementTypeEnumeration, {
  name: 'WearableMeasurementTypeEnumeration',
  description: '',
});

export enum MusicReleaseFormatType {
  CDFormat = 'CDFormat',
  DigitalAudioTapeFormat = 'DigitalAudioTapeFormat',
  DigitalFormat = 'DigitalFormat',
  LaserDiscFormat = 'LaserDiscFormat',
  VinylFormat = 'VinylFormat',
  CassetteFormat = 'CassetteFormat',
  DVDFormat = 'DVDFormat',
}
registerEnumType(MusicReleaseFormatType, {
  name: 'MusicReleaseFormatType',
  description: '',
});

export enum ReservationStatusType {
  ReservationPending = 'ReservationPending',
  ReservationConfirmed = 'ReservationConfirmed',
  ReservationCancelled = 'ReservationCancelled',
  ReservationHold = 'ReservationHold',
}
registerEnumType(ReservationStatusType, {
  name: 'ReservationStatusType',
  description: '',
});

export enum GovernmentBenefitsType {
  HealthCare = 'HealthCare',
  BusinessSupport = 'BusinessSupport',
  OneTimePayments = 'OneTimePayments',
  DisabilitySupport = 'DisabilitySupport',
  ParentalSupport = 'ParentalSupport',
  UnemploymentSupport = 'UnemploymentSupport',
  PaidLeave = 'PaidLeave',
  BasicIncome = 'BasicIncome',
}
registerEnumType(GovernmentBenefitsType, {
  name: 'GovernmentBenefitsType',
  description: '',
});

export enum DrugPrescriptionStatus {
  Otc = 'OTC',
  PrescriptionOnly = 'PrescriptionOnly',
}
registerEnumType(DrugPrescriptionStatus, {
  name: 'DrugPrescriptionStatus',
  description: '',
});

export enum MediaManipulationRatingEnumeration {
  OriginalMediaContent = 'OriginalMediaContent',
  SatireOrParodyContent = 'SatireOrParodyContent',
  EditedOrCroppedContent = 'EditedOrCroppedContent',
  DecontextualizedContent = 'DecontextualizedContent',
  StagedContent = 'StagedContent',
  TransformedContent = 'TransformedContent',
}
registerEnumType(MediaManipulationRatingEnumeration, {
  name: 'MediaManipulationRatingEnumeration',
  description: '',
});

export enum MedicalEnumeration {
}
registerEnumType(MedicalEnumeration, {
  name: 'MedicalEnumeration',
  description: '',
});

export enum MedicalTrialDesign {
  PlaceboControlledTrial = 'PlaceboControlledTrial',
  DoubleBlindedTrial = 'DoubleBlindedTrial',
  MultiCenterTrial = 'MultiCenterTrial',
  InternationalTrial = 'InternationalTrial',
  TripleBlindedTrial = 'TripleBlindedTrial',
  OpenTrial = 'OpenTrial',
  RandomizedTrial = 'RandomizedTrial',
  SingleBlindedTrial = 'SingleBlindedTrial',
  SingleCenterTrial = 'SingleCenterTrial',
}
registerEnumType(MedicalTrialDesign, {
  name: 'MedicalTrialDesign',
  description: '',
});

export enum BookFormatType {
  AudiobookFormat = 'AudiobookFormat',
  GraphicNovel = 'GraphicNovel',
  Paperback = 'Paperback',
  Hardcover = 'Hardcover',
  EBook = 'EBook',
}
registerEnumType(BookFormatType, {
  name: 'BookFormatType',
  description: '',
});

export enum ReturnLabelSourceEnumeration {
  ReturnLabelCustomerResponsibility = 'ReturnLabelCustomerResponsibility',
  ReturnLabelDownloadAndPrint = 'ReturnLabelDownloadAndPrint',
  ReturnLabelInBox = 'ReturnLabelInBox',
}
registerEnumType(ReturnLabelSourceEnumeration, {
  name: 'ReturnLabelSourceEnumeration',
  description: '',
});

export enum BusinessFunction {
}
registerEnumType(BusinessFunction, {
  name: 'BusinessFunction',
  description: '',
});

export enum MusicAlbumProductionType {
  SoundtrackAlbum = 'SoundtrackAlbum',
  RemixAlbum = 'RemixAlbum',
  SpokenWordAlbum = 'SpokenWordAlbum',
  MixtapeAlbum = 'MixtapeAlbum',
  CompilationAlbum = 'CompilationAlbum',
  DJMixAlbum = 'DJMixAlbum',
  LiveAlbum = 'LiveAlbum',
  DemoAlbum = 'DemoAlbum',
  StudioAlbum = 'StudioAlbum',
}
registerEnumType(MusicAlbumProductionType, {
  name: 'MusicAlbumProductionType',
  description: '',
});

export enum WearableSizeSystemEnumeration {
  WearableSizeSystemJP = 'WearableSizeSystemJP',
  WearableSizeSystemCN = 'WearableSizeSystemCN',
  WearableSizeSystemDE = 'WearableSizeSystemDE',
  WearableSizeSystemAU = 'WearableSizeSystemAU',
  WearableSizeSystemBR = 'WearableSizeSystemBR',
  WearableSizeSystemEurope = 'WearableSizeSystemEurope',
  WearableSizeSystemGS1 = 'WearableSizeSystemGS1',
  WearableSizeSystemMX = 'WearableSizeSystemMX',
  WearableSizeSystemEN13402 = 'WearableSizeSystemEN13402',
  WearableSizeSystemUK = 'WearableSizeSystemUK',
  WearableSizeSystemUS = 'WearableSizeSystemUS',
  WearableSizeSystemIT = 'WearableSizeSystemIT',
  WearableSizeSystemFR = 'WearableSizeSystemFR',
  WearableSizeSystemContinental = 'WearableSizeSystemContinental',
}
registerEnumType(WearableSizeSystemEnumeration, {
  name: 'WearableSizeSystemEnumeration',
  description: '',
});

export enum RestrictedDiet {
  VeganDiet = 'VeganDiet',
  LowFatDiet = 'LowFatDiet',
  KosherDiet = 'KosherDiet',
  HinduDiet = 'HinduDiet',
  HalalDiet = 'HalalDiet',
  VegetarianDiet = 'VegetarianDiet',
  LowSaltDiet = 'LowSaltDiet',
  LowCalorieDiet = 'LowCalorieDiet',
  LowLactoseDiet = 'LowLactoseDiet',
  GlutenFreeDiet = 'GlutenFreeDiet',
  DiabeticDiet = 'DiabeticDiet',
}
registerEnumType(RestrictedDiet, {
  name: 'RestrictedDiet',
  description: '',
});

export enum MerchantReturnEnumeration {
  MerchantReturnNotPermitted = 'MerchantReturnNotPermitted',
  MerchantReturnUnlimitedWindow = 'MerchantReturnUnlimitedWindow',
  MerchantReturnFiniteReturnWindow = 'MerchantReturnFiniteReturnWindow',
  MerchantReturnUnspecified = 'MerchantReturnUnspecified',
}
registerEnumType(MerchantReturnEnumeration, {
  name: 'MerchantReturnEnumeration',
  description: '',
});

export enum MedicalDevicePurpose {
  Therapeutic = 'Therapeutic',
  Diagnostic = 'Diagnostic',
}
registerEnumType(MedicalDevicePurpose, {
  name: 'MedicalDevicePurpose',
  description: '',
});

export enum PriceComponentTypeEnumeration {
  Subscription = 'Subscription',
  Installment = 'Installment',
  ActivationFee = 'ActivationFee',
  Downpayment = 'Downpayment',
  CleaningFee = 'CleaningFee',
  DistanceFee = 'DistanceFee',
}
registerEnumType(PriceComponentTypeEnumeration, {
  name: 'PriceComponentTypeEnumeration',
  description: '',
});

export enum ActionStatusType {
  PotentialActionStatus = 'PotentialActionStatus',
  ActiveActionStatus = 'ActiveActionStatus',
  FailedActionStatus = 'FailedActionStatus',
  CompletedActionStatus = 'CompletedActionStatus',
}
registerEnumType(ActionStatusType, {
  name: 'ActionStatusType',
  description: '',
});

// #endregion

// #region Primitive Scalars
/**
 * =================
 * Primitive Scalars
 * =================
 */

export type TextType = string;
@ObjectType()
export class TextScalar {
  @Field((type) => String)
  value!: TextType;
}
/**
export type TextType = string;
@Scalar('Text')
export class TextScalar implements CustomScalar<TextType, TextType> {

  parseValue(value: unknown): TextType {
    return value as TextType;
  }

  serialize(value: unknown): TextType {
    return value as TextType;
  }

  parseLiteral(ast: ValueNode): TextType {
    return (ast as any).value || null;
  }
}
**/

export type NumberType = number;
@ObjectType()
export class NumberScalar {
  @Field((type) => Int)
  value!: NumberType;
}
/**
export type NumberType = number;
@Scalar('Number')
export class NumberScalar implements CustomScalar<NumberType, NumberType> {

  parseValue(value: unknown): NumberType {
    return value as NumberType;
  }

  serialize(value: unknown): NumberType {
    return value as NumberType;
  }

  parseLiteral(ast: ValueNode): NumberType {
    return (ast as any).value || null;
  }
}
**/

export type BooleanType = boolean;
@ObjectType()
export class BooleanScalar {
  @Field((type) => Boolean)
  value!: BooleanType;
}
/**
export type BooleanType = boolean;
@Scalar('Boolean')
export class BooleanScalar implements CustomScalar<BooleanType, BooleanType> {

  parseValue(value: unknown): BooleanType {
    return value as BooleanType;
  }

  serialize(value: unknown): BooleanType {
    return value as BooleanType;
  }

  parseLiteral(ast: ValueNode): BooleanType {
    return (ast as any).value || null;
  }
}
**/

export type DateType = string;
@ObjectType()
export class DateScalar {
  @Field((type) => String)
  value!: DateType;
}
/**
export type DateType = string;
@Scalar('Date')
export class DateScalar implements CustomScalar<DateType, DateType> {

  parseValue(value: unknown): DateType {
    return value as DateType;
  }

  serialize(value: unknown): DateType {
    return value as DateType;
  }

  parseLiteral(ast: ValueNode): DateType {
    return (ast as any).value || null;
  }
}
**/

// #endregion

// #region Custom Scalars
/**
 * ==============
 * Custom Scalars
 * ==============
 */

// #endregion

// #region Types
/**
 * ==============
 * Types
 * ==============
 */

@ObjectType()
export class LocalBusiness{
  @Field((type) => Organization)
  branchOf?: Organization;
  @Field((type) => TextScalar)
  openingHours?: TextType;
  @Field((type) => TextScalar)
  priceRange?: TextType;
  @Field((type) => TextScalar)
  paymentAccepted?: TextType;
  @Field((type) => TextScalar)
  currenciesAccepted?: TextType;
}

@ObjectType()
export class InternetCafe extends LocalBusiness {
}

@ObjectType()
export class Hospital{
  @Field((type) => Hospital_AvailableServiceUnion)
  availableService?: Hospital_AvailableService;
  @Field((type) => Hospital_HealthcareReportingDataUnion)
  healthcareReportingData?: Hospital_HealthcareReportingData;
  @Field((type) => MedicalSpecialty)
  medicalSpecialty?: MedicalSpecialty;
}

@ObjectType()
export class TelevisionStation extends LocalBusiness {
}

@ObjectType()
export class TravelAgency extends LocalBusiness {
}

@ObjectType()
export class PoliceStation{
}

@ObjectType()
export class MedicalClinic{
  @Field((type) => MedicalClinic_AvailableServiceUnion)
  availableService?: MedicalClinic_AvailableService;
  @Field((type) => MedicalSpecialty)
  medicalSpecialty?: MedicalSpecialty;
}

@ObjectType()
export class Url extends Text {
}

@ObjectType()
export class StadiumOrArena{
}

@ObjectType()
export class Campground{
}

@ObjectType()
export class ReviewNewsArticle{
}

@ObjectType()
export class FoodEstablishment extends LocalBusiness {
  @Field((type) => Rating)
  starRating?: Rating;
  @Field((type) => TextScalar)
  servesCuisine?: TextType;
  @Field((type) => FoodEstablishment_AcceptsReservationsUnion)
  acceptsReservations?: FoodEstablishment_AcceptsReservations;
  @Field((type) => FoodEstablishment_HasMenuUnion)
  hasMenu?: FoodEstablishment_HasMenu;
  @Field((type) => FoodEstablishment_MenuUnion)
  menu?: FoodEstablishment_Menu;
}

@ObjectType()
export class HealthClub{
}

@ObjectType()
export class Diet{
  @Field((type) => TextScalar)
  expertConsiderations?: TextType;
  @Field((type) => TextScalar)
  risks?: TextType;
  @Field((type) => TextScalar)
  physiologicalBenefits?: TextType;
  @Field((type) => Diet_EndorsersUnion)
  endorsers?: Diet_Endorsers;
  @Field((type) => TextScalar)
  dietFeatures?: TextType;
}

@ObjectType()
export class AutoPartsStore{
}

@ObjectType()
export class ExercisePlan{
  @Field((type) => ExercisePlan_RepetitionsUnion)
  repetitions?: ExercisePlan_Repetitions;
  @Field((type) => ExercisePlan_IntensityUnion)
  intensity?: ExercisePlan_Intensity;
  @Field((type) => ExercisePlan_WorkloadUnion)
  workload?: ExercisePlan_Workload;
  @Field((type) => ExercisePlan_ActivityDurationUnion)
  activityDuration?: ExercisePlan_ActivityDuration;
  @Field((type) => ExercisePlan_RestPeriodsUnion)
  restPeriods?: ExercisePlan_RestPeriods;
  @Field((type) => ExercisePlan_ActivityFrequencyUnion)
  activityFrequency?: ExercisePlan_ActivityFrequency;
  @Field((type) => TextScalar)
  additionalVariable?: TextType;
  @Field((type) => TextScalar)
  exerciseType?: TextType;
}

@ObjectType()
export class RadioStation extends LocalBusiness {
}

@ObjectType()
export class PaymentCard{
  @Field((type) => PaymentCard_CashBackUnion)
  cashBack?: PaymentCard_CashBack;
  @Field((type) => PaymentCard_MonthlyMinimumRepaymentAmountUnion)
  monthlyMinimumRepaymentAmount?: PaymentCard_MonthlyMinimumRepaymentAmount;
  @Field((type) => MonetaryAmount)
  floorLimit?: MonetaryAmount;
  @Field((type) => BooleanScalar)
  contactlessPayment?: BooleanType;
}

@ObjectType()
export class SportsActivityLocation extends LocalBusiness {
}

@ObjectType()
export class Physician{
  @Field((type) => Physician_AvailableServiceUnion)
  availableService?: Physician_AvailableService;
  @Field((type) => MedicalSpecialty)
  medicalSpecialty?: MedicalSpecialty;
  @Field((type) => Hospital)
  hospitalAffiliation?: Hospital;
}

@ObjectType()
export class TVSeries{
  @Field((type) => TVSeries_SeasonUnion)
  season?: TVSeries_Season;
  @Field((type) => CreativeWorkSeason)
  containsSeason?: CreativeWorkSeason;
  @Field((type) => Country)
  countryOfOrigin?: Country;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => Episode)
  episodes?: Episode;
  @Field((type) => IntegerScalar)
  numberOfEpisodes?: IntegerType;
  @Field((type) => CreativeWorkSeason)
  seasons?: CreativeWorkSeason;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => IntegerScalar)
  numberOfSeasons?: IntegerType;
  @Field((type) => TVSeries_MusicByUnion)
  musicBy?: TVSeries_MusicBy;
  @Field((type) => Episode)
  episode?: Episode;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class ChildCare extends LocalBusiness {
}

@ObjectType()
export class SportsClub extends SportsActivityLocation {
}

@ObjectType()
export class GovernmentOffice extends LocalBusiness {
}

@ObjectType()
export class HealthAndBeautyBusiness extends LocalBusiness {
}

@ObjectType()
export class LegislationObject{
  @Field((type) => LegalValueLevel)
  legislationLegalValue?: LegalValueLevel;
}

@ObjectType()
export class PronounceableText extends Text {
  @Field((type) => TextScalar)
  phoneticText?: TextType;
  @Field((type) => TextScalar)
  speechToTextMarkup?: TextType;
  @Field((type) => TextScalar)
  textValue?: TextType;
  @Field((type) => PronounceableText_InLanguageUnion)
  inLanguage?: PronounceableText_InLanguage;
}

@ObjectType()
export class ProductCollection{
  @Field((type) => TypeAndQuantityNode)
  includesObject?: TypeAndQuantityNode;
}

@ObjectType()
export class HairSalon extends HealthAndBeautyBusiness {
}

@ObjectType()
export class BarOrPub extends FoodEstablishment {
}

@ObjectType()
export class FastFoodRestaurant extends FoodEstablishment {
}

@ObjectType()
export class BowlingAlley extends SportsActivityLocation {
}

@ObjectType()
export class AutomotiveBusiness extends LocalBusiness {
}

@ObjectType()
export class Thing{
  @Field((type) => Thing_MainEntityOfPageUnion)
  mainEntityOfPage?: Thing_MainEntityOfPage;
  @Field((type) => TextScalar)
  alternateName?: TextType;
  @Field((type) => TextScalar)
  name?: TextType;
  @Field((type) => Action)
  potentialAction?: Action;
  @Field((type) => Thing_ImageUnion)
  image?: Thing_Image;
  @Field((type) => UrlScalar)
  url?: UrlType;
  @Field((type) => TextScalar)
  description?: TextType;
  @Field((type) => Thing_SubjectOfUnion)
  subjectOf?: Thing_SubjectOf;
  @Field((type) => UrlScalar)
  additionalType?: UrlType;
  @Field((type) => TextScalar)
  disambiguatingDescription?: TextType;
  @Field((type) => UrlScalar)
  sameAs?: UrlType;
  @Field((type) => Thing_IdentifierUnion)
  identifier?: Thing_Identifier;
}

@ObjectType()
export class Distillery extends FoodEstablishment {
}

@ObjectType()
export class MovieTheater{
  @Field((type) => NumberScalar)
  screenCount?: NumberType;
}

@ObjectType()
export class RecyclingCenter extends LocalBusiness {
}

@ObjectType()
export class PalliativeProcedure{
}

@ObjectType()
export class Winery extends FoodEstablishment {
}

@ObjectType()
export class Store extends LocalBusiness {
}

@ObjectType()
export class LegalService extends LocalBusiness {
}

@ObjectType()
export class ArchiveOrganization extends LocalBusiness {
  @Field((type) => ArchiveComponent)
  archiveHeld?: ArchiveComponent;
}

@ObjectType()
export class SelfStorage extends LocalBusiness {
}

@ObjectType()
export class CovidTestingFacility extends MedicalClinic {
}

@ObjectType()
export class PhysicalExam{
}

@ObjectType()
export class CreditCard{
}

@ObjectType()
export class PawnShop extends Store {
}

@ObjectType()
export class HowToSection{
  @Field((type) => HowToSection_StepsUnion)
  steps?: HowToSection_Steps;
}

@ObjectType()
export class TVSeason{
  @Field((type) => Country)
  countryOfOrigin?: Country;
  @Field((type) => TVSeries)
  partOfTVSeries?: TVSeries;
}

@ObjectType()
export class ShoppingCenter extends LocalBusiness {
}

@ObjectType()
export class CafeOrCoffeeShop extends FoodEstablishment {
}

@ObjectType()
export class EntertainmentBusiness extends LocalBusiness {
}

@ObjectType()
export class OfficeEquipmentStore extends Store {
}

@ObjectType()
export class MobilePhoneStore extends Store {
}

@ObjectType()
export class MedicalAudience{
}

@ObjectType()
export class IceCreamShop extends FoodEstablishment {
}

@ObjectType()
export class AmpStory{
}

@ObjectType()
export class EmergencyService extends LocalBusiness {
}

@ObjectType()
export class BioChemEntity extends Thing {
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => Gene)
  isEncodedByBioChemEntity?: Gene;
  @Field((type) => BioChemEntity)
  isPartOfBioChemEntity?: BioChemEntity;
  @Field((type) => BioChemEntity_TaxonomicRangeUnion)
  taxonomicRange?: BioChemEntity_TaxonomicRange;
  @Field((type) => BioChemEntity_IsInvolvedInBiologicalProcessUnion)
  isInvolvedInBiologicalProcess?: BioChemEntity_IsInvolvedInBiologicalProcess;
  @Field((type) => BioChemEntity_IsLocatedInSubcellularLocationUnion)
  isLocatedInSubcellularLocation?: BioChemEntity_IsLocatedInSubcellularLocation;
  @Field((type) => BioChemEntity_AssociatedDiseaseUnion)
  associatedDisease?: BioChemEntity_AssociatedDisease;
  @Field((type) => BioChemEntity_HasMolecularFunctionUnion)
  hasMolecularFunction?: BioChemEntity_HasMolecularFunction;
  @Field((type) => BioChemEntity)
  hasBioChemEntityPart?: BioChemEntity;
  @Field((type) => BioChemEntity)
  bioChemInteraction?: BioChemEntity;
  @Field((type) => BioChemEntity_HasRepresentationUnion)
  hasRepresentation?: BioChemEntity_HasRepresentation;
  @Field((type) => BioChemEntity)
  bioChemSimilarity?: BioChemEntity;
  @Field((type) => DefinedTerm)
  biologicalRole?: DefinedTerm;
}

@ObjectType()
export class GardenStore extends Store {
}

@ObjectType()
export class ExerciseGym extends SportsActivityLocation {
}

@ObjectType()
export class Audiobook{
  @Field((type) => Person)
  readBy?: Person;
  @Field((type) => Duration)
  duration?: Duration;
}

@ObjectType()
export class Organization extends Thing {
  @Field((type) => Organization_OwnershipFundingInfoUnion)
  ownershipFundingInfo?: Organization_OwnershipFundingInfo;
  @Field((type) => EducationalOccupationalCredential)
  hasCredential?: EducationalOccupationalCredential;
  @Field((type) => Person)
  founders?: Person;
  @Field((type) => TextScalar)
  telephone?: TextType;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => Organization_KnowsAboutUnion)
  knowsAbout?: Organization_KnowsAbout;
  @Field((type) => TextScalar)
  award?: TextType;
  @Field((type) => Organization_MemberUnion)
  member?: Organization_Member;
  @Field((type) => Person)
  employee?: Person;
  @Field((type) => DateScalar)
  dissolutionDate?: DateType;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => TextScalar)
  vatID?: TextType;
  @Field((type) => TextScalar)
  globalLocationNumber?: TextType;
  @Field((type) => Organization_KeywordsUnion)
  keywords?: Organization_Keywords;
  @Field((type) => ContactPoint)
  contactPoints?: ContactPoint;
  @Field((type) => Organization)
  subOrganization?: Organization;
  @Field((type) => TextScalar)
  awards?: TextType;
  @Field((type) => QuantitativeValue)
  numberOfEmployees?: QuantitativeValue;
  @Field((type) => Organization_FunderUnion)
  funder?: Organization_Funder;
  @Field((type) => Offer)
  makesOffer?: Offer;
  @Field((type) => TextScalar)
  legalName?: TextType;
  @Field((type) => Organization_CorrectionsPolicyUnion)
  correctionsPolicy?: Organization_CorrectionsPolicy;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => InteractionCounter)
  interactionStatistic?: InteractionCounter;
  @Field((type) => Organization_LocationUnion)
  location?: Organization_Location;
  @Field((type) => Organization_AddressUnion)
  address?: Organization_Address;
  @Field((type) => Organization_MemberOfUnion)
  memberOf?: Organization_MemberOf;
  @Field((type) => Organization_PublishingPrinciplesUnion)
  publishingPrinciples?: Organization_PublishingPrinciples;
  @Field((type) => Organization_DiversityStaffingReportUnion)
  diversityStaffingReport?: Organization_DiversityStaffingReport;
  @Field((type) => Organization_DiversityPolicyUnion)
  diversityPolicy?: Organization_DiversityPolicy;
  @Field((type) => TextScalar)
  email?: TextType;
  @Field((type) => Person)
  employees?: Person;
  @Field((type) => NonprofitType)
  nonprofitStatus?: NonprofitType;
  @Field((type) => TextScalar)
  slogan?: TextType;
  @Field((type) => Organization_EthicsPolicyUnion)
  ethicsPolicy?: Organization_EthicsPolicy;
  @Field((type) => Organization_BrandUnion)
  brand?: Organization_Brand;
  @Field((type) => Organization_SponsorUnion)
  sponsor?: Organization_Sponsor;
  @Field((type) => Organization_LogoUnion)
  logo?: Organization_Logo;
  @Field((type) => Organization_ActionableFeedbackPolicyUnion)
  actionableFeedbackPolicy?: Organization_ActionableFeedbackPolicy;
  @Field((type) => TextScalar)
  naics?: TextType;
  @Field((type) => ContactPoint)
  contactPoint?: ContactPoint;
  @Field((type) => Organization_ServiceAreaUnion)
  serviceArea?: Organization_ServiceArea;
  @Field((type) => TextScalar)
  isicV4?: TextType;
  @Field((type) => MerchantReturnPolicy)
  hasMerchantReturnPolicy?: MerchantReturnPolicy;
  @Field((type) => Place)
  hasPOS?: Place;
  @Field((type) => Person)
  founder?: Person;
  @Field((type) => Organization_UnnamedSourcesPolicyUnion)
  unnamedSourcesPolicy?: Organization_UnnamedSourcesPolicy;
  @Field((type) => Place)
  foundingLocation?: Place;
  @Field((type) => TextScalar)
  duns?: TextType;
  @Field((type) => Organization)
  parentOrganization?: Organization;
  @Field((type) => Person)
  alumni?: Person;
  @Field((type) => TextScalar)
  leiCode?: TextType;
  @Field((type) => Organization_AreaServedUnion)
  areaServed?: Organization_AreaServed;
  @Field((type) => DateScalar)
  foundingDate?: DateType;
  @Field((type) => Organization_KnowsLanguageUnion)
  knowsLanguage?: Organization_KnowsLanguage;
  @Field((type) => Review)
  reviews?: Review;
  @Field((type) => Demand)
  seeks?: Demand;
  @Field((type) => TextScalar)
  taxID?: TextType;
  @Field((type) => Organization_OwnsUnion)
  owns?: Organization_Owns;
  @Field((type) => OfferCatalog)
  hasOfferCatalog?: OfferCatalog;
  @Field((type) => Organization_MembersUnion)
  members?: Organization_Members;
  @Field((type) => Event)
  events?: Event;
  @Field((type) => TextScalar)
  iso6523Code?: TextType;
  @Field((type) => Organization)
  department?: Organization;
  @Field((type) => TextScalar)
  faxNumber?: TextType;
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class FireStation{
}

@ObjectType()
export class DepositAccount{
}

@ObjectType()
export class MedicalOrganization extends Organization {
  @Field((type) => BooleanScalar)
  isAcceptingNewPatients?: BooleanType;
  @Field((type) => TextScalar)
  healthPlanNetworkId?: TextType;
  @Field((type) => MedicalSpecialty)
  medicalSpecialty?: MedicalSpecialty;
}

@ObjectType()
export class HowToStep{
}

@ObjectType()
export class Patient{
  @Field((type) => MedicalCondition)
  healthCondition?: MedicalCondition;
  @Field((type) => Drug)
  drug?: Drug;
  @Field((type) => MedicalCondition)
  diagnosis?: MedicalCondition;
}

@ObjectType()
export class MotorcycleDealer extends AutomotiveBusiness {
}

@ObjectType()
export class Attorney extends LegalService {
}

@ObjectType()
export class MusicStore extends Store {
}

@ObjectType()
export class MedicalSpecialty{
}

@ObjectType()
export class FinancialService extends LocalBusiness {
  @Field((type) => FinancialService_FeesAndCommissionsSpecificationUnion)
  feesAndCommissionsSpecification?: FinancialService_FeesAndCommissionsSpecification;
}

@ObjectType()
export class EmploymentAgency extends LocalBusiness {
}

@ObjectType()
export class CreativeWorkSeries{
  @Field((type) => CreativeWorkSeries_StartDateUnion)
  startDate?: CreativeWorkSeries_StartDate;
  @Field((type) => CreativeWorkSeries_EndDateUnion)
  endDate?: CreativeWorkSeries_EndDate;
  @Field((type) => TextScalar)
  issn?: TextType;
}

@ObjectType()
export class EventSeries{
}

@ObjectType()
export class BeautySalon extends HealthAndBeautyBusiness {
}

@ObjectType()
export class AdultEntertainment extends EntertainmentBusiness {
}

@ObjectType()
export class LodgingBusiness extends LocalBusiness {
  @Field((type) => LodgingBusiness_NumberOfRoomsUnion)
  numberOfRooms?: LodgingBusiness_NumberOfRooms;
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => Rating)
  starRating?: Rating;
  @Field((type) => LocationFeatureSpecification)
  amenityFeature?: LocationFeatureSpecification;
  @Field((type) => LodgingBusiness_AvailableLanguageUnion)
  availableLanguage?: LodgingBusiness_AvailableLanguage;
  @Field((type) => LodgingBusiness_CheckoutTimeUnion)
  checkoutTime?: LodgingBusiness_CheckoutTime;
  @Field((type) => LodgingBusiness_CheckinTimeUnion)
  checkinTime?: LodgingBusiness_CheckinTime;
  @Field((type) => LodgingBusiness_PetsAllowedUnion)
  petsAllowed?: LodgingBusiness_PetsAllowed;
}

@ObjectType()
export class TattooParlor extends HealthAndBeautyBusiness {
}

@ObjectType()
export class Place extends Thing {
  @Field((type) => TextScalar)
  telephone?: TextType;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => UrlScalar)
  maps?: UrlType;
  @Field((type) => Place_GeoContainsUnion)
  geoContains?: Place_GeoContains;
  @Field((type) => IntegerScalar)
  maximumAttendeeCapacity?: IntegerType;
  @Field((type) => Place)
  containsPlace?: Place;
  @Field((type) => BooleanScalar)
  smokingAllowed?: BooleanType;
  @Field((type) => TextScalar)
  globalLocationNumber?: TextType;
  @Field((type) => Place_KeywordsUnion)
  keywords?: Place_Keywords;
  @Field((type) => Place_GeoIntersectsUnion)
  geoIntersects?: Place_GeoIntersects;
  @Field((type) => Place_LatitudeUnion)
  latitude?: Place_Latitude;
  @Field((type) => Place_GeoTouchesUnion)
  geoTouches?: Place_GeoTouches;
  @Field((type) => Place_GeoCoveredByUnion)
  geoCoveredBy?: Place_GeoCoveredBy;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => Place_AddressUnion)
  address?: Place_Address;
  @Field((type) => Place_GeoEqualsUnion)
  geoEquals?: Place_GeoEquals;
  @Field((type) => UrlScalar)
  map?: UrlType;
  @Field((type) => BooleanScalar)
  publicAccess?: BooleanType;
  @Field((type) => Place_GeoCrossesUnion)
  geoCrosses?: Place_GeoCrosses;
  @Field((type) => Place)
  containedInPlace?: Place;
  @Field((type) => LocationFeatureSpecification)
  amenityFeature?: LocationFeatureSpecification;
  @Field((type) => TextScalar)
  slogan?: TextType;
  @Field((type) => Place_PhotosUnion)
  photos?: Place_Photos;
  @Field((type) => Place_GeoCoversUnion)
  geoCovers?: Place_GeoCovers;
  @Field((type) => Place)
  containedIn?: Place;
  @Field((type) => BooleanScalar)
  hasDriveThroughService?: BooleanType;
  @Field((type) => Place_LogoUnion)
  logo?: Place_Logo;
  @Field((type) => BooleanScalar)
  isAccessibleForFree?: BooleanType;
  @Field((type) => Place_GeoWithinUnion)
  geoWithin?: Place_GeoWithin;
  @Field((type) => Place_GeoDisjointUnion)
  geoDisjoint?: Place_GeoDisjoint;
  @Field((type) => UrlScalar)
  tourBookingPage?: UrlType;
  @Field((type) => TextScalar)
  isicV4?: TextType;
  @Field((type) => Place_GeoOverlapsUnion)
  geoOverlaps?: Place_GeoOverlaps;
  @Field((type) => TextScalar)
  branchCode?: TextType;
  @Field((type) => PropertyValue)
  additionalProperty?: PropertyValue;
  @Field((type) => OpeningHoursSpecification)
  openingHoursSpecification?: OpeningHoursSpecification;
  @Field((type) => Review)
  reviews?: Review;
  @Field((type) => Place_PhotoUnion)
  photo?: Place_Photo;
  @Field((type) => OpeningHoursSpecification)
  specialOpeningHoursSpecification?: OpeningHoursSpecification;
  @Field((type) => Place_HasMapUnion)
  hasMap?: Place_HasMap;
  @Field((type) => Place_LongitudeUnion)
  longitude?: Place_Longitude;
  @Field((type) => Place_GeoUnion)
  geo?: Place_Geo;
  @Field((type) => Event)
  events?: Event;
  @Field((type) => TextScalar)
  faxNumber?: TextType;
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class ComputerStore extends Store {
}

@ObjectType()
export class AutoBodyShop extends AutomotiveBusiness {
}

@ObjectType()
export class AutomatedTeller extends FinancialService {
}

@ObjectType()
export class TouristAttraction extends Place {
  @Field((type) => TouristAttraction_TouristTypeUnion)
  touristType?: TouristAttraction_TouristType;
  @Field((type) => TouristAttraction_AvailableLanguageUnion)
  availableLanguage?: TouristAttraction_AvailableLanguage;
}

@ObjectType()
export class ProfessionalService extends LocalBusiness {
}

@ObjectType()
export class Protein extends BioChemEntity {
  @Field((type) => TextScalar)
  hasBioPolymerSequence?: TextType;
}

@ObjectType()
export class HardwareStore extends Store {
}

@ObjectType()
export class Gene extends BioChemEntity {
  @Field((type) => Gene)
  alternativeOf?: Gene;
  @Field((type) => TextScalar)
  hasBioPolymerSequence?: TextType;
  @Field((type) => BioChemEntity)
  encodesBioChemEntity?: BioChemEntity;
  @Field((type) => Gene_ExpressedInUnion)
  expressedIn?: Gene_ExpressedIn;
}

@ObjectType()
export class TennisComplex extends SportsActivityLocation {
}

@ObjectType()
export class LibrarySystem extends Organization {
}

@ObjectType()
export class HomeAndConstructionBusiness extends LocalBusiness {
}

@ObjectType()
export class SkiResort{
}

@ObjectType()
export class Integer extends Number {
}

@ObjectType()
export class Dentist{
}

@ObjectType()
export class Casino extends EntertainmentBusiness {
}

@ObjectType()
export class MedicalEntity extends Thing {
  @Field((type) => MedicalEntity_LegalStatusUnion)
  legalStatus?: MedicalEntity_LegalStatus;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => MedicalStudy)
  study?: MedicalStudy;
  @Field((type) => MedicalCode)
  code?: MedicalCode;
  @Field((type) => MedicalGuideline)
  guideline?: MedicalGuideline;
  @Field((type) => Organization)
  recognizingAuthority?: Organization;
  @Field((type) => MedicineSystem)
  medicineSystem?: MedicineSystem;
  @Field((type) => MedicalSpecialty)
  relevantSpecialty?: MedicalSpecialty;
}

@ObjectType()
export class TireShop extends Store {
}

@ObjectType()
export class WholesaleStore extends Store {
}

@ObjectType()
export class Project extends Organization {
}

@ObjectType()
export class RealEstateAgent extends LocalBusiness {
}

@ObjectType()
export class WorkersUnion extends Organization {
}

@ObjectType()
export class CreativeWork extends Thing {
  @Field((type) => CreativeWork_TeachesUnion)
  teaches?: CreativeWork_Teaches;
  @Field((type) => CreativeWork_EducationalLevelUnion)
  educationalLevel?: CreativeWork_EducationalLevel;
  @Field((type) => TextScalar)
  abstract?: TextType;
  @Field((type) => CreativeWork_CreativeWorkStatusUnion)
  creativeWorkStatus?: CreativeWork_CreativeWorkStatus;
  @Field((type) => DateScalar)
  expires?: DateType;
  @Field((type) => DateTimeScalar)
  contentReferenceTime?: DateTimeType;
  @Field((type) => CreativeWork_MaterialUnion)
  material?: CreativeWork_Material;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => CreativeWork_FileFormatUnion)
  fileFormat?: CreativeWork_FileFormat;
  @Field((type) => TextScalar)
  text?: TextType;
  @Field((type) => CreativeWork_TranslatorUnion)
  translator?: CreativeWork_Translator;
  @Field((type) => TextScalar)
  award?: TextType;
  @Field((type) => CreativeWork_AssessesUnion)
  assesses?: CreativeWork_Assesses;
  @Field((type) => TextScalar)
  copyrightNotice?: TextType;
  @Field((type) => CreativeWork_SchemaVersionUnion)
  schemaVersion?: CreativeWork_SchemaVersion;
  @Field((type) => Country)
  countryOfOrigin?: Country;
  @Field((type) => CreativeWork_PatternUnion)
  pattern?: CreativeWork_Pattern;
  @Field((type) => Person)
  accountablePerson?: Person;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => CreativeWork_EducationalUseUnion)
  educationalUse?: CreativeWork_EducationalUse;
  @Field((type) => CreativeWork_GenreUnion)
  genre?: CreativeWork_Genre;
  @Field((type) => CreativeWork_KeywordsUnion)
  keywords?: CreativeWork_Keywords;
  @Field((type) => CreativeWork_PositionUnion)
  position?: CreativeWork_Position;
  @Field((type) => TextScalar)
  accessibilityHazard?: TextType;
  @Field((type) => TextScalar)
  alternativeHeadline?: TextType;
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => CreativeWork_OffersUnion)
  offers?: CreativeWork_Offers;
  @Field((type) => Place)
  locationCreated?: Place;
  @Field((type) => MediaObject)
  associatedMedia?: MediaObject;
  @Field((type) => CreativeWork_MaterialExtentUnion)
  materialExtent?: CreativeWork_MaterialExtent;
  @Field((type) => Thing)
  mainEntity?: Thing;
  @Field((type) => CreativeWork_CopyrightHolderUnion)
  copyrightHolder?: CreativeWork_CopyrightHolder;
  @Field((type) => TextScalar)
  awards?: TextType;
  @Field((type) => Place)
  contentLocation?: Place;
  @Field((type) => DateScalar)
  sdDatePublished?: DateType;
  @Field((type) => CreativeWork_ProducerUnion)
  producer?: CreativeWork_Producer;
  @Field((type) => Place)
  spatial?: Place;
  @Field((type) => CreativeWork_PublisherUnion)
  publisher?: CreativeWork_Publisher;
  @Field((type) => Organization)
  sourceOrganization?: Organization;
  @Field((type) => Person)
  character?: Person;
  @Field((type) => CreativeWork_FunderUnion)
  funder?: CreativeWork_Funder;
  @Field((type) => CreativeWork)
  exampleOfWork?: CreativeWork;
  @Field((type) => CreativeWork_UsageInfoUnion)
  usageInfo?: CreativeWork_UsageInfo;
  @Field((type) => CreativeWork_ProviderUnion)
  provider?: CreativeWork_Provider;
  @Field((type) => CreativeWork_SdPublisherUnion)
  sdPublisher?: CreativeWork_SdPublisher;
  @Field((type) => Comment)
  comment?: Comment;
  @Field((type) => TextScalar)
  accessibilityFeature?: TextType;
  @Field((type) => PublicationEvent)
  publication?: PublicationEvent;
  @Field((type) => CreativeWork)
  translationOfWork?: CreativeWork;
  @Field((type) => TextScalar)
  interactivityType?: TextType;
  @Field((type) => IntegerScalar)
  commentCount?: IntegerType;
  @Field((type) => TextScalar)
  accessMode?: TextType;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => Duration)
  timeRequired?: Duration;
  @Field((type) => TextScalar)
  typicalAgeRange?: TextType;
  @Field((type) => InteractionCounter)
  interactionStatistic?: InteractionCounter;
  @Field((type) => NumberScalar)
  copyrightYear?: NumberType;
  @Field((type) => CreativeWork_IsBasedOnUnion)
  isBasedOn?: CreativeWork_IsBasedOn;
  @Field((type) => CreativeWork)
  workExample?: CreativeWork;
  @Field((type) => CreativeWork_PublishingPrinciplesUnion)
  publishingPrinciples?: CreativeWork_PublishingPrinciples;
  @Field((type) => UrlScalar)
  discussionUrl?: UrlType;
  @Field((type) => PublicationEvent)
  releasedEvent?: PublicationEvent;
  @Field((type) => CreativeWork_DateCreatedUnion)
  dateCreated?: CreativeWork_DateCreated;
  @Field((type) => CreativeWork)
  workTranslation?: CreativeWork;
  @Field((type) => Person)
  editor?: Person;
  @Field((type) => TextScalar)
  creditText?: TextType;
  @Field((type) => Event)
  recordedAt?: Event;
  @Field((type) => CreativeWork_EditEIDRUnion)
  editEIDR?: CreativeWork_EditEIDR;
  @Field((type) => CreativeWork_AuthorUnion)
  author?: CreativeWork_Author;
  @Field((type) => CreativeWork_DateModifiedUnion)
  dateModified?: CreativeWork_DateModified;
  @Field((type) => CreativeWork_SponsorUnion)
  sponsor?: CreativeWork_Sponsor;
  @Field((type) => TextScalar)
  accessibilitySummary?: TextType;
  @Field((type) => CreativeWork_EncodingFormatUnion)
  encodingFormat?: CreativeWork_EncodingFormat;
  @Field((type) => CreativeWork_MaintainerUnion)
  maintainer?: CreativeWork_Maintainer;
  @Field((type) => AlignmentObject)
  educationalAlignment?: AlignmentObject;
  @Field((type) => CreativeWork_AcquireLicensePageUnion)
  acquireLicensePage?: CreativeWork_AcquireLicensePage;
  @Field((type) => BooleanScalar)
  isAccessibleForFree?: BooleanType;
  @Field((type) => CreativeWork_DatePublishedUnion)
  datePublished?: CreativeWork_DatePublished;
  @Field((type) => Place)
  spatialCoverage?: Place;
  @Field((type) => CreativeWork_SdLicenseUnion)
  sdLicense?: CreativeWork_SdLicense;
  @Field((type) => TextScalar)
  conditionsOfAccess?: TextType;
  @Field((type) => CreativeWork_CorrectionUnion)
  correction?: CreativeWork_Correction;
  @Field((type) => CreativeWork_ContentRatingUnion)
  contentRating?: CreativeWork_ContentRating;
  @Field((type) => CreativeWork_SizeUnion)
  size?: CreativeWork_Size;
  @Field((type) => CreativeWork_IsPartOfUnion)
  isPartOf?: CreativeWork_IsPartOf;
  @Field((type) => CreativeWork_TemporalUnion)
  temporal?: CreativeWork_Temporal;
  @Field((type) => UrlScalar)
  thumbnailUrl?: UrlType;
  @Field((type) => CreativeWork_InLanguageUnion)
  inLanguage?: CreativeWork_InLanguage;
  @Field((type) => CreativeWork_LicenseUnion)
  license?: CreativeWork_License;
  @Field((type) => CreativeWork_CreatorUnion)
  creator?: CreativeWork_Creator;
  @Field((type) => Review)
  reviews?: Review;
  @Field((type) => Thing)
  about?: Thing;
  @Field((type) => BooleanScalar)
  isFamilyFriendly?: BooleanType;
  @Field((type) => TextScalar)
  headline?: TextType;
  @Field((type) => TextScalar)
  accessibilityAPI?: TextType;
  @Field((type) => Organization)
  publisherImprint?: Organization;
  @Field((type) => CreativeWork_IsBasedOnUrlUnion)
  isBasedOnUrl?: CreativeWork_IsBasedOnUrl;
  @Field((type) => MediaObject)
  encodings?: MediaObject;
  @Field((type) => Claim)
  interpretedAsClaim?: Claim;
  @Field((type) => TextScalar)
  accessibilityControl?: TextType;
  @Field((type) => CreativeWork_CitationUnion)
  citation?: CreativeWork_Citation;
  @Field((type) => CreativeWork_VersionUnion)
  version?: CreativeWork_Version;
  @Field((type) => CreativeWork_ArchivedAtUnion)
  archivedAt?: CreativeWork_ArchivedAt;
  @Field((type) => CreativeWork_LearningResourceTypeUnion)
  learningResourceType?: CreativeWork_LearningResourceType;
  @Field((type) => MediaObject)
  encoding?: MediaObject;
  @Field((type) => CreativeWork_AudioUnion)
  audio?: CreativeWork_Audio;
  @Field((type) => Thing)
  mentions?: Thing;
  @Field((type) => ItemList)
  accessModeSufficient?: ItemList;
  @Field((type) => CreativeWork)
  hasPart?: CreativeWork;
  @Field((type) => CreativeWork_TemporalCoverageUnion)
  temporalCoverage?: CreativeWork_TemporalCoverage;
  @Field((type) => CreativeWork_ContributorUnion)
  contributor?: CreativeWork_Contributor;
  @Field((type) => CreativeWork_VideoUnion)
  video?: CreativeWork_Video;
}

@ObjectType()
export class DrugClass extends MedicalEntity {
  @Field((type) => Drug)
  drug?: Drug;
}

@ObjectType()
export class MolecularEntity extends BioChemEntity {
  @Field((type) => TextScalar)
  inChIKey?: TextType;
  @Field((type) => TextScalar)
  iupacName?: TextType;
  @Field((type) => MolecularEntity_MonoisotopicMolecularWeightUnion)
  monoisotopicMolecularWeight?: MolecularEntity_MonoisotopicMolecularWeight;
  @Field((type) => TextScalar)
  molecularFormula?: TextType;
  @Field((type) => DefinedTerm)
  potentialUse?: DefinedTerm;
  @Field((type) => DefinedTerm)
  chemicalRole?: DefinedTerm;
  @Field((type) => MolecularEntity_MolecularWeightUnion)
  molecularWeight?: MolecularEntity_MolecularWeight;
  @Field((type) => TextScalar)
  inChI?: TextType;
  @Field((type) => TextScalar)
  smiles?: TextType;
}

@ObjectType()
export class HyperToc extends CreativeWork {
  @Field((type) => HyperTocEntry)
  tocEntry?: HyperTocEntry;
  @Field((type) => MediaObject)
  override associatedMedia?: MediaObject;
}

@ObjectType()
export class ElectronicsStore extends Store {
}

@ObjectType()
export class FundingAgency extends Project {
}

@ObjectType()
export class Thesis extends CreativeWork {
  @Field((type) => TextScalar)
  inSupportOf?: TextType;
}

@ObjectType()
export class MedicalBusiness extends LocalBusiness {
}

@ObjectType()
export class DiagnosticLab extends MedicalOrganization {
  @Field((type) => MedicalTest)
  availableTest?: MedicalTest;
}

@ObjectType()
export class MedicalTest extends MedicalEntity {
  @Field((type) => MedicalCondition)
  usedToDiagnose?: MedicalCondition;
  @Field((type) => Drug)
  affectedBy?: Drug;
  @Field((type) => MedicalTest_NormalRangeUnion)
  normalRange?: MedicalTest_NormalRange;
  @Field((type) => MedicalSign)
  signDetected?: MedicalSign;
  @Field((type) => MedicalDevice)
  usesDevice?: MedicalDevice;
}

@ObjectType()
export class Airline extends Organization {
  @Field((type) => TextScalar)
  iataCode?: TextType;
  @Field((type) => BoardingPolicyType)
  boardingPolicy?: BoardingPolicyType;
}

@ObjectType()
export class VideoGame{
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => TextScalar)
  gameEdition?: TextType;
  @Field((type) => CreativeWork)
  cheatCode?: CreativeWork;
  @Field((type) => GameServer)
  gameServer?: GameServer;
  @Field((type) => CreativeWork)
  gameTip?: CreativeWork;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => GamePlayMode)
  playMode?: GamePlayMode;
  @Field((type) => VideoGame_GamePlatformUnion)
  gamePlatform?: VideoGame_GamePlatform;
  @Field((type) => VideoGame_MusicByUnion)
  musicBy?: VideoGame_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class AnimalShelter extends LocalBusiness {
}

@ObjectType()
export class AmusementPark extends EntertainmentBusiness {
}

@ObjectType()
export class WebPageElement extends CreativeWork {
  @Field((type) => CssSelectorTypeScalar)
  cssSelector?: CssSelectorTypeType;
  @Field((type) => XPathTypeScalar)
  xpath?: XPathTypeType;
}

@ObjectType()
export class OnlineBusiness extends Organization {
}

@ObjectType()
export class RadioSeries extends CreativeWorkSeries {
  @Field((type) => RadioSeries_SeasonUnion)
  season?: RadioSeries_Season;
  @Field((type) => CreativeWorkSeason)
  containsSeason?: CreativeWorkSeason;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => Episode)
  episodes?: Episode;
  @Field((type) => IntegerScalar)
  numberOfEpisodes?: IntegerType;
  @Field((type) => CreativeWorkSeason)
  seasons?: CreativeWorkSeason;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => IntegerScalar)
  numberOfSeasons?: IntegerType;
  @Field((type) => RadioSeries_MusicByUnion)
  musicBy?: RadioSeries_MusicBy;
  @Field((type) => Episode)
  episode?: Episode;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class Float extends Number {
}

@ObjectType()
export class ClothingStore extends Store {
}

@ObjectType()
export class SportingGoodsStore extends Store {
}

@ObjectType()
export class SuperficialAnatomy extends MedicalEntity {
  @Field((type) => MedicalTherapy)
  relatedTherapy?: MedicalTherapy;
  @Field((type) => TextScalar)
  significance?: TextType;
  @Field((type) => SuperficialAnatomy_RelatedAnatomyUnion)
  relatedAnatomy?: SuperficialAnatomy_RelatedAnatomy;
  @Field((type) => MedicalCondition)
  relatedCondition?: MedicalCondition;
  @Field((type) => TextScalar)
  associatedPathophysiology?: TextType;
}

@ObjectType()
export class Consortium extends Organization {
}

@ObjectType()
export class HowToDirection{
  @Field((type) => HowToDirection_AfterMediaUnion)
  afterMedia?: HowToDirection_AfterMedia;
  @Field((type) => HowToDirection_SupplyUnion)
  supply?: HowToDirection_Supply;
  @Field((type) => HowToDirection_DuringMediaUnion)
  duringMedia?: HowToDirection_DuringMedia;
  @Field((type) => Duration)
  totalTime?: Duration;
  @Field((type) => HowToDirection_BeforeMediaUnion)
  beforeMedia?: HowToDirection_BeforeMedia;
  @Field((type) => HowToDirection_ToolUnion)
  tool?: HowToDirection_Tool;
  @Field((type) => Duration)
  prepTime?: Duration;
  @Field((type) => Duration)
  performTime?: Duration;
}

@ObjectType()
export class ComicStory extends CreativeWork {
  @Field((type) => Person)
  letterer?: Person;
  @Field((type) => Person)
  colorist?: Person;
  @Field((type) => Person)
  inker?: Person;
  @Field((type) => Person)
  penciler?: Person;
  @Field((type) => Person)
  artist?: Person;
}

@ObjectType()
export class PodcastSeries extends CreativeWorkSeries {
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => PodcastSeries_WebFeedUnion)
  webFeed?: PodcastSeries_WebFeed;
}

@ObjectType()
export class Library extends LocalBusiness {
}

@ObjectType()
export class MusicComposition extends CreativeWork {
  @Field((type) => TextScalar)
  iswcCode?: TextType;
  @Field((type) => MusicComposition_ComposerUnion)
  composer?: MusicComposition_Composer;
  @Field((type) => TextScalar)
  musicCompositionForm?: TextType;
  @Field((type) => MusicComposition)
  includedComposition?: MusicComposition;
  @Field((type) => MusicRecording)
  recordedAs?: MusicRecording;
  @Field((type) => Event)
  firstPerformance?: Event;
  @Field((type) => MusicComposition)
  musicArrangement?: MusicComposition;
  @Field((type) => CreativeWork)
  lyrics?: CreativeWork;
  @Field((type) => TextScalar)
  musicalKey?: TextType;
  @Field((type) => Person)
  lyricist?: Person;
}

@ObjectType()
export class Optician extends MedicalBusiness {
}

@ObjectType()
export class Brewery extends FoodEstablishment {
}

@ObjectType()
export class MedicalTestPanel extends MedicalTest {
  @Field((type) => MedicalTest)
  subTest?: MedicalTest;
}

@ObjectType()
export class SiteNavigationElement extends WebPageElement {
}

@ObjectType()
export class Bakery extends FoodEstablishment {
}

@ObjectType()
export class MedicalCondition extends MedicalEntity {
  @Field((type) => TextScalar)
  possibleComplication?: TextType;
  @Field((type) => TextScalar)
  naturalProgression?: TextType;
  @Field((type) => MedicalTherapy)
  primaryPrevention?: MedicalTherapy;
  @Field((type) => MedicalCondition_StatusUnion)
  status?: MedicalCondition_Status;
  @Field((type) => DDxElement)
  differentialDiagnosis?: DDxElement;
  @Field((type) => MedicalConditionStage)
  stage?: MedicalConditionStage;
  @Field((type) => TextScalar)
  pathophysiology?: TextType;
  @Field((type) => Drug)
  drug?: Drug;
  @Field((type) => MedicalTherapy)
  secondaryPrevention?: MedicalTherapy;
  @Field((type) => MedicalCondition_AssociatedAnatomyUnion)
  associatedAnatomy?: MedicalCondition_AssociatedAnatomy;
  @Field((type) => MedicalSignOrSymptom)
  signOrSymptom?: MedicalSignOrSymptom;
  @Field((type) => MedicalTest)
  typicalTest?: MedicalTest;
  @Field((type) => TextScalar)
  epidemiology?: TextType;
  @Field((type) => MedicalRiskFactor)
  riskFactor?: MedicalRiskFactor;
  @Field((type) => TextScalar)
  expectedPrognosis?: TextType;
  @Field((type) => MedicalTherapy)
  possibleTreatment?: MedicalTherapy;
}

@ObjectType()
export class SportsOrganization extends Organization {
  @Field((type) => SportsOrganization_SportUnion)
  sport?: SportsOrganization_Sport;
}

@ObjectType()
export class Florist extends Store {
}

@ObjectType()
export class ChemicalSubstance extends BioChemEntity {
  @Field((type) => TextScalar)
  chemicalComposition?: TextType;
  @Field((type) => DefinedTerm)
  potentialUse?: DefinedTerm;
  @Field((type) => DefinedTerm)
  chemicalRole?: DefinedTerm;
}

@ObjectType()
export class HowToTip{
}

@ObjectType()
export class ComicCoverArt{
}

@ObjectType()
export class Quotation extends CreativeWork {
  @Field((type) => Quotation_SpokenByCharacterUnion)
  spokenByCharacter?: Quotation_SpokenByCharacter;
}

@ObjectType()
export class GeneralContractor extends HomeAndConstructionBusiness {
}

@ObjectType()
export class DigitalDocument extends CreativeWork {
  @Field((type) => DigitalDocumentPermission)
  hasDigitalDocumentPermission?: DigitalDocumentPermission;
}

@ObjectType()
export class HomeGoodsStore extends Store {
}

@ObjectType()
export class Menu extends CreativeWork {
  @Field((type) => MenuSection)
  hasMenuSection?: MenuSection;
  @Field((type) => MenuItem)
  hasMenuItem?: MenuItem;
}

@ObjectType()
export class DryCleaningOrLaundry extends LocalBusiness {
}

@ObjectType()
export class WPAdBlock extends WebPageElement {
}

@ObjectType()
export class SpreadsheetDigitalDocument extends DigitalDocument {
}

@ObjectType()
export class JewelryStore extends Store {
}

@ObjectType()
export class ResearchProject extends Project {
}

@ObjectType()
export class SheetMusic extends CreativeWork {
}

@ObjectType()
export class MusicRecording extends CreativeWork {
  @Field((type) => TextScalar)
  isrcCode?: TextType;
  @Field((type) => MusicPlaylist)
  inPlaylist?: MusicPlaylist;
  @Field((type) => MusicAlbum)
  inAlbum?: MusicAlbum;
  @Field((type) => MusicComposition)
  recordingOf?: MusicComposition;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => MusicRecording_ByArtistUnion)
  byArtist?: MusicRecording_ByArtist;
}

@ObjectType()
export class MedicalCode{
  @Field((type) => TextScalar)
  codeValue?: TextType;
  @Field((type) => TextScalar)
  codingSystem?: TextType;
}

@ObjectType()
export class CssSelectorType extends Text {
}

@ObjectType()
export class MenuSection extends CreativeWork {
  @Field((type) => MenuSection)
  hasMenuSection?: MenuSection;
  @Field((type) => MenuItem)
  hasMenuItem?: MenuItem;
}

@ObjectType()
export class MedicalSignOrSymptom extends MedicalCondition {
  @Field((type) => MedicalTherapy)
  override possibleTreatment?: MedicalTherapy;
}

@ObjectType()
export class BankOrCreditUnion extends FinancialService {
}

@ObjectType()
export class TouristInformationCenter extends LocalBusiness {
}

@ObjectType()
export class BookSeries extends CreativeWorkSeries {
}

@ObjectType()
export class NewsMediaOrganization extends Organization {
  @Field((type) => NewsMediaOrganization_OwnershipFundingInfoUnion)
  override ownershipFundingInfo?: NewsMediaOrganization_OwnershipFundingInfo;
  @Field((type) => NewsMediaOrganization_CorrectionsPolicyUnion)
  override correctionsPolicy?: NewsMediaOrganization_CorrectionsPolicy;
  @Field((type) => NewsMediaOrganization_DiversityStaffingReportUnion)
  override diversityStaffingReport?: NewsMediaOrganization_DiversityStaffingReport;
  @Field((type) => NewsMediaOrganization_DiversityPolicyUnion)
  override diversityPolicy?: NewsMediaOrganization_DiversityPolicy;
  @Field((type) => NewsMediaOrganization_EthicsPolicyUnion)
  override ethicsPolicy?: NewsMediaOrganization_EthicsPolicy;
  @Field((type) => NewsMediaOrganization_MissionCoveragePrioritiesPolicyUnion)
  missionCoveragePrioritiesPolicy?: NewsMediaOrganization_MissionCoveragePrioritiesPolicy;
  @Field((type) => NewsMediaOrganization_ActionableFeedbackPolicyUnion)
  override actionableFeedbackPolicy?: NewsMediaOrganization_ActionableFeedbackPolicy;
  @Field((type) => NewsMediaOrganization_MastheadUnion)
  masthead?: NewsMediaOrganization_Masthead;
  @Field((type) => NewsMediaOrganization_UnnamedSourcesPolicyUnion)
  override unnamedSourcesPolicy?: NewsMediaOrganization_UnnamedSourcesPolicy;
  @Field((type) => NewsMediaOrganization_VerificationFactCheckingPolicyUnion)
  verificationFactCheckingPolicy?: NewsMediaOrganization_VerificationFactCheckingPolicy;
  @Field((type) => NewsMediaOrganization_NoBylinesPolicyUnion)
  noBylinesPolicy?: NewsMediaOrganization_NoBylinesPolicy;
}

@ObjectType()
export class PerformingGroup extends Organization {
}

@ObjectType()
export class EducationalOrganization{
  @Field((type) => Person)
  alumni?: Person;
}

@ObjectType()
export class WPFooter extends WebPageElement {
}

@ObjectType()
export class MedicalCause extends MedicalEntity {
  @Field((type) => MedicalEntity)
  causeOf?: MedicalEntity;
}

@ObjectType()
export class FurnitureStore extends Store {
}

@ObjectType()
export class Pharmacy{
}

@ObjectType()
export class MedicalIntangible extends MedicalEntity {
}

@ObjectType()
export class HVACBusiness extends HomeAndConstructionBusiness {
}

@ObjectType()
export class ComedyClub extends EntertainmentBusiness {
}

@ObjectType()
export class MathSolver extends CreativeWork {
  @Field((type) => MathSolver_MathExpressionUnion)
  mathExpression?: MathSolver_MathExpression;
}

@ObjectType()
export class MedicalIndication extends MedicalEntity {
}

@ObjectType()
export class MedicalStudy extends MedicalEntity {
  @Field((type) => MedicalCondition)
  healthCondition?: MedicalCondition;
  @Field((type) => MedicalStudy_StatusUnion)
  status?: MedicalStudy_Status;
  @Field((type) => MedicalEntity)
  studySubject?: MedicalEntity;
  @Field((type) => AdministrativeArea)
  studyLocation?: AdministrativeArea;
  @Field((type) => MedicalStudy_SponsorUnion)
  sponsor?: MedicalStudy_Sponsor;
}

@ObjectType()
export class Landform extends Place {
}

@ObjectType()
export class Poster extends CreativeWork {
}

@ObjectType()
export class AnatomicalStructure extends MedicalEntity {
  @Field((type) => TextScalar)
  bodyLocation?: TextType;
  @Field((type) => AnatomicalStructure)
  connectedTo?: AnatomicalStructure;
  @Field((type) => AnatomicalSystem)
  partOfSystem?: AnatomicalSystem;
  @Field((type) => MedicalTherapy)
  relatedTherapy?: MedicalTherapy;
  @Field((type) => ImageObject)
  diagram?: ImageObject;
  @Field((type) => MedicalCondition)
  relatedCondition?: MedicalCondition;
  @Field((type) => AnatomicalStructure)
  subStructure?: AnatomicalStructure;
  @Field((type) => TextScalar)
  associatedPathophysiology?: TextType;
}

@ObjectType()
export class DataCatalog extends CreativeWork {
  @Field((type) => DataCatalog_MeasurementTechniqueUnion)
  measurementTechnique?: DataCatalog_MeasurementTechnique;
  @Field((type) => Dataset)
  dataset?: Dataset;
}

@ObjectType()
export class Volcano extends Landform {
}

@ObjectType()
export class Course{
  @Field((type) => Course_CoursePrerequisitesUnion)
  coursePrerequisites?: Course_CoursePrerequisites;
  @Field((type) => Course_EducationalCredentialAwardedUnion)
  educationalCredentialAwarded?: Course_EducationalCredentialAwarded;
  @Field((type) => Course_NumberOfCreditsUnion)
  numberOfCredits?: Course_NumberOfCredits;
  @Field((type) => Course_OccupationalCredentialAwardedUnion)
  occupationalCredentialAwarded?: Course_OccupationalCredentialAwarded;
  @Field((type) => TextScalar)
  courseCode?: TextType;
  @Field((type) => CourseInstance)
  hasCourseInstance?: CourseInstance;
}

@ObjectType()
export class Periodical extends CreativeWorkSeries {
}

@ObjectType()
export class XPathType extends Text {
}

@ObjectType()
export class Clip extends CreativeWork {
  @Field((type) => Clip_StartOffsetUnion)
  startOffset?: Clip_StartOffset;
  @Field((type) => Clip_EndOffsetUnion)
  endOffset?: Clip_EndOffset;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => Episode)
  partOfEpisode?: Episode;
  @Field((type) => Clip_ClipNumberUnion)
  clipNumber?: Clip_ClipNumber;
  @Field((type) => CreativeWorkSeries)
  partOfSeries?: CreativeWorkSeries;
  @Field((type) => CreativeWorkSeason)
  partOfSeason?: CreativeWorkSeason;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => Clip_MusicByUnion)
  musicBy?: Clip_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class AutoDealer extends AutomotiveBusiness {
}

@ObjectType()
export class TextDigitalDocument extends DigitalDocument {
}

@ObjectType()
export class LiquorStore extends Store {
}

@ObjectType()
export class NightClub extends EntertainmentBusiness {
}

@ObjectType()
export class HyperTocEntry extends CreativeWork {
  @Field((type) => HyperTocEntry)
  tocContinuation?: HyperTocEntry;
  @Field((type) => MediaObject)
  override associatedMedia?: MediaObject;
  @Field((type) => TextScalar)
  utterances?: TextType;
}

@ObjectType()
export class VideoGameSeries extends CreativeWorkSeries {
  @Field((type) => VideoGameSeries_SeasonUnion)
  season?: VideoGameSeries_Season;
  @Field((type) => CreativeWorkSeason)
  containsSeason?: CreativeWorkSeason;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => Episode)
  episodes?: Episode;
  @Field((type) => Thing)
  characterAttribute?: Thing;
  @Field((type) => IntegerScalar)
  numberOfEpisodes?: IntegerType;
  @Field((type) => CreativeWorkSeason)
  seasons?: CreativeWorkSeason;
  @Field((type) => CreativeWork)
  cheatCode?: CreativeWork;
  @Field((type) => Thing)
  gameItem?: Thing;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => GamePlayMode)
  playMode?: GamePlayMode;
  @Field((type) => VideoGameSeries_GamePlatformUnion)
  gamePlatform?: VideoGameSeries_GamePlatform;
  @Field((type) => IntegerScalar)
  numberOfSeasons?: IntegerType;
  @Field((type) => VideoGameSeries_MusicByUnion)
  musicBy?: VideoGameSeries_MusicBy;
  @Field((type) => QuantitativeValue)
  numberOfPlayers?: QuantitativeValue;
  @Field((type) => Thing)
  quest?: Thing;
  @Field((type) => VideoGameSeries_GameLocationUnion)
  gameLocation?: VideoGameSeries_GameLocation;
  @Field((type) => Episode)
  episode?: Episode;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class Episode extends CreativeWork {
  @Field((type) => Episode_EpisodeNumberUnion)
  episodeNumber?: Episode_EpisodeNumber;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => CreativeWorkSeries)
  partOfSeries?: CreativeWorkSeries;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => CreativeWorkSeason)
  partOfSeason?: CreativeWorkSeason;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => Episode_MusicByUnion)
  musicBy?: Episode_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class NoteDigitalDocument extends DigitalDocument {
}

@ObjectType()
export class Sculpture extends CreativeWork {
}

@ObjectType()
export class Action extends Thing {
  @Field((type) => Action_AgentUnion)
  agent?: Action_Agent;
  @Field((type) => Action_StartTimeUnion)
  startTime?: Action_StartTime;
  @Field((type) => ActionStatusType)
  actionStatus?: ActionStatusType;
  @Field((type) => Action_ProviderUnion)
  provider?: Action_Provider;
  @Field((type) => Thing)
  result?: Thing;
  @Field((type) => Action_LocationUnion)
  location?: Action_Location;
  @Field((type) => Thing)
  object?: Thing;
  @Field((type) => EntryPoint)
  target?: EntryPoint;
  @Field((type) => Action_EndTimeUnion)
  endTime?: Action_EndTime;
  @Field((type) => Action_ParticipantUnion)
  participant?: Action_Participant;
  @Field((type) => Thing)
  instrument?: Thing;
  @Field((type) => Thing)
  error?: Thing;
}

@ObjectType()
export class DateTime extends Date {
}

@ObjectType()
export class Time extends Number {
}

@ObjectType()
export class MiPutaMadre extends LocalBusiness {
}

@ObjectType()
export class Restaurant extends FoodEstablishment {
}

@ObjectType()
export class FundingScheme extends Organization {
}

@ObjectType()
export class MensClothingStore extends Store {
}

@ObjectType()
export class MedicalProcedure extends MedicalEntity {
  @Field((type) => MedicalProcedureType)
  procedureType?: MedicalProcedureType;
  @Field((type) => MedicalProcedure_PreparationUnion)
  preparation?: MedicalProcedure_Preparation;
  @Field((type) => TextScalar)
  bodyLocation?: TextType;
  @Field((type) => MedicalProcedure_StatusUnion)
  status?: MedicalProcedure_Status;
  @Field((type) => TextScalar)
  howPerformed?: TextType;
  @Field((type) => TextScalar)
  followup?: TextType;
}

@ObjectType()
export class ApprovedIndication extends MedicalIndication {
}

@ObjectType()
export class GolfCourse extends SportsActivityLocation {
}

@ObjectType()
export class Mountain extends Landform {
}

@ObjectType()
export class PlayAction extends Action {
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class MovieRentalStore extends Store {
}

@ObjectType()
export class EducationalOccupationalCredential extends CreativeWork {
  @Field((type) => Duration)
  validFor?: Duration;
  @Field((type) => EducationalOccupationalCredential_EducationalLevelUnion)
  override educationalLevel?: EducationalOccupationalCredential_EducationalLevel;
  @Field((type) => EducationalOccupationalCredential_CredentialCategoryUnion)
  credentialCategory?: EducationalOccupationalCredential_CredentialCategory;
  @Field((type) => Organization)
  recognizedBy?: Organization;
  @Field((type) => EducationalOccupationalCredential_CompetencyRequiredUnion)
  competencyRequired?: EducationalOccupationalCredential_CompetencyRequired;
  @Field((type) => AdministrativeArea)
  validIn?: AdministrativeArea;
}

@ObjectType()
export class BikeStore extends Store {
}

@ObjectType()
export class LearningResource extends CreativeWork {
  @Field((type) => LearningResource_TeachesUnion)
  override teaches?: LearningResource_Teaches;
  @Field((type) => LearningResource_EducationalLevelUnion)
  override educationalLevel?: LearningResource_EducationalLevel;
  @Field((type) => LearningResource_AssessesUnion)
  override assesses?: LearningResource_Assesses;
  @Field((type) => LearningResource_EducationalUseUnion)
  override educationalUse?: LearningResource_EducationalUse;
  @Field((type) => AlignmentObject)
  override educationalAlignment?: AlignmentObject;
  @Field((type) => LearningResource_CompetencyRequiredUnion)
  competencyRequired?: LearningResource_CompetencyRequired;
  @Field((type) => LearningResource_LearningResourceTypeUnion)
  override learningResourceType?: LearningResource_LearningResourceType;
}

@ObjectType()
export class Accommodation extends Place {
  @Field((type) => TextScalar)
  floorLevel?: TextType;
  @Field((type) => IntegerScalar)
  numberOfBathroomsTotal?: IntegerType;
  @Field((type) => Accommodation_NumberOfRoomsUnion)
  numberOfRooms?: Accommodation_NumberOfRooms;
  @Field((type) => Accommodation_LeaseLengthUnion)
  leaseLength?: Accommodation_LeaseLength;
  @Field((type) => NumberScalar)
  yearBuilt?: NumberType;
  @Field((type) => TextScalar)
  accommodationCategory?: TextType;
  @Field((type) => LocationFeatureSpecification)
  override amenityFeature?: LocationFeatureSpecification;
  @Field((type) => UrlScalar)
  override tourBookingPage?: UrlType;
  @Field((type) => Accommodation_NumberOfBedroomsUnion)
  numberOfBedrooms?: Accommodation_NumberOfBedrooms;
  @Field((type) => NumberScalar)
  numberOfPartialBathrooms?: NumberType;
  @Field((type) => QuantitativeValue)
  floorSize?: QuantitativeValue;
  @Field((type) => FloorPlan)
  accommodationFloorPlan?: FloorPlan;
  @Field((type) => NumberScalar)
  numberOfFullBathrooms?: NumberType;
  @Field((type) => TextScalar)
  permittedUsage?: TextType;
  @Field((type) => Accommodation_PetsAllowedUnion)
  petsAllowed?: Accommodation_PetsAllowed;
}

@ObjectType()
export class Person extends Thing {
  @Field((type) => Person)
  spouse?: Person;
  @Field((type) => TextScalar)
  additionalName?: TextType;
  @Field((type) => EducationalOccupationalCredential)
  hasCredential?: EducationalOccupationalCredential;
  @Field((type) => TextScalar)
  telephone?: TextType;
  @Field((type) => TextScalar)
  honorificPrefix?: TextType;
  @Field((type) => Person)
  parents?: Person;
  @Field((type) => TextScalar)
  familyName?: TextType;
  @Field((type) => TextScalar)
  givenName?: TextType;
  @Field((type) => Person_KnowsAboutUnion)
  knowsAbout?: Person_KnowsAbout;
  @Field((type) => Event)
  performerIn?: Event;
  @Field((type) => Person_NetWorthUnion)
  netWorth?: Person_NetWorth;
  @Field((type) => TextScalar)
  award?: TextType;
  @Field((type) => Person_WorkLocationUnion)
  workLocation?: Person_WorkLocation;
  @Field((type) => TextScalar)
  honorificSuffix?: TextType;
  @Field((type) => Place)
  deathPlace?: Place;
  @Field((type) => Person_HomeLocationUnion)
  homeLocation?: Person_HomeLocation;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => TextScalar)
  vatID?: TextType;
  @Field((type) => Person_HeightUnion)
  height?: Person_Height;
  @Field((type) => TextScalar)
  globalLocationNumber?: TextType;
  @Field((type) => ContactPoint)
  contactPoints?: ContactPoint;
  @Field((type) => Occupation)
  hasOccupation?: Occupation;
  @Field((type) => Person_GenderUnion)
  gender?: Person_Gender;
  @Field((type) => Person)
  parent?: Person;
  @Field((type) => TextScalar)
  awards?: TextType;
  @Field((type) => Person)
  sibling?: Person;
  @Field((type) => Person_JobTitleUnion)
  jobTitle?: Person_JobTitle;
  @Field((type) => DateScalar)
  birthDate?: DateType;
  @Field((type) => Person_FunderUnion)
  funder?: Person_Funder;
  @Field((type) => Offer)
  makesOffer?: Offer;
  @Field((type) => Person)
  children?: Person;
  @Field((type) => Organization)
  worksFor?: Organization;
  @Field((type) => Person)
  knows?: Person;
  @Field((type) => InteractionCounter)
  interactionStatistic?: InteractionCounter;
  @Field((type) => Person_AddressUnion)
  address?: Person_Address;
  @Field((type) => Person_MemberOfUnion)
  memberOf?: Person_MemberOf;
  @Field((type) => Person_PublishingPrinciplesUnion)
  publishingPrinciples?: Person_PublishingPrinciples;
  @Field((type) => Person)
  colleagues?: Person;
  @Field((type) => DateScalar)
  deathDate?: DateType;
  @Field((type) => TextScalar)
  email?: TextType;
  @Field((type) => Organization)
  affiliation?: Organization;
  @Field((type) => Person)
  siblings?: Person;
  @Field((type) => Place)
  birthPlace?: Place;
  @Field((type) => Person_BrandUnion)
  brand?: Person_Brand;
  @Field((type) => Person_SponsorUnion)
  sponsor?: Person_Sponsor;
  @Field((type) => TextScalar)
  naics?: TextType;
  @Field((type) => ContactPoint)
  contactPoint?: ContactPoint;
  @Field((type) => TextScalar)
  callSign?: TextType;
  @Field((type) => TextScalar)
  isicV4?: TextType;
  @Field((type) => Place)
  hasPOS?: Place;
  @Field((type) => Person_AlumniOfUnion)
  alumniOf?: Person_AlumniOf;
  @Field((type) => TextScalar)
  duns?: TextType;
  @Field((type) => QuantitativeValue)
  weight?: QuantitativeValue;
  @Field((type) => Person_KnowsLanguageUnion)
  knowsLanguage?: Person_KnowsLanguage;
  @Field((type) => Person)
  relatedTo?: Person;
  @Field((type) => Person_ColleagueUnion)
  colleague?: Person_Colleague;
  @Field((type) => Demand)
  seeks?: Demand;
  @Field((type) => TextScalar)
  taxID?: TextType;
  @Field((type) => Person_OwnsUnion)
  owns?: Person_Owns;
  @Field((type) => OfferCatalog)
  hasOfferCatalog?: OfferCatalog;
  @Field((type) => Person)
  follows?: Person;
  @Field((type) => Country)
  nationality?: Country;
  @Field((type) => TextScalar)
  faxNumber?: TextType;
}

@ObjectType()
export class MedicalGuideline extends MedicalEntity {
  @Field((type) => MedicalEvidenceLevel)
  evidenceLevel?: MedicalEvidenceLevel;
  @Field((type) => TextScalar)
  evidenceOrigin?: TextType;
  @Field((type) => MedicalEntity)
  guidelineSubject?: MedicalEntity;
  @Field((type) => DateScalar)
  guidelineDate?: DateType;
}

@ObjectType()
export class Drawing extends CreativeWork {
}

@ObjectType()
export class MovingCompany extends HomeAndConstructionBusiness {
}

@ObjectType()
export class Ngo extends Organization {
}

@ObjectType()
export class GasStation extends AutomotiveBusiness {
}

@ObjectType()
export class DrugCost extends MedicalEntity {
  @Field((type) => AdministrativeArea)
  applicableLocation?: AdministrativeArea;
  @Field((type) => DrugCost_CostPerUnitUnion)
  costPerUnit?: DrugCost_CostPerUnit;
  @Field((type) => DrugCostCategory)
  costCategory?: DrugCostCategory;
  @Field((type) => TextScalar)
  drugUnit?: TextType;
  @Field((type) => TextScalar)
  costCurrency?: TextType;
  @Field((type) => TextScalar)
  costOrigin?: TextType;
}

@ObjectType()
export class ShortStory extends CreativeWork {
}

@ObjectType()
export class Event extends Thing {
  @Field((type) => Event)
  superEvent?: Event;
  @Field((type) => EventAttendanceModeEnumeration)
  eventAttendanceMode?: EventAttendanceModeEnumeration;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => Event_TranslatorUnion)
  translator?: Event_Translator;
  @Field((type) => Event_StartDateUnion)
  startDate?: Event_StartDate;
  @Field((type) => Event_ComposerUnion)
  composer?: Event_Composer;
  @Field((type) => IntegerScalar)
  maximumAttendeeCapacity?: IntegerType;
  @Field((type) => IntegerScalar)
  maximumVirtualAttendeeCapacity?: IntegerType;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => Event_KeywordsUnion)
  keywords?: Event_Keywords;
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => Event_OffersUnion)
  offers?: Event_Offers;
  @Field((type) => Event)
  subEvent?: Event;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => EventStatusType)
  eventStatus?: EventStatusType;
  @Field((type) => Event_EndDateUnion)
  endDate?: Event_EndDate;
  @Field((type) => Event_FunderUnion)
  funder?: Event_Funder;
  @Field((type) => Event_PerformerUnion)
  performer?: Event_Performer;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => TextScalar)
  typicalAgeRange?: TextType;
  @Field((type) => Event_LocationUnion)
  location?: Event_Location;
  @Field((type) => Event_PerformersUnion)
  performers?: Event_Performers;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => Event_OrganizerUnion)
  organizer?: Event_Organizer;
  @Field((type) => Event_SponsorUnion)
  sponsor?: Event_Sponsor;
  @Field((type) => DateScalar)
  previousStartDate?: DateType;
  @Field((type) => BooleanScalar)
  isAccessibleForFree?: BooleanType;
  @Field((type) => IntegerScalar)
  remainingAttendeeCapacity?: IntegerType;
  @Field((type) => Event)
  subEvents?: Event;
  @Field((type) => CreativeWork)
  workPerformed?: CreativeWork;
  @Field((type) => Event_DoorTimeUnion)
  doorTime?: Event_DoorTime;
  @Field((type) => Event_InLanguageUnion)
  inLanguage?: Event_InLanguage;
  @Field((type) => Thing)
  about?: Thing;
  @Field((type) => CreativeWork)
  recordedIn?: CreativeWork;
  @Field((type) => IntegerScalar)
  maximumPhysicalAttendeeCapacity?: IntegerType;
  @Field((type) => Event_AttendeeUnion)
  attendee?: Event_Attendee;
  @Field((type) => CreativeWork)
  workFeatured?: CreativeWork;
  @Field((type) => Schedule)
  eventSchedule?: Schedule;
  @Field((type) => Event_ContributorUnion)
  contributor?: Event_Contributor;
  @Field((type) => Event_AttendeesUnion)
  attendees?: Event_Attendees;
}

@ObjectType()
export class OutletStore extends Store {
}

@ObjectType()
export class ElementarySchool extends EducationalOrganization {
}

@ObjectType()
export class ExerciseAction extends PlayAction {
  @Field((type) => SportsTeam)
  sportsTeam?: SportsTeam;
  @Field((type) => Place)
  course?: Place;
  @Field((type) => Place)
  fromLocation?: Place;
  @Field((type) => Diet)
  diet?: Diet;
  @Field((type) => SportsActivityLocation)
  sportsActivityLocation?: SportsActivityLocation;
  @Field((type) => Distance)
  distance?: Distance;
  @Field((type) => ExercisePlan)
  exercisePlan?: ExercisePlan;
  @Field((type) => SportsEvent)
  sportsEvent?: SportsEvent;
  @Field((type) => Diet)
  exerciseRelatedDiet?: Diet;
  @Field((type) => Person)
  opponent?: Person;
  @Field((type) => Place)
  exerciseCourse?: Place;
  @Field((type) => Place)
  toLocation?: Place;
  @Field((type) => TextScalar)
  exerciseType?: TextType;
}

@ObjectType()
export class DanceEvent extends Event {
}

@ObjectType()
export class PublicSwimmingPool extends SportsActivityLocation {
}

@ObjectType()
export class Nerve extends AnatomicalStructure {
  @Field((type) => Nerve_SensoryUnitUnion)
  sensoryUnit?: Nerve_SensoryUnit;
  @Field((type) => AnatomicalStructure)
  branch?: AnatomicalStructure;
  @Field((type) => BrainStructure)
  sourcedFrom?: BrainStructure;
  @Field((type) => Muscle)
  nerveMotor?: Muscle;
}

@ObjectType()
export class Corporation extends Organization {
  @Field((type) => TextScalar)
  tickerSymbol?: TextType;
}

@ObjectType()
export class SocialEvent extends Event {
}

@ObjectType()
export class AutoRepair extends AutomotiveBusiness {
}

@ObjectType()
export class DaySpa extends HealthAndBeautyBusiness {
}

@ObjectType()
export class ShoeStore extends Store {
}

@ObjectType()
export class AutoRental extends AutomotiveBusiness {
}

@ObjectType()
export class MovieSeries extends CreativeWorkSeries {
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => MovieSeries_MusicByUnion)
  musicBy?: MovieSeries_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class MotorcycleRepair extends AutomotiveBusiness {
}

@ObjectType()
export class Book extends CreativeWork {
  @Field((type) => TextScalar)
  isbn?: TextType;
  @Field((type) => Person)
  illustrator?: Person;
  @Field((type) => IntegerScalar)
  numberOfPages?: IntegerType;
  @Field((type) => BooleanScalar)
  abridged?: BooleanType;
  @Field((type) => BookFormatType)
  bookFormat?: BookFormatType;
  @Field((type) => TextScalar)
  bookEdition?: TextType;
}

@ObjectType()
export class Dataset extends CreativeWork {
  @Field((type) => DataCatalog)
  catalog?: DataCatalog;
  @Field((type) => DataCatalog)
  includedDataCatalog?: DataCatalog;
  @Field((type) => Dataset_VariableMeasuredUnion)
  variableMeasured?: Dataset_VariableMeasured;
  @Field((type) => Dataset_MeasurementTechniqueUnion)
  measurementTechnique?: Dataset_MeasurementTechnique;
  @Field((type) => DateTimeScalar)
  datasetTimeInterval?: DateTimeType;
  @Field((type) => DataDownload)
  distribution?: DataDownload;
  @Field((type) => TextScalar)
  issn?: TextType;
  @Field((type) => DataCatalog)
  includedInDataCatalog?: DataCatalog;
}

@ObjectType()
export class AutoWash extends AutomotiveBusiness {
}

@ObjectType()
export class NailSalon extends HealthAndBeautyBusiness {
}

@ObjectType()
export class Painting extends CreativeWork {
}

@ObjectType()
export class InteractAction extends Action {
}

@ObjectType()
export class BookStore extends Store {
}

@ObjectType()
export class Taxon extends Thing {
  @Field((type) => Taxon_ParentTaxonUnion)
  parentTaxon?: Taxon_ParentTaxon;
  @Field((type) => Taxon_TaxonRankUnion)
  taxonRank?: Taxon_TaxonRank;
  @Field((type) => Taxon_ChildTaxonUnion)
  childTaxon?: Taxon_ChildTaxon;
  @Field((type) => DefinedTerm)
  hasDefinedTerm?: DefinedTerm;
}

@ObjectType()
export class LandmarksOrHistoricalBuildings extends Place {
}

@ObjectType()
export class VisualArtwork extends CreativeWork {
  @Field((type) => VisualArtwork_WidthUnion)
  width?: VisualArtwork_Width;
  @Field((type) => Person)
  letterer?: Person;
  @Field((type) => VisualArtwork_HeightUnion)
  height?: VisualArtwork_Height;
  @Field((type) => VisualArtwork_SurfaceUnion)
  surface?: VisualArtwork_Surface;
  @Field((type) => Person)
  colorist?: Person;
  @Field((type) => Person)
  inker?: Person;
  @Field((type) => VisualArtwork_ArtformUnion)
  artform?: VisualArtwork_Artform;
  @Field((type) => VisualArtwork_ArtworkSurfaceUnion)
  artworkSurface?: VisualArtwork_ArtworkSurface;
  @Field((type) => VisualArtwork_ArtEditionUnion)
  artEdition?: VisualArtwork_ArtEdition;
  @Field((type) => VisualArtwork_DepthUnion)
  depth?: VisualArtwork_Depth;
  @Field((type) => Person)
  penciler?: Person;
  @Field((type) => Person)
  artist?: Person;
  @Field((type) => VisualArtwork_ArtMediumUnion)
  artMedium?: VisualArtwork_ArtMedium;
}

@ObjectType()
export class CoverArt extends VisualArtwork {
}

@ObjectType()
export class GroceryStore extends Store {
}

@ObjectType()
export class Continent extends Landform {
}

@ObjectType()
export class SearchRescueOrganization extends Organization {
}

@ObjectType()
export class PostOffice extends GovernmentOffice {
}

@ObjectType()
export class HobbyShop extends Store {
}

@ObjectType()
export class VeterinaryCare extends MedicalOrganization {
}

@ObjectType()
export class Claim extends CreativeWork {
  @Field((type) => Claim_ClaimInterpreterUnion)
  claimInterpreter?: Claim_ClaimInterpreter;
  @Field((type) => CreativeWork)
  firstAppearance?: CreativeWork;
  @Field((type) => CreativeWork)
  appearance?: CreativeWork;
}

@ObjectType()
export class WPSideBar extends WebPageElement {
}

@ObjectType()
export class SaleEvent extends Event {
}

@ObjectType()
export class BedAndBreakfast extends LodgingBusiness {
}

@ObjectType()
export class Game extends CreativeWork {
  @Field((type) => Thing)
  characterAttribute?: Thing;
  @Field((type) => Thing)
  gameItem?: Thing;
  @Field((type) => QuantitativeValue)
  numberOfPlayers?: QuantitativeValue;
  @Field((type) => Thing)
  quest?: Thing;
  @Field((type) => Game_GameLocationUnion)
  gameLocation?: Game_GameLocation;
}

@ObjectType()
export class Intangible extends Thing {
}

@ObjectType()
export class AdministrativeArea extends Place {
}

@ObjectType()
export class PetStore extends Store {
}

@ObjectType()
export class SportsTeam extends SportsOrganization {
  @Field((type) => Person)
  athlete?: Person;
  @Field((type) => SportsTeam_GenderUnion)
  gender?: SportsTeam_Gender;
  @Field((type) => Person)
  coach?: Person;
}

@ObjectType()
export class CivicStructure extends Place {
  @Field((type) => TextScalar)
  openingHours?: TextType;
}

@ObjectType()
export class Hostel extends LodgingBusiness {
}

@ObjectType()
export class ResearchOrganization extends Organization {
}

@ObjectType()
export class Schedule extends Intangible {
  @Field((type) => TextScalar)
  scheduleTimezone?: TextType;
  @Field((type) => Schedule_StartDateUnion)
  startDate?: Schedule_StartDate;
  @Field((type) => Schedule_ExceptDateUnion)
  exceptDate?: Schedule_ExceptDate;
  @Field((type) => Schedule_StartTimeUnion)
  startTime?: Schedule_StartTime;
  @Field((type) => IntegerScalar)
  repeatCount?: IntegerType;
  @Field((type) => Schedule_EndDateUnion)
  endDate?: Schedule_EndDate;
  @Field((type) => Schedule_RepeatFrequencyUnion)
  repeatFrequency?: Schedule_RepeatFrequency;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => IntegerScalar)
  byMonthDay?: IntegerType;
  @Field((type) => Schedule_EndTimeUnion)
  endTime?: Schedule_EndTime;
  @Field((type) => IntegerScalar)
  byMonth?: IntegerType;
  @Field((type) => Schedule_ByDayUnion)
  byDay?: Schedule_ByDay;
  @Field((type) => IntegerScalar)
  byMonthWeek?: IntegerType;
}

@ObjectType()
export class Cemetery extends CivicStructure {
}

@ObjectType()
export class Message extends CreativeWork {
  @Field((type) => Message_BccRecipientUnion)
  bccRecipient?: Message_BccRecipient;
  @Field((type) => Message_RecipientUnion)
  recipient?: Message_Recipient;
  @Field((type) => DateTimeScalar)
  dateReceived?: DateTimeType;
  @Field((type) => Message_CcRecipientUnion)
  ccRecipient?: Message_CcRecipient;
  @Field((type) => CreativeWork)
  messageAttachment?: CreativeWork;
  @Field((type) => Message_ToRecipientUnion)
  toRecipient?: Message_ToRecipient;
  @Field((type) => DateTimeScalar)
  dateSent?: DateTimeType;
  @Field((type) => Message_DateReadUnion)
  dateRead?: Message_DateRead;
  @Field((type) => Message_SenderUnion)
  sender?: Message_Sender;
}

@ObjectType()
export class DrugLegalStatus extends MedicalIntangible {
  @Field((type) => AdministrativeArea)
  applicableLocation?: AdministrativeArea;
}

@ObjectType()
export class Muscle extends AnatomicalStructure {
  @Field((type) => AnatomicalStructure)
  insertion?: AnatomicalStructure;
  @Field((type) => Muscle)
  antagonist?: Muscle;
  @Field((type) => Nerve)
  nerve?: Nerve;
  @Field((type) => Vessel)
  bloodSupply?: Vessel;
  @Field((type) => TextScalar)
  muscleAction?: TextType;
}

@ObjectType()
export class Demand extends Intangible {
  @Field((type) => TextScalar)
  gtin12?: TextType;
  @Field((type) => Demand_ItemOfferedUnion)
  itemOffered?: Demand_ItemOffered;
  @Field((type) => TextScalar)
  mpn?: TextType;
  @Field((type) => TypeAndQuantityNode)
  includesObject?: TypeAndQuantityNode;
  @Field((type) => BusinessFunction)
  businessFunction?: BusinessFunction;
  @Field((type) => OfferItemCondition)
  itemCondition?: OfferItemCondition;
  @Field((type) => TextScalar)
  gtin?: TextType;
  @Field((type) => QuantitativeValue)
  eligibleQuantity?: QuantitativeValue;
  @Field((type) => Demand_AcceptedPaymentMethodUnion)
  acceptedPaymentMethod?: Demand_AcceptedPaymentMethod;
  @Field((type) => WarrantyPromise)
  warranty?: WarrantyPromise;
  @Field((type) => Demand_SellerUnion)
  seller?: Demand_Seller;
  @Field((type) => Demand_IneligibleRegionUnion)
  ineligibleRegion?: Demand_IneligibleRegion;
  @Field((type) => QuantitativeValue)
  deliveryLeadTime?: QuantitativeValue;
  @Field((type) => DeliveryMethod)
  availableDeliveryMethod?: DeliveryMethod;
  @Field((type) => Demand_ValidFromUnion)
  validFrom?: Demand_ValidFrom;
  @Field((type) => Demand_AvailabilityEndsUnion)
  availabilityEnds?: Demand_AvailabilityEnds;
  @Field((type) => Demand_EligibleRegionUnion)
  eligibleRegion?: Demand_EligibleRegion;
  @Field((type) => TextScalar)
  gtin8?: TextType;
  @Field((type) => QuantitativeValue)
  inventoryLevel?: QuantitativeValue;
  @Field((type) => TextScalar)
  sku?: TextType;
  @Field((type) => QuantitativeValue)
  advanceBookingRequirement?: QuantitativeValue;
  @Field((type) => TextScalar)
  gtin14?: TextType;
  @Field((type) => PriceSpecification)
  eligibleTransactionVolume?: PriceSpecification;
  @Field((type) => Demand_AreaServedUnion)
  areaServed?: Demand_AreaServed;
  @Field((type) => BusinessEntityType)
  eligibleCustomerType?: BusinessEntityType;
  @Field((type) => ItemAvailability)
  availability?: ItemAvailability;
  @Field((type) => TextScalar)
  gtin13?: TextType;
  @Field((type) => Demand_ValidThroughUnion)
  validThrough?: Demand_ValidThrough;
  @Field((type) => PriceSpecification)
  priceSpecification?: PriceSpecification;
  @Field((type) => Demand_AvailabilityStartsUnion)
  availabilityStarts?: Demand_AvailabilityStarts;
  @Field((type) => QuantitativeValue)
  eligibleDuration?: QuantitativeValue;
  @Field((type) => Place)
  availableAtOrFrom?: Place;
  @Field((type) => TextScalar)
  serialNumber?: TextType;
}

@ObjectType()
export class Product extends Thing {
  @Field((type) => Product)
  isAccessoryOrSparePartFor?: Product;
  @Field((type) => AdultOrientedEnumeration)
  hasAdultConsideration?: AdultOrientedEnumeration;
  @Field((type) => TextScalar)
  gtin12?: TextType;
  @Field((type) => TextScalar)
  nsn?: TextType;
  @Field((type) => Product_MaterialUnion)
  material?: Product_Material;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => TextScalar)
  award?: TextType;
  @Field((type) => Product_WidthUnion)
  width?: Product_Width;
  @Field((type) => Country)
  countryOfOrigin?: Country;
  @Field((type) => Product_PatternUnion)
  pattern?: Product_Pattern;
  @Field((type) => Product_CategoryUnion)
  category?: Product_Category;
  @Field((type) => Grant)
  funding?: Grant;
  @Field((type) => TextScalar)
  mpn?: TextType;
  @Field((type) => Product_HeightUnion)
  height?: Product_Height;
  @Field((type) => Product_KeywordsUnion)
  keywords?: Product_Keywords;
  @Field((type) => DateScalar)
  purchaseDate?: DateType;
  @Field((type) => EnergyConsumptionDetails)
  hasEnergyConsumptionDetails?: EnergyConsumptionDetails;
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => Product_OffersUnion)
  offers?: Product_Offers;
  @Field((type) => DateScalar)
  productionDate?: DateType;
  @Field((type) => OfferItemCondition)
  itemCondition?: OfferItemCondition;
  @Field((type) => TextScalar)
  awards?: TextType;
  @Field((type) => TextScalar)
  gtin?: TextType;
  @Field((type) => TextScalar)
  productID?: TextType;
  @Field((type) => TextScalar)
  countryOfAssembly?: TextType;
  @Field((type) => TextScalar)
  color?: TextType;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => Product_IsSimilarToUnion)
  isSimilarTo?: Product_IsSimilarTo;
  @Field((type) => Product_DepthUnion)
  depth?: Product_Depth;
  @Field((type) => TextScalar)
  countryOfLastProcessing?: TextType;
  @Field((type) => Product_IsVariantOfUnion)
  isVariantOf?: Product_IsVariantOf;
  @Field((type) => TextScalar)
  slogan?: TextType;
  @Field((type) => Product_BrandUnion)
  brand?: Product_Brand;
  @Field((type) => Organization)
  manufacturer?: Organization;
  @Field((type) => QuantitativeValue)
  hasMeasurement?: QuantitativeValue;
  @Field((type) => Product)
  isConsumableFor?: Product;
  @Field((type) => Product_LogoUnion)
  logo?: Product_Logo;
  @Field((type) => TextScalar)
  gtin8?: TextType;
  @Field((type) => TextScalar)
  sku?: TextType;
  @Field((type) => TextScalar)
  inProductGroupWithID?: TextType;
  @Field((type) => Product_ModelUnion)
  model?: Product_Model;
  @Field((type) => MerchantReturnPolicy)
  hasMerchantReturnPolicy?: MerchantReturnPolicy;
  @Field((type) => DateScalar)
  releaseDate?: DateType;
  @Field((type) => TextScalar)
  gtin14?: TextType;
  @Field((type) => QuantitativeValue)
  weight?: QuantitativeValue;
  @Field((type) => Product_SizeUnion)
  size?: Product_Size;
  @Field((type) => PropertyValue)
  additionalProperty?: PropertyValue;
  @Field((type) => TextScalar)
  gtin13?: TextType;
  @Field((type) => Review)
  reviews?: Review;
  @Field((type) => BooleanScalar)
  isFamilyFriendly?: BooleanType;
  @Field((type) => Product_IsRelatedToUnion)
  isRelatedTo?: Product_IsRelatedTo;
}

@ObjectType()
export class BroadcastChannel extends Intangible {
  @Field((type) => BroadcastChannel_GenreUnion)
  genre?: BroadcastChannel_Genre;
  @Field((type) => BroadcastChannel_BroadcastFrequencyUnion)
  broadcastFrequency?: BroadcastChannel_BroadcastFrequency;
  @Field((type) => BroadcastService)
  providesBroadcastService?: BroadcastService;
  @Field((type) => TextScalar)
  broadcastChannelId?: TextType;
  @Field((type) => CableOrSatelliteService)
  inBroadcastLineup?: CableOrSatelliteService;
  @Field((type) => TextScalar)
  broadcastServiceTier?: TextType;
}

@ObjectType()
export class ComputerLanguage extends Intangible {
}

@ObjectType()
export class Museum extends CivicStructure {
}

@ObjectType()
export class ToyStore extends Store {
}

@ObjectType()
export class RadioEpisode extends Episode {
}

@ObjectType()
export class WebSite extends CreativeWork {
  @Field((type) => TextScalar)
  issn?: TextType;
}

@ObjectType()
export class MedicalRiskFactor extends MedicalEntity {
  @Field((type) => MedicalEntity)
  increasesRiskOf?: MedicalEntity;
}

@ObjectType()
export class CreativeWorkSeason extends CreativeWork {
  @Field((type) => CreativeWorkSeason_StartDateUnion)
  startDate?: CreativeWorkSeason_StartDate;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => CreativeWorkSeason_EndDateUnion)
  endDate?: CreativeWorkSeason_EndDate;
  @Field((type) => Episode)
  episodes?: Episode;
  @Field((type) => IntegerScalar)
  numberOfEpisodes?: IntegerType;
  @Field((type) => CreativeWorkSeries)
  partOfSeries?: CreativeWorkSeries;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => CreativeWorkSeason_SeasonNumberUnion)
  seasonNumber?: CreativeWorkSeason_SeasonNumber;
  @Field((type) => Episode)
  episode?: Episode;
}

@ObjectType()
export class Chapter extends CreativeWork {
  @Field((type) => Chapter_PageStartUnion)
  pageStart?: Chapter_PageStart;
  @Field((type) => Chapter_PageEndUnion)
  pageEnd?: Chapter_PageEnd;
  @Field((type) => TextScalar)
  pagination?: TextType;
}

@ObjectType()
export class EducationalOccupationalProgram extends Intangible {
  @Field((type) => EducationalOccupationalProgram_ProgramPrerequisitesUnion)
  programPrerequisites?: EducationalOccupationalProgram_ProgramPrerequisites;
  @Field((type) => Course)
  hasCourse?: Course;
  @Field((type) => EducationalOccupationalProgram_StartDateUnion)
  startDate?: EducationalOccupationalProgram_StartDate;
  @Field((type) => MonetaryAmountDistribution)
  salaryUponCompletion?: MonetaryAmountDistribution;
  @Field((type) => NumberScalar)
  termsPerYear?: NumberType;
  @Field((type) => DayOfWeek)
  dayOfWeek?: DayOfWeek;
  @Field((type) => EducationalOccupationalProgram_OffersUnion)
  offers?: EducationalOccupationalProgram_Offers;
  @Field((type) => EducationalOccupationalProgram_TypicalCreditsPerTermUnion)
  typicalCreditsPerTerm?: EducationalOccupationalProgram_TypicalCreditsPerTerm;
  @Field((type) => DateScalar)
  applicationStartDate?: DateType;
  @Field((type) => TextScalar)
  timeOfDay?: TextType;
  @Field((type) => EducationalOccupationalProgram_EndDateUnion)
  endDate?: EducationalOccupationalProgram_EndDate;
  @Field((type) => EducationalOccupationalProgram_ProviderUnion)
  provider?: EducationalOccupationalProgram_Provider;
  @Field((type) => MonetaryAmountDistribution)
  trainingSalary?: MonetaryAmountDistribution;
  @Field((type) => EducationalOccupationalProgram_EducationalCredentialAwardedUnion)
  educationalCredentialAwarded?: EducationalOccupationalProgram_EducationalCredentialAwarded;
  @Field((type) => EducationalOccupationalProgram_NumberOfCreditsUnion)
  numberOfCredits?: EducationalOccupationalProgram_NumberOfCredits;
  @Field((type) => Duration)
  timeToComplete?: Duration;
  @Field((type) => EducationalOccupationalProgram_OccupationalCredentialAwardedUnion)
  occupationalCredentialAwarded?: EducationalOccupationalProgram_OccupationalCredentialAwarded;
  @Field((type) => Duration)
  termDuration?: Duration;
  @Field((type) => EducationalOccupationalProgram_EducationalProgramModeUnion)
  educationalProgramMode?: EducationalOccupationalProgram_EducationalProgramMode;
  @Field((type) => EducationalOccupationalProgram_ProgramTypeUnion)
  programType?: EducationalOccupationalProgram_ProgramType;
  @Field((type) => IntegerScalar)
  maximumEnrollment?: IntegerType;
  @Field((type) => EducationalOccupationalProgram_FinancialAidEligibleUnion)
  financialAidEligible?: EducationalOccupationalProgram_FinancialAidEligible;
  @Field((type) => DateScalar)
  applicationDeadline?: DateType;
  @Field((type) => EducationalOccupationalProgram_OccupationalCategoryUnion)
  occupationalCategory?: EducationalOccupationalProgram_OccupationalCategory;
}

@ObjectType()
export class Vessel extends AnatomicalStructure {
}

@ObjectType()
export class ConvenienceStore extends Store {
}

@ObjectType()
export class TaxiStand extends CivicStructure {
}

@ObjectType()
export class PropertyValueSpecification extends Intangible {
  @Field((type) => NumberScalar)
  valueMaxLength?: NumberType;
  @Field((type) => BooleanScalar)
  readonlyValue?: BooleanType;
  @Field((type) => NumberScalar)
  maxValue?: NumberType;
  @Field((type) => TextScalar)
  valueName?: TextType;
  @Field((type) => PropertyValueSpecification_DefaultValueUnion)
  defaultValue?: PropertyValueSpecification_DefaultValue;
  @Field((type) => NumberScalar)
  valueMinLength?: NumberType;
  @Field((type) => BooleanScalar)
  valueRequired?: BooleanType;
  @Field((type) => NumberScalar)
  minValue?: NumberType;
  @Field((type) => TextScalar)
  valuePattern?: TextType;
  @Field((type) => NumberScalar)
  stepValue?: NumberType;
  @Field((type) => BooleanScalar)
  multipleValues?: BooleanType;
}

@ObjectType()
export class MediaObject extends CreativeWork {
  @Field((type) => TextScalar)
  contentSize?: TextType;
  @Field((type) => UrlScalar)
  contentUrl?: UrlType;
  @Field((type) => MediaObject_WidthUnion)
  width?: MediaObject_Width;
  @Field((type) => MediaObject_HeightUnion)
  height?: MediaObject_Height;
  @Field((type) => Place)
  regionsAllowed?: Place;
  @Field((type) => MediaObject_StartTimeUnion)
  startTime?: MediaObject_StartTime;
  @Field((type) => NewsArticle)
  associatedArticle?: NewsArticle;
  @Field((type) => MediaObject_IneligibleRegionUnion)
  ineligibleRegion?: MediaObject_IneligibleRegion;
  @Field((type) => MediaObject_RequiresSubscriptionUnion)
  requiresSubscription?: MediaObject_RequiresSubscription;
  @Field((type) => TextScalar)
  playerType?: TextType;
  @Field((type) => CreativeWork)
  encodesCreativeWork?: CreativeWork;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => MediaObject_EncodingFormatUnion)
  override encodingFormat?: MediaObject_EncodingFormat;
  @Field((type) => DateScalar)
  uploadDate?: DateType;
  @Field((type) => UrlScalar)
  embedUrl?: UrlType;
  @Field((type) => TextScalar)
  bitrate?: TextType;
  @Field((type) => MediaObject_EndTimeUnion)
  endTime?: MediaObject_EndTime;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => TextScalar)
  sha256?: TextType;
  @Field((type) => Claim)
  override interpretedAsClaim?: Claim;
}

@ObjectType()
export class Motel extends LodgingBusiness {
}

@ObjectType()
export class AudioObject extends MediaObject {
  @Field((type) => TextScalar)
  embeddedTextCaption?: TextType;
  @Field((type) => AudioObject_CaptionUnion)
  caption?: AudioObject_Caption;
  @Field((type) => TextScalar)
  transcript?: TextType;
}

@ObjectType()
export class Aquarium extends CivicStructure {
}

@ObjectType()
export class Review extends CreativeWork {
  @Field((type) => Rating)
  reviewRating?: Rating;
  @Field((type) => Thing)
  itemReviewed?: Thing;
  @Field((type) => Review_NegativeNotesUnion)
  negativeNotes?: Review_NegativeNotes;
  @Field((type) => TextScalar)
  reviewAspect?: TextType;
  @Field((type) => Review)
  associatedClaimReview?: Review;
  @Field((type) => Review_PositiveNotesUnion)
  positiveNotes?: Review_PositiveNotes;
  @Field((type) => Review)
  associatedReview?: Review;
  @Field((type) => Review)
  associatedMediaReview?: Review;
  @Field((type) => TextScalar)
  reviewBody?: TextType;
}

@ObjectType()
export class Electrician extends HomeAndConstructionBusiness {
}

@ObjectType()
export class MoveAction extends Action {
  @Field((type) => Place)
  fromLocation?: Place;
  @Field((type) => Place)
  toLocation?: Place;
}

@ObjectType()
export class School extends EducationalOrganization {
}

@ObjectType()
export class Manuscript extends CreativeWork {
}

@ObjectType()
export class ScreeningEvent extends Event {
  @Field((type) => ScreeningEvent_SubtitleLanguageUnion)
  subtitleLanguage?: ScreeningEvent_SubtitleLanguage;
  @Field((type) => TextScalar)
  videoFormat?: TextType;
  @Field((type) => Movie)
  workPresented?: Movie;
}

@ObjectType()
export class Movie extends CreativeWork {
  @Field((type) => Country)
  override countryOfOrigin?: Country;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Movie_TitleEIDRUnion)
  titleEIDR?: Movie_TitleEIDR;
  @Field((type) => Movie_SubtitleLanguageUnion)
  subtitleLanguage?: Movie_SubtitleLanguage;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject)
  trailer?: VideoObject;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => Organization)
  productionCompany?: Organization;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => Movie_MusicByUnion)
  musicBy?: Movie_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class BedDetails extends Intangible {
  @Field((type) => BedDetails_TypeOfBedUnion)
  typeOfBed?: BedDetails_TypeOfBed;
  @Field((type) => NumberScalar)
  numberOfBeds?: NumberType;
}

@ObjectType()
export class MediaReviewItem extends CreativeWork {
  @Field((type) => MediaObject)
  mediaItemAppearance?: MediaObject;
}

@ObjectType()
export class DepartmentStore extends Store {
}

@ObjectType()
export class ComedyEvent extends Event {
}

@ObjectType()
export class Statement extends CreativeWork {
}

@ObjectType()
export class Seat extends Intangible {
  @Field((type) => Seat_SeatingTypeUnion)
  seatingType?: Seat_SeatingType;
  @Field((type) => TextScalar)
  seatSection?: TextType;
  @Field((type) => TextScalar)
  seatRow?: TextType;
  @Field((type) => TextScalar)
  seatNumber?: TextType;
}

@ObjectType()
export class PerformAction extends PlayAction {
  @Field((type) => EntertainmentBusiness)
  entertainmentBusiness?: EntertainmentBusiness;
}

@ObjectType()
export class CriticReview extends Review {
}

@ObjectType()
export class BroadcastFrequencySpecification extends Intangible {
  @Field((type) => TextScalar)
  broadcastSubChannel?: TextType;
  @Field((type) => BroadcastFrequencySpecification_BroadcastSignalModulationUnion)
  broadcastSignalModulation?: BroadcastFrequencySpecification_BroadcastSignalModulation;
  @Field((type) => BroadcastFrequencySpecification_BroadcastFrequencyValueUnion)
  broadcastFrequencyValue?: BroadcastFrequencySpecification_BroadcastFrequencyValue;
}

@ObjectType()
export class SolveMathAction extends Action {
  @Field((type) => TextScalar)
  eduQuestionType?: TextType;
}

@ObjectType()
export class IndividualProduct extends Product {
  @Field((type) => TextScalar)
  serialNumber?: TextType;
}

@ObjectType()
export class InfectiousDisease extends MedicalCondition {
  @Field((type) => InfectiousAgentClass)
  infectiousAgentClass?: InfectiousAgentClass;
  @Field((type) => TextScalar)
  infectiousAgent?: TextType;
  @Field((type) => TextScalar)
  transmissionMethod?: TextType;
}

@ObjectType()
export class DoseSchedule extends MedicalIntangible {
  @Field((type) => TextScalar)
  targetPopulation?: TextType;
  @Field((type) => TextScalar)
  frequency?: TextType;
  @Field((type) => TextScalar)
  doseUnit?: TextType;
  @Field((type) => DoseSchedule_DoseValueUnion)
  doseValue?: DoseSchedule_DoseValue;
}

@ObjectType()
export class ComicSeries extends Periodical {
}

@ObjectType()
export class MedicalContraindication extends MedicalEntity {
}

@ObjectType()
export class TheaterEvent extends Event {
}

@ObjectType()
export class UpdateAction extends Action {
  @Field((type) => Thing)
  targetCollection?: Thing;
  @Field((type) => Thing)
  collection?: Thing;
}

@ObjectType()
export class Notary extends LegalService {
}

@ObjectType()
export class DefinedTermSet extends CreativeWork {
  @Field((type) => DefinedTerm)
  hasDefinedTerm?: DefinedTerm;
}

@ObjectType()
export class CommunicateAction extends InteractAction {
  @Field((type) => CommunicateAction_RecipientUnion)
  recipient?: CommunicateAction_Recipient;
  @Field((type) => CommunicateAction_InLanguageUnion)
  inLanguage?: CommunicateAction_InLanguage;
  @Field((type) => Language)
  language?: Language;
  @Field((type) => Thing)
  about?: Thing;
}

@ObjectType()
export class InsuranceAgency extends FinancialService {
}

@ObjectType()
export class City extends AdministrativeArea {
}

@ObjectType()
export class MusicVideoObject extends MediaObject {
}

@ObjectType()
export class Blog extends CreativeWork {
  @Field((type) => BlogPosting)
  blogPosts?: BlogPosting;
  @Field((type) => TextScalar)
  issn?: TextType;
  @Field((type) => BlogPosting)
  blogPost?: BlogPosting;
}

@ObjectType()
export class OrganizeAction extends Action {
}

@ObjectType()
export class House extends Accommodation {
  @Field((type) => House_NumberOfRoomsUnion)
  override numberOfRooms?: House_NumberOfRooms;
}

@ObjectType()
export class ConsumeAction extends Action {
  @Field((type) => Offer)
  expectsAcceptanceOf?: Offer;
  @Field((type) => ActionAccessSpecification)
  actionAccessibilityRequirement?: ActionAccessSpecification;
}

@ObjectType()
export class WPHeader extends WebPageElement {
}

@ObjectType()
export class OnlineStore extends OnlineBusiness {
}

@ObjectType()
export class SoftwareSourceCode extends CreativeWork {
  @Field((type) => SoftwareSourceCode_ProgrammingLanguageUnion)
  programmingLanguage?: SoftwareSourceCode_ProgrammingLanguage;
  @Field((type) => TextScalar)
  sampleType?: TextType;
  @Field((type) => TextScalar)
  runtimePlatform?: TextType;
  @Field((type) => TextScalar)
  runtime?: TextType;
  @Field((type) => SoftwareApplication)
  targetProduct?: SoftwareApplication;
  @Field((type) => UrlScalar)
  codeRepository?: UrlType;
  @Field((type) => TextScalar)
  codeSampleType?: TextType;
}

@ObjectType()
export class ThreeDModel extends MediaObject {
  @Field((type) => BooleanScalar)
  isResizable?: BooleanType;
}

@ObjectType()
export class MusicGroup extends PerformingGroup {
  @Field((type) => MusicRecording)
  tracks?: MusicRecording;
  @Field((type) => MusicGroup_GenreUnion)
  genre?: MusicGroup_Genre;
  @Field((type) => Person)
  musicGroupMember?: Person;
  @Field((type) => MusicAlbum)
  albums?: MusicAlbum;
  @Field((type) => MusicGroup_TrackUnion)
  track?: MusicGroup_Track;
  @Field((type) => MusicAlbum)
  album?: MusicAlbum;
}

@ObjectType()
export class Play extends CreativeWork {
}

@ObjectType()
export class Guide extends CreativeWork {
  @Field((type) => TextScalar)
  reviewAspect?: TextType;
}

@ObjectType()
export class EducationEvent extends Event {
  @Field((type) => EducationEvent_TeachesUnion)
  teaches?: EducationEvent_Teaches;
  @Field((type) => EducationEvent_EducationalLevelUnion)
  educationalLevel?: EducationEvent_EducationalLevel;
  @Field((type) => EducationEvent_AssessesUnion)
  assesses?: EducationEvent_Assesses;
}

@ObjectType()
export class Zoo extends CivicStructure {
}

@ObjectType()
export class ArchiveComponent extends CreativeWork {
  @Field((type) => ArchiveOrganization)
  holdingArchive?: ArchiveOrganization;
  @Field((type) => ArchiveComponent_ItemLocationUnion)
  itemLocation?: ArchiveComponent_ItemLocation;
}

@ObjectType()
export class Vehicle extends Product {
  @Field((type) => QuantitativeValue)
  fuelCapacity?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  accelerationTime?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  speed?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  trailerWeight?: QuantitativeValue;
  @Field((type) => EngineSpecification)
  vehicleEngine?: EngineSpecification;
  @Field((type) => NumberScalar)
  emissionsCO2?: NumberType;
  @Field((type) => DateScalar)
  override purchaseDate?: DateType;
  @Field((type) => Vehicle_NumberOfForwardGearsUnion)
  numberOfForwardGears?: Vehicle_NumberOfForwardGears;
  @Field((type) => QuantitativeValue)
  weightTotal?: QuantitativeValue;
  @Field((type) => DateScalar)
  override productionDate?: DateType;
  @Field((type) => Vehicle_NumberOfPreviousOwnersUnion)
  numberOfPreviousOwners?: Vehicle_NumberOfPreviousOwners;
  @Field((type) => SteeringPositionValue)
  steeringPosition?: SteeringPositionValue;
  @Field((type) => QuantitativeValue)
  wheelbase?: QuantitativeValue;
  @Field((type) => TextScalar)
  vehicleInteriorType?: TextType;
  @Field((type) => Vehicle_NumberOfAirbagsUnion)
  numberOfAirbags?: Vehicle_NumberOfAirbags;
  @Field((type) => Vehicle_FuelTypeUnion)
  fuelType?: Vehicle_FuelType;
  @Field((type) => QuantitativeValue)
  cargoVolume?: QuantitativeValue;
  @Field((type) => Vehicle_VehicleTransmissionUnion)
  vehicleTransmission?: Vehicle_VehicleTransmission;
  @Field((type) => QuantitativeValue)
  payload?: QuantitativeValue;
  @Field((type) => Vehicle_DriveWheelConfigurationUnion)
  driveWheelConfiguration?: Vehicle_DriveWheelConfiguration;
  @Field((type) => TextScalar)
  knownVehicleDamages?: TextType;
  @Field((type) => QuantitativeValue)
  fuelConsumption?: QuantitativeValue;
  @Field((type) => TextScalar)
  vehicleInteriorColor?: TextType;
  @Field((type) => Vehicle_NumberOfAxlesUnion)
  numberOfAxles?: Vehicle_NumberOfAxles;
  @Field((type) => DateScalar)
  modelDate?: DateType;
  @Field((type) => Vehicle_NumberOfDoorsUnion)
  numberOfDoors?: Vehicle_NumberOfDoors;
  @Field((type) => Vehicle_VehicleSeatingCapacityUnion)
  vehicleSeatingCapacity?: Vehicle_VehicleSeatingCapacity;
  @Field((type) => TextScalar)
  callSign?: TextType;
  @Field((type) => QuantitativeValue)
  tongueWeight?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  fuelEfficiency?: QuantitativeValue;
  @Field((type) => DateScalar)
  vehicleModelDate?: DateType;
  @Field((type) => TextScalar)
  vehicleConfiguration?: TextType;
  @Field((type) => QuantitativeValue)
  mileageFromOdometer?: QuantitativeValue;
  @Field((type) => Vehicle_SeatingCapacityUnion)
  seatingCapacity?: Vehicle_SeatingCapacity;
  @Field((type) => Vehicle_BodyTypeUnion)
  bodyType?: Vehicle_BodyType;
  @Field((type) => DateScalar)
  dateVehicleFirstRegistered?: DateType;
  @Field((type) => TextScalar)
  vehicleIdentificationNumber?: TextType;
  @Field((type) => Vehicle_MeetsEmissionStandardUnion)
  meetsEmissionStandard?: Vehicle_MeetsEmissionStandard;
  @Field((type) => Vehicle_VehicleSpecialUsageUnion)
  vehicleSpecialUsage?: Vehicle_VehicleSpecialUsage;
}

@ObjectType()
export class Permit extends Intangible {
  @Field((type) => Duration)
  validFor?: Duration;
  @Field((type) => Organization)
  issuedBy?: Organization;
  @Field((type) => DateScalar)
  validUntil?: DateType;
  @Field((type) => Permit_ValidFromUnion)
  validFrom?: Permit_ValidFrom;
  @Field((type) => Service)
  issuedThrough?: Service;
  @Field((type) => AdministrativeArea)
  validIn?: AdministrativeArea;
  @Field((type) => Audience)
  permitAudience?: Audience;
}

@ObjectType()
export class CheckInAction extends CommunicateAction {
}

@ObjectType()
export class Hotel extends LodgingBusiness {
}

@ObjectType()
export class AchieveAction extends Action {
}

@ObjectType()
export class ArtGallery extends EntertainmentBusiness {
}

@ObjectType()
export class PathologyTest extends MedicalTest {
  @Field((type) => TextScalar)
  tissueSample?: TextType;
}

@ObjectType()
export class BusStop extends CivicStructure {
}

@ObjectType()
export class BloodTest extends MedicalTest {
}

@ObjectType()
export class Suite extends Accommodation {
  @Field((type) => Suite_NumberOfRoomsUnion)
  override numberOfRooms?: Suite_NumberOfRooms;
  @Field((type) => Suite_BedUnion)
  bed?: Suite_Bed;
  @Field((type) => QuantitativeValue)
  occupancy?: QuantitativeValue;
}

@ObjectType()
export class Comment extends CreativeWork {
  @Field((type) => Comment)
  parentItem?: Comment;
  @Field((type) => IntegerScalar)
  downvoteCount?: IntegerType;
  @Field((type) => IntegerScalar)
  upvoteCount?: IntegerType;
}

@ObjectType()
export class ShareAction extends CommunicateAction {
}

@ObjectType()
export class GeospatialGeometry extends Intangible {
  @Field((type) => GeospatialGeometry_GeoContainsUnion)
  geoContains?: GeospatialGeometry_GeoContains;
  @Field((type) => GeospatialGeometry_GeoIntersectsUnion)
  geoIntersects?: GeospatialGeometry_GeoIntersects;
  @Field((type) => GeospatialGeometry_GeoTouchesUnion)
  geoTouches?: GeospatialGeometry_GeoTouches;
  @Field((type) => GeospatialGeometry_GeoCoveredByUnion)
  geoCoveredBy?: GeospatialGeometry_GeoCoveredBy;
  @Field((type) => GeospatialGeometry_GeoEqualsUnion)
  geoEquals?: GeospatialGeometry_GeoEquals;
  @Field((type) => GeospatialGeometry_GeoCrossesUnion)
  geoCrosses?: GeospatialGeometry_GeoCrosses;
  @Field((type) => GeospatialGeometry_GeoCoversUnion)
  geoCovers?: GeospatialGeometry_GeoCovers;
  @Field((type) => GeospatialGeometry_GeoWithinUnion)
  geoWithin?: GeospatialGeometry_GeoWithin;
  @Field((type) => GeospatialGeometry_GeoDisjointUnion)
  geoDisjoint?: GeospatialGeometry_GeoDisjoint;
  @Field((type) => GeospatialGeometry_GeoOverlapsUnion)
  geoOverlaps?: GeospatialGeometry_GeoOverlaps;
}

@ObjectType()
export class TouristDestination extends Place {
  @Field((type) => TouristDestination_TouristTypeUnion)
  touristType?: TouristDestination_TouristType;
  @Field((type) => TouristAttraction)
  includesAttraction?: TouristAttraction;
}

@ObjectType()
export class WebContent extends CreativeWork {
}

@ObjectType()
export class RoofingContractor extends HomeAndConstructionBusiness {
}

@ObjectType()
export class ListItem extends Intangible {
  @Field((type) => ListItem_PositionUnion)
  position?: ListItem_Position;
  @Field((type) => ListItem)
  nextItem?: ListItem;
  @Field((type) => Thing)
  item?: Thing;
  @Field((type) => ListItem)
  previousItem?: ListItem;
}

@ObjectType()
export class EmailMessage extends Message {
}

@ObjectType()
export class FindAction extends Action {
}

@ObjectType()
export class Park extends CivicStructure {
}

@ObjectType()
export class GovernmentOrganization extends Organization {
}

@ObjectType()
export class AccountingService extends FinancialService {
}

@ObjectType()
export class PlanAction extends OrganizeAction {
  @Field((type) => DateTimeScalar)
  scheduledTime?: DateTimeType;
}

@ObjectType()
export class DanceGroup extends PerformingGroup {
}

@ObjectType()
export class DrugStrength extends MedicalIntangible {
  @Field((type) => AdministrativeArea)
  availableIn?: AdministrativeArea;
  @Field((type) => TextScalar)
  strengthUnit?: TextType;
  @Field((type) => MaximumDoseSchedule)
  maximumIntake?: MaximumDoseSchedule;
  @Field((type) => TextScalar)
  activeIngredient?: TextType;
  @Field((type) => NumberScalar)
  strengthValue?: NumberType;
}

@ObjectType()
export class BefriendAction extends InteractAction {
}

@ObjectType()
export class HealthTopicContent extends WebContent {
  @Field((type) => HealthAspectEnumeration)
  hasHealthAspect?: HealthAspectEnumeration;
}

@ObjectType()
export class HighSchool extends EducationalOrganization {
}

@ObjectType()
export class MiddleSchool extends EducationalOrganization {
}

@ObjectType()
export class Map extends CreativeWork {
  @Field((type) => MapCategoryType)
  mapType?: MapCategoryType;
}

@ObjectType()
export class StructuredValue extends Intangible {
}

@ObjectType()
export class MedicalDevice extends MedicalEntity {
  @Field((type) => MedicalEntity)
  adverseOutcome?: MedicalEntity;
  @Field((type) => TextScalar)
  preOp?: TextType;
  @Field((type) => MedicalEntity)
  seriousAdverseOutcome?: MedicalEntity;
  @Field((type) => TextScalar)
  postOp?: TextType;
  @Field((type) => TextScalar)
  procedure?: TextType;
  @Field((type) => MedicalDevice_ContraindicationUnion)
  contraindication?: MedicalDevice_Contraindication;
}

@ObjectType()
export class MusicVenue extends CivicStructure {
}

@ObjectType()
export class Property extends Intangible {
  @Field((type) => Class)
  domainIncludes?: Class;
  @Field((type) => Property_SupersededByUnion)
  supersededBy?: Property_SupersededBy;
  @Field((type) => Class)
  rangeIncludes?: Class;
  @Field((type) => Property)
  inverseOf?: Property;
}

@ObjectType()
export class MedicalSymptom extends MedicalSignOrSymptom {
}

@ObjectType()
export class HowToItem extends ListItem {
  @Field((type) => HowToItem_RequiredQuantityUnion)
  requiredQuantity?: HowToItem_RequiredQuantity;
}

@ObjectType()
export class Photograph extends CreativeWork {
}

@ObjectType()
export class DepartAction extends MoveAction {
}

@ObjectType()
export class Residence extends Place {
  @Field((type) => FloorPlan)
  accommodationFloorPlan?: FloorPlan;
}

@ObjectType()
export class MedicalGuidelineContraindication extends MedicalGuideline {
}

@ObjectType()
export class Answer extends Comment {
  @Field((type) => Answer_AnswerExplanationUnion)
  answerExplanation?: Answer_AnswerExplanation;
}

@ObjectType()
export class Conversation extends CreativeWork {
}

@ObjectType()
export class Plumber extends HomeAndConstructionBusiness {
}

@ObjectType()
export class Article extends CreativeWork {
  @Field((type) => Article_PageStartUnion)
  pageStart?: Article_PageStart;
  @Field((type) => TextScalar)
  articleSection?: TextType;
  @Field((type) => Article_PageEndUnion)
  pageEnd?: Article_PageEnd;
  @Field((type) => Article_BackstoryUnion)
  backstory?: Article_Backstory;
  @Field((type) => IntegerScalar)
  wordCount?: IntegerType;
  @Field((type) => TextScalar)
  articleBody?: TextType;
  @Field((type) => Article_SpeakableUnion)
  speakable?: Article_Speakable;
  @Field((type) => TextScalar)
  pagination?: TextType;
}

@ObjectType()
export class TrainStation extends CivicStructure {
}

@ObjectType()
export class DefinedRegion extends StructuredValue {
  @Field((type) => DefinedRegion_AddressCountryUnion)
  addressCountry?: DefinedRegion_AddressCountry;
  @Field((type) => TextScalar)
  addressRegion?: TextType;
  @Field((type) => PostalCodeRangeSpecification)
  postalCodeRange?: PostalCodeRangeSpecification;
  @Field((type) => TextScalar)
  postalCodePrefix?: TextType;
  @Field((type) => TextScalar)
  postalCode?: TextType;
}

@ObjectType()
export class ImagingTest extends MedicalTest {
  @Field((type) => MedicalImagingTechnique)
  imagingTechnique?: MedicalImagingTechnique;
}

@ObjectType()
export class Ticket extends Intangible {
  @Field((type) => Ticket_TicketTokenUnion)
  ticketToken?: Ticket_TicketToken;
  @Field((type) => Seat)
  ticketedSeat?: Seat;
  @Field((type) => Ticket_TotalPriceUnion)
  totalPrice?: Ticket_TotalPrice;
  @Field((type) => Organization)
  issuedBy?: Organization;
  @Field((type) => TextScalar)
  ticketNumber?: TextType;
  @Field((type) => Ticket_DateIssuedUnion)
  dateIssued?: Ticket_DateIssued;
  @Field((type) => TextScalar)
  priceCurrency?: TextType;
  @Field((type) => Ticket_UnderNameUnion)
  underName?: Ticket_UnderName;
}

@ObjectType()
export class Airport extends CivicStructure {
  @Field((type) => TextScalar)
  iataCode?: TextType;
  @Field((type) => TextScalar)
  icaoCode?: TextType;
}

@ObjectType()
export class Trip extends Intangible {
  @Field((type) => Trip_ArrivalTimeUnion)
  arrivalTime?: Trip_ArrivalTime;
  @Field((type) => Trip_OffersUnion)
  offers?: Trip_Offers;
  @Field((type) => Trip_DepartureTimeUnion)
  departureTime?: Trip_DepartureTime;
  @Field((type) => Trip_ProviderUnion)
  provider?: Trip_Provider;
  @Field((type) => Trip)
  subTrip?: Trip;
  @Field((type) => Trip_ItineraryUnion)
  itinerary?: Trip_Itinerary;
  @Field((type) => Trip)
  partOfTrip?: Trip;
}

@ObjectType()
export class LifestyleModification extends MedicalEntity {
}

@ObjectType()
export class OrderItem extends Intangible {
  @Field((type) => ParcelDelivery)
  orderDelivery?: ParcelDelivery;
  @Field((type) => OrderStatus)
  orderItemStatus?: OrderStatus;
  @Field((type) => NumberScalar)
  orderQuantity?: NumberType;
  @Field((type) => TextScalar)
  orderItemNumber?: TextType;
  @Field((type) => OrderItem_OrderedItemUnion)
  orderedItem?: OrderItem_OrderedItem;
}

@ObjectType()
export class MerchantReturnPolicy extends Intangible {
  @Field((type) => MerchantReturnEnumeration)
  returnPolicyCategory?: MerchantReturnEnumeration;
  @Field((type) => MerchantReturnPolicy_ReturnPolicyCountryUnion)
  returnPolicyCountry?: MerchantReturnPolicy_ReturnPolicyCountry;
  @Field((type) => UrlScalar)
  merchantReturnLink?: UrlType;
  @Field((type) => MerchantReturnPolicy_RestockingFeeUnion)
  restockingFee?: MerchantReturnPolicy_RestockingFee;
  @Field((type) => MonetaryAmount)
  itemDefectReturnShippingFeesAmount?: MonetaryAmount;
  @Field((type) => ReturnFeesEnumeration)
  itemDefectReturnFees?: ReturnFeesEnumeration;
  @Field((type) => BooleanScalar)
  inStoreReturnsOffered?: BooleanType;
  @Field((type) => OfferItemCondition)
  itemCondition?: OfferItemCondition;
  @Field((type) => ReturnLabelSourceEnumeration)
  itemDefectReturnLabelSource?: ReturnLabelSourceEnumeration;
  @Field((type) => ReturnLabelSourceEnumeration)
  returnLabelSource?: ReturnLabelSourceEnumeration;
  @Field((type) => MonetaryAmount)
  customerRemorseReturnShippingFeesAmount?: MonetaryAmount;
  @Field((type) => RefundTypeEnumeration)
  refundType?: RefundTypeEnumeration;
  @Field((type) => MonetaryAmount)
  returnShippingFeesAmount?: MonetaryAmount;
  @Field((type) => MerchantReturnPolicy_MerchantReturnDaysUnion)
  merchantReturnDays?: MerchantReturnPolicy_MerchantReturnDays;
  @Field((type) => ReturnMethodEnumeration)
  returnMethod?: ReturnMethodEnumeration;
  @Field((type) => PropertyValue)
  additionalProperty?: PropertyValue;
  @Field((type) => ReturnLabelSourceEnumeration)
  customerRemorseReturnLabelSource?: ReturnLabelSourceEnumeration;
  @Field((type) => ReturnFeesEnumeration)
  customerRemorseReturnFees?: ReturnFeesEnumeration;
  @Field((type) => MerchantReturnPolicySeasonalOverride)
  returnPolicySeasonalOverride?: MerchantReturnPolicySeasonalOverride;
  @Field((type) => MerchantReturnPolicy_ApplicableCountryUnion)
  applicableCountry?: MerchantReturnPolicy_ApplicableCountry;
  @Field((type) => ReturnFeesEnumeration)
  returnFees?: ReturnFeesEnumeration;
}

@ObjectType()
export class Atlas extends CreativeWork {
}

@ObjectType()
export class AskAction extends CommunicateAction {
  @Field((type) => Question)
  question?: Question;
}

@ObjectType()
export class PodcastEpisode extends Episode {
}

@ObjectType()
export class Bone extends AnatomicalStructure {
}

@ObjectType()
export class BodyOfWater extends Landform {
}

@ObjectType()
export class Season extends CreativeWork {
}

@ObjectType()
export class JoinAction extends InteractAction {
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class GameServer extends Intangible {
  @Field((type) => GameServerStatus)
  serverStatus?: GameServerStatus;
  @Field((type) => VideoGame)
  game?: VideoGame;
  @Field((type) => IntegerScalar)
  playersOnline?: IntegerType;
}

@ObjectType()
export class MediaSubscription extends Intangible {
  @Field((type) => Offer)
  expectsAcceptanceOf?: Offer;
  @Field((type) => Organization)
  authenticator?: Organization;
}

@ObjectType()
export class ClaimReview extends Review {
  @Field((type) => TextScalar)
  claimReviewed?: TextType;
}

@ObjectType()
export class Locksmith extends HomeAndConstructionBusiness {
}

@ObjectType()
export class DDxElement extends MedicalIntangible {
  @Field((type) => MedicalSignOrSymptom)
  distinguishingSign?: MedicalSignOrSymptom;
  @Field((type) => MedicalCondition)
  diagnosis?: MedicalCondition;
}

@ObjectType()
export class SoftwareApplication extends CreativeWork {
  @Field((type) => TextScalar)
  countriesSupported?: TextType;
  @Field((type) => UrlScalar)
  installUrl?: UrlType;
  @Field((type) => TextScalar)
  operatingSystem?: TextType;
  @Field((type) => SoftwareApplication_MemoryRequirementsUnion)
  memoryRequirements?: SoftwareApplication_MemoryRequirements;
  @Field((type) => TextScalar)
  softwareVersion?: TextType;
  @Field((type) => SoftwareApplication_StorageRequirementsUnion)
  storageRequirements?: SoftwareApplication_StorageRequirements;
  @Field((type) => CreativeWork)
  softwareHelp?: CreativeWork;
  @Field((type) => SoftwareApplication_ApplicationSubCategoryUnion)
  applicationSubCategory?: SoftwareApplication_ApplicationSubCategory;
  @Field((type) => UrlScalar)
  downloadUrl?: UrlType;
  @Field((type) => SoftwareApplication_ApplicationCategoryUnion)
  applicationCategory?: SoftwareApplication_ApplicationCategory;
  @Field((type) => TextScalar)
  countriesNotSupported?: TextType;
  @Field((type) => SoftwareApplication_SoftwareRequirementsUnion)
  softwareRequirements?: SoftwareApplication_SoftwareRequirements;
  @Field((type) => SoftwareApplication)
  softwareAddOn?: SoftwareApplication;
  @Field((type) => TextScalar)
  applicationSuite?: TextType;
  @Field((type) => SoftwareApplication_RequirementsUnion)
  requirements?: SoftwareApplication_Requirements;
  @Field((type) => TextScalar)
  permissions?: TextType;
  @Field((type) => TextScalar)
  processorRequirements?: TextType;
  @Field((type) => SoftwareApplication_ScreenshotUnion)
  screenshot?: SoftwareApplication_Screenshot;
  @Field((type) => SoftwareApplication_FeatureListUnion)
  featureList?: SoftwareApplication_FeatureList;
  @Field((type) => SoftwareApplication_ReleaseNotesUnion)
  releaseNotes?: SoftwareApplication_ReleaseNotes;
  @Field((type) => DataFeed)
  supportingData?: DataFeed;
  @Field((type) => TextScalar)
  fileSize?: TextType;
  @Field((type) => TextScalar)
  device?: TextType;
  @Field((type) => TextScalar)
  availableOnDevice?: TextType;
}

@ObjectType()
export class SocialMediaPosting extends Article {
  @Field((type) => CreativeWork)
  sharedContent?: CreativeWork;
}

@ObjectType()
export class HowToTool extends HowToItem {
}

@ObjectType()
export class Ligament extends AnatomicalStructure {
}

@ObjectType()
export class MedicalRiskEstimator extends MedicalEntity {
  @Field((type) => MedicalEntity)
  estimatesRiskOf?: MedicalEntity;
  @Field((type) => MedicalRiskFactor)
  includedRiskFactor?: MedicalRiskFactor;
}

@ObjectType()
export class Apartment extends Accommodation {
  @Field((type) => Apartment_NumberOfRoomsUnion)
  override numberOfRooms?: Apartment_NumberOfRooms;
  @Field((type) => QuantitativeValue)
  occupancy?: QuantitativeValue;
}

@ObjectType()
export class WebPage extends CreativeWork {
  @Field((type) => DateScalar)
  lastReviewed?: DateType;
  @Field((type) => Specialty)
  specialty?: Specialty;
  @Field((type) => ImageObject)
  primaryImageOfPage?: ImageObject;
  @Field((type) => UrlScalar)
  significantLink?: UrlType;
  @Field((type) => WebPage_ReviewedByUnion)
  reviewedBy?: WebPage_ReviewedBy;
  @Field((type) => WebPageElement)
  mainContentOfPage?: WebPageElement;
  @Field((type) => UrlScalar)
  relatedLink?: UrlType;
  @Field((type) => WebPage_SpeakableUnion)
  speakable?: WebPage_Speakable;
  @Field((type) => WebPage_BreadcrumbUnion)
  breadcrumb?: WebPage_Breadcrumb;
  @Field((type) => UrlScalar)
  significantLinks?: UrlType;
}

@ObjectType()
export class Preschool extends EducationalOrganization {
}

@ObjectType()
export class HealthPlanNetwork extends Intangible {
  @Field((type) => TextScalar)
  healthPlanNetworkId?: TextType;
  @Field((type) => BooleanScalar)
  healthPlanCostSharing?: BooleanType;
  @Field((type) => TextScalar)
  healthPlanNetworkTier?: TextType;
}

@ObjectType()
export class Resort extends LodgingBusiness {
}

@ObjectType()
export class CourseInstance extends Event {
  @Field((type) => Person)
  instructor?: Person;
  @Field((type) => TextScalar)
  courseWorkload?: TextType;
  @Field((type) => CourseInstance_CourseModeUnion)
  courseMode?: CourseInstance_CourseMode;
}

@ObjectType()
export class HowTo extends CreativeWork {
  @Field((type) => HowTo_YieldUnion)
  yield?: HowTo_Yield;
  @Field((type) => HowTo_EstimatedCostUnion)
  estimatedCost?: HowTo_EstimatedCost;
  @Field((type) => HowTo_SupplyUnion)
  supply?: HowTo_Supply;
  @Field((type) => HowTo_StepUnion)
  step?: HowTo_Step;
  @Field((type) => Duration)
  totalTime?: Duration;
  @Field((type) => HowTo_ToolUnion)
  tool?: HowTo_Tool;
  @Field((type) => Duration)
  prepTime?: Duration;
  @Field((type) => HowTo_StepsUnion)
  steps?: HowTo_Steps;
  @Field((type) => Duration)
  performTime?: Duration;
}

@ObjectType()
export class PublicationEvent extends Event {
  @Field((type) => PublicationEvent_PublishedByUnion)
  publishedBy?: PublicationEvent_PublishedBy;
  @Field((type) => BooleanScalar)
  free?: BooleanType;
  @Field((type) => BroadcastService)
  publishedOn?: BroadcastService;
}

@ObjectType()
export class SomeProducts extends Product {
  @Field((type) => QuantitativeValue)
  inventoryLevel?: QuantitativeValue;
}

@ObjectType()
export class Code extends CreativeWork {
}

@ObjectType()
export class DiscoverAction extends FindAction {
}

@ObjectType()
export class InteractionCounter extends StructuredValue {
  @Field((type) => InteractionCounter_StartTimeUnion)
  startTime?: InteractionCounter_StartTime;
  @Field((type) => IntegerScalar)
  userInteractionCount?: IntegerType;
  @Field((type) => InteractionCounter_LocationUnion)
  location?: InteractionCounter_Location;
  @Field((type) => Action)
  interactionType?: Action;
  @Field((type) => InteractionCounter_InteractionServiceUnion)
  interactionService?: InteractionCounter_InteractionService;
  @Field((type) => InteractionCounter_EndTimeUnion)
  endTime?: InteractionCounter_EndTime;
}

@ObjectType()
export class Substance extends MedicalEntity {
  @Field((type) => MaximumDoseSchedule)
  maximumIntake?: MaximumDoseSchedule;
  @Field((type) => TextScalar)
  activeIngredient?: TextType;
}

@ObjectType()
export class RadioSeason extends CreativeWorkSeason {
}

@ObjectType()
export class BusinessEvent extends Event {
}

@ObjectType()
export class AssessAction extends Action {
}

@ObjectType()
export class AudioObjectSnapshot extends AudioObject {
}

@ObjectType()
export class PodcastSeason extends CreativeWorkSeason {
}

@ObjectType()
export class TechArticle extends Article {
  @Field((type) => TextScalar)
  dependencies?: TextType;
  @Field((type) => TextScalar)
  proficiencyLevel?: TextType;
}

@ObjectType()
export class NutritionInformation extends StructuredValue {
  @Field((type) => Mass)
  fatContent?: Mass;
  @Field((type) => TextScalar)
  servingSize?: TextType;
  @Field((type) => Mass)
  proteinContent?: Mass;
  @Field((type) => Energy)
  calories?: Energy;
  @Field((type) => Mass)
  sodiumContent?: Mass;
  @Field((type) => Mass)
  cholesterolContent?: Mass;
  @Field((type) => Mass)
  sugarContent?: Mass;
  @Field((type) => Mass)
  carbohydrateContent?: Mass;
  @Field((type) => Mass)
  transFatContent?: Mass;
  @Field((type) => Mass)
  fiberContent?: Mass;
  @Field((type) => Mass)
  unsaturatedFatContent?: Mass;
  @Field((type) => Mass)
  saturatedFatContent?: Mass;
}

@ObjectType()
export class Table extends WebPageElement {
}

@ObjectType()
export class RadioChannel extends BroadcastChannel {
}

@ObjectType()
export class Series extends Intangible {
}

@ObjectType()
export class Language extends Intangible {
}

@ObjectType()
export class CollegeOrUniversity extends EducationalOrganization {
}

@ObjectType()
export class DataFeed extends Dataset {
  @Field((type) => DataFeed_DataFeedElementUnion)
  dataFeedElement?: DataFeed_DataFeedElement;
}

@ObjectType()
export class TherapeuticProcedure extends MedicalProcedure {
  @Field((type) => MedicalEntity)
  adverseOutcome?: MedicalEntity;
  @Field((type) => Drug)
  drug?: Drug;
  @Field((type) => DoseSchedule)
  doseSchedule?: DoseSchedule;
}

@ObjectType()
export class MusicEvent extends Event {
}

@ObjectType()
export class TradeAction extends Action {
  @Field((type) => TextScalar)
  priceCurrency?: TextType;
  @Field((type) => PriceSpecification)
  priceSpecification?: PriceSpecification;
  @Field((type) => TradeAction_PriceUnion)
  price?: TradeAction_Price;
}

@ObjectType()
export class MovieClip extends Clip {
}

@ObjectType()
export class PublicationVolume extends CreativeWork {
  @Field((type) => PublicationVolume_PageStartUnion)
  pageStart?: PublicationVolume_PageStart;
  @Field((type) => PublicationVolume_PageEndUnion)
  pageEnd?: PublicationVolume_PageEnd;
  @Field((type) => PublicationVolume_VolumeNumberUnion)
  volumeNumber?: PublicationVolume_VolumeNumber;
  @Field((type) => TextScalar)
  pagination?: TextType;
}

@ObjectType()
export class State extends AdministrativeArea {
}

@ObjectType()
export class Pond extends BodyOfWater {
}

@ObjectType()
export class AnatomicalSystem extends MedicalEntity {
  @Field((type) => MedicalTherapy)
  relatedTherapy?: MedicalTherapy;
  @Field((type) => MedicalCondition)
  relatedCondition?: MedicalCondition;
  @Field((type) => AnatomicalStructure)
  relatedStructure?: AnatomicalStructure;
  @Field((type) => TextScalar)
  associatedPathophysiology?: TextType;
  @Field((type) => AnatomicalSystem_ComprisedOfUnion)
  comprisedOf?: AnatomicalSystem_ComprisedOf;
}

@ObjectType()
export class HousePainter extends HomeAndConstructionBusiness {
}

@ObjectType()
export class EnergyConsumptionDetails extends Intangible {
  @Field((type) => EUEnergyEfficiencyEnumeration)
  energyEfficiencyScaleMin?: EUEnergyEfficiencyEnumeration;
  @Field((type) => EnergyEfficiencyEnumeration)
  hasEnergyEfficiencyCategory?: EnergyEfficiencyEnumeration;
  @Field((type) => EUEnergyEfficiencyEnumeration)
  energyEfficiencyScaleMax?: EUEnergyEfficiencyEnumeration;
}

@ObjectType()
export class MedicalTherapy extends TherapeuticProcedure {
  @Field((type) => MedicalTherapy)
  duplicateTherapy?: MedicalTherapy;
  @Field((type) => MedicalEntity)
  seriousAdverseOutcome?: MedicalEntity;
  @Field((type) => MedicalTherapy_ContraindicationUnion)
  contraindication?: MedicalTherapy_Contraindication;
}

@ObjectType()
export class EmployerReview extends Review {
}

@ObjectType()
export class MedicalGuidelineRecommendation extends MedicalGuideline {
  @Field((type) => TextScalar)
  recommendationStrength?: TextType;
}

@ObjectType()
export class Newspaper extends Periodical {
}

@ObjectType()
export class ServiceChannel extends Intangible {
  @Field((type) => Service)
  providesService?: Service;
  @Field((type) => ContactPoint)
  serviceSmsNumber?: ContactPoint;
  @Field((type) => PostalAddress)
  servicePostalAddress?: PostalAddress;
  @Field((type) => UrlScalar)
  serviceUrl?: UrlType;
  @Field((type) => ContactPoint)
  servicePhone?: ContactPoint;
  @Field((type) => ServiceChannel_AvailableLanguageUnion)
  availableLanguage?: ServiceChannel_AvailableLanguage;
  @Field((type) => Duration)
  processingTime?: Duration;
  @Field((type) => Place)
  serviceLocation?: Place;
}

@ObjectType()
export class UserReview extends Review {
}

@ObjectType()
export class QAPage extends WebPage {
}

@ObjectType()
export class ImageObject extends MediaObject {
  @Field((type) => TextScalar)
  embeddedTextCaption?: TextType;
  @Field((type) => BooleanScalar)
  representativeOfPage?: BooleanType;
  @Field((type) => ImageObject_CaptionUnion)
  caption?: ImageObject_Caption;
  @Field((type) => ImageObject)
  thumbnail?: ImageObject;
  @Field((type) => ImageObject_ExifDataUnion)
  exifData?: ImageObject_ExifData;
}

@ObjectType()
export class AdvertiserContentArticle extends Article {
}

@ObjectType()
export class MonetaryAmount extends StructuredValue {
  @Field((type) => NumberScalar)
  maxValue?: NumberType;
  @Field((type) => NumberScalar)
  minValue?: NumberType;
  @Field((type) => MonetaryAmount_ValidFromUnion)
  validFrom?: MonetaryAmount_ValidFrom;
  @Field((type) => MonetaryAmount_ValueUnion)
  value?: MonetaryAmount_Value;
  @Field((type) => TextScalar)
  currency?: TextType;
  @Field((type) => MonetaryAmount_ValidThroughUnion)
  validThrough?: MonetaryAmount_ValidThrough;
}

@ObjectType()
export class Collection extends CreativeWork {
  @Field((type) => IntegerScalar)
  collectionSize?: IntegerType;
}

@ObjectType()
export class GeoCoordinates extends StructuredValue {
  @Field((type) => GeoCoordinates_AddressCountryUnion)
  addressCountry?: GeoCoordinates_AddressCountry;
  @Field((type) => GeoCoordinates_LatitudeUnion)
  latitude?: GeoCoordinates_Latitude;
  @Field((type) => GeoCoordinates_AddressUnion)
  address?: GeoCoordinates_Address;
  @Field((type) => TextScalar)
  postalCode?: TextType;
  @Field((type) => GeoCoordinates_ElevationUnion)
  elevation?: GeoCoordinates_Elevation;
  @Field((type) => GeoCoordinates_LongitudeUnion)
  longitude?: GeoCoordinates_Longitude;
}

@ObjectType()
export class ActionAccessSpecification extends Intangible {
  @Field((type) => Offer)
  expectsAcceptanceOf?: Offer;
  @Field((type) => ActionAccessSpecification_CategoryUnion)
  category?: ActionAccessSpecification_Category;
  @Field((type) => ActionAccessSpecification_IneligibleRegionUnion)
  ineligibleRegion?: ActionAccessSpecification_IneligibleRegion;
  @Field((type) => ActionAccessSpecification_RequiresSubscriptionUnion)
  requiresSubscription?: ActionAccessSpecification_RequiresSubscription;
  @Field((type) => ActionAccessSpecification_AvailabilityEndsUnion)
  availabilityEnds?: ActionAccessSpecification_AvailabilityEnds;
  @Field((type) => ActionAccessSpecification_EligibleRegionUnion)
  eligibleRegion?: ActionAccessSpecification_EligibleRegion;
  @Field((type) => ActionAccessSpecification_AvailabilityStartsUnion)
  availabilityStarts?: ActionAccessSpecification_AvailabilityStarts;
}

@ObjectType()
export class TVEpisode extends Episode {
  @Field((type) => Country)
  override countryOfOrigin?: Country;
  @Field((type) => TVEpisode_TitleEIDRUnion)
  titleEIDR?: TVEpisode_TitleEIDR;
  @Field((type) => TVEpisode_SubtitleLanguageUnion)
  subtitleLanguage?: TVEpisode_SubtitleLanguage;
  @Field((type) => TVSeries)
  partOfTVSeries?: TVSeries;
}

@ObjectType()
export class CheckAction extends FindAction {
}

@ObjectType()
export class PlaceOfWorship extends CivicStructure {
}

@ObjectType()
export class Legislation extends CreativeWork {
  @Field((type) => Legislation)
  legislationTransposes?: Legislation;
  @Field((type) => LegalForceStatus)
  legislationLegalForce?: LegalForceStatus;
  @Field((type) => Legislation_LegislationTypeUnion)
  legislationType?: Legislation_LegislationType;
  @Field((type) => Legislation_JurisdictionUnion)
  jurisdiction?: Legislation_Jurisdiction;
  @Field((type) => Legislation_LegislationIdentifierUnion)
  legislationIdentifier?: Legislation_LegislationIdentifier;
  @Field((type) => Legislation)
  legislationChanges?: Legislation;
  @Field((type) => Legislation_LegislationResponsibleUnion)
  legislationResponsible?: Legislation_LegislationResponsible;
  @Field((type) => Legislation_LegislationJurisdictionUnion)
  legislationJurisdiction?: Legislation_LegislationJurisdiction;
  @Field((type) => DateScalar)
  legislationDate?: DateType;
  @Field((type) => Legislation_LegislationPassedByUnion)
  legislationPassedBy?: Legislation_LegislationPassedBy;
  @Field((type) => Legislation)
  legislationConsolidates?: Legislation;
  @Field((type) => Legislation)
  legislationApplies?: Legislation;
  @Field((type) => DateScalar)
  legislationDateVersion?: DateType;
}

@ObjectType()
export class SpecialAnnouncement extends CreativeWork {
  @Field((type) => GovernmentService)
  governmentBenefitsInfo?: GovernmentService;
  @Field((type) => SpecialAnnouncement_CategoryUnion)
  category?: SpecialAnnouncement_Category;
  @Field((type) => SpecialAnnouncement_DiseaseSpreadStatisticsUnion)
  diseaseSpreadStatistics?: SpecialAnnouncement_DiseaseSpreadStatistics;
  @Field((type) => SpecialAnnouncement_GettingTestedInfoUnion)
  gettingTestedInfo?: SpecialAnnouncement_GettingTestedInfo;
  @Field((type) => SpecialAnnouncement_AnnouncementLocationUnion)
  announcementLocation?: SpecialAnnouncement_AnnouncementLocation;
  @Field((type) => SpecialAnnouncement_TravelBansUnion)
  travelBans?: SpecialAnnouncement_TravelBans;
  @Field((type) => SpecialAnnouncement_DiseasePreventionInfoUnion)
  diseasePreventionInfo?: SpecialAnnouncement_DiseasePreventionInfo;
  @Field((type) => SpecialAnnouncement_PublicTransportClosuresInfoUnion)
  publicTransportClosuresInfo?: SpecialAnnouncement_PublicTransportClosuresInfo;
  @Field((type) => SpecialAnnouncement_SchoolClosuresInfoUnion)
  schoolClosuresInfo?: SpecialAnnouncement_SchoolClosuresInfo;
  @Field((type) => SpecialAnnouncement_DatePostedUnion)
  datePosted?: SpecialAnnouncement_DatePosted;
  @Field((type) => SpecialAnnouncement_NewsUpdatesAndGuidelinesUnion)
  newsUpdatesAndGuidelines?: SpecialAnnouncement_NewsUpdatesAndGuidelines;
  @Field((type) => SpecialAnnouncement_QuarantineGuidelinesUnion)
  quarantineGuidelines?: SpecialAnnouncement_QuarantineGuidelines;
  @Field((type) => SpecialAnnouncement_WebFeedUnion)
  webFeed?: SpecialAnnouncement_WebFeed;
}

@ObjectType()
export class CollectionPage extends WebPage {
}

@ObjectType()
export class MediaReview extends Review {
  @Field((type) => TextScalar)
  originalMediaContextDescription?: TextType;
  @Field((type) => MediaManipulationRatingEnumeration)
  mediaAuthenticityCategory?: MediaManipulationRatingEnumeration;
  @Field((type) => MediaReview_OriginalMediaLinkUnion)
  originalMediaLink?: MediaReview_OriginalMediaLink;
}

@ObjectType()
export class ProfilePage extends WebPage {
}

@ObjectType()
export class PhysicalTherapy extends MedicalTherapy {
}

@ObjectType()
export class PublicationIssue extends CreativeWork {
  @Field((type) => PublicationIssue_PageStartUnion)
  pageStart?: PublicationIssue_PageStart;
  @Field((type) => PublicationIssue_PageEndUnion)
  pageEnd?: PublicationIssue_PageEnd;
  @Field((type) => PublicationIssue_IssueNumberUnion)
  issueNumber?: PublicationIssue_IssueNumber;
  @Field((type) => TextScalar)
  pagination?: TextType;
}

@ObjectType()
export class CDCPMDRecord extends StructuredValue {
  @Field((type) => NumberScalar)
  cvdNumBedsOcc?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumICUBedsOcc?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumVent?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumC19Died?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumTotBeds?: NumberType;
  @Field((type) => TextScalar)
  cvdFacilityCounty?: TextType;
  @Field((type) => NumberScalar)
  cvdNumICUBeds?: NumberType;
  @Field((type) => CDCPMDRecord_CvdCollectionDateUnion)
  cvdCollectionDate?: CDCPMDRecord_CvdCollectionDate;
  @Field((type) => NumberScalar)
  cvdNumC19HOPats?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumC19OFMechVentPats?: NumberType;
  @Field((type) => TextScalar)
  cvdFacilityId?: TextType;
  @Field((type) => NumberScalar)
  cvdNumVentUse?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumBeds?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumC19MechVentPats?: NumberType;
  @Field((type) => CDCPMDRecord_DatePostedUnion)
  datePosted?: CDCPMDRecord_DatePosted;
  @Field((type) => NumberScalar)
  cvdNumC19OverflowPats?: NumberType;
  @Field((type) => NumberScalar)
  cvdNumC19HospPats?: NumberType;
}

@ObjectType()
export class ViewAction extends ConsumeAction {
}

@ObjectType()
export class VideoGameClip extends Clip {
}

@ObjectType()
export class ExchangeRateSpecification extends StructuredValue {
  @Field((type) => UnitPriceSpecification)
  currentExchangeRate?: UnitPriceSpecification;
  @Field((type) => ExchangeRateSpecification_ExchangeRateSpreadUnion)
  exchangeRateSpread?: ExchangeRateSpecification_ExchangeRateSpread;
  @Field((type) => TextScalar)
  currency?: TextType;
}

@ObjectType()
export class MusicPlaylist extends CreativeWork {
  @Field((type) => MusicRecording)
  tracks?: MusicRecording;
  @Field((type) => IntegerScalar)
  numTracks?: IntegerType;
  @Field((type) => MusicPlaylist_TrackUnion)
  track?: MusicPlaylist_Track;
}

@ObjectType()
export class Role extends Intangible {
  @Field((type) => Role_NamedPositionUnion)
  namedPosition?: Role_NamedPosition;
  @Field((type) => Role_StartDateUnion)
  startDate?: Role_StartDate;
  @Field((type) => Role_EndDateUnion)
  endDate?: Role_EndDate;
  @Field((type) => Role_RoleNameUnion)
  roleName?: Role_RoleName;
}

@ObjectType()
export class Playground extends CivicStructure {
}

@ObjectType()
export class OfferShippingDetails extends StructuredValue {
  @Field((type) => DefinedRegion)
  shippingDestination?: DefinedRegion;
  @Field((type) => BooleanScalar)
  doesNotShip?: BooleanType;
  @Field((type) => UrlScalar)
  shippingSettingsLink?: UrlType;
  @Field((type) => TextScalar)
  transitTimeLabel?: TextType;
  @Field((type) => TextScalar)
  shippingLabel?: TextType;
  @Field((type) => ShippingDeliveryTime)
  deliveryTime?: ShippingDeliveryTime;
  @Field((type) => MonetaryAmount)
  shippingRate?: MonetaryAmount;
}

@ObjectType()
export class TelevisionChannel extends BroadcastChannel {
}

@ObjectType()
export class ShippingRateSettings extends StructuredValue {
  @Field((type) => DefinedRegion)
  shippingDestination?: DefinedRegion;
  @Field((type) => BooleanScalar)
  doesNotShip?: BooleanType;
  @Field((type) => TextScalar)
  shippingLabel?: TextType;
  @Field((type) => BooleanScalar)
  isUnlabelledFallback?: BooleanType;
  @Field((type) => MonetaryAmount)
  shippingRate?: MonetaryAmount;
  @Field((type) => ShippingRateSettings_FreeShippingThresholdUnion)
  freeShippingThreshold?: ShippingRateSettings_FreeShippingThreshold;
}

@ObjectType()
export class PresentationDigitalDocument extends DigitalDocument {
}

@ObjectType()
export class LeaveAction extends InteractAction {
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class SearchAction extends Action {
  @Field((type) => TextScalar)
  query?: TextType;
}

@ObjectType()
export class Crematorium extends CivicStructure {
}

@ObjectType()
export class MedicalWebPage extends WebPage {
  @Field((type) => TextScalar)
  aspect?: TextType;
  @Field((type) => MedicalWebPage_MedicalAudienceUnion)
  medicalAudience?: MedicalWebPage_MedicalAudience;
}

@ObjectType()
export class InviteAction extends CommunicateAction {
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class EatAction extends ConsumeAction {
}

@ObjectType()
export class OnDemandEvent extends PublicationEvent {
}

@ObjectType()
export class ChildrensEvent extends Event {
}

@ObjectType()
export class ProgramMembership extends Intangible {
  @Field((type) => ProgramMembership_MembershipPointsEarnedUnion)
  membershipPointsEarned?: ProgramMembership_MembershipPointsEarned;
  @Field((type) => ProgramMembership_MemberUnion)
  member?: ProgramMembership_Member;
  @Field((type) => TextScalar)
  membershipNumber?: TextType;
  @Field((type) => Organization)
  hostingOrganization?: Organization;
  @Field((type) => TextScalar)
  programName?: TextType;
  @Field((type) => ProgramMembership_MembersUnion)
  members?: ProgramMembership_Members;
}

@ObjectType()
export class MedicalConditionStage extends MedicalIntangible {
  @Field((type) => TextScalar)
  subStageSuffix?: TextType;
  @Field((type) => NumberScalar)
  stageAsNumber?: NumberType;
}

@ObjectType()
export class PayAction extends TradeAction {
  @Field((type) => PayAction_RecipientUnion)
  recipient?: PayAction_Recipient;
}

@ObjectType()
export class HealthPlanFormulary extends Intangible {
  @Field((type) => BooleanScalar)
  offersPrescriptionByMail?: BooleanType;
  @Field((type) => TextScalar)
  healthPlanDrugTier?: TextType;
  @Field((type) => BooleanScalar)
  healthPlanCostSharing?: BooleanType;
}

@ObjectType()
export class DataDownload extends MediaObject {
  @Field((type) => DataDownload_MeasurementTechniqueUnion)
  measurementTechnique?: DataDownload_MeasurementTechnique;
}

@ObjectType()
export class BrainStructure extends AnatomicalStructure {
}

@ObjectType()
export class ProductModel extends Product {
  @Field((type) => ProductModel)
  successorOf?: ProductModel;
  @Field((type) => ProductModel)
  predecessorOf?: ProductModel;
  @Field((type) => ProductModel_IsVariantOfUnion)
  override isVariantOf?: ProductModel_IsVariantOf;
}

@ObjectType()
export class MedicalObservationalStudy extends MedicalStudy {
  @Field((type) => MedicalObservationalStudyDesign)
  studyDesign?: MedicalObservationalStudyDesign;
}

@ObjectType()
export class VisualArtsEvent extends Event {
}

@ObjectType()
export class Canal extends BodyOfWater {
}

@ObjectType()
export class SatiricalArticle extends Article {
}

@ObjectType()
export class WorkBasedProgram extends EducationalOccupationalProgram {
  @Field((type) => MonetaryAmountDistribution)
  override trainingSalary?: MonetaryAmountDistribution;
  @Field((type) => WorkBasedProgram_OccupationalCategoryUnion)
  override occupationalCategory?: WorkBasedProgram_OccupationalCategory;
}

@ObjectType()
export class Church extends PlaceOfWorship {
}

@ObjectType()
export class GovernmentBuilding extends CivicStructure {
}

@ObjectType()
export class CatholicChurch extends Church {
}

@ObjectType()
export class BoatTrip extends Trip {
  @Field((type) => BoatTerminal)
  arrivalBoatTerminal?: BoatTerminal;
  @Field((type) => BoatTerminal)
  departureBoatTerminal?: BoatTerminal;
}

@ObjectType()
export class TrainTrip extends Trip {
  @Field((type) => TextScalar)
  trainName?: TextType;
  @Field((type) => TrainStation)
  departureStation?: TrainStation;
  @Field((type) => TextScalar)
  departurePlatform?: TextType;
  @Field((type) => TextScalar)
  trainNumber?: TextType;
  @Field((type) => TextScalar)
  arrivalPlatform?: TextType;
  @Field((type) => TrainStation)
  arrivalStation?: TrainStation;
}

@ObjectType()
export class Flight extends Trip {
  @Field((type) => Flight_FlightDistanceUnion)
  flightDistance?: Flight_FlightDistance;
  @Field((type) => DateTimeScalar)
  webCheckinTime?: DateTimeType;
  @Field((type) => Flight_AircraftUnion)
  aircraft?: Flight_Aircraft;
  @Field((type) => Flight_SellerUnion)
  seller?: Flight_Seller;
  @Field((type) => Airport)
  arrivalAirport?: Airport;
  @Field((type) => TextScalar)
  arrivalTerminal?: TextType;
  @Field((type) => Airport)
  departureAirport?: Airport;
  @Field((type) => TextScalar)
  arrivalGate?: TextType;
  @Field((type) => TextScalar)
  departureTerminal?: TextType;
  @Field((type) => Organization)
  carrier?: Organization;
  @Field((type) => Flight_EstimatedFlightDurationUnion)
  estimatedFlightDuration?: Flight_EstimatedFlightDuration;
  @Field((type) => TextScalar)
  departureGate?: TextType;
  @Field((type) => TextScalar)
  flightNumber?: TextType;
  @Field((type) => TextScalar)
  mealService?: TextType;
  @Field((type) => BoardingPolicyType)
  boardingPolicy?: BoardingPolicyType;
}

@ObjectType()
export class DatedMoneySpecification extends StructuredValue {
  @Field((type) => DatedMoneySpecification_StartDateUnion)
  startDate?: DatedMoneySpecification_StartDate;
  @Field((type) => DatedMoneySpecification_EndDateUnion)
  endDate?: DatedMoneySpecification_EndDate;
  @Field((type) => TextScalar)
  currency?: TextType;
  @Field((type) => DatedMoneySpecification_AmountUnion)
  amount?: DatedMoneySpecification_Amount;
}

@ObjectType()
export class FoodEvent extends Event {
}

@ObjectType()
export class ReserveAction extends PlanAction {
}

@ObjectType()
export class ParkingFacility extends CivicStructure {
}

@ObjectType()
export class PreventionIndication extends MedicalIndication {
}

@ObjectType()
export class EntryPoint extends Intangible {
  @Field((type) => SoftwareApplication)
  actionApplication?: SoftwareApplication;
  @Field((type) => SoftwareApplication)
  application?: SoftwareApplication;
  @Field((type) => EntryPoint_ActionPlatformUnion)
  actionPlatform?: EntryPoint_ActionPlatform;
  @Field((type) => TextScalar)
  httpMethod?: TextType;
  @Field((type) => TextScalar)
  urlTemplate?: TextType;
  @Field((type) => TextScalar)
  encodingType?: TextType;
  @Field((type) => TextScalar)
  contentType?: TextType;
}

@ObjectType()
export class TransferAction extends Action {
  @Field((type) => Place)
  fromLocation?: Place;
  @Field((type) => Place)
  toLocation?: Place;
}

@ObjectType()
export class Barcode extends ImageObject {
}

@ObjectType()
export class LiteraryEvent extends Event {
}

@ObjectType()
export class MedicalSign extends MedicalSignOrSymptom {
  @Field((type) => MedicalTest)
  identifyingTest?: MedicalTest;
  @Field((type) => PhysicalExam)
  identifyingExam?: PhysicalExam;
}

@ObjectType()
export class Observation extends Intangible {
  @Field((type) => DataType)
  measuredValue?: DataType;
  @Field((type) => StatisticalPopulation)
  observedNode?: StatisticalPopulation;
  @Field((type) => Property)
  measuredProperty?: Property;
  @Field((type) => DateTimeScalar)
  observationDate?: DateTimeType;
  @Field((type) => QuantitativeValue)
  marginOfError?: QuantitativeValue;
}

@ObjectType()
export class AlignmentObject extends Intangible {
  @Field((type) => TextScalar)
  alignmentType?: TextType;
  @Field((type) => TextScalar)
  educationalFramework?: TextType;
  @Field((type) => TextScalar)
  targetDescription?: TextType;
  @Field((type) => TextScalar)
  targetName?: TextType;
  @Field((type) => UrlScalar)
  targetUrl?: UrlType;
}

@ObjectType()
export class TheaterGroup extends PerformingGroup {
}

@ObjectType()
export class LinkRole extends Role {
  @Field((type) => TextScalar)
  linkRelationship?: TextType;
  @Field((type) => LinkRole_InLanguageUnion)
  inLanguage?: LinkRole_InLanguage;
}

@ObjectType()
export class CampingPitch extends Accommodation {
}

@ObjectType()
export class Question extends Comment {
  @Field((type) => Question_SuggestedAnswerUnion)
  suggestedAnswer?: Question_SuggestedAnswer;
  @Field((type) => Question_AcceptedAnswerUnion)
  acceptedAnswer?: Question_AcceptedAnswer;
  @Field((type) => IntegerScalar)
  answerCount?: IntegerType;
  @Field((type) => TextScalar)
  eduQuestionType?: TextType;
}

@ObjectType()
export class RiverBodyOfWater extends BodyOfWater {
}

@ObjectType()
export class DownloadAction extends TransferAction {
}

@ObjectType()
export class UnRegisterAction extends InteractAction {
}

@ObjectType()
export class Beach extends CivicStructure {
}

@ObjectType()
export class Rating extends Intangible {
  @Field((type) => TextScalar)
  reviewAspect?: TextType;
  @Field((type) => Rating_WorstRatingUnion)
  worstRating?: Rating_WorstRating;
  @Field((type) => Rating_AuthorUnion)
  author?: Rating_Author;
  @Field((type) => Rating_BestRatingUnion)
  bestRating?: Rating_BestRating;
  @Field((type) => Rating_RatingValueUnion)
  ratingValue?: Rating_RatingValue;
  @Field((type) => TextScalar)
  ratingExplanation?: TextType;
}

@ObjectType()
export class SurgicalProcedure extends MedicalProcedure {
}

@ObjectType()
export class BusTrip extends Trip {
  @Field((type) => BusTrip_DepartureBusStopUnion)
  departureBusStop?: BusTrip_DepartureBusStop;
  @Field((type) => TextScalar)
  busName?: TextType;
  @Field((type) => BusTrip_ArrivalBusStopUnion)
  arrivalBusStop?: BusTrip_ArrivalBusStop;
  @Field((type) => TextScalar)
  busNumber?: TextType;
}

@ObjectType()
export class MenuItem extends Intangible {
  @Field((type) => MenuItem_MenuAddOnUnion)
  menuAddOn?: MenuItem_MenuAddOn;
  @Field((type) => MenuItem_OffersUnion)
  offers?: MenuItem_Offers;
  @Field((type) => RestrictedDiet)
  suitableForDiet?: RestrictedDiet;
  @Field((type) => NutritionInformation)
  nutrition?: NutritionInformation;
}

@ObjectType()
export class TypeAndQuantityNode extends StructuredValue {
  @Field((type) => TextScalar)
  unitText?: TextType;
  @Field((type) => BusinessFunction)
  businessFunction?: BusinessFunction;
  @Field((type) => TypeAndQuantityNode_TypeOfGoodUnion)
  typeOfGood?: TypeAndQuantityNode_TypeOfGood;
  @Field((type) => NumberScalar)
  amountOfThisGood?: NumberType;
  @Field((type) => TypeAndQuantityNode_UnitCodeUnion)
  unitCode?: TypeAndQuantityNode_UnitCode;
}

@ObjectType()
export class Embassy extends GovernmentBuilding {
}

@ObjectType()
export class ControlAction extends Action {
}

@ObjectType()
export class Quiz extends LearningResource {
}

@ObjectType()
export class MerchantReturnPolicySeasonalOverride extends Intangible {
  @Field((type) => MerchantReturnEnumeration)
  returnPolicyCategory?: MerchantReturnEnumeration;
  @Field((type) => MerchantReturnPolicySeasonalOverride_StartDateUnion)
  startDate?: MerchantReturnPolicySeasonalOverride_StartDate;
  @Field((type) => MerchantReturnPolicySeasonalOverride_EndDateUnion)
  endDate?: MerchantReturnPolicySeasonalOverride_EndDate;
  @Field((type) => MerchantReturnPolicySeasonalOverride_MerchantReturnDaysUnion)
  merchantReturnDays?: MerchantReturnPolicySeasonalOverride_MerchantReturnDays;
}

@ObjectType()
export class ReplaceAction extends UpdateAction {
  @Field((type) => Thing)
  replacee?: Thing;
  @Field((type) => Thing)
  replacer?: Thing;
}

@ObjectType()
export class DeliveryEvent extends Event {
  @Field((type) => TextScalar)
  accessCode?: TextType;
  @Field((type) => DateTimeScalar)
  availableThrough?: DateTimeType;
  @Field((type) => DeliveryMethod)
  hasDeliveryMethod?: DeliveryMethod;
  @Field((type) => DateTimeScalar)
  availableFrom?: DateTimeType;
}

@ObjectType()
export class BookmarkAction extends OrganizeAction {
}

@ObjectType()
export class Grant extends Intangible {
  @Field((type) => Grant_FunderUnion)
  funder?: Grant_Funder;
  @Field((type) => Grant_FundedItemUnion)
  fundedItem?: Grant_FundedItem;
  @Field((type) => Grant_SponsorUnion)
  sponsor?: Grant_Sponsor;
}

@ObjectType()
export class Offer extends Intangible {
  @Field((type) => AdultOrientedEnumeration)
  hasAdultConsideration?: AdultOrientedEnumeration;
  @Field((type) => TextScalar)
  gtin12?: TextType;
  @Field((type) => Review)
  review?: Review;
  @Field((type) => Offer_ItemOfferedUnion)
  itemOffered?: Offer_ItemOffered;
  @Field((type) => Offer_CategoryUnion)
  category?: Offer_Category;
  @Field((type) => DateScalar)
  priceValidUntil?: DateType;
  @Field((type) => OfferShippingDetails)
  shippingDetails?: OfferShippingDetails;
  @Field((type) => TextScalar)
  mpn?: TextType;
  @Field((type) => TypeAndQuantityNode)
  includesObject?: TypeAndQuantityNode;
  @Field((type) => BusinessFunction)
  businessFunction?: BusinessFunction;
  @Field((type) => OfferItemCondition)
  itemCondition?: OfferItemCondition;
  @Field((type) => TextScalar)
  gtin?: TextType;
  @Field((type) => QuantitativeValue)
  eligibleQuantity?: QuantitativeValue;
  @Field((type) => Offer_AcceptedPaymentMethodUnion)
  acceptedPaymentMethod?: Offer_AcceptedPaymentMethod;
  @Field((type) => WarrantyPromise)
  warranty?: WarrantyPromise;
  @Field((type) => Offer_SellerUnion)
  seller?: Offer_Seller;
  @Field((type) => Offer_IneligibleRegionUnion)
  ineligibleRegion?: Offer_IneligibleRegion;
  @Field((type) => Offer_LeaseLengthUnion)
  leaseLength?: Offer_LeaseLength;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => Offer_OfferedByUnion)
  offeredBy?: Offer_OfferedBy;
  @Field((type) => QuantitativeValue)
  deliveryLeadTime?: QuantitativeValue;
  @Field((type) => DeliveryMethod)
  availableDeliveryMethod?: DeliveryMethod;
  @Field((type) => Offer_ValidFromUnion)
  validFrom?: Offer_ValidFrom;
  @Field((type) => Offer_AvailabilityEndsUnion)
  availabilityEnds?: Offer_AvailabilityEnds;
  @Field((type) => Offer_EligibleRegionUnion)
  eligibleRegion?: Offer_EligibleRegion;
  @Field((type) => QuantitativeValue)
  hasMeasurement?: QuantitativeValue;
  @Field((type) => TextScalar)
  gtin8?: TextType;
  @Field((type) => QuantitativeValue)
  inventoryLevel?: QuantitativeValue;
  @Field((type) => TextScalar)
  sku?: TextType;
  @Field((type) => Offer)
  addOn?: Offer;
  @Field((type) => MerchantReturnPolicy)
  hasMerchantReturnPolicy?: MerchantReturnPolicy;
  @Field((type) => QuantitativeValue)
  advanceBookingRequirement?: QuantitativeValue;
  @Field((type) => TextScalar)
  gtin14?: TextType;
  @Field((type) => TextScalar)
  priceCurrency?: TextType;
  @Field((type) => PriceSpecification)
  eligibleTransactionVolume?: PriceSpecification;
  @Field((type) => Offer_AreaServedUnion)
  areaServed?: Offer_AreaServed;
  @Field((type) => BusinessEntityType)
  eligibleCustomerType?: BusinessEntityType;
  @Field((type) => ItemAvailability)
  availability?: ItemAvailability;
  @Field((type) => TextScalar)
  gtin13?: TextType;
  @Field((type) => Review)
  reviews?: Review;
  @Field((type) => BooleanScalar)
  isFamilyFriendly?: BooleanType;
  @Field((type) => Offer_ValidThroughUnion)
  validThrough?: Offer_ValidThrough;
  @Field((type) => PriceSpecification)
  priceSpecification?: PriceSpecification;
  @Field((type) => Offer_PriceUnion)
  price?: Offer_Price;
  @Field((type) => Offer_AvailabilityStartsUnion)
  availabilityStarts?: Offer_AvailabilityStarts;
  @Field((type) => QuantitativeValue)
  eligibleDuration?: QuantitativeValue;
  @Field((type) => Place)
  availableAtOrFrom?: Place;
  @Field((type) => TextScalar)
  serialNumber?: TextType;
}

@ObjectType()
export class Joint extends AnatomicalStructure {
  @Field((type) => TextScalar)
  structuralClass?: TextType;
  @Field((type) => TextScalar)
  biomechnicalClass?: TextType;
  @Field((type) => Joint_FunctionalClassUnion)
  functionalClass?: Joint_FunctionalClass;
}

@ObjectType()
export class MoneyTransfer extends TransferAction {
  @Field((type) => MoneyTransfer_BeneficiaryBankUnion)
  beneficiaryBank?: MoneyTransfer_BeneficiaryBank;
  @Field((type) => MoneyTransfer_AmountUnion)
  amount?: MoneyTransfer_Amount;
}

@ObjectType()
export class TreatmentIndication extends MedicalIndication {
}

@ObjectType()
export class ItemList extends Intangible {
  @Field((type) => IntegerScalar)
  numberOfItems?: IntegerType;
  @Field((type) => ItemList_ItemListElementUnion)
  itemListElement?: ItemList_ItemListElement;
  @Field((type) => ItemList_ItemListOrderUnion)
  itemListOrder?: ItemList_ItemListOrder;
}

@ObjectType()
export class OfferCatalog extends ItemList {
}

@ObjectType()
export class OccupationalTherapy extends MedicalTherapy {
}

@ObjectType()
export class ScholarlyArticle extends Article {
}

@ObjectType()
export class WebApplication extends SoftwareApplication {
  @Field((type) => TextScalar)
  browserRequirements?: TextType;
}

@ObjectType()
export class ExhibitionEvent extends Event {
}

@ObjectType()
export class Audience extends Intangible {
  @Field((type) => TextScalar)
  audienceType?: TextType;
  @Field((type) => AdministrativeArea)
  geographicArea?: AdministrativeArea;
}

@ObjectType()
export class Artery extends Vessel {
  @Field((type) => AnatomicalStructure)
  supplyTo?: AnatomicalStructure;
  @Field((type) => AnatomicalStructure)
  arterialBranch?: AnatomicalStructure;
}

@ObjectType()
export class SingleFamilyResidence extends House {
  @Field((type) => SingleFamilyResidence_NumberOfRoomsUnion)
  override numberOfRooms?: SingleFamilyResidence_NumberOfRooms;
  @Field((type) => QuantitativeValue)
  occupancy?: QuantitativeValue;
}

@ObjectType()
export class MedicalTrial extends MedicalStudy {
  @Field((type) => MedicalTrialDesign)
  trialDesign?: MedicalTrialDesign;
}

@ObjectType()
export class PsychologicalTreatment extends TherapeuticProcedure {
}

@ObjectType()
export class VirtualLocation extends Intangible {
}

@ObjectType()
export class Occupation extends Intangible {
  @Field((type) => Occupation_EstimatedSalaryUnion)
  estimatedSalary?: Occupation_EstimatedSalary;
  @Field((type) => TextScalar)
  responsibilities?: TextType;
  @Field((type) => AdministrativeArea)
  occupationLocation?: AdministrativeArea;
  @Field((type) => Occupation_ExperienceRequirementsUnion)
  experienceRequirements?: Occupation_ExperienceRequirements;
  @Field((type) => Occupation_EducationRequirementsUnion)
  educationRequirements?: Occupation_EducationRequirements;
  @Field((type) => Occupation_SkillsUnion)
  skills?: Occupation_Skills;
  @Field((type) => Occupation_QualificationsUnion)
  qualifications?: Occupation_Qualifications;
  @Field((type) => Occupation_OccupationalCategoryUnion)
  occupationalCategory?: Occupation_OccupationalCategory;
}

@ObjectType()
export class FollowAction extends InteractAction {
  @Field((type) => FollowAction_FolloweeUnion)
  followee?: FollowAction_Followee;
}

@ObjectType()
export class UseAction extends ConsumeAction {
}

@ObjectType()
export class EventVenue extends CivicStructure {
}

@ObjectType()
export class Hackathon extends Event {
}

@ObjectType()
export class CreateAction extends Action {
}

@ObjectType()
export class BorrowAction extends TransferAction {
  @Field((type) => BorrowAction_LenderUnion)
  lender?: BorrowAction_Lender;
}

@ObjectType()
export class PropertyValue extends StructuredValue {
  @Field((type) => PropertyValue_ValueReferenceUnion)
  valueReference?: PropertyValue_ValueReference;
  @Field((type) => PropertyValue_PropertyIDUnion)
  propertyID?: PropertyValue_PropertyID;
  @Field((type) => NumberScalar)
  maxValue?: NumberType;
  @Field((type) => TextScalar)
  unitText?: TextType;
  @Field((type) => PropertyValue_MeasurementTechniqueUnion)
  measurementTechnique?: PropertyValue_MeasurementTechnique;
  @Field((type) => NumberScalar)
  minValue?: NumberType;
  @Field((type) => PropertyValue_ValueUnion)
  value?: PropertyValue_Value;
  @Field((type) => PropertyValue_UnitCodeUnion)
  unitCode?: PropertyValue_UnitCode;
}

@ObjectType()
export class DiagnosticProcedure extends MedicalProcedure {
}

@ObjectType()
export class DrinkAction extends ConsumeAction {
}

@ObjectType()
export class Room extends Accommodation {
}

@ObjectType()
export class TravelAction extends MoveAction {
  @Field((type) => Distance)
  distance?: Distance;
}

@ObjectType()
export class Recommendation extends Review {
  @Field((type) => Recommendation_CategoryUnion)
  category?: Recommendation_Category;
}

@ObjectType()
export class SeaBodyOfWater extends BodyOfWater {
}

@ObjectType()
export class OccupationalExperienceRequirements extends Intangible {
  @Field((type) => NumberScalar)
  monthsOfExperience?: NumberType;
}

@ObjectType()
export class TVClip extends Clip {
  @Field((type) => TVSeries)
  partOfTVSeries?: TVSeries;
}

@ObjectType()
export class TakeAction extends TransferAction {
}

@ObjectType()
export class LendAction extends TransferAction {
  @Field((type) => Person)
  borrower?: Person;
}

@ObjectType()
export class DefenceEstablishment extends GovernmentBuilding {
}

@ObjectType()
export class Reservoir extends BodyOfWater {
}

@ObjectType()
export class GiveAction extends TransferAction {
  @Field((type) => GiveAction_RecipientUnion)
  recipient?: GiveAction_Recipient;
}

@ObjectType()
export class DigitalDocumentPermission extends Intangible {
  @Field((type) => DigitalDocumentPermission_GranteeUnion)
  grantee?: DigitalDocumentPermission_Grantee;
  @Field((type) => DigitalDocumentPermissionType)
  permissionType?: DigitalDocumentPermissionType;
}

@ObjectType()
export class SeekToAction extends Action {
  @Field((type) => SeekToAction_StartOffsetUnion)
  startOffset?: SeekToAction_StartOffset;
}

@ObjectType()
export class HealthPlanCostSharingSpecification extends Intangible {
  @Field((type) => NumberScalar)
  healthPlanCoinsuranceRate?: NumberType;
  @Field((type) => TextScalar)
  healthPlanCoinsuranceOption?: TextType;
  @Field((type) => TextScalar)
  healthPlanPharmacyCategory?: TextType;
  @Field((type) => PriceSpecification)
  healthPlanCopay?: PriceSpecification;
  @Field((type) => TextScalar)
  healthPlanCopayOption?: TextType;
}

@ObjectType()
export class BusStation extends CivicStructure {
}

@ObjectType()
export class RadioClip extends Clip {
}

@ObjectType()
export class MaximumDoseSchedule extends DoseSchedule {
}

@ObjectType()
export class ItemPage extends WebPage {
}

@ObjectType()
export class PublicToilet extends CivicStructure {
}

@ObjectType()
export class RegisterAction extends InteractAction {
}

@ObjectType()
export class ScheduleAction extends PlanAction {
}

@ObjectType()
export class HealthInsurancePlan extends Intangible {
  @Field((type) => HealthPlanFormulary)
  includesHealthPlanFormulary?: HealthPlanFormulary;
  @Field((type) => UrlScalar)
  benefitsSummaryUrl?: UrlType;
  @Field((type) => TextScalar)
  healthPlanDrugOption?: TextType;
  @Field((type) => TextScalar)
  healthPlanDrugTier?: TextType;
  @Field((type) => TextScalar)
  healthPlanId?: TextType;
  @Field((type) => ContactPoint)
  contactPoint?: ContactPoint;
  @Field((type) => HealthInsurancePlan_UsesHealthPlanIdStandardUnion)
  usesHealthPlanIdStandard?: HealthInsurancePlan_UsesHealthPlanIdStandard;
  @Field((type) => HealthPlanNetwork)
  includesHealthPlanNetwork?: HealthPlanNetwork;
  @Field((type) => UrlScalar)
  healthPlanMarketingUrl?: UrlType;
}

@ObjectType()
export class AddAction extends UpdateAction {
}

@ObjectType()
export class ApplyAction extends OrganizeAction {
}

@ObjectType()
export class Vein extends Vessel {
  @Field((type) => Vein_RegionDrainedUnion)
  regionDrained?: Vein_RegionDrained;
  @Field((type) => AnatomicalStructure)
  tributary?: AnatomicalStructure;
  @Field((type) => Vessel)
  drainsTo?: Vessel;
}

@ObjectType()
export class UserInteraction extends Event {
}

@ObjectType()
export class UserBlocks extends UserInteraction {
}

@ObjectType()
export class Quantity extends Intangible {
}

@ObjectType()
export class Distance extends Quantity {
}

@ObjectType()
export class StatisticalPopulation extends Intangible {
  @Field((type) => Class)
  populationType?: Class;
  @Field((type) => IntegerScalar)
  numConstraints?: IntegerType;
  @Field((type) => IntegerScalar)
  constrainingProperty?: IntegerType;
}

@ObjectType()
export class InstallAction extends ConsumeAction {
}

@ObjectType()
export class VitalSign extends MedicalSign {
}

@ObjectType()
export class CommentAction extends CommunicateAction {
  @Field((type) => Comment)
  resultComment?: Comment;
}

@ObjectType()
export class WatchAction extends ConsumeAction {
}

@ObjectType()
export class FloorPlan extends Intangible {
  @Field((type) => Accommodation)
  isPlanForApartment?: Accommodation;
  @Field((type) => IntegerScalar)
  numberOfBathroomsTotal?: IntegerType;
  @Field((type) => FloorPlan_NumberOfRoomsUnion)
  numberOfRooms?: FloorPlan_NumberOfRooms;
  @Field((type) => QuantitativeValue)
  numberOfAccommodationUnits?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  numberOfAvailableAccommodationUnits?: QuantitativeValue;
  @Field((type) => LocationFeatureSpecification)
  amenityFeature?: LocationFeatureSpecification;
  @Field((type) => FloorPlan_NumberOfBedroomsUnion)
  numberOfBedrooms?: FloorPlan_NumberOfBedrooms;
  @Field((type) => NumberScalar)
  numberOfPartialBathrooms?: NumberType;
  @Field((type) => QuantitativeValue)
  floorSize?: QuantitativeValue;
  @Field((type) => NumberScalar)
  numberOfFullBathrooms?: NumberType;
  @Field((type) => FloorPlan_PetsAllowedUnion)
  petsAllowed?: FloorPlan_PetsAllowed;
  @Field((type) => FloorPlan_LayoutImageUnion)
  layoutImage?: FloorPlan_LayoutImage;
}

@ObjectType()
export class Class extends Intangible {
  @Field((type) => Class_SupersededByUnion)
  supersededBy?: Class_SupersededBy;
}

@ObjectType()
export class CheckOutAction extends CommunicateAction {
}

@ObjectType()
export class BuyAction extends TradeAction {
  @Field((type) => WarrantyPromise)
  warrantyPromise?: WarrantyPromise;
  @Field((type) => BuyAction_SellerUnion)
  seller?: BuyAction_Seller;
  @Field((type) => BuyAction_VendorUnion)
  vendor?: BuyAction_Vendor;
}

@ObjectType()
export class Festival extends Event {
}

@ObjectType()
export class MarryAction extends InteractAction {
}

@ObjectType()
export class PriceSpecification extends StructuredValue {
  @Field((type) => NumberScalar)
  minPrice?: NumberType;
  @Field((type) => QuantitativeValue)
  eligibleQuantity?: QuantitativeValue;
  @Field((type) => PriceSpecification_ValidFromUnion)
  validFrom?: PriceSpecification_ValidFrom;
  @Field((type) => NumberScalar)
  maxPrice?: NumberType;
  @Field((type) => TextScalar)
  priceCurrency?: TextType;
  @Field((type) => BooleanScalar)
  valueAddedTaxIncluded?: BooleanType;
  @Field((type) => PriceSpecification)
  eligibleTransactionVolume?: PriceSpecification;
  @Field((type) => PriceSpecification_ValidThroughUnion)
  validThrough?: PriceSpecification_ValidThrough;
  @Field((type) => PriceSpecification_PriceUnion)
  price?: PriceSpecification_Price;
}

@ObjectType()
export class SportsEvent extends Event {
  @Field((type) => SportsEvent_HomeTeamUnion)
  homeTeam?: SportsEvent_HomeTeam;
  @Field((type) => SportsEvent_AwayTeamUnion)
  awayTeam?: SportsEvent_AwayTeam;
  @Field((type) => SportsEvent_CompetitorUnion)
  competitor?: SportsEvent_Competitor;
  @Field((type) => SportsEvent_SportUnion)
  sport?: SportsEvent_Sport;
}

@ObjectType()
export class WinAction extends AchieveAction {
  @Field((type) => Person)
  loser?: Person;
}

@ObjectType()
export class RVPark extends CivicStructure {
}

@ObjectType()
export class Energy extends Quantity {
}

@ObjectType()
export class Brand extends Intangible {
  @Field((type) => Review)
  review?: Review;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => TextScalar)
  slogan?: TextType;
  @Field((type) => Brand_LogoUnion)
  logo?: Brand_Logo;
}

@ObjectType()
export class ContactPoint extends StructuredValue {
  @Field((type) => TextScalar)
  telephone?: TextType;
  @Field((type) => OpeningHoursSpecification)
  hoursAvailable?: OpeningHoursSpecification;
  @Field((type) => TextScalar)
  email?: TextType;
  @Field((type) => ContactPointOption)
  contactOption?: ContactPointOption;
  @Field((type) => ContactPoint_AvailableLanguageUnion)
  availableLanguage?: ContactPoint_AvailableLanguage;
  @Field((type) => ContactPoint_ServiceAreaUnion)
  serviceArea?: ContactPoint_ServiceArea;
  @Field((type) => ContactPoint_AreaServedUnion)
  areaServed?: ContactPoint_AreaServed;
  @Field((type) => TextScalar)
  contactType?: TextType;
  @Field((type) => ContactPoint_ProductSupportedUnion)
  productSupported?: ContactPoint_ProductSupported;
  @Field((type) => TextScalar)
  faxNumber?: TextType;
}

@ObjectType()
export class JobPosting extends Intangible {
  @Field((type) => TextScalar)
  employerOverview?: TextType;
  @Field((type) => JobPosting_EstimatedSalaryUnion)
  estimatedSalary?: JobPosting_EstimatedSalary;
  @Field((type) => TextScalar)
  jobLocationType?: TextType;
  @Field((type) => TextScalar)
  responsibilities?: TextType;
  @Field((type) => Place)
  jobLocation?: Place;
  @Field((type) => JobPosting_PhysicalRequirementUnion)
  physicalRequirement?: JobPosting_PhysicalRequirement;
  @Field((type) => TextScalar)
  incentives?: TextType;
  @Field((type) => BooleanScalar)
  directApply?: BooleanType;
  @Field((type) => JobPosting_SensoryRequirementUnion)
  sensoryRequirement?: JobPosting_SensoryRequirement;
  @Field((type) => AdministrativeArea)
  applicantLocationRequirements?: AdministrativeArea;
  @Field((type) => TextScalar)
  workHours?: TextType;
  @Field((type) => JobPosting_JobStartDateUnion)
  jobStartDate?: JobPosting_JobStartDate;
  @Field((type) => TextScalar)
  employmentType?: TextType;
  @Field((type) => TextScalar)
  specialCommitments?: TextType;
  @Field((type) => ContactPoint)
  applicationContact?: ContactPoint;
  @Field((type) => TextScalar)
  incentiveCompensation?: TextType;
  @Field((type) => Occupation)
  relevantOccupation?: Occupation;
  @Field((type) => IntegerScalar)
  totalJobOpenings?: IntegerType;
  @Field((type) => JobPosting_ExperienceRequirementsUnion)
  experienceRequirements?: JobPosting_ExperienceRequirements;
  @Field((type) => TextScalar)
  jobBenefits?: TextType;
  @Field((type) => TextScalar)
  salaryCurrency?: TextType;
  @Field((type) => BooleanScalar)
  experienceInPlaceOfEducation?: BooleanType;
  @Field((type) => JobPosting_SecurityClearanceRequirementUnion)
  securityClearanceRequirement?: JobPosting_SecurityClearanceRequirement;
  @Field((type) => TextScalar)
  eligibilityToWorkRequirement?: TextType;
  @Field((type) => JobPosting_EducationRequirementsUnion)
  educationRequirements?: JobPosting_EducationRequirements;
  @Field((type) => TextScalar)
  benefits?: TextType;
  @Field((type) => JobPosting_IndustryUnion)
  industry?: JobPosting_Industry;
  @Field((type) => JobPosting_BaseSalaryUnion)
  baseSalary?: JobPosting_BaseSalary;
  @Field((type) => JobPosting_DatePostedUnion)
  datePosted?: JobPosting_DatePosted;
  @Field((type) => JobPosting_SkillsUnion)
  skills?: JobPosting_Skills;
  @Field((type) => TextScalar)
  title?: TextType;
  @Field((type) => Organization)
  hiringOrganization?: Organization;
  @Field((type) => BooleanScalar)
  jobImmediateStart?: BooleanType;
  @Field((type) => JobPosting_ValidThroughUnion)
  validThrough?: JobPosting_ValidThrough;
  @Field((type) => Organization)
  employmentUnit?: Organization;
  @Field((type) => JobPosting_QualificationsUnion)
  qualifications?: JobPosting_Qualifications;
  @Field((type) => JobPosting_OccupationalCategoryUnion)
  occupationalCategory?: JobPosting_OccupationalCategory;
}

@ObjectType()
export class MedicalRiskScore extends MedicalRiskEstimator {
  @Field((type) => TextScalar)
  algorithm?: TextType;
}

@ObjectType()
export class HotelRoom extends Room {
  @Field((type) => HotelRoom_BedUnion)
  bed?: HotelRoom_Bed;
  @Field((type) => QuantitativeValue)
  occupancy?: QuantitativeValue;
}

@ObjectType()
export class SchoolDistrict extends AdministrativeArea {
}

@ObjectType()
export class PlayGameAction extends ConsumeAction {
  @Field((type) => PlayGameAction_GameAvailabilityTypeUnion)
  gameAvailabilityType?: PlayGameAction_GameAvailabilityType;
}

@ObjectType()
export class Reservation extends Intangible {
  @Field((type) => DateTimeScalar)
  modifiedTime?: DateTimeType;
  @Field((type) => Reservation_TotalPriceUnion)
  totalPrice?: Reservation_TotalPrice;
  @Field((type) => Ticket)
  reservedTicket?: Ticket;
  @Field((type) => ReservationStatusType)
  reservationStatus?: ReservationStatusType;
  @Field((type) => Reservation_ProviderUnion)
  provider?: Reservation_Provider;
  @Field((type) => Reservation_BrokerUnion)
  broker?: Reservation_Broker;
  @Field((type) => DateTimeScalar)
  bookingTime?: DateTimeType;
  @Field((type) => ProgramMembership)
  programMembershipUsed?: ProgramMembership;
  @Field((type) => Reservation_BookingAgentUnion)
  bookingAgent?: Reservation_BookingAgent;
  @Field((type) => TextScalar)
  priceCurrency?: TextType;
  @Field((type) => TextScalar)
  reservationId?: TextType;
  @Field((type) => Reservation_UnderNameUnion)
  underName?: Reservation_UnderName;
  @Field((type) => Thing)
  reservationFor?: Thing;
}

@ObjectType()
export class TrackAction extends FindAction {
  @Field((type) => DeliveryMethod)
  deliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class QuantitativeValue extends StructuredValue {
  @Field((type) => QuantitativeValue_ValueReferenceUnion)
  valueReference?: QuantitativeValue_ValueReference;
  @Field((type) => NumberScalar)
  maxValue?: NumberType;
  @Field((type) => TextScalar)
  unitText?: TextType;
  @Field((type) => NumberScalar)
  minValue?: NumberType;
  @Field((type) => QuantitativeValue_ValueUnion)
  value?: QuantitativeValue_Value;
  @Field((type) => QuantitativeValue_UnitCodeUnion)
  unitCode?: QuantitativeValue_UnitCode;
  @Field((type) => PropertyValue)
  additionalProperty?: PropertyValue;
}

@ObjectType()
export class ParcelDelivery extends Intangible {
  @Field((type) => PostalAddress)
  originAddress?: PostalAddress;
  @Field((type) => TextScalar)
  trackingNumber?: TextType;
  @Field((type) => Product)
  itemShipped?: Product;
  @Field((type) => ParcelDelivery_ProviderUnion)
  provider?: ParcelDelivery_Provider;
  @Field((type) => UrlScalar)
  trackingUrl?: UrlType;
  @Field((type) => PostalAddress)
  deliveryAddress?: PostalAddress;
  @Field((type) => ParcelDelivery_ExpectedArrivalUntilUnion)
  expectedArrivalUntil?: ParcelDelivery_ExpectedArrivalUntil;
  @Field((type) => DeliveryEvent)
  deliveryStatus?: DeliveryEvent;
  @Field((type) => ParcelDelivery_ExpectedArrivalFromUnion)
  expectedArrivalFrom?: ParcelDelivery_ExpectedArrivalFrom;
  @Field((type) => Organization)
  carrier?: Organization;
  @Field((type) => DeliveryMethod)
  hasDeliveryMethod?: DeliveryMethod;
  @Field((type) => Order)
  partOfOrder?: Order;
}

@ObjectType()
export class SpeakableSpecification extends Intangible {
  @Field((type) => CssSelectorTypeScalar)
  cssSelector?: CssSelectorTypeType;
  @Field((type) => XPathTypeScalar)
  xpath?: XPathTypeType;
}

@ObjectType()
export class InformAction extends CommunicateAction {
  @Field((type) => Event)
  event?: Event;
}

@ObjectType()
export class DeliveryTimeSettings extends StructuredValue {
  @Field((type) => DefinedRegion)
  shippingDestination?: DefinedRegion;
  @Field((type) => TextScalar)
  transitTimeLabel?: TextType;
  @Field((type) => BooleanScalar)
  isUnlabelledFallback?: BooleanType;
  @Field((type) => ShippingDeliveryTime)
  deliveryTime?: ShippingDeliveryTime;
}

@ObjectType()
export class Invoice extends Intangible {
  @Field((type) => Invoice_TotalPaymentDueUnion)
  totalPaymentDue?: Invoice_TotalPaymentDue;
  @Field((type) => Duration)
  billingPeriod?: Duration;
  @Field((type) => Order)
  referencesOrder?: Order;
  @Field((type) => TextScalar)
  accountId?: TextType;
  @Field((type) => Invoice_CategoryUnion)
  category?: Invoice_Category;
  @Field((type) => DateScalar)
  scheduledPaymentDate?: DateType;
  @Field((type) => TextScalar)
  confirmationNumber?: TextType;
  @Field((type) => Invoice_CustomerUnion)
  customer?: Invoice_Customer;
  @Field((type) => Invoice_ProviderUnion)
  provider?: Invoice_Provider;
  @Field((type) => Invoice_MinimumPaymentDueUnion)
  minimumPaymentDue?: Invoice_MinimumPaymentDue;
  @Field((type) => Invoice_PaymentDueDateUnion)
  paymentDueDate?: Invoice_PaymentDueDate;
  @Field((type) => Invoice_BrokerUnion)
  broker?: Invoice_Broker;
  @Field((type) => Invoice_PaymentStatusUnion)
  paymentStatus?: Invoice_PaymentStatus;
  @Field((type) => TextScalar)
  paymentMethodId?: TextType;
  @Field((type) => DateTimeScalar)
  paymentDue?: DateTimeType;
  @Field((type) => PaymentMethod)
  paymentMethod?: PaymentMethod;
}

@ObjectType()
export class RecommendedDoseSchedule extends DoseSchedule {
}

@ObjectType()
export class Car extends Vehicle {
  @Field((type) => QuantitativeValue)
  roofLoad?: QuantitativeValue;
  @Field((type) => TextScalar)
  acrissCode?: TextType;
}

@ObjectType()
export class AboutPage extends WebPage {
}

@ObjectType()
export class LodgingReservation extends Reservation {
  @Field((type) => LodgingReservation_LodgingUnitTypeUnion)
  lodgingUnitType?: LodgingReservation_LodgingUnitType;
  @Field((type) => TextScalar)
  lodgingUnitDescription?: TextType;
  @Field((type) => LodgingReservation_CheckoutTimeUnion)
  checkoutTime?: LodgingReservation_CheckoutTime;
  @Field((type) => LodgingReservation_NumAdultsUnion)
  numAdults?: LodgingReservation_NumAdults;
  @Field((type) => LodgingReservation_CheckinTimeUnion)
  checkinTime?: LodgingReservation_CheckinTime;
  @Field((type) => LodgingReservation_NumChildrenUnion)
  numChildren?: LodgingReservation_NumChildren;
}

@ObjectType()
export class EndorsementRating extends Rating {
}

@ObjectType()
export class UserPageVisits extends UserInteraction {
}

@ObjectType()
export class TipAction extends TradeAction {
  @Field((type) => TipAction_RecipientUnion)
  recipient?: TipAction_Recipient;
}

@ObjectType()
export class PerformingArtsTheater extends CivicStructure {
}

@ObjectType()
export class SubscribeAction extends InteractAction {
}

@ObjectType()
export class OfferForLease extends Offer {
}

@ObjectType()
export class CompleteDataFeed extends DataFeed {
}

@ObjectType()
export class Country extends AdministrativeArea {
}

@ObjectType()
export class BoatReservation extends Reservation {
}

@ObjectType()
export class MusicAlbum extends MusicPlaylist {
  @Field((type) => MusicAlbumProductionType)
  albumProductionType?: MusicAlbumProductionType;
  @Field((type) => MusicAlbumReleaseType)
  albumReleaseType?: MusicAlbumReleaseType;
  @Field((type) => MusicRelease)
  albumRelease?: MusicRelease;
  @Field((type) => MusicAlbum_ByArtistUnion)
  byArtist?: MusicAlbum_ByArtist;
}

@ObjectType()
export class DeleteAction extends UpdateAction {
}

@ObjectType()
export class QuantitativeValueDistribution extends StructuredValue {
  @Field((type) => NumberScalar)
  percentile75?: NumberType;
  @Field((type) => NumberScalar)
  median?: NumberType;
  @Field((type) => NumberScalar)
  percentile10?: NumberType;
  @Field((type) => NumberScalar)
  percentile25?: NumberType;
  @Field((type) => NumberScalar)
  percentile90?: NumberType;
  @Field((type) => Duration)
  duration?: Duration;
}

@ObjectType()
export class DiscussionForumPosting extends SocialMediaPosting {
}

@ObjectType()
export class DataFeedItem extends Intangible {
  @Field((type) => DataFeedItem_DateDeletedUnion)
  dateDeleted?: DataFeedItem_DateDeleted;
  @Field((type) => DataFeedItem_DateCreatedUnion)
  dateCreated?: DataFeedItem_DateCreated;
  @Field((type) => DataFeedItem_DateModifiedUnion)
  dateModified?: DataFeedItem_DateModified;
  @Field((type) => Thing)
  item?: Thing;
}

@ObjectType()
export class WearAction extends UseAction {
}

@ObjectType()
export class HowToSupply extends HowToItem {
  @Field((type) => HowToSupply_EstimatedCostUnion)
  estimatedCost?: HowToSupply_EstimatedCost;
}

@ObjectType()
export class SubwayStation extends CivicStructure {
}

@ObjectType()
export class ProductGroup extends Product {
  @Field((type) => Product)
  hasVariant?: Product;
  @Field((type) => TextScalar)
  productGroupID?: TextType;
  @Field((type) => ProductGroup_VariesByUnion)
  variesBy?: ProductGroup_VariesBy;
}

@ObjectType()
export class PerformanceRole extends Role {
  @Field((type) => TextScalar)
  characterName?: TextType;
}

@ObjectType()
export class TieAction extends AchieveAction {
}

@ObjectType()
export class ReturnAction extends TransferAction {
  @Field((type) => ReturnAction_RecipientUnion)
  recipient?: ReturnAction_Recipient;
}

@ObjectType()
export class MedicalRiskCalculator extends MedicalRiskEstimator {
}

@ObjectType()
export class VideoObject extends MediaObject {
  @Field((type) => TextScalar)
  embeddedTextCaption?: TextType;
  @Field((type) => Person)
  director?: Person;
  @Field((type) => Person)
  actor?: Person;
  @Field((type) => VideoObject_CaptionUnion)
  caption?: VideoObject_Caption;
  @Field((type) => ImageObject)
  thumbnail?: ImageObject;
  @Field((type) => TextScalar)
  transcript?: TextType;
  @Field((type) => TextScalar)
  videoQuality?: TextType;
  @Field((type) => TextScalar)
  videoFrameSize?: TextType;
  @Field((type) => Person)
  actors?: Person;
  @Field((type) => VideoObject_MusicByUnion)
  musicBy?: VideoObject_MusicBy;
  @Field((type) => Person)
  directors?: Person;
}

@ObjectType()
export class MusicRelease extends MusicPlaylist {
  @Field((type) => MusicAlbum)
  releaseOf?: MusicAlbum;
  @Field((type) => MusicReleaseFormatType)
  musicReleaseFormat?: MusicReleaseFormatType;
  @Field((type) => Duration)
  duration?: Duration;
  @Field((type) => MusicRelease_CreditedToUnion)
  creditedTo?: MusicRelease_CreditedTo;
  @Field((type) => Organization)
  recordLabel?: Organization;
  @Field((type) => TextScalar)
  catalogNumber?: TextType;
}

@ObjectType()
export class PaintAction extends CreateAction {
}

@ObjectType()
export class CancelAction extends PlanAction {
}

@ObjectType()
export class TaxiReservation extends Reservation {
  @Field((type) => TaxiReservation_PartySizeUnion)
  partySize?: TaxiReservation_PartySize;
  @Field((type) => DateTimeScalar)
  pickupTime?: DateTimeType;
  @Field((type) => Place)
  pickupLocation?: Place;
}

@ObjectType()
export class ReadAction extends ConsumeAction {
}

@ObjectType()
export class MedicalScholarlyArticle extends ScholarlyArticle {
  @Field((type) => TextScalar)
  publicationType?: TextType;
}

@ObjectType()
export class CategoryCodeSet extends DefinedTermSet {
  @Field((type) => CategoryCode)
  hasCategoryCode?: CategoryCode;
}

@ObjectType()
export class Service extends Intangible {
  @Field((type) => Review)
  review?: Review;
  @Field((type) => TextScalar)
  award?: TextType;
  @Field((type) => Audience)
  serviceAudience?: Audience;
  @Field((type) => Service_CategoryUnion)
  category?: Service_Category;
  @Field((type) => OpeningHoursSpecification)
  hoursAvailable?: OpeningHoursSpecification;
  @Field((type) => Audience)
  audience?: Audience;
  @Field((type) => Service_OffersUnion)
  offers?: Service_Offers;
  @Field((type) => Thing)
  serviceOutput?: Thing;
  @Field((type) => Service_ProviderUnion)
  provider?: Service_Provider;
  @Field((type) => Service_TermsOfServiceUnion)
  termsOfService?: Service_TermsOfService;
  @Field((type) => TextScalar)
  providerMobility?: TextType;
  @Field((type) => Service_BrokerUnion)
  broker?: Service_Broker;
  @Field((type) => AggregateRating)
  aggregateRating?: AggregateRating;
  @Field((type) => Service_IsSimilarToUnion)
  isSimilarTo?: Service_IsSimilarTo;
  @Field((type) => ServiceChannel)
  availableChannel?: ServiceChannel;
  @Field((type) => TextScalar)
  slogan?: TextType;
  @Field((type) => Service_BrandUnion)
  brand?: Service_Brand;
  @Field((type) => Service_LogoUnion)
  logo?: Service_Logo;
  @Field((type) => Thing)
  produces?: Thing;
  @Field((type) => Service_ServiceAreaUnion)
  serviceArea?: Service_ServiceArea;
  @Field((type) => Service_ServiceTypeUnion)
  serviceType?: Service_ServiceType;
  @Field((type) => Service_AreaServedUnion)
  areaServed?: Service_AreaServed;
  @Field((type) => Service_IsRelatedToUnion)
  isRelatedTo?: Service_IsRelatedTo;
  @Field((type) => OfferCatalog)
  hasOfferCatalog?: OfferCatalog;
}

@ObjectType()
export class DefinedTerm extends Intangible {
  @Field((type) => TextScalar)
  termCode?: TextType;
  @Field((type) => DefinedTerm_InDefinedTermSetUnion)
  inDefinedTermSet?: DefinedTerm_InDefinedTermSet;
}

@ObjectType()
export class Order extends Intangible {
  @Field((type) => ParcelDelivery)
  orderDelivery?: ParcelDelivery;
  @Field((type) => PostalAddress)
  billingAddress?: PostalAddress;
  @Field((type) => Offer)
  acceptedOffer?: Offer;
  @Field((type) => Order_MerchantUnion)
  merchant?: Order_Merchant;
  @Field((type) => OrderStatus)
  orderStatus?: OrderStatus;
  @Field((type) => TextScalar)
  confirmationNumber?: TextType;
  @Field((type) => Invoice)
  partOfInvoice?: Invoice;
  @Field((type) => TextScalar)
  orderNumber?: TextType;
  @Field((type) => Order_SellerUnion)
  seller?: Order_Seller;
  @Field((type) => Order_CustomerUnion)
  customer?: Order_Customer;
  @Field((type) => Order_PaymentDueDateUnion)
  paymentDueDate?: Order_PaymentDueDate;
  @Field((type) => Order_BrokerUnion)
  broker?: Order_Broker;
  @Field((type) => TextScalar)
  discountCode?: TextType;
  @Field((type) => Order_DiscountUnion)
  discount?: Order_Discount;
  @Field((type) => TextScalar)
  paymentMethodId?: TextType;
  @Field((type) => UrlScalar)
  paymentUrl?: UrlType;
  @Field((type) => TextScalar)
  discountCurrency?: TextType;
  @Field((type) => DateTimeScalar)
  paymentDue?: DateTimeType;
  @Field((type) => Order_OrderDateUnion)
  orderDate?: Order_OrderDate;
  @Field((type) => BooleanScalar)
  isGift?: BooleanType;
  @Field((type) => Order_OrderedItemUnion)
  orderedItem?: Order_OrderedItem;
  @Field((type) => PaymentMethod)
  paymentMethod?: PaymentMethod;
}

@ObjectType()
export class OfferForPurchase extends Offer {
}

@ObjectType()
export class BusOrCoach extends Vehicle {
  @Field((type) => QuantitativeValue)
  roofLoad?: QuantitativeValue;
  @Field((type) => TextScalar)
  acrissCode?: TextType;
}

@ObjectType()
export class Bridge extends CivicStructure {
}

@ObjectType()
export class AggregateRating extends Rating {
  @Field((type) => Thing)
  itemReviewed?: Thing;
  @Field((type) => IntegerScalar)
  reviewCount?: IntegerType;
  @Field((type) => IntegerScalar)
  ratingCount?: IntegerType;
}

@ObjectType()
export class IgnoreAction extends AssessAction {
}

@ObjectType()
export class ReportedDoseSchedule extends DoseSchedule {
}

@ObjectType()
export class GovernmentPermit extends Permit {
}

@ObjectType()
export class BoatTerminal extends CivicStructure {
}

@ObjectType()
export class SuspendAction extends ControlAction {
}

@ObjectType()
export class ArriveAction extends MoveAction {
}

@ObjectType()
export class BusReservation extends Reservation {
}

@ObjectType()
export class DietarySupplement extends Substance {
  @Field((type) => TextScalar)
  targetPopulation?: TextType;
  @Field((type) => RecommendedDoseSchedule)
  recommendedIntake?: RecommendedDoseSchedule;
  @Field((type) => DietarySupplement_LegalStatusUnion)
  override legalStatus?: DietarySupplement_LegalStatus;
  @Field((type) => TextScalar)
  mechanismOfAction?: TextType;
  @Field((type) => MaximumDoseSchedule)
  override maximumIntake?: MaximumDoseSchedule;
  @Field((type) => TextScalar)
  override activeIngredient?: TextType;
  @Field((type) => TextScalar)
  proprietaryName?: TextType;
  @Field((type) => TextScalar)
  nonProprietaryName?: TextType;
  @Field((type) => Organization)
  manufacturer?: Organization;
  @Field((type) => BooleanScalar)
  isProprietary?: BooleanType;
  @Field((type) => TextScalar)
  safetyConsideration?: TextType;
}

@ObjectType()
export class UserLikes extends UserInteraction {
}

@ObjectType()
export class UnitPriceSpecification extends PriceSpecification {
  @Field((type) => UnitPriceSpecification_PriceTypeUnion)
  priceType?: UnitPriceSpecification_PriceType;
  @Field((type) => TextScalar)
  unitText?: TextType;
  @Field((type) => NumberScalar)
  billingIncrement?: NumberType;
  @Field((type) => UnitPriceSpecification_UnitCodeUnion)
  unitCode?: UnitPriceSpecification_UnitCode;
  @Field((type) => UnitPriceSpecification_BillingDurationUnion)
  billingDuration?: UnitPriceSpecification_BillingDuration;
  @Field((type) => QuantitativeValue)
  referenceQuantity?: QuantitativeValue;
  @Field((type) => PriceComponentTypeEnumeration)
  priceComponentType?: PriceComponentTypeEnumeration;
  @Field((type) => NumberScalar)
  billingStart?: NumberType;
}

@ObjectType()
export class AllocateAction extends OrganizeAction {
}

@ObjectType()
export class BroadcastService extends Service {
  @Field((type) => BroadcastService)
  parentService?: BroadcastService;
  @Field((type) => TextScalar)
  broadcastDisplayName?: TextType;
  @Field((type) => TextScalar)
  videoFormat?: TextType;
  @Field((type) => TextScalar)
  broadcastTimezone?: TextType;
  @Field((type) => BroadcastService_BroadcastFrequencyUnion)
  broadcastFrequency?: BroadcastService_BroadcastFrequency;
  @Field((type) => TextScalar)
  callSign?: TextType;
  @Field((type) => BroadcastService_InLanguageUnion)
  inLanguage?: BroadcastService_InLanguage;
  @Field((type) => BroadcastChannel)
  hasBroadcastChannel?: BroadcastChannel;
  @Field((type) => Organization)
  broadcaster?: Organization;
  @Field((type) => Organization)
  broadcastAffiliateOf?: Organization;
  @Field((type) => Place)
  area?: Place;
}

@ObjectType()
export class RepaymentSpecification extends StructuredValue {
  @Field((type) => NumberScalar)
  numberOfLoanPayments?: NumberType;
  @Field((type) => MonetaryAmount)
  earlyPrepaymentPenalty?: MonetaryAmount;
  @Field((type) => MonetaryAmount)
  loanPaymentAmount?: MonetaryAmount;
  @Field((type) => NumberScalar)
  loanPaymentFrequency?: NumberType;
  @Field((type) => RepaymentSpecification_DownPaymentUnion)
  downPayment?: RepaymentSpecification_DownPayment;
}

@ObjectType()
export class WebAPI extends Service {
  @Field((type) => WebAPI_DocumentationUnion)
  documentation?: WebAPI_Documentation;
}

@ObjectType()
export class LegislativeBuilding extends GovernmentBuilding {
}

@ObjectType()
export class RadioBroadcastService extends BroadcastService {
}

@ObjectType()
export class ShippingDeliveryTime extends StructuredValue {
  @Field((type) => QuantitativeValue)
  transitTime?: QuantitativeValue;
  @Field((type) => OpeningHoursSpecification)
  businessDays?: OpeningHoursSpecification;
  @Field((type) => QuantitativeValue)
  handlingTime?: QuantitativeValue;
  @Field((type) => TimeScalar)
  cutoffTime?: TimeType;
}

@ObjectType()
export class LymphaticVessel extends Vessel {
  @Field((type) => Vessel)
  runsTo?: Vessel;
  @Field((type) => LymphaticVessel_RegionDrainedUnion)
  regionDrained?: LymphaticVessel_RegionDrained;
  @Field((type) => Vessel)
  originatesFrom?: Vessel;
}

@ObjectType()
export class GatedResidenceCommunity extends Residence {
}

@ObjectType()
export class PhysicalActivity extends LifestyleModification {
  @Field((type) => PhysicalActivity_CategoryUnion)
  category?: PhysicalActivity_Category;
  @Field((type) => TextScalar)
  pathophysiology?: TextType;
  @Field((type) => PhysicalActivity_AssociatedAnatomyUnion)
  associatedAnatomy?: PhysicalActivity_AssociatedAnatomy;
  @Field((type) => TextScalar)
  epidemiology?: TextType;
}

@ObjectType()
export class UserPlusOnes extends UserInteraction {
}

@ObjectType()
export class ApartmentComplex extends Residence {
  @Field((type) => QuantitativeValue)
  numberOfAccommodationUnits?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  numberOfAvailableAccommodationUnits?: QuantitativeValue;
  @Field((type) => UrlScalar)
  override tourBookingPage?: UrlType;
  @Field((type) => ApartmentComplex_NumberOfBedroomsUnion)
  numberOfBedrooms?: ApartmentComplex_NumberOfBedrooms;
  @Field((type) => ApartmentComplex_PetsAllowedUnion)
  petsAllowed?: ApartmentComplex_PetsAllowed;
}

@ObjectType()
export class RsvpAction extends InformAction {
  @Field((type) => RsvpResponseType)
  rsvpResponse?: RsvpResponseType;
  @Field((type) => Comment)
  comment?: Comment;
  @Field((type) => NumberScalar)
  additionalNumberOfGuests?: NumberType;
}

@ObjectType()
export class Mosque extends PlaceOfWorship {
}

@ObjectType()
export class ChooseAction extends AssessAction {
  @Field((type) => ChooseAction_OptionUnion)
  option?: ChooseAction_Option;
  @Field((type) => ChooseAction_ActionOptionUnion)
  actionOption?: ChooseAction_ActionOption;
}

@ObjectType()
export class Courthouse extends GovernmentBuilding {
}

@ObjectType()
export class SearchResultsPage extends WebPage {
}

@ObjectType()
export class ContactPage extends WebPage {
}

@ObjectType()
export class NewsArticle extends Article {
  @Field((type) => TextScalar)
  printEdition?: TextType;
  @Field((type) => TextScalar)
  printColumn?: TextType;
  @Field((type) => TextScalar)
  printPage?: TextType;
  @Field((type) => TextScalar)
  printSection?: TextType;
  @Field((type) => TextScalar)
  dateline?: TextType;
}

@ObjectType()
export class OwnershipInfo extends StructuredValue {
  @Field((type) => DateTimeScalar)
  ownedFrom?: DateTimeType;
  @Field((type) => OwnershipInfo_TypeOfGoodUnion)
  typeOfGood?: OwnershipInfo_TypeOfGood;
  @Field((type) => OwnershipInfo_AcquiredFromUnion)
  acquiredFrom?: OwnershipInfo_AcquiredFrom;
  @Field((type) => DateTimeScalar)
  ownedThrough?: DateTimeType;
}

@ObjectType()
export class AcceptAction extends AllocateAction {
}

@ObjectType()
export class SellAction extends TradeAction {
  @Field((type) => WarrantyPromise)
  warrantyPromise?: WarrantyPromise;
  @Field((type) => SellAction_BuyerUnion)
  buyer?: SellAction_Buyer;
}

@ObjectType()
export class RentalCarReservation extends Reservation {
  @Field((type) => Place)
  dropoffLocation?: Place;
  @Field((type) => DateTimeScalar)
  dropoffTime?: DateTimeType;
  @Field((type) => DateTimeScalar)
  pickupTime?: DateTimeType;
  @Field((type) => Place)
  pickupLocation?: Place;
}

@ObjectType()
export class LakeBodyOfWater extends BodyOfWater {
}

@ObjectType()
export class RadiationTherapy extends MedicalTherapy {
}

@ObjectType()
export class CategoryCode extends DefinedTerm {
  @Field((type) => TextScalar)
  codeValue?: TextType;
  @Field((type) => CategoryCode_InCodeSetUnion)
  inCodeSet?: CategoryCode_InCodeSet;
}

@ObjectType()
export class Duration extends Quantity {
}

@ObjectType()
export class Synagogue extends PlaceOfWorship {
}

@ObjectType()
export class ListenAction extends ConsumeAction {
}

@ObjectType()
export class BroadcastEvent extends PublicationEvent {
  @Field((type) => BroadcastEvent_SubtitleLanguageUnion)
  subtitleLanguage?: BroadcastEvent_SubtitleLanguage;
  @Field((type) => TextScalar)
  videoFormat?: TextType;
  @Field((type) => Event)
  broadcastOfEvent?: Event;
  @Field((type) => BooleanScalar)
  isLiveBroadcast?: BooleanType;
}

@ObjectType()
export class ReplyAction extends CommunicateAction {
  @Field((type) => Comment)
  resultComment?: Comment;
}

@ObjectType()
export class MeetingRoom extends Room {
}

@ObjectType()
export class PhotographAction extends CreateAction {
}

@ObjectType()
export class EngineSpecification extends StructuredValue {
  @Field((type) => EngineSpecification_FuelTypeUnion)
  fuelType?: EngineSpecification_FuelType;
  @Field((type) => QuantitativeValue)
  torque?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  engineDisplacement?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  enginePower?: QuantitativeValue;
  @Field((type) => EngineSpecification_EngineTypeUnion)
  engineType?: EngineSpecification_EngineType;
}

@ObjectType()
export class SendAction extends TransferAction {
  @Field((type) => SendAction_RecipientUnion)
  recipient?: SendAction_Recipient;
  @Field((type) => DeliveryMethod)
  deliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class Report extends Article {
  @Field((type) => TextScalar)
  reportNumber?: TextType;
}

@ObjectType()
export class MotorizedBicycle extends Vehicle {
}

@ObjectType()
export class CheckoutPage extends WebPage {
}

@ObjectType()
export class LoseAction extends AchieveAction {
  @Field((type) => Person)
  winner?: Person;
}

@ObjectType()
export class OrderAction extends TradeAction {
  @Field((type) => DeliveryMethod)
  deliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class ComicIssue extends PublicationIssue {
  @Field((type) => Person)
  letterer?: Person;
  @Field((type) => Person)
  colorist?: Person;
  @Field((type) => TextScalar)
  variantCover?: TextType;
  @Field((type) => Person)
  inker?: Person;
  @Field((type) => Person)
  penciler?: Person;
  @Field((type) => Person)
  artist?: Person;
}

@ObjectType()
export class QuoteAction extends TradeAction {
}

@ObjectType()
export class AMRadioChannel extends RadioChannel {
}

@ObjectType()
export class MobileApplication extends SoftwareApplication {
  @Field((type) => TextScalar)
  carrierRequirements?: TextType;
}

@ObjectType()
export class CorrectionComment extends Comment {
}

@ObjectType()
export class RentAction extends TradeAction {
  @Field((type) => RentAction_LandlordUnion)
  landlord?: RentAction_Landlord;
  @Field((type) => RealEstateAgent)
  realEstateAgent?: RealEstateAgent;
}

@ObjectType()
export class AssignAction extends AllocateAction {
}

@ObjectType()
export class Mass extends Quantity {
}

@ObjectType()
export class FMRadioChannel extends RadioChannel {
}

@ObjectType()
export class BuddhistTemple extends PlaceOfWorship {
}

@ObjectType()
export class GeoShape extends StructuredValue {
  @Field((type) => GeoShape_AddressCountryUnion)
  addressCountry?: GeoShape_AddressCountry;
  @Field((type) => TextScalar)
  circle?: TextType;
  @Field((type) => TextScalar)
  line?: TextType;
  @Field((type) => TextScalar)
  polygon?: TextType;
  @Field((type) => GeoShape_AddressUnion)
  address?: GeoShape_Address;
  @Field((type) => TextScalar)
  postalCode?: TextType;
  @Field((type) => GeoShape_ElevationUnion)
  elevation?: GeoShape_Elevation;
  @Field((type) => TextScalar)
  box?: TextType;
}

@ObjectType()
export class TrainReservation extends Reservation {
}

@ObjectType()
export class APIReference extends TechArticle {
  @Field((type) => TextScalar)
  assembly?: TextType;
  @Field((type) => TextScalar)
  targetPlatform?: TextType;
  @Field((type) => TextScalar)
  executableLibraryName?: TextType;
  @Field((type) => TextScalar)
  programmingModel?: TextType;
  @Field((type) => TextScalar)
  assemblyVersion?: TextType;
}

@ObjectType()
export class Motorcycle extends Vehicle {
}

@ObjectType()
export class AnalysisNewsArticle extends NewsArticle {
}

@ObjectType()
export class Recipe extends HowTo {
  @Field((type) => Recipe_RecipeInstructionsUnion)
  recipeInstructions?: Recipe_RecipeInstructions;
  @Field((type) => TextScalar)
  ingredients?: TextType;
  @Field((type) => TextScalar)
  recipeCuisine?: TextType;
  @Field((type) => RestrictedDiet)
  suitableForDiet?: RestrictedDiet;
  @Field((type) => NutritionInformation)
  nutrition?: NutritionInformation;
  @Field((type) => TextScalar)
  cookingMethod?: TextType;
  @Field((type) => TextScalar)
  recipeIngredient?: TextType;
  @Field((type) => Recipe_RecipeYieldUnion)
  recipeYield?: Recipe_RecipeYield;
  @Field((type) => Duration)
  cookTime?: Duration;
  @Field((type) => TextScalar)
  recipeCategory?: TextType;
}

@ObjectType()
export class DonateAction extends TradeAction {
  @Field((type) => DonateAction_RecipientUnion)
  recipient?: DonateAction_Recipient;
}

@ObjectType()
export class PostalCodeRangeSpecification extends StructuredValue {
  @Field((type) => TextScalar)
  postalCodeEnd?: TextType;
  @Field((type) => TextScalar)
  postalCodeBegin?: TextType;
}

@ObjectType()
export class TouristTrip extends Trip {
  @Field((type) => TouristTrip_TouristTypeUnion)
  touristType?: TouristTrip_TouristType;
}

@ObjectType()
export class OrganizationRole extends Role {
  @Field((type) => NumberScalar)
  numberedPosition?: NumberType;
}

@ObjectType()
export class PeopleAudience extends Audience {
  @Field((type) => IntegerScalar)
  requiredMinAge?: IntegerType;
  @Field((type) => NumberScalar)
  suggestedMaxAge?: NumberType;
  @Field((type) => MedicalCondition)
  healthCondition?: MedicalCondition;
  @Field((type) => QuantitativeValue)
  suggestedMeasurement?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  suggestedAge?: QuantitativeValue;
  @Field((type) => IntegerScalar)
  requiredMaxAge?: IntegerType;
  @Field((type) => NumberScalar)
  suggestedMinAge?: NumberType;
  @Field((type) => TextScalar)
  requiredGender?: TextType;
  @Field((type) => PeopleAudience_SuggestedGenderUnion)
  suggestedGender?: PeopleAudience_SuggestedGender;
}

@ObjectType()
export class BreadcrumbList extends ItemList {
}

@ObjectType()
export class WarrantyPromise extends StructuredValue {
  @Field((type) => WarrantyScope)
  warrantyScope?: WarrantyScope;
  @Field((type) => QuantitativeValue)
  durationOfWarranty?: QuantitativeValue;
}

@ObjectType()
export class FAQPage extends WebPage {
}

@ObjectType()
export class RealEstateListing extends WebPage {
  @Field((type) => RealEstateListing_LeaseLengthUnion)
  leaseLength?: RealEstateListing_LeaseLength;
  @Field((type) => RealEstateListing_DatePostedUnion)
  datePosted?: RealEstateListing_DatePosted;
}

@ObjectType()
export class EventReservation extends Reservation {
}

@ObjectType()
export class HinduTemple extends PlaceOfWorship {
}

@ObjectType()
export class OpeningHoursSpecification extends StructuredValue {
  @Field((type) => TimeScalar)
  closes?: TimeType;
  @Field((type) => DayOfWeek)
  dayOfWeek?: DayOfWeek;
  @Field((type) => OpeningHoursSpecification_ValidFromUnion)
  validFrom?: OpeningHoursSpecification_ValidFrom;
  @Field((type) => TimeScalar)
  opens?: TimeType;
  @Field((type) => OpeningHoursSpecification_ValidThroughUnion)
  validThrough?: OpeningHoursSpecification_ValidThrough;
}

@ObjectType()
export class ReviewAction extends AssessAction {
  @Field((type) => Review)
  resultReview?: Review;
}

@ObjectType()
export class Drug extends Substance {
  @Field((type) => DrugPregnancyCategory)
  pregnancyCategory?: DrugPregnancyCategory;
  @Field((type) => TextScalar)
  overdosage?: TextType;
  @Field((type) => Drug_LegalStatusUnion)
  override legalStatus?: Drug_LegalStatus;
  @Field((type) => TextScalar)
  mechanismOfAction?: TextType;
  @Field((type) => TextScalar)
  clinicalPharmacology?: TextType;
  @Field((type) => TextScalar)
  rxcui?: TextType;
  @Field((type) => Drug)
  interactingDrug?: Drug;
  @Field((type) => TextScalar)
  dosageForm?: TextType;
  @Field((type) => UrlScalar)
  labelDetails?: UrlType;
  @Field((type) => MaximumDoseSchedule)
  override maximumIntake?: MaximumDoseSchedule;
  @Field((type) => TextScalar)
  override activeIngredient?: TextType;
  @Field((type) => Drug)
  relatedDrug?: Drug;
  @Field((type) => TextScalar)
  administrationRoute?: TextType;
  @Field((type) => TextScalar)
  drugUnit?: TextType;
  @Field((type) => TextScalar)
  foodWarning?: TextType;
  @Field((type) => Drug_WarningUnion)
  warning?: Drug_Warning;
  @Field((type) => Drug_PrescriptionStatusUnion)
  prescriptionStatus?: Drug_PrescriptionStatus;
  @Field((type) => TextScalar)
  proprietaryName?: TextType;
  @Field((type) => DrugClass)
  drugClass?: DrugClass;
  @Field((type) => UrlScalar)
  prescribingInfo?: UrlType;
  @Field((type) => HealthInsurancePlan)
  includedInHealthInsurancePlan?: HealthInsurancePlan;
  @Field((type) => TextScalar)
  nonProprietaryName?: TextType;
  @Field((type) => Organization)
  manufacturer?: Organization;
  @Field((type) => BooleanScalar)
  isProprietary?: BooleanType;
  @Field((type) => TextScalar)
  clincalPharmacology?: TextType;
  @Field((type) => BooleanScalar)
  isAvailableGenerically?: BooleanType;
  @Field((type) => TextScalar)
  breastfeedingWarning?: TextType;
  @Field((type) => TextScalar)
  pregnancyWarning?: TextType;
  @Field((type) => TextScalar)
  alcoholWarning?: TextType;
  @Field((type) => DoseSchedule)
  doseSchedule?: DoseSchedule;
  @Field((type) => DrugStrength)
  availableStrength?: DrugStrength;
}

@ObjectType()
export class Waterfall extends BodyOfWater {
}

@ObjectType()
export class OceanBodyOfWater extends BodyOfWater {
}

@ObjectType()
export class EmployerAggregateRating extends AggregateRating {
}

@ObjectType()
export class PreOrderAction extends TradeAction {
}

@ObjectType()
export class RejectAction extends AllocateAction {
}

@ObjectType()
export class VideoObjectSnapshot extends VideoObject {
}

@ObjectType()
export class ParentAudience extends PeopleAudience {
  @Field((type) => NumberScalar)
  childMaxAge?: NumberType;
  @Field((type) => NumberScalar)
  childMinAge?: NumberType;
}

@ObjectType()
export class DeactivateAction extends ControlAction {
}

@ObjectType()
export class ResumeAction extends ControlAction {
}

@ObjectType()
export class ReactAction extends AssessAction {
}

@ObjectType()
export class InsertAction extends AddAction {
  @Field((type) => Place)
  toLocation?: Place;
}

@ObjectType()
export class MediaGallery extends CollectionPage {
}

@ObjectType()
export class ImageObjectSnapshot extends ImageObject {
}

@ObjectType()
export class BlogPosting extends SocialMediaPosting {
}

@ObjectType()
export class LikeAction extends ReactAction {
}

@ObjectType()
export class UserTweets extends UserInteraction {
}

@ObjectType()
export class MonetaryGrant extends Grant {
  @Field((type) => MonetaryGrant_FunderUnion)
  override funder?: MonetaryGrant_Funder;
  @Field((type) => MonetaryGrant_AmountUnion)
  amount?: MonetaryGrant_Amount;
}

@ObjectType()
export class EducationalAudience extends Audience {
  @Field((type) => TextScalar)
  educationalRole?: TextType;
}

@ObjectType()
export class CompoundPriceSpecification extends PriceSpecification {
  @Field((type) => UnitPriceSpecification)
  priceComponent?: UnitPriceSpecification;
  @Field((type) => CompoundPriceSpecification_PriceTypeUnion)
  priceType?: CompoundPriceSpecification_PriceType;
}

@ObjectType()
export class DataType extends Class {
}

@ObjectType()
export class ImageGallery extends MediaGallery {
}

@ObjectType()
export class ConfirmAction extends InformAction {
}

@ObjectType()
export class UserCheckins extends UserInteraction {
}

@ObjectType()
export class LiveBlogPosting extends BlogPosting {
  @Field((type) => DateTimeScalar)
  coverageEndTime?: DateTimeType;
  @Field((type) => DateTimeScalar)
  coverageStartTime?: DateTimeType;
  @Field((type) => BlogPosting)
  liveBlogUpdate?: BlogPosting;
}

@ObjectType()
export class AskPublicNewsArticle extends NewsArticle {
}

@ObjectType()
export class FoodService extends Service {
}

@ObjectType()
export class BusinessAudience extends Audience {
  @Field((type) => QuantitativeValue)
  yearlyRevenue?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  numberOfEmployees?: QuantitativeValue;
  @Field((type) => QuantitativeValue)
  yearsInOperation?: QuantitativeValue;
}

@ObjectType()
export class AggregateOffer extends Offer {
  @Field((type) => AggregateOffer_HighPriceUnion)
  highPrice?: AggregateOffer_HighPrice;
  @Field((type) => AggregateOffer_OffersUnion)
  offers?: AggregateOffer_Offers;
  @Field((type) => AggregateOffer_LowPriceUnion)
  lowPrice?: AggregateOffer_LowPrice;
  @Field((type) => IntegerScalar)
  offerCount?: IntegerType;
}

@ObjectType()
export class UserDownloads extends UserInteraction {
}

@ObjectType()
export class ReceiveAction extends TransferAction {
  @Field((type) => ReceiveAction_SenderUnion)
  sender?: ReceiveAction_Sender;
  @Field((type) => DeliveryMethod)
  deliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class EndorseAction extends ReactAction {
  @Field((type) => EndorseAction_EndorseeUnion)
  endorsee?: EndorseAction_Endorsee;
}

@ObjectType()
export class AgreeAction extends ReactAction {
}

@ObjectType()
export class FoodEstablishmentReservation extends Reservation {
  @Field((type) => FoodEstablishmentReservation_PartySizeUnion)
  partySize?: FoodEstablishmentReservation_PartySize;
  @Field((type) => FoodEstablishmentReservation_StartTimeUnion)
  startTime?: FoodEstablishmentReservation_StartTime;
  @Field((type) => FoodEstablishmentReservation_EndTimeUnion)
  endTime?: FoodEstablishmentReservation_EndTime;
}

@ObjectType()
export class WriteAction extends CreateAction {
  @Field((type) => WriteAction_InLanguageUnion)
  inLanguage?: WriteAction_InLanguage;
  @Field((type) => Language)
  language?: Language;
}

@ObjectType()
export class PrependAction extends InsertAction {
}

@ObjectType()
export class GeoCircle extends GeoShape {
  @Field((type) => GeoCircle_GeoRadiusUnion)
  geoRadius?: GeoCircle_GeoRadius;
  @Field((type) => GeoCoordinates)
  geoMidpoint?: GeoCoordinates;
}

@ObjectType()
export class DrawAction extends CreateAction {
}

@ObjectType()
export class ActivateAction extends ControlAction {
}

@ObjectType()
export class PostalAddress extends ContactPoint {
  @Field((type) => PostalAddress_AddressCountryUnion)
  addressCountry?: PostalAddress_AddressCountry;
  @Field((type) => TextScalar)
  addressRegion?: TextType;
  @Field((type) => TextScalar)
  addressLocality?: TextType;
  @Field((type) => TextScalar)
  postalCode?: TextType;
  @Field((type) => TextScalar)
  postOfficeBoxNumber?: TextType;
  @Field((type) => TextScalar)
  streetAddress?: TextType;
}

@ObjectType()
export class CityHall extends GovernmentBuilding {
}

@ObjectType()
export class MonetaryAmountDistribution extends QuantitativeValueDistribution {
  @Field((type) => TextScalar)
  currency?: TextType;
}

@ObjectType()
export class DeliveryChargeSpecification extends PriceSpecification {
  @Field((type) => DeliveryChargeSpecification_IneligibleRegionUnion)
  ineligibleRegion?: DeliveryChargeSpecification_IneligibleRegion;
  @Field((type) => DeliveryChargeSpecification_EligibleRegionUnion)
  eligibleRegion?: DeliveryChargeSpecification_EligibleRegion;
  @Field((type) => DeliveryChargeSpecification_AreaServedUnion)
  areaServed?: DeliveryChargeSpecification_AreaServed;
  @Field((type) => DeliveryMethod)
  appliesToDeliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class LocationFeatureSpecification extends PropertyValue {
  @Field((type) => OpeningHoursSpecification)
  hoursAvailable?: OpeningHoursSpecification;
  @Field((type) => LocationFeatureSpecification_ValidFromUnion)
  validFrom?: LocationFeatureSpecification_ValidFrom;
  @Field((type) => LocationFeatureSpecification_ValidThroughUnion)
  validThrough?: LocationFeatureSpecification_ValidThrough;
}

@ObjectType()
export class ReportageNewsArticle extends NewsArticle {
}

@ObjectType()
export class FlightReservation extends Reservation {
  @Field((type) => FlightReservation_PassengerPriorityStatusUnion)
  passengerPriorityStatus?: FlightReservation_PassengerPriorityStatus;
  @Field((type) => TextScalar)
  boardingGroup?: TextType;
  @Field((type) => TextScalar)
  securityScreening?: TextType;
  @Field((type) => TextScalar)
  passengerSequenceNumber?: TextType;
}

@ObjectType()
export class Researcher extends Audience {
}

@ObjectType()
export class FilmAction extends CreateAction {
}

@ObjectType()
export class UserPlays extends UserInteraction {
}

@ObjectType()
export class WantAction extends ReactAction {
}

@ObjectType()
export class DislikeAction extends ReactAction {
}

@ObjectType()
export class Taxi extends Service {
}

@ObjectType()
export class PaymentChargeSpecification extends PriceSpecification {
  @Field((type) => PaymentMethod)
  appliesToPaymentMethod?: PaymentMethod;
  @Field((type) => DeliveryMethod)
  appliesToDeliveryMethod?: DeliveryMethod;
}

@ObjectType()
export class CookAction extends CreateAction {
  @Field((type) => Recipe)
  recipe?: Recipe;
  @Field((type) => CookAction_FoodEstablishmentUnion)
  foodEstablishment?: CookAction_FoodEstablishment;
  @Field((type) => FoodEvent)
  foodEvent?: FoodEvent;
}

@ObjectType()
export class VoteAction extends ChooseAction {
  @Field((type) => Person)
  candidate?: Person;
}

@ObjectType()
export class ReservationPackage extends Reservation {
  @Field((type) => Reservation)
  subReservation?: Reservation;
}

@ObjectType()
export class UserComments extends UserInteraction {
  @Field((type) => UrlScalar)
  replyToUrl?: UrlType;
  @Field((type) => CreativeWork)
  discusses?: CreativeWork;
  @Field((type) => UserComments_CommentTimeUnion)
  commentTime?: UserComments_CommentTime;
  @Field((type) => TextScalar)
  commentText?: TextType;
  @Field((type) => UserComments_CreatorUnion)
  creator?: UserComments_Creator;
}

@ObjectType()
export class GovernmentService extends Service {
  @Field((type) => GovernmentService_JurisdictionUnion)
  jurisdiction?: GovernmentService_Jurisdiction;
  @Field((type) => Organization)
  serviceOperator?: Organization;
}

@ObjectType()
export class OpinionNewsArticle extends NewsArticle {
}

@ObjectType()
export class BackgroundNewsArticle extends NewsArticle {
}

@ObjectType()
export class AuthorizeAction extends AllocateAction {
  @Field((type) => AuthorizeAction_RecipientUnion)
  recipient?: AuthorizeAction_Recipient;
}

@ObjectType()
export class FinancialProduct extends Service {
  @Field((type) => FinancialProduct_AnnualPercentageRateUnion)
  annualPercentageRate?: FinancialProduct_AnnualPercentageRate;
  @Field((type) => FinancialProduct_FeesAndCommissionsSpecificationUnion)
  feesAndCommissionsSpecification?: FinancialProduct_FeesAndCommissionsSpecification;
  @Field((type) => FinancialProduct_InterestRateUnion)
  interestRate?: FinancialProduct_InterestRate;
}

@ObjectType()
export class CableOrSatelliteService extends Service {
}

@ObjectType()
export class TaxiService extends Service {
}

@ObjectType()
export class InvestmentOrDeposit extends FinancialProduct {
  @Field((type) => InvestmentOrDeposit_AmountUnion)
  amount?: InvestmentOrDeposit_Amount;
}

@ObjectType()
export class CurrencyConversionService extends FinancialProduct {
}

@ObjectType()
export class AppendAction extends InsertAction {
}

@ObjectType()
export class VideoGallery extends MediaGallery {
}

@ObjectType()
export class EmployeeRole extends OrganizationRole {
  @Field((type) => TextScalar)
  salaryCurrency?: TextType;
  @Field((type) => EmployeeRole_BaseSalaryUnion)
  baseSalary?: EmployeeRole_BaseSalary;
}

@ObjectType()
export class DisagreeAction extends ReactAction {
}

@ObjectType()
export class InvestmentFund extends InvestmentOrDeposit {
}

@ObjectType()
export class LoanOrCredit extends FinancialProduct {
  @Field((type) => BooleanScalar)
  renegotiableLoan?: BooleanType;
  @Field((type) => LoanOrCredit_LoanTypeUnion)
  loanType?: LoanOrCredit_LoanType;
  @Field((type) => BooleanScalar)
  recourseLoan?: BooleanType;
  @Field((type) => QuantitativeValue)
  loanTerm?: QuantitativeValue;
  @Field((type) => Duration)
  gracePeriod?: Duration;
  @Field((type) => LoanOrCredit_RequiredCollateralUnion)
  requiredCollateral?: LoanOrCredit_RequiredCollateral;
  @Field((type) => TextScalar)
  currency?: TextType;
  @Field((type) => LoanOrCredit_AmountUnion)
  amount?: LoanOrCredit_Amount;
  @Field((type) => RepaymentSpecification)
  loanRepaymentForm?: RepaymentSpecification;
}

@ObjectType()
export class BankAccount extends FinancialProduct {
  @Field((type) => BankAccount_BankAccountTypeUnion)
  bankAccountType?: BankAccount_BankAccountType;
  @Field((type) => MonetaryAmount)
  accountMinimumInflow?: MonetaryAmount;
  @Field((type) => MonetaryAmount)
  accountOverdraftLimit?: MonetaryAmount;
}

@ObjectType()
export class PaymentService extends FinancialProduct {
}

@ObjectType()
export class BrokerageAccount extends InvestmentOrDeposit {
}

@ObjectType()
export class MortgageLoan extends LoanOrCredit {
  @Field((type) => MonetaryAmount)
  loanMortgageMandateAmount?: MonetaryAmount;
  @Field((type) => BooleanScalar)
  domiciledMortgage?: BooleanType;
}


// #endregion

// #region Inferred Union Types
/**
 * ===============================
 * Inferred Union Types from Props
 * ===============================
 */

export type Hospital_AvailableService = MedicalTest | MedicalProcedure | MedicalTherapy;
export const Hospital_AvailableServiceUnion = createUnionType({
  name: 'Hospital_AvailableService',
  types: () => [MedicalTest, MedicalProcedure, MedicalTherapy] as const,
});

export type Hospital_HealthcareReportingData = Dataset | CDCPMDRecord;
export const Hospital_HealthcareReportingDataUnion = createUnionType({
  name: 'Hospital_HealthcareReportingData',
  types: () => [Dataset, CDCPMDRecord] as const,
});

export type MedicalClinic_AvailableService = MedicalTest | MedicalProcedure | MedicalTherapy;
export const MedicalClinic_AvailableServiceUnion = createUnionType({
  name: 'MedicalClinic_AvailableService',
  types: () => [MedicalTest, MedicalProcedure, MedicalTherapy] as const,
});

export type FoodEstablishment_AcceptsReservations = TextType | BooleanType | UrlType;
export const FoodEstablishment_AcceptsReservationsUnion = createUnionType({
  name: 'FoodEstablishment_AcceptsReservations',
  types: () => [TextScalar, BooleanScalar, UrlScalar] as const,
});

export type FoodEstablishment_HasMenu = UrlType | TextType | Menu;
export const FoodEstablishment_HasMenuUnion = createUnionType({
  name: 'FoodEstablishment_HasMenu',
  types: () => [UrlScalar, TextScalar, Menu] as const,
});

export type FoodEstablishment_Menu = UrlType | Menu | TextType;
export const FoodEstablishment_MenuUnion = createUnionType({
  name: 'FoodEstablishment_Menu',
  types: () => [UrlScalar, Menu, TextScalar] as const,
});

export type Diet_Endorsers = Person | Organization;
export const Diet_EndorsersUnion = createUnionType({
  name: 'Diet_Endorsers',
  types: () => [Person, Organization] as const,
});

export type ExercisePlan_Repetitions = NumberType | QuantitativeValue;
export const ExercisePlan_RepetitionsUnion = createUnionType({
  name: 'ExercisePlan_Repetitions',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type ExercisePlan_Intensity = QuantitativeValue | TextType;
export const ExercisePlan_IntensityUnion = createUnionType({
  name: 'ExercisePlan_Intensity',
  types: () => [QuantitativeValue, TextScalar] as const,
});

export type ExercisePlan_Workload = QuantitativeValue | Energy;
export const ExercisePlan_WorkloadUnion = createUnionType({
  name: 'ExercisePlan_Workload',
  types: () => [QuantitativeValue, Energy] as const,
});

export type ExercisePlan_ActivityDuration = Duration | QuantitativeValue;
export const ExercisePlan_ActivityDurationUnion = createUnionType({
  name: 'ExercisePlan_ActivityDuration',
  types: () => [Duration, QuantitativeValue] as const,
});

export type ExercisePlan_RestPeriods = TextType | QuantitativeValue;
export const ExercisePlan_RestPeriodsUnion = createUnionType({
  name: 'ExercisePlan_RestPeriods',
  types: () => [TextScalar, QuantitativeValue] as const,
});

export type ExercisePlan_ActivityFrequency = TextType | QuantitativeValue;
export const ExercisePlan_ActivityFrequencyUnion = createUnionType({
  name: 'ExercisePlan_ActivityFrequency',
  types: () => [TextScalar, QuantitativeValue] as const,
});

export type PaymentCard_CashBack = NumberType | BooleanType;
export const PaymentCard_CashBackUnion = createUnionType({
  name: 'PaymentCard_CashBack',
  types: () => [NumberScalar, BooleanScalar] as const,
});

export type PaymentCard_MonthlyMinimumRepaymentAmount = MonetaryAmount | NumberType;
export const PaymentCard_MonthlyMinimumRepaymentAmountUnion = createUnionType({
  name: 'PaymentCard_MonthlyMinimumRepaymentAmount',
  types: () => [MonetaryAmount, NumberScalar] as const,
});

export type Physician_AvailableService = MedicalTest | MedicalProcedure | MedicalTherapy;
export const Physician_AvailableServiceUnion = createUnionType({
  name: 'Physician_AvailableService',
  types: () => [MedicalTest, MedicalProcedure, MedicalTherapy] as const,
});

export type TVSeries_Season = UrlType | CreativeWorkSeason;
export const TVSeries_SeasonUnion = createUnionType({
  name: 'TVSeries_Season',
  types: () => [UrlScalar, CreativeWorkSeason] as const,
});

export type TVSeries_MusicBy = Person | MusicGroup;
export const TVSeries_MusicByUnion = createUnionType({
  name: 'TVSeries_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type PronounceableText_InLanguage = TextType | Language;
export const PronounceableText_InLanguageUnion = createUnionType({
  name: 'PronounceableText_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type Thing_MainEntityOfPage = CreativeWork | UrlType;
export const Thing_MainEntityOfPageUnion = createUnionType({
  name: 'Thing_MainEntityOfPage',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type Thing_Image = UrlType | ImageObject;
export const Thing_ImageUnion = createUnionType({
  name: 'Thing_Image',
  types: () => [UrlScalar, ImageObject] as const,
});

export type Thing_SubjectOf = Event | CreativeWork;
export const Thing_SubjectOfUnion = createUnionType({
  name: 'Thing_SubjectOf',
  types: () => [Event, CreativeWork] as const,
});

export type Thing_Identifier = UrlType | TextType | PropertyValue;
export const Thing_IdentifierUnion = createUnionType({
  name: 'Thing_Identifier',
  types: () => [UrlScalar, TextScalar, PropertyValue] as const,
});

export type HowToSection_Steps = ItemList | CreativeWork | TextType;
export const HowToSection_StepsUnion = createUnionType({
  name: 'HowToSection_Steps',
  types: () => [ItemList, CreativeWork, TextScalar] as const,
});

export type BioChemEntity_TaxonomicRange = UrlType | DefinedTerm | TextType | Taxon;
export const BioChemEntity_TaxonomicRangeUnion = createUnionType({
  name: 'BioChemEntity_TaxonomicRange',
  types: () => [UrlScalar, DefinedTerm, TextScalar, Taxon] as const,
});

export type BioChemEntity_IsInvolvedInBiologicalProcess = PropertyValue | UrlType | DefinedTerm;
export const BioChemEntity_IsInvolvedInBiologicalProcessUnion = createUnionType({
  name: 'BioChemEntity_IsInvolvedInBiologicalProcess',
  types: () => [PropertyValue, UrlScalar, DefinedTerm] as const,
});

export type BioChemEntity_IsLocatedInSubcellularLocation = PropertyValue | DefinedTerm | UrlType;
export const BioChemEntity_IsLocatedInSubcellularLocationUnion = createUnionType({
  name: 'BioChemEntity_IsLocatedInSubcellularLocation',
  types: () => [PropertyValue, DefinedTerm, UrlScalar] as const,
});

export type BioChemEntity_AssociatedDisease = UrlType | PropertyValue | MedicalCondition;
export const BioChemEntity_AssociatedDiseaseUnion = createUnionType({
  name: 'BioChemEntity_AssociatedDisease',
  types: () => [UrlScalar, PropertyValue, MedicalCondition] as const,
});

export type BioChemEntity_HasMolecularFunction = PropertyValue | DefinedTerm | UrlType;
export const BioChemEntity_HasMolecularFunctionUnion = createUnionType({
  name: 'BioChemEntity_HasMolecularFunction',
  types: () => [PropertyValue, DefinedTerm, UrlScalar] as const,
});

export type BioChemEntity_HasRepresentation = TextType | PropertyValue | UrlType;
export const BioChemEntity_HasRepresentationUnion = createUnionType({
  name: 'BioChemEntity_HasRepresentation',
  types: () => [TextScalar, PropertyValue, UrlScalar] as const,
});

export type Organization_OwnershipFundingInfo = UrlType | AboutPage | TextType | CreativeWork;
export const Organization_OwnershipFundingInfoUnion = createUnionType({
  name: 'Organization_OwnershipFundingInfo',
  types: () => [UrlScalar, AboutPage, TextScalar, CreativeWork] as const,
});

export type Organization_KnowsAbout = UrlType | TextType | Thing;
export const Organization_KnowsAboutUnion = createUnionType({
  name: 'Organization_KnowsAbout',
  types: () => [UrlScalar, TextScalar, Thing] as const,
});

export type Organization_Member = Organization | Person;
export const Organization_MemberUnion = createUnionType({
  name: 'Organization_Member',
  types: () => [Organization, Person] as const,
});

export type Organization_Keywords = DefinedTerm | TextType | UrlType;
export const Organization_KeywordsUnion = createUnionType({
  name: 'Organization_Keywords',
  types: () => [DefinedTerm, TextScalar, UrlScalar] as const,
});

export type Organization_Funder = Organization | Person;
export const Organization_FunderUnion = createUnionType({
  name: 'Organization_Funder',
  types: () => [Organization, Person] as const,
});

export type Organization_CorrectionsPolicy = UrlType | CreativeWork;
export const Organization_CorrectionsPolicyUnion = createUnionType({
  name: 'Organization_CorrectionsPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type Organization_Location = PostalAddress | TextType | Place | VirtualLocation;
export const Organization_LocationUnion = createUnionType({
  name: 'Organization_Location',
  types: () => [PostalAddress, TextScalar, Place, VirtualLocation] as const,
});

export type Organization_Address = TextType | PostalAddress;
export const Organization_AddressUnion = createUnionType({
  name: 'Organization_Address',
  types: () => [TextScalar, PostalAddress] as const,
});

export type Organization_MemberOf = ProgramMembership | Organization;
export const Organization_MemberOfUnion = createUnionType({
  name: 'Organization_MemberOf',
  types: () => [ProgramMembership, Organization] as const,
});

export type Organization_PublishingPrinciples = UrlType | CreativeWork;
export const Organization_PublishingPrinciplesUnion = createUnionType({
  name: 'Organization_PublishingPrinciples',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type Organization_DiversityStaffingReport = UrlType | Article;
export const Organization_DiversityStaffingReportUnion = createUnionType({
  name: 'Organization_DiversityStaffingReport',
  types: () => [UrlScalar, Article] as const,
});

export type Organization_DiversityPolicy = CreativeWork | UrlType;
export const Organization_DiversityPolicyUnion = createUnionType({
  name: 'Organization_DiversityPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type Organization_EthicsPolicy = UrlType | CreativeWork;
export const Organization_EthicsPolicyUnion = createUnionType({
  name: 'Organization_EthicsPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type Organization_Brand = Organization | Brand;
export const Organization_BrandUnion = createUnionType({
  name: 'Organization_Brand',
  types: () => [Organization, Brand] as const,
});

export type Organization_Sponsor = Organization | Person;
export const Organization_SponsorUnion = createUnionType({
  name: 'Organization_Sponsor',
  types: () => [Organization, Person] as const,
});

export type Organization_Logo = UrlType | ImageObject;
export const Organization_LogoUnion = createUnionType({
  name: 'Organization_Logo',
  types: () => [UrlScalar, ImageObject] as const,
});

export type Organization_ActionableFeedbackPolicy = UrlType | CreativeWork;
export const Organization_ActionableFeedbackPolicyUnion = createUnionType({
  name: 'Organization_ActionableFeedbackPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type Organization_ServiceArea = GeoShape | AdministrativeArea | Place;
export const Organization_ServiceAreaUnion = createUnionType({
  name: 'Organization_ServiceArea',
  types: () => [GeoShape, AdministrativeArea, Place] as const,
});

export type Organization_UnnamedSourcesPolicy = CreativeWork | UrlType;
export const Organization_UnnamedSourcesPolicyUnion = createUnionType({
  name: 'Organization_UnnamedSourcesPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type Organization_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const Organization_AreaServedUnion = createUnionType({
  name: 'Organization_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type Organization_KnowsLanguage = Language | TextType;
export const Organization_KnowsLanguageUnion = createUnionType({
  name: 'Organization_KnowsLanguage',
  types: () => [Language, TextScalar] as const,
});

export type Organization_Owns = Product | OwnershipInfo;
export const Organization_OwnsUnion = createUnionType({
  name: 'Organization_Owns',
  types: () => [Product, OwnershipInfo] as const,
});

export type Organization_Members = Person | Organization;
export const Organization_MembersUnion = createUnionType({
  name: 'Organization_Members',
  types: () => [Person, Organization] as const,
});

export type FinancialService_FeesAndCommissionsSpecification = UrlType | TextType;
export const FinancialService_FeesAndCommissionsSpecificationUnion = createUnionType({
  name: 'FinancialService_FeesAndCommissionsSpecification',
  types: () => [UrlScalar, TextScalar] as const,
});

export type CreativeWorkSeries_StartDate = DateTimeType | DateType;
export const CreativeWorkSeries_StartDateUnion = createUnionType({
  name: 'CreativeWorkSeries_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type CreativeWorkSeries_EndDate = DateType | DateTimeType;
export const CreativeWorkSeries_EndDateUnion = createUnionType({
  name: 'CreativeWorkSeries_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type LodgingBusiness_NumberOfRooms = QuantitativeValue | NumberType;
export const LodgingBusiness_NumberOfRoomsUnion = createUnionType({
  name: 'LodgingBusiness_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type LodgingBusiness_AvailableLanguage = TextType | Language;
export const LodgingBusiness_AvailableLanguageUnion = createUnionType({
  name: 'LodgingBusiness_AvailableLanguage',
  types: () => [TextScalar, Language] as const,
});

export type LodgingBusiness_CheckoutTime = DateTimeType | TimeType;
export const LodgingBusiness_CheckoutTimeUnion = createUnionType({
  name: 'LodgingBusiness_CheckoutTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type LodgingBusiness_CheckinTime = DateTimeType | TimeType;
export const LodgingBusiness_CheckinTimeUnion = createUnionType({
  name: 'LodgingBusiness_CheckinTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type LodgingBusiness_PetsAllowed = TextType | BooleanType;
export const LodgingBusiness_PetsAllowedUnion = createUnionType({
  name: 'LodgingBusiness_PetsAllowed',
  types: () => [TextScalar, BooleanScalar] as const,
});

export type Place_GeoContains = Place | GeospatialGeometry;
export const Place_GeoContainsUnion = createUnionType({
  name: 'Place_GeoContains',
  types: () => [Place, GeospatialGeometry] as const,
});

export type Place_Keywords = DefinedTerm | TextType | UrlType;
export const Place_KeywordsUnion = createUnionType({
  name: 'Place_Keywords',
  types: () => [DefinedTerm, TextScalar, UrlScalar] as const,
});

export type Place_GeoIntersects = GeospatialGeometry | Place;
export const Place_GeoIntersectsUnion = createUnionType({
  name: 'Place_GeoIntersects',
  types: () => [GeospatialGeometry, Place] as const,
});

export type Place_Latitude = TextType | NumberType;
export const Place_LatitudeUnion = createUnionType({
  name: 'Place_Latitude',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Place_GeoTouches = Place | GeospatialGeometry;
export const Place_GeoTouchesUnion = createUnionType({
  name: 'Place_GeoTouches',
  types: () => [Place, GeospatialGeometry] as const,
});

export type Place_GeoCoveredBy = Place | GeospatialGeometry;
export const Place_GeoCoveredByUnion = createUnionType({
  name: 'Place_GeoCoveredBy',
  types: () => [Place, GeospatialGeometry] as const,
});

export type Place_Address = TextType | PostalAddress;
export const Place_AddressUnion = createUnionType({
  name: 'Place_Address',
  types: () => [TextScalar, PostalAddress] as const,
});

export type Place_GeoEquals = Place | GeospatialGeometry;
export const Place_GeoEqualsUnion = createUnionType({
  name: 'Place_GeoEquals',
  types: () => [Place, GeospatialGeometry] as const,
});

export type Place_GeoCrosses = GeospatialGeometry | Place;
export const Place_GeoCrossesUnion = createUnionType({
  name: 'Place_GeoCrosses',
  types: () => [GeospatialGeometry, Place] as const,
});

export type Place_Photos = ImageObject | Photograph;
export const Place_PhotosUnion = createUnionType({
  name: 'Place_Photos',
  types: () => [ImageObject, Photograph] as const,
});

export type Place_GeoCovers = GeospatialGeometry | Place;
export const Place_GeoCoversUnion = createUnionType({
  name: 'Place_GeoCovers',
  types: () => [GeospatialGeometry, Place] as const,
});

export type Place_Logo = UrlType | ImageObject;
export const Place_LogoUnion = createUnionType({
  name: 'Place_Logo',
  types: () => [UrlScalar, ImageObject] as const,
});

export type Place_GeoWithin = Place | GeospatialGeometry;
export const Place_GeoWithinUnion = createUnionType({
  name: 'Place_GeoWithin',
  types: () => [Place, GeospatialGeometry] as const,
});

export type Place_GeoDisjoint = GeospatialGeometry | Place;
export const Place_GeoDisjointUnion = createUnionType({
  name: 'Place_GeoDisjoint',
  types: () => [GeospatialGeometry, Place] as const,
});

export type Place_GeoOverlaps = GeospatialGeometry | Place;
export const Place_GeoOverlapsUnion = createUnionType({
  name: 'Place_GeoOverlaps',
  types: () => [GeospatialGeometry, Place] as const,
});

export type Place_Photo = Photograph | ImageObject;
export const Place_PhotoUnion = createUnionType({
  name: 'Place_Photo',
  types: () => [Photograph, ImageObject] as const,
});

export type Place_HasMap = UrlType | Map;
export const Place_HasMapUnion = createUnionType({
  name: 'Place_HasMap',
  types: () => [UrlScalar, Map] as const,
});

export type Place_Longitude = NumberType | TextType;
export const Place_LongitudeUnion = createUnionType({
  name: 'Place_Longitude',
  types: () => [NumberScalar, TextScalar] as const,
});

export type Place_Geo = GeoCoordinates | GeoShape;
export const Place_GeoUnion = createUnionType({
  name: 'Place_Geo',
  types: () => [GeoCoordinates, GeoShape] as const,
});

export type TouristAttraction_TouristType = Audience | TextType;
export const TouristAttraction_TouristTypeUnion = createUnionType({
  name: 'TouristAttraction_TouristType',
  types: () => [Audience, TextScalar] as const,
});

export type TouristAttraction_AvailableLanguage = TextType | Language;
export const TouristAttraction_AvailableLanguageUnion = createUnionType({
  name: 'TouristAttraction_AvailableLanguage',
  types: () => [TextScalar, Language] as const,
});

export type Gene_ExpressedIn = AnatomicalStructure | BioChemEntity | DefinedTerm | AnatomicalSystem;
export const Gene_ExpressedInUnion = createUnionType({
  name: 'Gene_ExpressedIn',
  types: () => [AnatomicalStructure, BioChemEntity, DefinedTerm, AnatomicalSystem] as const,
});

export type MedicalEntity_LegalStatus = DrugLegalStatus | TextType;
export const MedicalEntity_LegalStatusUnion = createUnionType({
  name: 'MedicalEntity_LegalStatus',
  types: () => [DrugLegalStatus, TextScalar] as const,
});

export type CreativeWork_Teaches = DefinedTerm | TextType;
export const CreativeWork_TeachesUnion = createUnionType({
  name: 'CreativeWork_Teaches',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type CreativeWork_EducationalLevel = UrlType | DefinedTerm | TextType;
export const CreativeWork_EducationalLevelUnion = createUnionType({
  name: 'CreativeWork_EducationalLevel',
  types: () => [UrlScalar, DefinedTerm, TextScalar] as const,
});

export type CreativeWork_CreativeWorkStatus = TextType | DefinedTerm;
export const CreativeWork_CreativeWorkStatusUnion = createUnionType({
  name: 'CreativeWork_CreativeWorkStatus',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type CreativeWork_Material = TextType | UrlType | Product;
export const CreativeWork_MaterialUnion = createUnionType({
  name: 'CreativeWork_Material',
  types: () => [TextScalar, UrlScalar, Product] as const,
});

export type CreativeWork_FileFormat = UrlType | TextType;
export const CreativeWork_FileFormatUnion = createUnionType({
  name: 'CreativeWork_FileFormat',
  types: () => [UrlScalar, TextScalar] as const,
});

export type CreativeWork_Translator = Person | Organization;
export const CreativeWork_TranslatorUnion = createUnionType({
  name: 'CreativeWork_Translator',
  types: () => [Person, Organization] as const,
});

export type CreativeWork_Assesses = TextType | DefinedTerm;
export const CreativeWork_AssessesUnion = createUnionType({
  name: 'CreativeWork_Assesses',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type CreativeWork_SchemaVersion = TextType | UrlType;
export const CreativeWork_SchemaVersionUnion = createUnionType({
  name: 'CreativeWork_SchemaVersion',
  types: () => [TextScalar, UrlScalar] as const,
});

export type CreativeWork_Pattern = DefinedTerm | TextType;
export const CreativeWork_PatternUnion = createUnionType({
  name: 'CreativeWork_Pattern',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type CreativeWork_EducationalUse = DefinedTerm | TextType;
export const CreativeWork_EducationalUseUnion = createUnionType({
  name: 'CreativeWork_EducationalUse',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type CreativeWork_Genre = UrlType | TextType;
export const CreativeWork_GenreUnion = createUnionType({
  name: 'CreativeWork_Genre',
  types: () => [UrlScalar, TextScalar] as const,
});

export type CreativeWork_Keywords = DefinedTerm | TextType | UrlType;
export const CreativeWork_KeywordsUnion = createUnionType({
  name: 'CreativeWork_Keywords',
  types: () => [DefinedTerm, TextScalar, UrlScalar] as const,
});

export type CreativeWork_Position = IntegerType | TextType;
export const CreativeWork_PositionUnion = createUnionType({
  name: 'CreativeWork_Position',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type CreativeWork_Offers = Offer | Demand;
export const CreativeWork_OffersUnion = createUnionType({
  name: 'CreativeWork_Offers',
  types: () => [Offer, Demand] as const,
});

export type CreativeWork_MaterialExtent = QuantitativeValue | TextType;
export const CreativeWork_MaterialExtentUnion = createUnionType({
  name: 'CreativeWork_MaterialExtent',
  types: () => [QuantitativeValue, TextScalar] as const,
});

export type CreativeWork_CopyrightHolder = Organization | Person;
export const CreativeWork_CopyrightHolderUnion = createUnionType({
  name: 'CreativeWork_CopyrightHolder',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_Producer = Organization | Person;
export const CreativeWork_ProducerUnion = createUnionType({
  name: 'CreativeWork_Producer',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_Publisher = Person | Organization;
export const CreativeWork_PublisherUnion = createUnionType({
  name: 'CreativeWork_Publisher',
  types: () => [Person, Organization] as const,
});

export type CreativeWork_Funder = Organization | Person;
export const CreativeWork_FunderUnion = createUnionType({
  name: 'CreativeWork_Funder',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_UsageInfo = CreativeWork | UrlType;
export const CreativeWork_UsageInfoUnion = createUnionType({
  name: 'CreativeWork_UsageInfo',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type CreativeWork_Provider = Organization | Person;
export const CreativeWork_ProviderUnion = createUnionType({
  name: 'CreativeWork_Provider',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_SdPublisher = Organization | Person;
export const CreativeWork_SdPublisherUnion = createUnionType({
  name: 'CreativeWork_SdPublisher',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_IsBasedOn = CreativeWork | UrlType | Product;
export const CreativeWork_IsBasedOnUnion = createUnionType({
  name: 'CreativeWork_IsBasedOn',
  types: () => [CreativeWork, UrlScalar, Product] as const,
});

export type CreativeWork_PublishingPrinciples = UrlType | CreativeWork;
export const CreativeWork_PublishingPrinciplesUnion = createUnionType({
  name: 'CreativeWork_PublishingPrinciples',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type CreativeWork_DateCreated = DateType | DateTimeType;
export const CreativeWork_DateCreatedUnion = createUnionType({
  name: 'CreativeWork_DateCreated',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type CreativeWork_EditEIDR = UrlType | TextType;
export const CreativeWork_EditEIDRUnion = createUnionType({
  name: 'CreativeWork_EditEIDR',
  types: () => [UrlScalar, TextScalar] as const,
});

export type CreativeWork_Author = Person | Organization;
export const CreativeWork_AuthorUnion = createUnionType({
  name: 'CreativeWork_Author',
  types: () => [Person, Organization] as const,
});

export type CreativeWork_DateModified = DateTimeType | DateType;
export const CreativeWork_DateModifiedUnion = createUnionType({
  name: 'CreativeWork_DateModified',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type CreativeWork_Sponsor = Organization | Person;
export const CreativeWork_SponsorUnion = createUnionType({
  name: 'CreativeWork_Sponsor',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_EncodingFormat = TextType | UrlType;
export const CreativeWork_EncodingFormatUnion = createUnionType({
  name: 'CreativeWork_EncodingFormat',
  types: () => [TextScalar, UrlScalar] as const,
});

export type CreativeWork_Maintainer = Person | Organization;
export const CreativeWork_MaintainerUnion = createUnionType({
  name: 'CreativeWork_Maintainer',
  types: () => [Person, Organization] as const,
});

export type CreativeWork_AcquireLicensePage = CreativeWork | UrlType;
export const CreativeWork_AcquireLicensePageUnion = createUnionType({
  name: 'CreativeWork_AcquireLicensePage',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type CreativeWork_DatePublished = DateType | DateTimeType;
export const CreativeWork_DatePublishedUnion = createUnionType({
  name: 'CreativeWork_DatePublished',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type CreativeWork_SdLicense = CreativeWork | UrlType;
export const CreativeWork_SdLicenseUnion = createUnionType({
  name: 'CreativeWork_SdLicense',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type CreativeWork_Correction = UrlType | TextType | CorrectionComment;
export const CreativeWork_CorrectionUnion = createUnionType({
  name: 'CreativeWork_Correction',
  types: () => [UrlScalar, TextScalar, CorrectionComment] as const,
});

export type CreativeWork_ContentRating = TextType | Rating;
export const CreativeWork_ContentRatingUnion = createUnionType({
  name: 'CreativeWork_ContentRating',
  types: () => [TextScalar, Rating] as const,
});

export type CreativeWork_Size = QuantitativeValue | DefinedTerm | TextType;
export const CreativeWork_SizeUnion = createUnionType({
  name: 'CreativeWork_Size',
  types: () => [QuantitativeValue, DefinedTerm, TextScalar] as const,
});

export type CreativeWork_IsPartOf = UrlType | CreativeWork;
export const CreativeWork_IsPartOfUnion = createUnionType({
  name: 'CreativeWork_IsPartOf',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type CreativeWork_Temporal = DateTimeType | TextType;
export const CreativeWork_TemporalUnion = createUnionType({
  name: 'CreativeWork_Temporal',
  types: () => [DateTimeScalar, TextScalar] as const,
});

export type CreativeWork_InLanguage = TextType | Language;
export const CreativeWork_InLanguageUnion = createUnionType({
  name: 'CreativeWork_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type CreativeWork_License = UrlType | CreativeWork;
export const CreativeWork_LicenseUnion = createUnionType({
  name: 'CreativeWork_License',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type CreativeWork_Creator = Organization | Person;
export const CreativeWork_CreatorUnion = createUnionType({
  name: 'CreativeWork_Creator',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_IsBasedOnUrl = UrlType | CreativeWork | Product;
export const CreativeWork_IsBasedOnUrlUnion = createUnionType({
  name: 'CreativeWork_IsBasedOnUrl',
  types: () => [UrlScalar, CreativeWork, Product] as const,
});

export type CreativeWork_Citation = CreativeWork | TextType;
export const CreativeWork_CitationUnion = createUnionType({
  name: 'CreativeWork_Citation',
  types: () => [CreativeWork, TextScalar] as const,
});

export type CreativeWork_Version = NumberType | TextType;
export const CreativeWork_VersionUnion = createUnionType({
  name: 'CreativeWork_Version',
  types: () => [NumberScalar, TextScalar] as const,
});

export type CreativeWork_ArchivedAt = WebPage | UrlType;
export const CreativeWork_ArchivedAtUnion = createUnionType({
  name: 'CreativeWork_ArchivedAt',
  types: () => [WebPage, UrlScalar] as const,
});

export type CreativeWork_LearningResourceType = DefinedTerm | TextType;
export const CreativeWork_LearningResourceTypeUnion = createUnionType({
  name: 'CreativeWork_LearningResourceType',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type CreativeWork_Audio = AudioObject | MusicRecording | Clip;
export const CreativeWork_AudioUnion = createUnionType({
  name: 'CreativeWork_Audio',
  types: () => [AudioObject, MusicRecording, Clip] as const,
});

export type CreativeWork_TemporalCoverage = UrlType | DateTimeType | TextType;
export const CreativeWork_TemporalCoverageUnion = createUnionType({
  name: 'CreativeWork_TemporalCoverage',
  types: () => [UrlScalar, DateTimeScalar, TextScalar] as const,
});

export type CreativeWork_Contributor = Organization | Person;
export const CreativeWork_ContributorUnion = createUnionType({
  name: 'CreativeWork_Contributor',
  types: () => [Organization, Person] as const,
});

export type CreativeWork_Video = Clip | VideoObject;
export const CreativeWork_VideoUnion = createUnionType({
  name: 'CreativeWork_Video',
  types: () => [Clip, VideoObject] as const,
});

export type MolecularEntity_MonoisotopicMolecularWeight = TextType | QuantitativeValue;
export const MolecularEntity_MonoisotopicMolecularWeightUnion = createUnionType({
  name: 'MolecularEntity_MonoisotopicMolecularWeight',
  types: () => [TextScalar, QuantitativeValue] as const,
});

export type MolecularEntity_MolecularWeight = QuantitativeValue | TextType;
export const MolecularEntity_MolecularWeightUnion = createUnionType({
  name: 'MolecularEntity_MolecularWeight',
  types: () => [QuantitativeValue, TextScalar] as const,
});

export type MedicalTest_NormalRange = TextType;
export const MedicalTest_NormalRangeUnion = createUnionType({
  name: 'MedicalTest_NormalRange',
  types: () => [TextScalar] as const,
});

export type VideoGame_GamePlatform = TextType | UrlType | Thing;
export const VideoGame_GamePlatformUnion = createUnionType({
  name: 'VideoGame_GamePlatform',
  types: () => [TextScalar, UrlScalar, Thing] as const,
});

export type VideoGame_MusicBy = Person | MusicGroup;
export const VideoGame_MusicByUnion = createUnionType({
  name: 'VideoGame_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type RadioSeries_Season = UrlType | CreativeWorkSeason;
export const RadioSeries_SeasonUnion = createUnionType({
  name: 'RadioSeries_Season',
  types: () => [UrlScalar, CreativeWorkSeason] as const,
});

export type RadioSeries_MusicBy = Person | MusicGroup;
export const RadioSeries_MusicByUnion = createUnionType({
  name: 'RadioSeries_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type SuperficialAnatomy_RelatedAnatomy = AnatomicalSystem | AnatomicalStructure;
export const SuperficialAnatomy_RelatedAnatomyUnion = createUnionType({
  name: 'SuperficialAnatomy_RelatedAnatomy',
  types: () => [AnatomicalSystem, AnatomicalStructure] as const,
});

export type HowToDirection_AfterMedia = UrlType | MediaObject;
export const HowToDirection_AfterMediaUnion = createUnionType({
  name: 'HowToDirection_AfterMedia',
  types: () => [UrlScalar, MediaObject] as const,
});

export type HowToDirection_Supply = HowToSupply | TextType;
export const HowToDirection_SupplyUnion = createUnionType({
  name: 'HowToDirection_Supply',
  types: () => [HowToSupply, TextScalar] as const,
});

export type HowToDirection_DuringMedia = UrlType | MediaObject;
export const HowToDirection_DuringMediaUnion = createUnionType({
  name: 'HowToDirection_DuringMedia',
  types: () => [UrlScalar, MediaObject] as const,
});

export type HowToDirection_BeforeMedia = UrlType | MediaObject;
export const HowToDirection_BeforeMediaUnion = createUnionType({
  name: 'HowToDirection_BeforeMedia',
  types: () => [UrlScalar, MediaObject] as const,
});

export type HowToDirection_Tool = HowToTool | TextType;
export const HowToDirection_ToolUnion = createUnionType({
  name: 'HowToDirection_Tool',
  types: () => [HowToTool, TextScalar] as const,
});

export type PodcastSeries_WebFeed = DataFeed | UrlType;
export const PodcastSeries_WebFeedUnion = createUnionType({
  name: 'PodcastSeries_WebFeed',
  types: () => [DataFeed, UrlScalar] as const,
});

export type MusicComposition_Composer = Organization | Person;
export const MusicComposition_ComposerUnion = createUnionType({
  name: 'MusicComposition_Composer',
  types: () => [Organization, Person] as const,
});

export type MedicalCondition_Status = TextType;
export const MedicalCondition_StatusUnion = createUnionType({
  name: 'MedicalCondition_Status',
  types: () => [TextScalar] as const,
});

export type MedicalCondition_AssociatedAnatomy = AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy;
export const MedicalCondition_AssociatedAnatomyUnion = createUnionType({
  name: 'MedicalCondition_AssociatedAnatomy',
  types: () => [AnatomicalStructure, AnatomicalSystem, SuperficialAnatomy] as const,
});

export type SportsOrganization_Sport = TextType | UrlType;
export const SportsOrganization_SportUnion = createUnionType({
  name: 'SportsOrganization_Sport',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Quotation_SpokenByCharacter = Person | Organization;
export const Quotation_SpokenByCharacterUnion = createUnionType({
  name: 'Quotation_SpokenByCharacter',
  types: () => [Person, Organization] as const,
});

export type MusicRecording_ByArtist = Person | MusicGroup;
export const MusicRecording_ByArtistUnion = createUnionType({
  name: 'MusicRecording_ByArtist',
  types: () => [Person, MusicGroup] as const,
});

export type NewsMediaOrganization_OwnershipFundingInfo = UrlType | AboutPage | TextType | CreativeWork;
export const NewsMediaOrganization_OwnershipFundingInfoUnion = createUnionType({
  name: 'NewsMediaOrganization_OwnershipFundingInfo',
  types: () => [UrlScalar, AboutPage, TextScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_CorrectionsPolicy = UrlType | CreativeWork;
export const NewsMediaOrganization_CorrectionsPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_CorrectionsPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_DiversityStaffingReport = UrlType | Article;
export const NewsMediaOrganization_DiversityStaffingReportUnion = createUnionType({
  name: 'NewsMediaOrganization_DiversityStaffingReport',
  types: () => [UrlScalar, Article] as const,
});

export type NewsMediaOrganization_DiversityPolicy = CreativeWork | UrlType;
export const NewsMediaOrganization_DiversityPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_DiversityPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type NewsMediaOrganization_EthicsPolicy = UrlType | CreativeWork;
export const NewsMediaOrganization_EthicsPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_EthicsPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_MissionCoveragePrioritiesPolicy = CreativeWork | UrlType;
export const NewsMediaOrganization_MissionCoveragePrioritiesPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_MissionCoveragePrioritiesPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type NewsMediaOrganization_ActionableFeedbackPolicy = UrlType | CreativeWork;
export const NewsMediaOrganization_ActionableFeedbackPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_ActionableFeedbackPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_Masthead = UrlType | CreativeWork;
export const NewsMediaOrganization_MastheadUnion = createUnionType({
  name: 'NewsMediaOrganization_Masthead',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_UnnamedSourcesPolicy = CreativeWork | UrlType;
export const NewsMediaOrganization_UnnamedSourcesPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_UnnamedSourcesPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type NewsMediaOrganization_VerificationFactCheckingPolicy = UrlType | CreativeWork;
export const NewsMediaOrganization_VerificationFactCheckingPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_VerificationFactCheckingPolicy',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type NewsMediaOrganization_NoBylinesPolicy = CreativeWork | UrlType;
export const NewsMediaOrganization_NoBylinesPolicyUnion = createUnionType({
  name: 'NewsMediaOrganization_NoBylinesPolicy',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type MathSolver_MathExpression = SolveMathAction | TextType;
export const MathSolver_MathExpressionUnion = createUnionType({
  name: 'MathSolver_MathExpression',
  types: () => [SolveMathAction, TextScalar] as const,
});

export type MedicalStudy_Status = TextType;
export const MedicalStudy_StatusUnion = createUnionType({
  name: 'MedicalStudy_Status',
  types: () => [TextScalar] as const,
});

export type MedicalStudy_Sponsor = Organization | Person;
export const MedicalStudy_SponsorUnion = createUnionType({
  name: 'MedicalStudy_Sponsor',
  types: () => [Organization, Person] as const,
});

export type DataCatalog_MeasurementTechnique = TextType | UrlType;
export const DataCatalog_MeasurementTechniqueUnion = createUnionType({
  name: 'DataCatalog_MeasurementTechnique',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Course_CoursePrerequisites = TextType | AlignmentObject | Course;
export const Course_CoursePrerequisitesUnion = createUnionType({
  name: 'Course_CoursePrerequisites',
  types: () => [TextScalar, AlignmentObject, Course] as const,
});

export type Course_EducationalCredentialAwarded = UrlType | EducationalOccupationalCredential | TextType;
export const Course_EducationalCredentialAwardedUnion = createUnionType({
  name: 'Course_EducationalCredentialAwarded',
  types: () => [UrlScalar, EducationalOccupationalCredential, TextScalar] as const,
});

export type Course_NumberOfCredits = IntegerType | StructuredValue;
export const Course_NumberOfCreditsUnion = createUnionType({
  name: 'Course_NumberOfCredits',
  types: () => [IntegerScalar, StructuredValue] as const,
});

export type Course_OccupationalCredentialAwarded = EducationalOccupationalCredential | TextType | UrlType;
export const Course_OccupationalCredentialAwardedUnion = createUnionType({
  name: 'Course_OccupationalCredentialAwarded',
  types: () => [EducationalOccupationalCredential, TextScalar, UrlScalar] as const,
});

export type Clip_StartOffset = NumberType | HyperTocEntry;
export const Clip_StartOffsetUnion = createUnionType({
  name: 'Clip_StartOffset',
  types: () => [NumberScalar, HyperTocEntry] as const,
});

export type Clip_EndOffset = NumberType | HyperTocEntry;
export const Clip_EndOffsetUnion = createUnionType({
  name: 'Clip_EndOffset',
  types: () => [NumberScalar, HyperTocEntry] as const,
});

export type Clip_ClipNumber = TextType | IntegerType;
export const Clip_ClipNumberUnion = createUnionType({
  name: 'Clip_ClipNumber',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type Clip_MusicBy = Person | MusicGroup;
export const Clip_MusicByUnion = createUnionType({
  name: 'Clip_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type VideoGameSeries_Season = UrlType | CreativeWorkSeason;
export const VideoGameSeries_SeasonUnion = createUnionType({
  name: 'VideoGameSeries_Season',
  types: () => [UrlScalar, CreativeWorkSeason] as const,
});

export type VideoGameSeries_GamePlatform = TextType | UrlType | Thing;
export const VideoGameSeries_GamePlatformUnion = createUnionType({
  name: 'VideoGameSeries_GamePlatform',
  types: () => [TextScalar, UrlScalar, Thing] as const,
});

export type VideoGameSeries_MusicBy = Person | MusicGroup;
export const VideoGameSeries_MusicByUnion = createUnionType({
  name: 'VideoGameSeries_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type VideoGameSeries_GameLocation = Place | UrlType | PostalAddress;
export const VideoGameSeries_GameLocationUnion = createUnionType({
  name: 'VideoGameSeries_GameLocation',
  types: () => [Place, UrlScalar, PostalAddress] as const,
});

export type Episode_EpisodeNumber = IntegerType | TextType;
export const Episode_EpisodeNumberUnion = createUnionType({
  name: 'Episode_EpisodeNumber',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type Episode_MusicBy = Person | MusicGroup;
export const Episode_MusicByUnion = createUnionType({
  name: 'Episode_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type Action_Agent = Organization | Person;
export const Action_AgentUnion = createUnionType({
  name: 'Action_Agent',
  types: () => [Organization, Person] as const,
});

export type Action_StartTime = DateTimeType | TimeType;
export const Action_StartTimeUnion = createUnionType({
  name: 'Action_StartTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type Action_Provider = Organization | Person;
export const Action_ProviderUnion = createUnionType({
  name: 'Action_Provider',
  types: () => [Organization, Person] as const,
});

export type Action_Location = PostalAddress | TextType | Place | VirtualLocation;
export const Action_LocationUnion = createUnionType({
  name: 'Action_Location',
  types: () => [PostalAddress, TextScalar, Place, VirtualLocation] as const,
});

export type Action_EndTime = DateTimeType | TimeType;
export const Action_EndTimeUnion = createUnionType({
  name: 'Action_EndTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type Action_Participant = Organization | Person;
export const Action_ParticipantUnion = createUnionType({
  name: 'Action_Participant',
  types: () => [Organization, Person] as const,
});

export type MedicalProcedure_Preparation = MedicalEntity | TextType;
export const MedicalProcedure_PreparationUnion = createUnionType({
  name: 'MedicalProcedure_Preparation',
  types: () => [MedicalEntity, TextScalar] as const,
});

export type MedicalProcedure_Status = TextType;
export const MedicalProcedure_StatusUnion = createUnionType({
  name: 'MedicalProcedure_Status',
  types: () => [TextScalar] as const,
});

export type EducationalOccupationalCredential_EducationalLevel = UrlType | DefinedTerm | TextType;
export const EducationalOccupationalCredential_EducationalLevelUnion = createUnionType({
  name: 'EducationalOccupationalCredential_EducationalLevel',
  types: () => [UrlScalar, DefinedTerm, TextScalar] as const,
});

export type EducationalOccupationalCredential_CredentialCategory = UrlType | DefinedTerm | TextType;
export const EducationalOccupationalCredential_CredentialCategoryUnion = createUnionType({
  name: 'EducationalOccupationalCredential_CredentialCategory',
  types: () => [UrlScalar, DefinedTerm, TextScalar] as const,
});

export type EducationalOccupationalCredential_CompetencyRequired = TextType | DefinedTerm | UrlType;
export const EducationalOccupationalCredential_CompetencyRequiredUnion = createUnionType({
  name: 'EducationalOccupationalCredential_CompetencyRequired',
  types: () => [TextScalar, DefinedTerm, UrlScalar] as const,
});

export type LearningResource_Teaches = DefinedTerm | TextType;
export const LearningResource_TeachesUnion = createUnionType({
  name: 'LearningResource_Teaches',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type LearningResource_EducationalLevel = UrlType | DefinedTerm | TextType;
export const LearningResource_EducationalLevelUnion = createUnionType({
  name: 'LearningResource_EducationalLevel',
  types: () => [UrlScalar, DefinedTerm, TextScalar] as const,
});

export type LearningResource_Assesses = TextType | DefinedTerm;
export const LearningResource_AssessesUnion = createUnionType({
  name: 'LearningResource_Assesses',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type LearningResource_EducationalUse = DefinedTerm | TextType;
export const LearningResource_EducationalUseUnion = createUnionType({
  name: 'LearningResource_EducationalUse',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type LearningResource_CompetencyRequired = TextType | DefinedTerm | UrlType;
export const LearningResource_CompetencyRequiredUnion = createUnionType({
  name: 'LearningResource_CompetencyRequired',
  types: () => [TextScalar, DefinedTerm, UrlScalar] as const,
});

export type LearningResource_LearningResourceType = DefinedTerm | TextType;
export const LearningResource_LearningResourceTypeUnion = createUnionType({
  name: 'LearningResource_LearningResourceType',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type Accommodation_NumberOfRooms = QuantitativeValue | NumberType;
export const Accommodation_NumberOfRoomsUnion = createUnionType({
  name: 'Accommodation_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Accommodation_LeaseLength = QuantitativeValue | Duration;
export const Accommodation_LeaseLengthUnion = createUnionType({
  name: 'Accommodation_LeaseLength',
  types: () => [QuantitativeValue, Duration] as const,
});

export type Accommodation_NumberOfBedrooms = NumberType | QuantitativeValue;
export const Accommodation_NumberOfBedroomsUnion = createUnionType({
  name: 'Accommodation_NumberOfBedrooms',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type Accommodation_PetsAllowed = TextType | BooleanType;
export const Accommodation_PetsAllowedUnion = createUnionType({
  name: 'Accommodation_PetsAllowed',
  types: () => [TextScalar, BooleanScalar] as const,
});

export type Person_KnowsAbout = UrlType | TextType | Thing;
export const Person_KnowsAboutUnion = createUnionType({
  name: 'Person_KnowsAbout',
  types: () => [UrlScalar, TextScalar, Thing] as const,
});

export type Person_NetWorth = MonetaryAmount | PriceSpecification;
export const Person_NetWorthUnion = createUnionType({
  name: 'Person_NetWorth',
  types: () => [MonetaryAmount, PriceSpecification] as const,
});

export type Person_WorkLocation = Place | ContactPoint;
export const Person_WorkLocationUnion = createUnionType({
  name: 'Person_WorkLocation',
  types: () => [Place, ContactPoint] as const,
});

export type Person_HomeLocation = Place | ContactPoint;
export const Person_HomeLocationUnion = createUnionType({
  name: 'Person_HomeLocation',
  types: () => [Place, ContactPoint] as const,
});

export type Person_Height = Distance | QuantitativeValue;
export const Person_HeightUnion = createUnionType({
  name: 'Person_Height',
  types: () => [Distance, QuantitativeValue] as const,
});

export type Person_Gender = TextType;
export const Person_GenderUnion = createUnionType({
  name: 'Person_Gender',
  types: () => [TextScalar] as const,
});

export type Person_JobTitle = TextType | DefinedTerm;
export const Person_JobTitleUnion = createUnionType({
  name: 'Person_JobTitle',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type Person_Funder = Organization | Person;
export const Person_FunderUnion = createUnionType({
  name: 'Person_Funder',
  types: () => [Organization, Person] as const,
});

export type Person_Address = TextType | PostalAddress;
export const Person_AddressUnion = createUnionType({
  name: 'Person_Address',
  types: () => [TextScalar, PostalAddress] as const,
});

export type Person_MemberOf = ProgramMembership | Organization;
export const Person_MemberOfUnion = createUnionType({
  name: 'Person_MemberOf',
  types: () => [ProgramMembership, Organization] as const,
});

export type Person_PublishingPrinciples = UrlType | CreativeWork;
export const Person_PublishingPrinciplesUnion = createUnionType({
  name: 'Person_PublishingPrinciples',
  types: () => [UrlScalar, CreativeWork] as const,
});

export type Person_Brand = Organization | Brand;
export const Person_BrandUnion = createUnionType({
  name: 'Person_Brand',
  types: () => [Organization, Brand] as const,
});

export type Person_Sponsor = Organization | Person;
export const Person_SponsorUnion = createUnionType({
  name: 'Person_Sponsor',
  types: () => [Organization, Person] as const,
});

export type Person_AlumniOf = EducationalOrganization | Organization;
export const Person_AlumniOfUnion = createUnionType({
  name: 'Person_AlumniOf',
  types: () => [EducationalOrganization, Organization] as const,
});

export type Person_KnowsLanguage = Language | TextType;
export const Person_KnowsLanguageUnion = createUnionType({
  name: 'Person_KnowsLanguage',
  types: () => [Language, TextScalar] as const,
});

export type Person_Colleague = Person | UrlType;
export const Person_ColleagueUnion = createUnionType({
  name: 'Person_Colleague',
  types: () => [Person, UrlScalar] as const,
});

export type Person_Owns = Product | OwnershipInfo;
export const Person_OwnsUnion = createUnionType({
  name: 'Person_Owns',
  types: () => [Product, OwnershipInfo] as const,
});

export type DrugCost_CostPerUnit = NumberType | TextType;
export const DrugCost_CostPerUnitUnion = createUnionType({
  name: 'DrugCost_CostPerUnit',
  types: () => [NumberScalar, TextScalar] as const,
});

export type Event_Translator = Person | Organization;
export const Event_TranslatorUnion = createUnionType({
  name: 'Event_Translator',
  types: () => [Person, Organization] as const,
});

export type Event_StartDate = DateTimeType | DateType;
export const Event_StartDateUnion = createUnionType({
  name: 'Event_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Event_Composer = Organization | Person;
export const Event_ComposerUnion = createUnionType({
  name: 'Event_Composer',
  types: () => [Organization, Person] as const,
});

export type Event_Keywords = DefinedTerm | TextType | UrlType;
export const Event_KeywordsUnion = createUnionType({
  name: 'Event_Keywords',
  types: () => [DefinedTerm, TextScalar, UrlScalar] as const,
});

export type Event_Offers = Offer | Demand;
export const Event_OffersUnion = createUnionType({
  name: 'Event_Offers',
  types: () => [Offer, Demand] as const,
});

export type Event_EndDate = DateType | DateTimeType;
export const Event_EndDateUnion = createUnionType({
  name: 'Event_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Event_Funder = Organization | Person;
export const Event_FunderUnion = createUnionType({
  name: 'Event_Funder',
  types: () => [Organization, Person] as const,
});

export type Event_Performer = Organization | Person;
export const Event_PerformerUnion = createUnionType({
  name: 'Event_Performer',
  types: () => [Organization, Person] as const,
});

export type Event_Location = PostalAddress | TextType | Place | VirtualLocation;
export const Event_LocationUnion = createUnionType({
  name: 'Event_Location',
  types: () => [PostalAddress, TextScalar, Place, VirtualLocation] as const,
});

export type Event_Performers = Person | Organization;
export const Event_PerformersUnion = createUnionType({
  name: 'Event_Performers',
  types: () => [Person, Organization] as const,
});

export type Event_Organizer = Person | Organization;
export const Event_OrganizerUnion = createUnionType({
  name: 'Event_Organizer',
  types: () => [Person, Organization] as const,
});

export type Event_Sponsor = Organization | Person;
export const Event_SponsorUnion = createUnionType({
  name: 'Event_Sponsor',
  types: () => [Organization, Person] as const,
});

export type Event_DoorTime = TimeType | DateTimeType;
export const Event_DoorTimeUnion = createUnionType({
  name: 'Event_DoorTime',
  types: () => [TimeScalar, DateTimeScalar] as const,
});

export type Event_InLanguage = TextType | Language;
export const Event_InLanguageUnion = createUnionType({
  name: 'Event_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type Event_Attendee = Person | Organization;
export const Event_AttendeeUnion = createUnionType({
  name: 'Event_Attendee',
  types: () => [Person, Organization] as const,
});

export type Event_Contributor = Organization | Person;
export const Event_ContributorUnion = createUnionType({
  name: 'Event_Contributor',
  types: () => [Organization, Person] as const,
});

export type Event_Attendees = Person | Organization;
export const Event_AttendeesUnion = createUnionType({
  name: 'Event_Attendees',
  types: () => [Person, Organization] as const,
});

export type Nerve_SensoryUnit = SuperficialAnatomy | AnatomicalStructure;
export const Nerve_SensoryUnitUnion = createUnionType({
  name: 'Nerve_SensoryUnit',
  types: () => [SuperficialAnatomy, AnatomicalStructure] as const,
});

export type MovieSeries_MusicBy = Person | MusicGroup;
export const MovieSeries_MusicByUnion = createUnionType({
  name: 'MovieSeries_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type Dataset_VariableMeasured = PropertyValue | TextType;
export const Dataset_VariableMeasuredUnion = createUnionType({
  name: 'Dataset_VariableMeasured',
  types: () => [PropertyValue, TextScalar] as const,
});

export type Dataset_MeasurementTechnique = TextType | UrlType;
export const Dataset_MeasurementTechniqueUnion = createUnionType({
  name: 'Dataset_MeasurementTechnique',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Taxon_ParentTaxon = UrlType | Taxon | TextType;
export const Taxon_ParentTaxonUnion = createUnionType({
  name: 'Taxon_ParentTaxon',
  types: () => [UrlScalar, Taxon, TextScalar] as const,
});

export type Taxon_TaxonRank = PropertyValue | UrlType | TextType;
export const Taxon_TaxonRankUnion = createUnionType({
  name: 'Taxon_TaxonRank',
  types: () => [PropertyValue, UrlScalar, TextScalar] as const,
});

export type Taxon_ChildTaxon = TextType | Taxon | UrlType;
export const Taxon_ChildTaxonUnion = createUnionType({
  name: 'Taxon_ChildTaxon',
  types: () => [TextScalar, Taxon, UrlScalar] as const,
});

export type VisualArtwork_Width = QuantitativeValue | Distance;
export const VisualArtwork_WidthUnion = createUnionType({
  name: 'VisualArtwork_Width',
  types: () => [QuantitativeValue, Distance] as const,
});

export type VisualArtwork_Height = Distance | QuantitativeValue;
export const VisualArtwork_HeightUnion = createUnionType({
  name: 'VisualArtwork_Height',
  types: () => [Distance, QuantitativeValue] as const,
});

export type VisualArtwork_Surface = UrlType | TextType;
export const VisualArtwork_SurfaceUnion = createUnionType({
  name: 'VisualArtwork_Surface',
  types: () => [UrlScalar, TextScalar] as const,
});

export type VisualArtwork_Artform = TextType | UrlType;
export const VisualArtwork_ArtformUnion = createUnionType({
  name: 'VisualArtwork_Artform',
  types: () => [TextScalar, UrlScalar] as const,
});

export type VisualArtwork_ArtworkSurface = UrlType | TextType;
export const VisualArtwork_ArtworkSurfaceUnion = createUnionType({
  name: 'VisualArtwork_ArtworkSurface',
  types: () => [UrlScalar, TextScalar] as const,
});

export type VisualArtwork_ArtEdition = IntegerType | TextType;
export const VisualArtwork_ArtEditionUnion = createUnionType({
  name: 'VisualArtwork_ArtEdition',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type VisualArtwork_Depth = Distance | QuantitativeValue;
export const VisualArtwork_DepthUnion = createUnionType({
  name: 'VisualArtwork_Depth',
  types: () => [Distance, QuantitativeValue] as const,
});

export type VisualArtwork_ArtMedium = UrlType | TextType;
export const VisualArtwork_ArtMediumUnion = createUnionType({
  name: 'VisualArtwork_ArtMedium',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Claim_ClaimInterpreter = Person | Organization;
export const Claim_ClaimInterpreterUnion = createUnionType({
  name: 'Claim_ClaimInterpreter',
  types: () => [Person, Organization] as const,
});

export type Game_GameLocation = Place | UrlType | PostalAddress;
export const Game_GameLocationUnion = createUnionType({
  name: 'Game_GameLocation',
  types: () => [Place, UrlScalar, PostalAddress] as const,
});

export type SportsTeam_Gender = TextType;
export const SportsTeam_GenderUnion = createUnionType({
  name: 'SportsTeam_Gender',
  types: () => [TextScalar] as const,
});

export type Schedule_StartDate = DateTimeType | DateType;
export const Schedule_StartDateUnion = createUnionType({
  name: 'Schedule_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Schedule_ExceptDate = DateTimeType | DateType;
export const Schedule_ExceptDateUnion = createUnionType({
  name: 'Schedule_ExceptDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Schedule_StartTime = DateTimeType | TimeType;
export const Schedule_StartTimeUnion = createUnionType({
  name: 'Schedule_StartTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type Schedule_EndDate = DateType | DateTimeType;
export const Schedule_EndDateUnion = createUnionType({
  name: 'Schedule_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Schedule_RepeatFrequency = TextType | Duration;
export const Schedule_RepeatFrequencyUnion = createUnionType({
  name: 'Schedule_RepeatFrequency',
  types: () => [TextScalar, Duration] as const,
});

export type Schedule_EndTime = DateTimeType | TimeType;
export const Schedule_EndTimeUnion = createUnionType({
  name: 'Schedule_EndTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type Schedule_ByDay = TextType;
export const Schedule_ByDayUnion = createUnionType({
  name: 'Schedule_ByDay',
  types: () => [TextScalar] as const,
});

export type Message_BccRecipient = Person | ContactPoint | Organization;
export const Message_BccRecipientUnion = createUnionType({
  name: 'Message_BccRecipient',
  types: () => [Person, ContactPoint, Organization] as const,
});

export type Message_Recipient = Person | Audience | ContactPoint | Organization;
export const Message_RecipientUnion = createUnionType({
  name: 'Message_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type Message_CcRecipient = Person | Organization | ContactPoint;
export const Message_CcRecipientUnion = createUnionType({
  name: 'Message_CcRecipient',
  types: () => [Person, Organization, ContactPoint] as const,
});

export type Message_ToRecipient = ContactPoint | Person | Audience | Organization;
export const Message_ToRecipientUnion = createUnionType({
  name: 'Message_ToRecipient',
  types: () => [ContactPoint, Person, Audience, Organization] as const,
});

export type Message_DateRead = DateType | DateTimeType;
export const Message_DateReadUnion = createUnionType({
  name: 'Message_DateRead',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Message_Sender = Person | Audience | Organization;
export const Message_SenderUnion = createUnionType({
  name: 'Message_Sender',
  types: () => [Person, Audience, Organization] as const,
});

export type Demand_ItemOffered = Trip | Event | Product | AggregateOffer | CreativeWork | MenuItem | Service;
export const Demand_ItemOfferedUnion = createUnionType({
  name: 'Demand_ItemOffered',
  types: () => [Trip, Event, Product, AggregateOffer, CreativeWork, MenuItem, Service] as const,
});

export type Demand_AcceptedPaymentMethod = LoanOrCredit | TextType;
export const Demand_AcceptedPaymentMethodUnion = createUnionType({
  name: 'Demand_AcceptedPaymentMethod',
  types: () => [LoanOrCredit, TextScalar] as const,
});

export type Demand_Seller = Organization | Person;
export const Demand_SellerUnion = createUnionType({
  name: 'Demand_Seller',
  types: () => [Organization, Person] as const,
});

export type Demand_IneligibleRegion = Place | TextType | GeoShape;
export const Demand_IneligibleRegionUnion = createUnionType({
  name: 'Demand_IneligibleRegion',
  types: () => [Place, TextScalar, GeoShape] as const,
});

export type Demand_ValidFrom = DateTimeType | DateType;
export const Demand_ValidFromUnion = createUnionType({
  name: 'Demand_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Demand_AvailabilityEnds = DateType | DateTimeType | TimeType;
export const Demand_AvailabilityEndsUnion = createUnionType({
  name: 'Demand_AvailabilityEnds',
  types: () => [DateScalar, DateTimeScalar, TimeScalar] as const,
});

export type Demand_EligibleRegion = GeoShape | TextType | Place;
export const Demand_EligibleRegionUnion = createUnionType({
  name: 'Demand_EligibleRegion',
  types: () => [GeoShape, TextScalar, Place] as const,
});

export type Demand_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const Demand_AreaServedUnion = createUnionType({
  name: 'Demand_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type Demand_ValidThrough = DateTimeType | DateType;
export const Demand_ValidThroughUnion = createUnionType({
  name: 'Demand_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Demand_AvailabilityStarts = TimeType | DateTimeType | DateType;
export const Demand_AvailabilityStartsUnion = createUnionType({
  name: 'Demand_AvailabilityStarts',
  types: () => [TimeScalar, DateTimeScalar, DateScalar] as const,
});

export type Product_Material = TextType | UrlType | Product;
export const Product_MaterialUnion = createUnionType({
  name: 'Product_Material',
  types: () => [TextScalar, UrlScalar, Product] as const,
});

export type Product_Width = QuantitativeValue | Distance;
export const Product_WidthUnion = createUnionType({
  name: 'Product_Width',
  types: () => [QuantitativeValue, Distance] as const,
});

export type Product_Pattern = DefinedTerm | TextType;
export const Product_PatternUnion = createUnionType({
  name: 'Product_Pattern',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type Product_Category = UrlType | TextType | Thing | CategoryCode;
export const Product_CategoryUnion = createUnionType({
  name: 'Product_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type Product_Height = Distance | QuantitativeValue;
export const Product_HeightUnion = createUnionType({
  name: 'Product_Height',
  types: () => [Distance, QuantitativeValue] as const,
});

export type Product_Keywords = DefinedTerm | TextType | UrlType;
export const Product_KeywordsUnion = createUnionType({
  name: 'Product_Keywords',
  types: () => [DefinedTerm, TextScalar, UrlScalar] as const,
});

export type Product_Offers = Offer | Demand;
export const Product_OffersUnion = createUnionType({
  name: 'Product_Offers',
  types: () => [Offer, Demand] as const,
});

export type Product_IsSimilarTo = Service | Product;
export const Product_IsSimilarToUnion = createUnionType({
  name: 'Product_IsSimilarTo',
  types: () => [Service, Product] as const,
});

export type Product_Depth = Distance | QuantitativeValue;
export const Product_DepthUnion = createUnionType({
  name: 'Product_Depth',
  types: () => [Distance, QuantitativeValue] as const,
});

export type Product_IsVariantOf = ProductModel | ProductGroup;
export const Product_IsVariantOfUnion = createUnionType({
  name: 'Product_IsVariantOf',
  types: () => [ProductModel, ProductGroup] as const,
});

export type Product_Brand = Organization | Brand;
export const Product_BrandUnion = createUnionType({
  name: 'Product_Brand',
  types: () => [Organization, Brand] as const,
});

export type Product_Logo = UrlType | ImageObject;
export const Product_LogoUnion = createUnionType({
  name: 'Product_Logo',
  types: () => [UrlScalar, ImageObject] as const,
});

export type Product_Model = ProductModel | TextType;
export const Product_ModelUnion = createUnionType({
  name: 'Product_Model',
  types: () => [ProductModel, TextScalar] as const,
});

export type Product_Size = QuantitativeValue | DefinedTerm | TextType;
export const Product_SizeUnion = createUnionType({
  name: 'Product_Size',
  types: () => [QuantitativeValue, DefinedTerm, TextScalar] as const,
});

export type Product_IsRelatedTo = Service | Product;
export const Product_IsRelatedToUnion = createUnionType({
  name: 'Product_IsRelatedTo',
  types: () => [Service, Product] as const,
});

export type BroadcastChannel_Genre = UrlType | TextType;
export const BroadcastChannel_GenreUnion = createUnionType({
  name: 'BroadcastChannel_Genre',
  types: () => [UrlScalar, TextScalar] as const,
});

export type BroadcastChannel_BroadcastFrequency = BroadcastFrequencySpecification | TextType;
export const BroadcastChannel_BroadcastFrequencyUnion = createUnionType({
  name: 'BroadcastChannel_BroadcastFrequency',
  types: () => [BroadcastFrequencySpecification, TextScalar] as const,
});

export type CreativeWorkSeason_StartDate = DateTimeType | DateType;
export const CreativeWorkSeason_StartDateUnion = createUnionType({
  name: 'CreativeWorkSeason_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type CreativeWorkSeason_EndDate = DateType | DateTimeType;
export const CreativeWorkSeason_EndDateUnion = createUnionType({
  name: 'CreativeWorkSeason_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type CreativeWorkSeason_SeasonNumber = TextType | IntegerType;
export const CreativeWorkSeason_SeasonNumberUnion = createUnionType({
  name: 'CreativeWorkSeason_SeasonNumber',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type Chapter_PageStart = TextType | IntegerType;
export const Chapter_PageStartUnion = createUnionType({
  name: 'Chapter_PageStart',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type Chapter_PageEnd = TextType | IntegerType;
export const Chapter_PageEndUnion = createUnionType({
  name: 'Chapter_PageEnd',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type EducationalOccupationalProgram_ProgramPrerequisites = AlignmentObject | Course | EducationalOccupationalCredential | TextType;
export const EducationalOccupationalProgram_ProgramPrerequisitesUnion = createUnionType({
  name: 'EducationalOccupationalProgram_ProgramPrerequisites',
  types: () => [AlignmentObject, Course, EducationalOccupationalCredential, TextScalar] as const,
});

export type EducationalOccupationalProgram_StartDate = DateTimeType | DateType;
export const EducationalOccupationalProgram_StartDateUnion = createUnionType({
  name: 'EducationalOccupationalProgram_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type EducationalOccupationalProgram_Offers = Offer | Demand;
export const EducationalOccupationalProgram_OffersUnion = createUnionType({
  name: 'EducationalOccupationalProgram_Offers',
  types: () => [Offer, Demand] as const,
});

export type EducationalOccupationalProgram_TypicalCreditsPerTerm = IntegerType | StructuredValue;
export const EducationalOccupationalProgram_TypicalCreditsPerTermUnion = createUnionType({
  name: 'EducationalOccupationalProgram_TypicalCreditsPerTerm',
  types: () => [IntegerScalar, StructuredValue] as const,
});

export type EducationalOccupationalProgram_EndDate = DateType | DateTimeType;
export const EducationalOccupationalProgram_EndDateUnion = createUnionType({
  name: 'EducationalOccupationalProgram_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type EducationalOccupationalProgram_Provider = Organization | Person;
export const EducationalOccupationalProgram_ProviderUnion = createUnionType({
  name: 'EducationalOccupationalProgram_Provider',
  types: () => [Organization, Person] as const,
});

export type EducationalOccupationalProgram_EducationalCredentialAwarded = UrlType | EducationalOccupationalCredential | TextType;
export const EducationalOccupationalProgram_EducationalCredentialAwardedUnion = createUnionType({
  name: 'EducationalOccupationalProgram_EducationalCredentialAwarded',
  types: () => [UrlScalar, EducationalOccupationalCredential, TextScalar] as const,
});

export type EducationalOccupationalProgram_NumberOfCredits = IntegerType | StructuredValue;
export const EducationalOccupationalProgram_NumberOfCreditsUnion = createUnionType({
  name: 'EducationalOccupationalProgram_NumberOfCredits',
  types: () => [IntegerScalar, StructuredValue] as const,
});

export type EducationalOccupationalProgram_OccupationalCredentialAwarded = EducationalOccupationalCredential | TextType | UrlType;
export const EducationalOccupationalProgram_OccupationalCredentialAwardedUnion = createUnionType({
  name: 'EducationalOccupationalProgram_OccupationalCredentialAwarded',
  types: () => [EducationalOccupationalCredential, TextScalar, UrlScalar] as const,
});

export type EducationalOccupationalProgram_EducationalProgramMode = UrlType | TextType;
export const EducationalOccupationalProgram_EducationalProgramModeUnion = createUnionType({
  name: 'EducationalOccupationalProgram_EducationalProgramMode',
  types: () => [UrlScalar, TextScalar] as const,
});

export type EducationalOccupationalProgram_ProgramType = TextType | DefinedTerm;
export const EducationalOccupationalProgram_ProgramTypeUnion = createUnionType({
  name: 'EducationalOccupationalProgram_ProgramType',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type EducationalOccupationalProgram_FinancialAidEligible = TextType | DefinedTerm;
export const EducationalOccupationalProgram_FinancialAidEligibleUnion = createUnionType({
  name: 'EducationalOccupationalProgram_FinancialAidEligible',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type EducationalOccupationalProgram_OccupationalCategory = CategoryCode | TextType;
export const EducationalOccupationalProgram_OccupationalCategoryUnion = createUnionType({
  name: 'EducationalOccupationalProgram_OccupationalCategory',
  types: () => [CategoryCode, TextScalar] as const,
});

export type PropertyValueSpecification_DefaultValue = TextType | Thing;
export const PropertyValueSpecification_DefaultValueUnion = createUnionType({
  name: 'PropertyValueSpecification_DefaultValue',
  types: () => [TextScalar, Thing] as const,
});

export type MediaObject_Width = QuantitativeValue | Distance;
export const MediaObject_WidthUnion = createUnionType({
  name: 'MediaObject_Width',
  types: () => [QuantitativeValue, Distance] as const,
});

export type MediaObject_Height = Distance | QuantitativeValue;
export const MediaObject_HeightUnion = createUnionType({
  name: 'MediaObject_Height',
  types: () => [Distance, QuantitativeValue] as const,
});

export type MediaObject_StartTime = DateTimeType | TimeType;
export const MediaObject_StartTimeUnion = createUnionType({
  name: 'MediaObject_StartTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type MediaObject_IneligibleRegion = Place | TextType | GeoShape;
export const MediaObject_IneligibleRegionUnion = createUnionType({
  name: 'MediaObject_IneligibleRegion',
  types: () => [Place, TextScalar, GeoShape] as const,
});

export type MediaObject_RequiresSubscription = MediaSubscription | BooleanType;
export const MediaObject_RequiresSubscriptionUnion = createUnionType({
  name: 'MediaObject_RequiresSubscription',
  types: () => [MediaSubscription, BooleanScalar] as const,
});

export type MediaObject_EncodingFormat = TextType | UrlType;
export const MediaObject_EncodingFormatUnion = createUnionType({
  name: 'MediaObject_EncodingFormat',
  types: () => [TextScalar, UrlScalar] as const,
});

export type MediaObject_EndTime = DateTimeType | TimeType;
export const MediaObject_EndTimeUnion = createUnionType({
  name: 'MediaObject_EndTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type AudioObject_Caption = TextType | MediaObject;
export const AudioObject_CaptionUnion = createUnionType({
  name: 'AudioObject_Caption',
  types: () => [TextScalar, MediaObject] as const,
});

export type Review_NegativeNotes = ListItem | TextType | WebContent | ItemList;
export const Review_NegativeNotesUnion = createUnionType({
  name: 'Review_NegativeNotes',
  types: () => [ListItem, TextScalar, WebContent, ItemList] as const,
});

export type Review_PositiveNotes = WebContent | TextType | ListItem | ItemList;
export const Review_PositiveNotesUnion = createUnionType({
  name: 'Review_PositiveNotes',
  types: () => [WebContent, TextScalar, ListItem, ItemList] as const,
});

export type ScreeningEvent_SubtitleLanguage = Language | TextType;
export const ScreeningEvent_SubtitleLanguageUnion = createUnionType({
  name: 'ScreeningEvent_SubtitleLanguage',
  types: () => [Language, TextScalar] as const,
});

export type Movie_TitleEIDR = UrlType | TextType;
export const Movie_TitleEIDRUnion = createUnionType({
  name: 'Movie_TitleEIDR',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Movie_SubtitleLanguage = Language | TextType;
export const Movie_SubtitleLanguageUnion = createUnionType({
  name: 'Movie_SubtitleLanguage',
  types: () => [Language, TextScalar] as const,
});

export type Movie_MusicBy = Person | MusicGroup;
export const Movie_MusicByUnion = createUnionType({
  name: 'Movie_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type BedDetails_TypeOfBed = TextType;
export const BedDetails_TypeOfBedUnion = createUnionType({
  name: 'BedDetails_TypeOfBed',
  types: () => [TextScalar] as const,
});

export type Seat_SeatingType = TextType;
export const Seat_SeatingTypeUnion = createUnionType({
  name: 'Seat_SeatingType',
  types: () => [TextScalar] as const,
});

export type BroadcastFrequencySpecification_BroadcastSignalModulation = TextType;
export const BroadcastFrequencySpecification_BroadcastSignalModulationUnion = createUnionType({
  name: 'BroadcastFrequencySpecification_BroadcastSignalModulation',
  types: () => [TextScalar] as const,
});

export type BroadcastFrequencySpecification_BroadcastFrequencyValue = NumberType | QuantitativeValue;
export const BroadcastFrequencySpecification_BroadcastFrequencyValueUnion = createUnionType({
  name: 'BroadcastFrequencySpecification_BroadcastFrequencyValue',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type DoseSchedule_DoseValue = NumberType | TextType;
export const DoseSchedule_DoseValueUnion = createUnionType({
  name: 'DoseSchedule_DoseValue',
  types: () => [NumberScalar, TextScalar] as const,
});

export type CommunicateAction_Recipient = Person | Audience | ContactPoint | Organization;
export const CommunicateAction_RecipientUnion = createUnionType({
  name: 'CommunicateAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type CommunicateAction_InLanguage = TextType | Language;
export const CommunicateAction_InLanguageUnion = createUnionType({
  name: 'CommunicateAction_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type House_NumberOfRooms = QuantitativeValue | NumberType;
export const House_NumberOfRoomsUnion = createUnionType({
  name: 'House_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type SoftwareSourceCode_ProgrammingLanguage = TextType | ComputerLanguage;
export const SoftwareSourceCode_ProgrammingLanguageUnion = createUnionType({
  name: 'SoftwareSourceCode_ProgrammingLanguage',
  types: () => [TextScalar, ComputerLanguage] as const,
});

export type MusicGroup_Genre = UrlType | TextType;
export const MusicGroup_GenreUnion = createUnionType({
  name: 'MusicGroup_Genre',
  types: () => [UrlScalar, TextScalar] as const,
});

export type MusicGroup_Track = ItemList | MusicRecording;
export const MusicGroup_TrackUnion = createUnionType({
  name: 'MusicGroup_Track',
  types: () => [ItemList, MusicRecording] as const,
});

export type EducationEvent_Teaches = DefinedTerm | TextType;
export const EducationEvent_TeachesUnion = createUnionType({
  name: 'EducationEvent_Teaches',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type EducationEvent_EducationalLevel = UrlType | DefinedTerm | TextType;
export const EducationEvent_EducationalLevelUnion = createUnionType({
  name: 'EducationEvent_EducationalLevel',
  types: () => [UrlScalar, DefinedTerm, TextScalar] as const,
});

export type EducationEvent_Assesses = TextType | DefinedTerm;
export const EducationEvent_AssessesUnion = createUnionType({
  name: 'EducationEvent_Assesses',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type ArchiveComponent_ItemLocation = Place | TextType | PostalAddress;
export const ArchiveComponent_ItemLocationUnion = createUnionType({
  name: 'ArchiveComponent_ItemLocation',
  types: () => [Place, TextScalar, PostalAddress] as const,
});

export type Vehicle_NumberOfForwardGears = QuantitativeValue | NumberType;
export const Vehicle_NumberOfForwardGearsUnion = createUnionType({
  name: 'Vehicle_NumberOfForwardGears',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Vehicle_NumberOfPreviousOwners = NumberType | QuantitativeValue;
export const Vehicle_NumberOfPreviousOwnersUnion = createUnionType({
  name: 'Vehicle_NumberOfPreviousOwners',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type Vehicle_NumberOfAirbags = TextType | NumberType;
export const Vehicle_NumberOfAirbagsUnion = createUnionType({
  name: 'Vehicle_NumberOfAirbags',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Vehicle_FuelType = TextType | UrlType;
export const Vehicle_FuelTypeUnion = createUnionType({
  name: 'Vehicle_FuelType',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Vehicle_VehicleTransmission = TextType | UrlType;
export const Vehicle_VehicleTransmissionUnion = createUnionType({
  name: 'Vehicle_VehicleTransmission',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Vehicle_DriveWheelConfiguration = TextType;
export const Vehicle_DriveWheelConfigurationUnion = createUnionType({
  name: 'Vehicle_DriveWheelConfiguration',
  types: () => [TextScalar] as const,
});

export type Vehicle_NumberOfAxles = NumberType | QuantitativeValue;
export const Vehicle_NumberOfAxlesUnion = createUnionType({
  name: 'Vehicle_NumberOfAxles',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type Vehicle_NumberOfDoors = QuantitativeValue | NumberType;
export const Vehicle_NumberOfDoorsUnion = createUnionType({
  name: 'Vehicle_NumberOfDoors',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Vehicle_VehicleSeatingCapacity = QuantitativeValue | NumberType;
export const Vehicle_VehicleSeatingCapacityUnion = createUnionType({
  name: 'Vehicle_VehicleSeatingCapacity',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Vehicle_SeatingCapacity = QuantitativeValue | NumberType;
export const Vehicle_SeatingCapacityUnion = createUnionType({
  name: 'Vehicle_SeatingCapacity',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Vehicle_BodyType = TextType | UrlType;
export const Vehicle_BodyTypeUnion = createUnionType({
  name: 'Vehicle_BodyType',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Vehicle_MeetsEmissionStandard = TextType | UrlType;
export const Vehicle_MeetsEmissionStandardUnion = createUnionType({
  name: 'Vehicle_MeetsEmissionStandard',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Vehicle_VehicleSpecialUsage = TextType;
export const Vehicle_VehicleSpecialUsageUnion = createUnionType({
  name: 'Vehicle_VehicleSpecialUsage',
  types: () => [TextScalar] as const,
});

export type Permit_ValidFrom = DateTimeType | DateType;
export const Permit_ValidFromUnion = createUnionType({
  name: 'Permit_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Suite_NumberOfRooms = QuantitativeValue | NumberType;
export const Suite_NumberOfRoomsUnion = createUnionType({
  name: 'Suite_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Suite_Bed = BedDetails | TextType;
export const Suite_BedUnion = createUnionType({
  name: 'Suite_Bed',
  types: () => [BedDetails, TextScalar] as const,
});

export type GeospatialGeometry_GeoContains = Place | GeospatialGeometry;
export const GeospatialGeometry_GeoContainsUnion = createUnionType({
  name: 'GeospatialGeometry_GeoContains',
  types: () => [Place, GeospatialGeometry] as const,
});

export type GeospatialGeometry_GeoIntersects = GeospatialGeometry | Place;
export const GeospatialGeometry_GeoIntersectsUnion = createUnionType({
  name: 'GeospatialGeometry_GeoIntersects',
  types: () => [GeospatialGeometry, Place] as const,
});

export type GeospatialGeometry_GeoTouches = Place | GeospatialGeometry;
export const GeospatialGeometry_GeoTouchesUnion = createUnionType({
  name: 'GeospatialGeometry_GeoTouches',
  types: () => [Place, GeospatialGeometry] as const,
});

export type GeospatialGeometry_GeoCoveredBy = Place | GeospatialGeometry;
export const GeospatialGeometry_GeoCoveredByUnion = createUnionType({
  name: 'GeospatialGeometry_GeoCoveredBy',
  types: () => [Place, GeospatialGeometry] as const,
});

export type GeospatialGeometry_GeoEquals = Place | GeospatialGeometry;
export const GeospatialGeometry_GeoEqualsUnion = createUnionType({
  name: 'GeospatialGeometry_GeoEquals',
  types: () => [Place, GeospatialGeometry] as const,
});

export type GeospatialGeometry_GeoCrosses = GeospatialGeometry | Place;
export const GeospatialGeometry_GeoCrossesUnion = createUnionType({
  name: 'GeospatialGeometry_GeoCrosses',
  types: () => [GeospatialGeometry, Place] as const,
});

export type GeospatialGeometry_GeoCovers = GeospatialGeometry | Place;
export const GeospatialGeometry_GeoCoversUnion = createUnionType({
  name: 'GeospatialGeometry_GeoCovers',
  types: () => [GeospatialGeometry, Place] as const,
});

export type GeospatialGeometry_GeoWithin = Place | GeospatialGeometry;
export const GeospatialGeometry_GeoWithinUnion = createUnionType({
  name: 'GeospatialGeometry_GeoWithin',
  types: () => [Place, GeospatialGeometry] as const,
});

export type GeospatialGeometry_GeoDisjoint = GeospatialGeometry | Place;
export const GeospatialGeometry_GeoDisjointUnion = createUnionType({
  name: 'GeospatialGeometry_GeoDisjoint',
  types: () => [GeospatialGeometry, Place] as const,
});

export type GeospatialGeometry_GeoOverlaps = GeospatialGeometry | Place;
export const GeospatialGeometry_GeoOverlapsUnion = createUnionType({
  name: 'GeospatialGeometry_GeoOverlaps',
  types: () => [GeospatialGeometry, Place] as const,
});

export type TouristDestination_TouristType = Audience | TextType;
export const TouristDestination_TouristTypeUnion = createUnionType({
  name: 'TouristDestination_TouristType',
  types: () => [Audience, TextScalar] as const,
});

export type ListItem_Position = IntegerType | TextType;
export const ListItem_PositionUnion = createUnionType({
  name: 'ListItem_Position',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type MedicalDevice_Contraindication = TextType | MedicalContraindication;
export const MedicalDevice_ContraindicationUnion = createUnionType({
  name: 'MedicalDevice_Contraindication',
  types: () => [TextScalar, MedicalContraindication] as const,
});

export type Property_SupersededBy = TextType | Class | Property;
export const Property_SupersededByUnion = createUnionType({
  name: 'Property_SupersededBy',
  types: () => [TextScalar, Class, Property] as const,
});

export type HowToItem_RequiredQuantity = QuantitativeValue | NumberType | TextType;
export const HowToItem_RequiredQuantityUnion = createUnionType({
  name: 'HowToItem_RequiredQuantity',
  types: () => [QuantitativeValue, NumberScalar, TextScalar] as const,
});

export type Answer_AnswerExplanation = WebContent | Comment;
export const Answer_AnswerExplanationUnion = createUnionType({
  name: 'Answer_AnswerExplanation',
  types: () => [WebContent, Comment] as const,
});

export type Article_PageStart = TextType | IntegerType;
export const Article_PageStartUnion = createUnionType({
  name: 'Article_PageStart',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type Article_PageEnd = TextType | IntegerType;
export const Article_PageEndUnion = createUnionType({
  name: 'Article_PageEnd',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type Article_Backstory = TextType | CreativeWork;
export const Article_BackstoryUnion = createUnionType({
  name: 'Article_Backstory',
  types: () => [TextScalar, CreativeWork] as const,
});

export type Article_Speakable = UrlType | SpeakableSpecification;
export const Article_SpeakableUnion = createUnionType({
  name: 'Article_Speakable',
  types: () => [UrlScalar, SpeakableSpecification] as const,
});

export type DefinedRegion_AddressCountry = Country | TextType;
export const DefinedRegion_AddressCountryUnion = createUnionType({
  name: 'DefinedRegion_AddressCountry',
  types: () => [Country, TextScalar] as const,
});

export type Ticket_TicketToken = UrlType | TextType;
export const Ticket_TicketTokenUnion = createUnionType({
  name: 'Ticket_TicketToken',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Ticket_TotalPrice = PriceSpecification | NumberType | TextType;
export const Ticket_TotalPriceUnion = createUnionType({
  name: 'Ticket_TotalPrice',
  types: () => [PriceSpecification, NumberScalar, TextScalar] as const,
});

export type Ticket_DateIssued = DateType | DateTimeType;
export const Ticket_DateIssuedUnion = createUnionType({
  name: 'Ticket_DateIssued',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Ticket_UnderName = Organization | Person;
export const Ticket_UnderNameUnion = createUnionType({
  name: 'Ticket_UnderName',
  types: () => [Organization, Person] as const,
});

export type Trip_ArrivalTime = TimeType | DateTimeType;
export const Trip_ArrivalTimeUnion = createUnionType({
  name: 'Trip_ArrivalTime',
  types: () => [TimeScalar, DateTimeScalar] as const,
});

export type Trip_Offers = Offer | Demand;
export const Trip_OffersUnion = createUnionType({
  name: 'Trip_Offers',
  types: () => [Offer, Demand] as const,
});

export type Trip_DepartureTime = TimeType | DateTimeType;
export const Trip_DepartureTimeUnion = createUnionType({
  name: 'Trip_DepartureTime',
  types: () => [TimeScalar, DateTimeScalar] as const,
});

export type Trip_Provider = Organization | Person;
export const Trip_ProviderUnion = createUnionType({
  name: 'Trip_Provider',
  types: () => [Organization, Person] as const,
});

export type Trip_Itinerary = ItemList | Place;
export const Trip_ItineraryUnion = createUnionType({
  name: 'Trip_Itinerary',
  types: () => [ItemList, Place] as const,
});

export type OrderItem_OrderedItem = Service | OrderItem | Product;
export const OrderItem_OrderedItemUnion = createUnionType({
  name: 'OrderItem_OrderedItem',
  types: () => [Service, OrderItem, Product] as const,
});

export type MerchantReturnPolicy_ReturnPolicyCountry = Country | TextType;
export const MerchantReturnPolicy_ReturnPolicyCountryUnion = createUnionType({
  name: 'MerchantReturnPolicy_ReturnPolicyCountry',
  types: () => [Country, TextScalar] as const,
});

export type MerchantReturnPolicy_RestockingFee = MonetaryAmount | NumberType;
export const MerchantReturnPolicy_RestockingFeeUnion = createUnionType({
  name: 'MerchantReturnPolicy_RestockingFee',
  types: () => [MonetaryAmount, NumberScalar] as const,
});

export type MerchantReturnPolicy_MerchantReturnDays = DateTimeType | IntegerType | DateType;
export const MerchantReturnPolicy_MerchantReturnDaysUnion = createUnionType({
  name: 'MerchantReturnPolicy_MerchantReturnDays',
  types: () => [DateTimeScalar, IntegerScalar, DateScalar] as const,
});

export type MerchantReturnPolicy_ApplicableCountry = TextType | Country;
export const MerchantReturnPolicy_ApplicableCountryUnion = createUnionType({
  name: 'MerchantReturnPolicy_ApplicableCountry',
  types: () => [TextScalar, Country] as const,
});

export type SoftwareApplication_MemoryRequirements = TextType | UrlType;
export const SoftwareApplication_MemoryRequirementsUnion = createUnionType({
  name: 'SoftwareApplication_MemoryRequirements',
  types: () => [TextScalar, UrlScalar] as const,
});

export type SoftwareApplication_StorageRequirements = UrlType | TextType;
export const SoftwareApplication_StorageRequirementsUnion = createUnionType({
  name: 'SoftwareApplication_StorageRequirements',
  types: () => [UrlScalar, TextScalar] as const,
});

export type SoftwareApplication_ApplicationSubCategory = UrlType | TextType;
export const SoftwareApplication_ApplicationSubCategoryUnion = createUnionType({
  name: 'SoftwareApplication_ApplicationSubCategory',
  types: () => [UrlScalar, TextScalar] as const,
});

export type SoftwareApplication_ApplicationCategory = TextType | UrlType;
export const SoftwareApplication_ApplicationCategoryUnion = createUnionType({
  name: 'SoftwareApplication_ApplicationCategory',
  types: () => [TextScalar, UrlScalar] as const,
});

export type SoftwareApplication_SoftwareRequirements = UrlType | TextType;
export const SoftwareApplication_SoftwareRequirementsUnion = createUnionType({
  name: 'SoftwareApplication_SoftwareRequirements',
  types: () => [UrlScalar, TextScalar] as const,
});

export type SoftwareApplication_Requirements = UrlType | TextType;
export const SoftwareApplication_RequirementsUnion = createUnionType({
  name: 'SoftwareApplication_Requirements',
  types: () => [UrlScalar, TextScalar] as const,
});

export type SoftwareApplication_Screenshot = ImageObject | UrlType;
export const SoftwareApplication_ScreenshotUnion = createUnionType({
  name: 'SoftwareApplication_Screenshot',
  types: () => [ImageObject, UrlScalar] as const,
});

export type SoftwareApplication_FeatureList = TextType | UrlType;
export const SoftwareApplication_FeatureListUnion = createUnionType({
  name: 'SoftwareApplication_FeatureList',
  types: () => [TextScalar, UrlScalar] as const,
});

export type SoftwareApplication_ReleaseNotes = UrlType | TextType;
export const SoftwareApplication_ReleaseNotesUnion = createUnionType({
  name: 'SoftwareApplication_ReleaseNotes',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Apartment_NumberOfRooms = QuantitativeValue | NumberType;
export const Apartment_NumberOfRoomsUnion = createUnionType({
  name: 'Apartment_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type WebPage_ReviewedBy = Organization | Person;
export const WebPage_ReviewedByUnion = createUnionType({
  name: 'WebPage_ReviewedBy',
  types: () => [Organization, Person] as const,
});

export type WebPage_Speakable = UrlType | SpeakableSpecification;
export const WebPage_SpeakableUnion = createUnionType({
  name: 'WebPage_Speakable',
  types: () => [UrlScalar, SpeakableSpecification] as const,
});

export type WebPage_Breadcrumb = BreadcrumbList | TextType;
export const WebPage_BreadcrumbUnion = createUnionType({
  name: 'WebPage_Breadcrumb',
  types: () => [BreadcrumbList, TextScalar] as const,
});

export type CourseInstance_CourseMode = UrlType | TextType;
export const CourseInstance_CourseModeUnion = createUnionType({
  name: 'CourseInstance_CourseMode',
  types: () => [UrlScalar, TextScalar] as const,
});

export type HowTo_Yield = TextType | QuantitativeValue;
export const HowTo_YieldUnion = createUnionType({
  name: 'HowTo_Yield',
  types: () => [TextScalar, QuantitativeValue] as const,
});

export type HowTo_EstimatedCost = TextType | MonetaryAmount;
export const HowTo_EstimatedCostUnion = createUnionType({
  name: 'HowTo_EstimatedCost',
  types: () => [TextScalar, MonetaryAmount] as const,
});

export type HowTo_Supply = HowToSupply | TextType;
export const HowTo_SupplyUnion = createUnionType({
  name: 'HowTo_Supply',
  types: () => [HowToSupply, TextScalar] as const,
});

export type HowTo_Step = HowToStep | HowToSection | TextType | CreativeWork;
export const HowTo_StepUnion = createUnionType({
  name: 'HowTo_Step',
  types: () => [HowToStep, HowToSection, TextScalar, CreativeWork] as const,
});

export type HowTo_Tool = HowToTool | TextType;
export const HowTo_ToolUnion = createUnionType({
  name: 'HowTo_Tool',
  types: () => [HowToTool, TextScalar] as const,
});

export type HowTo_Steps = ItemList | CreativeWork | TextType;
export const HowTo_StepsUnion = createUnionType({
  name: 'HowTo_Steps',
  types: () => [ItemList, CreativeWork, TextScalar] as const,
});

export type PublicationEvent_PublishedBy = Organization | Person;
export const PublicationEvent_PublishedByUnion = createUnionType({
  name: 'PublicationEvent_PublishedBy',
  types: () => [Organization, Person] as const,
});

export type InteractionCounter_StartTime = DateTimeType | TimeType;
export const InteractionCounter_StartTimeUnion = createUnionType({
  name: 'InteractionCounter_StartTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type InteractionCounter_Location = PostalAddress | TextType | Place | VirtualLocation;
export const InteractionCounter_LocationUnion = createUnionType({
  name: 'InteractionCounter_Location',
  types: () => [PostalAddress, TextScalar, Place, VirtualLocation] as const,
});

export type InteractionCounter_InteractionService = SoftwareApplication | WebSite;
export const InteractionCounter_InteractionServiceUnion = createUnionType({
  name: 'InteractionCounter_InteractionService',
  types: () => [SoftwareApplication, WebSite] as const,
});

export type InteractionCounter_EndTime = DateTimeType | TimeType;
export const InteractionCounter_EndTimeUnion = createUnionType({
  name: 'InteractionCounter_EndTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type DataFeed_DataFeedElement = Thing | DataFeedItem | TextType;
export const DataFeed_DataFeedElementUnion = createUnionType({
  name: 'DataFeed_DataFeedElement',
  types: () => [Thing, DataFeedItem, TextScalar] as const,
});

export type TradeAction_Price = NumberType | TextType;
export const TradeAction_PriceUnion = createUnionType({
  name: 'TradeAction_Price',
  types: () => [NumberScalar, TextScalar] as const,
});

export type PublicationVolume_PageStart = TextType | IntegerType;
export const PublicationVolume_PageStartUnion = createUnionType({
  name: 'PublicationVolume_PageStart',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type PublicationVolume_PageEnd = TextType | IntegerType;
export const PublicationVolume_PageEndUnion = createUnionType({
  name: 'PublicationVolume_PageEnd',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type PublicationVolume_VolumeNumber = IntegerType | TextType;
export const PublicationVolume_VolumeNumberUnion = createUnionType({
  name: 'PublicationVolume_VolumeNumber',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type AnatomicalSystem_ComprisedOf = AnatomicalStructure | AnatomicalSystem;
export const AnatomicalSystem_ComprisedOfUnion = createUnionType({
  name: 'AnatomicalSystem_ComprisedOf',
  types: () => [AnatomicalStructure, AnatomicalSystem] as const,
});

export type MedicalTherapy_Contraindication = TextType | MedicalContraindication;
export const MedicalTherapy_ContraindicationUnion = createUnionType({
  name: 'MedicalTherapy_Contraindication',
  types: () => [TextScalar, MedicalContraindication] as const,
});

export type ServiceChannel_AvailableLanguage = TextType | Language;
export const ServiceChannel_AvailableLanguageUnion = createUnionType({
  name: 'ServiceChannel_AvailableLanguage',
  types: () => [TextScalar, Language] as const,
});

export type ImageObject_Caption = TextType | MediaObject;
export const ImageObject_CaptionUnion = createUnionType({
  name: 'ImageObject_Caption',
  types: () => [TextScalar, MediaObject] as const,
});

export type ImageObject_ExifData = PropertyValue | TextType;
export const ImageObject_ExifDataUnion = createUnionType({
  name: 'ImageObject_ExifData',
  types: () => [PropertyValue, TextScalar] as const,
});

export type MonetaryAmount_ValidFrom = DateTimeType | DateType;
export const MonetaryAmount_ValidFromUnion = createUnionType({
  name: 'MonetaryAmount_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type MonetaryAmount_Value = TextType | NumberType | StructuredValue | BooleanType;
export const MonetaryAmount_ValueUnion = createUnionType({
  name: 'MonetaryAmount_Value',
  types: () => [TextScalar, NumberScalar, StructuredValue, BooleanScalar] as const,
});

export type MonetaryAmount_ValidThrough = DateTimeType | DateType;
export const MonetaryAmount_ValidThroughUnion = createUnionType({
  name: 'MonetaryAmount_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type GeoCoordinates_AddressCountry = Country | TextType;
export const GeoCoordinates_AddressCountryUnion = createUnionType({
  name: 'GeoCoordinates_AddressCountry',
  types: () => [Country, TextScalar] as const,
});

export type GeoCoordinates_Latitude = TextType | NumberType;
export const GeoCoordinates_LatitudeUnion = createUnionType({
  name: 'GeoCoordinates_Latitude',
  types: () => [TextScalar, NumberScalar] as const,
});

export type GeoCoordinates_Address = TextType | PostalAddress;
export const GeoCoordinates_AddressUnion = createUnionType({
  name: 'GeoCoordinates_Address',
  types: () => [TextScalar, PostalAddress] as const,
});

export type GeoCoordinates_Elevation = TextType | NumberType;
export const GeoCoordinates_ElevationUnion = createUnionType({
  name: 'GeoCoordinates_Elevation',
  types: () => [TextScalar, NumberScalar] as const,
});

export type GeoCoordinates_Longitude = NumberType | TextType;
export const GeoCoordinates_LongitudeUnion = createUnionType({
  name: 'GeoCoordinates_Longitude',
  types: () => [NumberScalar, TextScalar] as const,
});

export type ActionAccessSpecification_Category = UrlType | TextType | Thing | CategoryCode;
export const ActionAccessSpecification_CategoryUnion = createUnionType({
  name: 'ActionAccessSpecification_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type ActionAccessSpecification_IneligibleRegion = Place | TextType | GeoShape;
export const ActionAccessSpecification_IneligibleRegionUnion = createUnionType({
  name: 'ActionAccessSpecification_IneligibleRegion',
  types: () => [Place, TextScalar, GeoShape] as const,
});

export type ActionAccessSpecification_RequiresSubscription = MediaSubscription | BooleanType;
export const ActionAccessSpecification_RequiresSubscriptionUnion = createUnionType({
  name: 'ActionAccessSpecification_RequiresSubscription',
  types: () => [MediaSubscription, BooleanScalar] as const,
});

export type ActionAccessSpecification_AvailabilityEnds = DateType | DateTimeType | TimeType;
export const ActionAccessSpecification_AvailabilityEndsUnion = createUnionType({
  name: 'ActionAccessSpecification_AvailabilityEnds',
  types: () => [DateScalar, DateTimeScalar, TimeScalar] as const,
});

export type ActionAccessSpecification_EligibleRegion = GeoShape | TextType | Place;
export const ActionAccessSpecification_EligibleRegionUnion = createUnionType({
  name: 'ActionAccessSpecification_EligibleRegion',
  types: () => [GeoShape, TextScalar, Place] as const,
});

export type ActionAccessSpecification_AvailabilityStarts = TimeType | DateTimeType | DateType;
export const ActionAccessSpecification_AvailabilityStartsUnion = createUnionType({
  name: 'ActionAccessSpecification_AvailabilityStarts',
  types: () => [TimeScalar, DateTimeScalar, DateScalar] as const,
});

export type TVEpisode_TitleEIDR = UrlType | TextType;
export const TVEpisode_TitleEIDRUnion = createUnionType({
  name: 'TVEpisode_TitleEIDR',
  types: () => [UrlScalar, TextScalar] as const,
});

export type TVEpisode_SubtitleLanguage = Language | TextType;
export const TVEpisode_SubtitleLanguageUnion = createUnionType({
  name: 'TVEpisode_SubtitleLanguage',
  types: () => [Language, TextScalar] as const,
});

export type Legislation_LegislationType = CategoryCode | TextType;
export const Legislation_LegislationTypeUnion = createUnionType({
  name: 'Legislation_LegislationType',
  types: () => [CategoryCode, TextScalar] as const,
});

export type Legislation_Jurisdiction = TextType | AdministrativeArea;
export const Legislation_JurisdictionUnion = createUnionType({
  name: 'Legislation_Jurisdiction',
  types: () => [TextScalar, AdministrativeArea] as const,
});

export type Legislation_LegislationIdentifier = TextType | UrlType;
export const Legislation_LegislationIdentifierUnion = createUnionType({
  name: 'Legislation_LegislationIdentifier',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Legislation_LegislationResponsible = Organization | Person;
export const Legislation_LegislationResponsibleUnion = createUnionType({
  name: 'Legislation_LegislationResponsible',
  types: () => [Organization, Person] as const,
});

export type Legislation_LegislationJurisdiction = AdministrativeArea | TextType;
export const Legislation_LegislationJurisdictionUnion = createUnionType({
  name: 'Legislation_LegislationJurisdiction',
  types: () => [AdministrativeArea, TextScalar] as const,
});

export type Legislation_LegislationPassedBy = Person | Organization;
export const Legislation_LegislationPassedByUnion = createUnionType({
  name: 'Legislation_LegislationPassedBy',
  types: () => [Person, Organization] as const,
});

export type SpecialAnnouncement_Category = UrlType | TextType | Thing | CategoryCode;
export const SpecialAnnouncement_CategoryUnion = createUnionType({
  name: 'SpecialAnnouncement_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type SpecialAnnouncement_DiseaseSpreadStatistics = Dataset | Observation | WebContent | UrlType;
export const SpecialAnnouncement_DiseaseSpreadStatisticsUnion = createUnionType({
  name: 'SpecialAnnouncement_DiseaseSpreadStatistics',
  types: () => [Dataset, Observation, WebContent, UrlScalar] as const,
});

export type SpecialAnnouncement_GettingTestedInfo = WebContent | UrlType;
export const SpecialAnnouncement_GettingTestedInfoUnion = createUnionType({
  name: 'SpecialAnnouncement_GettingTestedInfo',
  types: () => [WebContent, UrlScalar] as const,
});

export type SpecialAnnouncement_AnnouncementLocation = CivicStructure | LocalBusiness;
export const SpecialAnnouncement_AnnouncementLocationUnion = createUnionType({
  name: 'SpecialAnnouncement_AnnouncementLocation',
  types: () => [CivicStructure, LocalBusiness] as const,
});

export type SpecialAnnouncement_TravelBans = UrlType | WebContent;
export const SpecialAnnouncement_TravelBansUnion = createUnionType({
  name: 'SpecialAnnouncement_TravelBans',
  types: () => [UrlScalar, WebContent] as const,
});

export type SpecialAnnouncement_DiseasePreventionInfo = UrlType | WebContent;
export const SpecialAnnouncement_DiseasePreventionInfoUnion = createUnionType({
  name: 'SpecialAnnouncement_DiseasePreventionInfo',
  types: () => [UrlScalar, WebContent] as const,
});

export type SpecialAnnouncement_PublicTransportClosuresInfo = UrlType | WebContent;
export const SpecialAnnouncement_PublicTransportClosuresInfoUnion = createUnionType({
  name: 'SpecialAnnouncement_PublicTransportClosuresInfo',
  types: () => [UrlScalar, WebContent] as const,
});

export type SpecialAnnouncement_SchoolClosuresInfo = WebContent | UrlType;
export const SpecialAnnouncement_SchoolClosuresInfoUnion = createUnionType({
  name: 'SpecialAnnouncement_SchoolClosuresInfo',
  types: () => [WebContent, UrlScalar] as const,
});

export type SpecialAnnouncement_DatePosted = DateType | DateTimeType;
export const SpecialAnnouncement_DatePostedUnion = createUnionType({
  name: 'SpecialAnnouncement_DatePosted',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type SpecialAnnouncement_NewsUpdatesAndGuidelines = UrlType | WebContent;
export const SpecialAnnouncement_NewsUpdatesAndGuidelinesUnion = createUnionType({
  name: 'SpecialAnnouncement_NewsUpdatesAndGuidelines',
  types: () => [UrlScalar, WebContent] as const,
});

export type SpecialAnnouncement_QuarantineGuidelines = UrlType | WebContent;
export const SpecialAnnouncement_QuarantineGuidelinesUnion = createUnionType({
  name: 'SpecialAnnouncement_QuarantineGuidelines',
  types: () => [UrlScalar, WebContent] as const,
});

export type SpecialAnnouncement_WebFeed = DataFeed | UrlType;
export const SpecialAnnouncement_WebFeedUnion = createUnionType({
  name: 'SpecialAnnouncement_WebFeed',
  types: () => [DataFeed, UrlScalar] as const,
});

export type MediaReview_OriginalMediaLink = UrlType | MediaObject | WebPage;
export const MediaReview_OriginalMediaLinkUnion = createUnionType({
  name: 'MediaReview_OriginalMediaLink',
  types: () => [UrlScalar, MediaObject, WebPage] as const,
});

export type PublicationIssue_PageStart = TextType | IntegerType;
export const PublicationIssue_PageStartUnion = createUnionType({
  name: 'PublicationIssue_PageStart',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type PublicationIssue_PageEnd = TextType | IntegerType;
export const PublicationIssue_PageEndUnion = createUnionType({
  name: 'PublicationIssue_PageEnd',
  types: () => [TextScalar, IntegerScalar] as const,
});

export type PublicationIssue_IssueNumber = IntegerType | TextType;
export const PublicationIssue_IssueNumberUnion = createUnionType({
  name: 'PublicationIssue_IssueNumber',
  types: () => [IntegerScalar, TextScalar] as const,
});

export type CDCPMDRecord_CvdCollectionDate = DateTimeType | TextType;
export const CDCPMDRecord_CvdCollectionDateUnion = createUnionType({
  name: 'CDCPMDRecord_CvdCollectionDate',
  types: () => [DateTimeScalar, TextScalar] as const,
});

export type CDCPMDRecord_DatePosted = DateType | DateTimeType;
export const CDCPMDRecord_DatePostedUnion = createUnionType({
  name: 'CDCPMDRecord_DatePosted',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type ExchangeRateSpecification_ExchangeRateSpread = NumberType | MonetaryAmount;
export const ExchangeRateSpecification_ExchangeRateSpreadUnion = createUnionType({
  name: 'ExchangeRateSpecification_ExchangeRateSpread',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type MusicPlaylist_Track = ItemList | MusicRecording;
export const MusicPlaylist_TrackUnion = createUnionType({
  name: 'MusicPlaylist_Track',
  types: () => [ItemList, MusicRecording] as const,
});

export type Role_NamedPosition = TextType | UrlType;
export const Role_NamedPositionUnion = createUnionType({
  name: 'Role_NamedPosition',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Role_StartDate = DateTimeType | DateType;
export const Role_StartDateUnion = createUnionType({
  name: 'Role_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Role_EndDate = DateType | DateTimeType;
export const Role_EndDateUnion = createUnionType({
  name: 'Role_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Role_RoleName = UrlType | TextType;
export const Role_RoleNameUnion = createUnionType({
  name: 'Role_RoleName',
  types: () => [UrlScalar, TextScalar] as const,
});

export type ShippingRateSettings_FreeShippingThreshold = MonetaryAmount | DeliveryChargeSpecification;
export const ShippingRateSettings_FreeShippingThresholdUnion = createUnionType({
  name: 'ShippingRateSettings_FreeShippingThreshold',
  types: () => [MonetaryAmount, DeliveryChargeSpecification] as const,
});

export type MedicalWebPage_MedicalAudience = TextType | MedicalAudience;
export const MedicalWebPage_MedicalAudienceUnion = createUnionType({
  name: 'MedicalWebPage_MedicalAudience',
  types: () => [TextScalar, MedicalAudience] as const,
});

export type ProgramMembership_MembershipPointsEarned = NumberType | QuantitativeValue;
export const ProgramMembership_MembershipPointsEarnedUnion = createUnionType({
  name: 'ProgramMembership_MembershipPointsEarned',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type ProgramMembership_Member = Organization | Person;
export const ProgramMembership_MemberUnion = createUnionType({
  name: 'ProgramMembership_Member',
  types: () => [Organization, Person] as const,
});

export type ProgramMembership_Members = Person | Organization;
export const ProgramMembership_MembersUnion = createUnionType({
  name: 'ProgramMembership_Members',
  types: () => [Person, Organization] as const,
});

export type PayAction_Recipient = Person | Audience | ContactPoint | Organization;
export const PayAction_RecipientUnion = createUnionType({
  name: 'PayAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type DataDownload_MeasurementTechnique = TextType | UrlType;
export const DataDownload_MeasurementTechniqueUnion = createUnionType({
  name: 'DataDownload_MeasurementTechnique',
  types: () => [TextScalar, UrlScalar] as const,
});

export type ProductModel_IsVariantOf = ProductModel | ProductGroup;
export const ProductModel_IsVariantOfUnion = createUnionType({
  name: 'ProductModel_IsVariantOf',
  types: () => [ProductModel, ProductGroup] as const,
});

export type WorkBasedProgram_OccupationalCategory = CategoryCode | TextType;
export const WorkBasedProgram_OccupationalCategoryUnion = createUnionType({
  name: 'WorkBasedProgram_OccupationalCategory',
  types: () => [CategoryCode, TextScalar] as const,
});

export type Flight_FlightDistance = Distance | TextType;
export const Flight_FlightDistanceUnion = createUnionType({
  name: 'Flight_FlightDistance',
  types: () => [Distance, TextScalar] as const,
});

export type Flight_Aircraft = Vehicle | TextType;
export const Flight_AircraftUnion = createUnionType({
  name: 'Flight_Aircraft',
  types: () => [Vehicle, TextScalar] as const,
});

export type Flight_Seller = Organization | Person;
export const Flight_SellerUnion = createUnionType({
  name: 'Flight_Seller',
  types: () => [Organization, Person] as const,
});

export type Flight_EstimatedFlightDuration = TextType | Duration;
export const Flight_EstimatedFlightDurationUnion = createUnionType({
  name: 'Flight_EstimatedFlightDuration',
  types: () => [TextScalar, Duration] as const,
});

export type DatedMoneySpecification_StartDate = DateTimeType | DateType;
export const DatedMoneySpecification_StartDateUnion = createUnionType({
  name: 'DatedMoneySpecification_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type DatedMoneySpecification_EndDate = DateType | DateTimeType;
export const DatedMoneySpecification_EndDateUnion = createUnionType({
  name: 'DatedMoneySpecification_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type DatedMoneySpecification_Amount = NumberType | MonetaryAmount;
export const DatedMoneySpecification_AmountUnion = createUnionType({
  name: 'DatedMoneySpecification_Amount',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type EntryPoint_ActionPlatform = TextType | UrlType;
export const EntryPoint_ActionPlatformUnion = createUnionType({
  name: 'EntryPoint_ActionPlatform',
  types: () => [TextScalar, UrlScalar] as const,
});

export type LinkRole_InLanguage = TextType | Language;
export const LinkRole_InLanguageUnion = createUnionType({
  name: 'LinkRole_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type Question_SuggestedAnswer = ItemList | Answer;
export const Question_SuggestedAnswerUnion = createUnionType({
  name: 'Question_SuggestedAnswer',
  types: () => [ItemList, Answer] as const,
});

export type Question_AcceptedAnswer = Answer | ItemList;
export const Question_AcceptedAnswerUnion = createUnionType({
  name: 'Question_AcceptedAnswer',
  types: () => [Answer, ItemList] as const,
});

export type Rating_WorstRating = TextType | NumberType;
export const Rating_WorstRatingUnion = createUnionType({
  name: 'Rating_WorstRating',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Rating_Author = Person | Organization;
export const Rating_AuthorUnion = createUnionType({
  name: 'Rating_Author',
  types: () => [Person, Organization] as const,
});

export type Rating_BestRating = TextType | NumberType;
export const Rating_BestRatingUnion = createUnionType({
  name: 'Rating_BestRating',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Rating_RatingValue = NumberType | TextType;
export const Rating_RatingValueUnion = createUnionType({
  name: 'Rating_RatingValue',
  types: () => [NumberScalar, TextScalar] as const,
});

export type BusTrip_DepartureBusStop = BusStop | BusStation;
export const BusTrip_DepartureBusStopUnion = createUnionType({
  name: 'BusTrip_DepartureBusStop',
  types: () => [BusStop, BusStation] as const,
});

export type BusTrip_ArrivalBusStop = BusStation | BusStop;
export const BusTrip_ArrivalBusStopUnion = createUnionType({
  name: 'BusTrip_ArrivalBusStop',
  types: () => [BusStation, BusStop] as const,
});

export type MenuItem_MenuAddOn = MenuItem | MenuSection;
export const MenuItem_MenuAddOnUnion = createUnionType({
  name: 'MenuItem_MenuAddOn',
  types: () => [MenuItem, MenuSection] as const,
});

export type MenuItem_Offers = Offer | Demand;
export const MenuItem_OffersUnion = createUnionType({
  name: 'MenuItem_Offers',
  types: () => [Offer, Demand] as const,
});

export type TypeAndQuantityNode_TypeOfGood = Product | Service;
export const TypeAndQuantityNode_TypeOfGoodUnion = createUnionType({
  name: 'TypeAndQuantityNode_TypeOfGood',
  types: () => [Product, Service] as const,
});

export type TypeAndQuantityNode_UnitCode = TextType | UrlType;
export const TypeAndQuantityNode_UnitCodeUnion = createUnionType({
  name: 'TypeAndQuantityNode_UnitCode',
  types: () => [TextScalar, UrlScalar] as const,
});

export type MerchantReturnPolicySeasonalOverride_StartDate = DateTimeType | DateType;
export const MerchantReturnPolicySeasonalOverride_StartDateUnion = createUnionType({
  name: 'MerchantReturnPolicySeasonalOverride_StartDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type MerchantReturnPolicySeasonalOverride_EndDate = DateType | DateTimeType;
export const MerchantReturnPolicySeasonalOverride_EndDateUnion = createUnionType({
  name: 'MerchantReturnPolicySeasonalOverride_EndDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type MerchantReturnPolicySeasonalOverride_MerchantReturnDays = DateTimeType | IntegerType | DateType;
export const MerchantReturnPolicySeasonalOverride_MerchantReturnDaysUnion = createUnionType({
  name: 'MerchantReturnPolicySeasonalOverride_MerchantReturnDays',
  types: () => [DateTimeScalar, IntegerScalar, DateScalar] as const,
});

export type Grant_Funder = Organization | Person;
export const Grant_FunderUnion = createUnionType({
  name: 'Grant_Funder',
  types: () => [Organization, Person] as const,
});

export type Grant_FundedItem = Product | Person | BioChemEntity | Event | MedicalEntity | CreativeWork | Organization;
export const Grant_FundedItemUnion = createUnionType({
  name: 'Grant_FundedItem',
  types: () => [Product, Person, BioChemEntity, Event, MedicalEntity, CreativeWork, Organization] as const,
});

export type Grant_Sponsor = Organization | Person;
export const Grant_SponsorUnion = createUnionType({
  name: 'Grant_Sponsor',
  types: () => [Organization, Person] as const,
});

export type Offer_ItemOffered = Trip | Event | Product | AggregateOffer | CreativeWork | MenuItem | Service;
export const Offer_ItemOfferedUnion = createUnionType({
  name: 'Offer_ItemOffered',
  types: () => [Trip, Event, Product, AggregateOffer, CreativeWork, MenuItem, Service] as const,
});

export type Offer_Category = UrlType | TextType | Thing | CategoryCode;
export const Offer_CategoryUnion = createUnionType({
  name: 'Offer_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type Offer_AcceptedPaymentMethod = LoanOrCredit | TextType;
export const Offer_AcceptedPaymentMethodUnion = createUnionType({
  name: 'Offer_AcceptedPaymentMethod',
  types: () => [LoanOrCredit, TextScalar] as const,
});

export type Offer_Seller = Organization | Person;
export const Offer_SellerUnion = createUnionType({
  name: 'Offer_Seller',
  types: () => [Organization, Person] as const,
});

export type Offer_IneligibleRegion = Place | TextType | GeoShape;
export const Offer_IneligibleRegionUnion = createUnionType({
  name: 'Offer_IneligibleRegion',
  types: () => [Place, TextScalar, GeoShape] as const,
});

export type Offer_LeaseLength = QuantitativeValue | Duration;
export const Offer_LeaseLengthUnion = createUnionType({
  name: 'Offer_LeaseLength',
  types: () => [QuantitativeValue, Duration] as const,
});

export type Offer_OfferedBy = Person | Organization;
export const Offer_OfferedByUnion = createUnionType({
  name: 'Offer_OfferedBy',
  types: () => [Person, Organization] as const,
});

export type Offer_ValidFrom = DateTimeType | DateType;
export const Offer_ValidFromUnion = createUnionType({
  name: 'Offer_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Offer_AvailabilityEnds = DateType | DateTimeType | TimeType;
export const Offer_AvailabilityEndsUnion = createUnionType({
  name: 'Offer_AvailabilityEnds',
  types: () => [DateScalar, DateTimeScalar, TimeScalar] as const,
});

export type Offer_EligibleRegion = GeoShape | TextType | Place;
export const Offer_EligibleRegionUnion = createUnionType({
  name: 'Offer_EligibleRegion',
  types: () => [GeoShape, TextScalar, Place] as const,
});

export type Offer_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const Offer_AreaServedUnion = createUnionType({
  name: 'Offer_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type Offer_ValidThrough = DateTimeType | DateType;
export const Offer_ValidThroughUnion = createUnionType({
  name: 'Offer_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Offer_Price = NumberType | TextType;
export const Offer_PriceUnion = createUnionType({
  name: 'Offer_Price',
  types: () => [NumberScalar, TextScalar] as const,
});

export type Offer_AvailabilityStarts = TimeType | DateTimeType | DateType;
export const Offer_AvailabilityStartsUnion = createUnionType({
  name: 'Offer_AvailabilityStarts',
  types: () => [TimeScalar, DateTimeScalar, DateScalar] as const,
});

export type Joint_FunctionalClass = TextType | MedicalEntity;
export const Joint_FunctionalClassUnion = createUnionType({
  name: 'Joint_FunctionalClass',
  types: () => [TextScalar, MedicalEntity] as const,
});

export type MoneyTransfer_BeneficiaryBank = BankOrCreditUnion | TextType;
export const MoneyTransfer_BeneficiaryBankUnion = createUnionType({
  name: 'MoneyTransfer_BeneficiaryBank',
  types: () => [BankOrCreditUnion, TextScalar] as const,
});

export type MoneyTransfer_Amount = NumberType | MonetaryAmount;
export const MoneyTransfer_AmountUnion = createUnionType({
  name: 'MoneyTransfer_Amount',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type ItemList_ItemListElement = Thing | ListItem | TextType;
export const ItemList_ItemListElementUnion = createUnionType({
  name: 'ItemList_ItemListElement',
  types: () => [Thing, ListItem, TextScalar] as const,
});

export type ItemList_ItemListOrder = TextType;
export const ItemList_ItemListOrderUnion = createUnionType({
  name: 'ItemList_ItemListOrder',
  types: () => [TextScalar] as const,
});

export type SingleFamilyResidence_NumberOfRooms = QuantitativeValue | NumberType;
export const SingleFamilyResidence_NumberOfRoomsUnion = createUnionType({
  name: 'SingleFamilyResidence_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type Occupation_EstimatedSalary = MonetaryAmountDistribution | MonetaryAmount | NumberType;
export const Occupation_EstimatedSalaryUnion = createUnionType({
  name: 'Occupation_EstimatedSalary',
  types: () => [MonetaryAmountDistribution, MonetaryAmount, NumberScalar] as const,
});

export type Occupation_ExperienceRequirements = TextType | OccupationalExperienceRequirements;
export const Occupation_ExperienceRequirementsUnion = createUnionType({
  name: 'Occupation_ExperienceRequirements',
  types: () => [TextScalar, OccupationalExperienceRequirements] as const,
});

export type Occupation_EducationRequirements = EducationalOccupationalCredential | TextType;
export const Occupation_EducationRequirementsUnion = createUnionType({
  name: 'Occupation_EducationRequirements',
  types: () => [EducationalOccupationalCredential, TextScalar] as const,
});

export type Occupation_Skills = TextType | DefinedTerm;
export const Occupation_SkillsUnion = createUnionType({
  name: 'Occupation_Skills',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type Occupation_Qualifications = TextType | EducationalOccupationalCredential;
export const Occupation_QualificationsUnion = createUnionType({
  name: 'Occupation_Qualifications',
  types: () => [TextScalar, EducationalOccupationalCredential] as const,
});

export type Occupation_OccupationalCategory = CategoryCode | TextType;
export const Occupation_OccupationalCategoryUnion = createUnionType({
  name: 'Occupation_OccupationalCategory',
  types: () => [CategoryCode, TextScalar] as const,
});

export type FollowAction_Followee = Organization | Person;
export const FollowAction_FolloweeUnion = createUnionType({
  name: 'FollowAction_Followee',
  types: () => [Organization, Person] as const,
});

export type BorrowAction_Lender = Person | Organization;
export const BorrowAction_LenderUnion = createUnionType({
  name: 'BorrowAction_Lender',
  types: () => [Person, Organization] as const,
});

export type PropertyValue_ValueReference = TextType | DefinedTerm | StructuredValue | PropertyValue | QuantitativeValue;
export const PropertyValue_ValueReferenceUnion = createUnionType({
  name: 'PropertyValue_ValueReference',
  types: () => [TextScalar, DefinedTerm, StructuredValue, PropertyValue, QuantitativeValue] as const,
});

export type PropertyValue_PropertyID = TextType | UrlType;
export const PropertyValue_PropertyIDUnion = createUnionType({
  name: 'PropertyValue_PropertyID',
  types: () => [TextScalar, UrlScalar] as const,
});

export type PropertyValue_MeasurementTechnique = TextType | UrlType;
export const PropertyValue_MeasurementTechniqueUnion = createUnionType({
  name: 'PropertyValue_MeasurementTechnique',
  types: () => [TextScalar, UrlScalar] as const,
});

export type PropertyValue_Value = TextType | NumberType | StructuredValue | BooleanType;
export const PropertyValue_ValueUnion = createUnionType({
  name: 'PropertyValue_Value',
  types: () => [TextScalar, NumberScalar, StructuredValue, BooleanScalar] as const,
});

export type PropertyValue_UnitCode = TextType | UrlType;
export const PropertyValue_UnitCodeUnion = createUnionType({
  name: 'PropertyValue_UnitCode',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Recommendation_Category = UrlType | TextType | Thing | CategoryCode;
export const Recommendation_CategoryUnion = createUnionType({
  name: 'Recommendation_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type GiveAction_Recipient = Person | Audience | ContactPoint | Organization;
export const GiveAction_RecipientUnion = createUnionType({
  name: 'GiveAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type DigitalDocumentPermission_Grantee = Person | Audience | ContactPoint | Organization;
export const DigitalDocumentPermission_GranteeUnion = createUnionType({
  name: 'DigitalDocumentPermission_Grantee',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type SeekToAction_StartOffset = NumberType | HyperTocEntry;
export const SeekToAction_StartOffsetUnion = createUnionType({
  name: 'SeekToAction_StartOffset',
  types: () => [NumberScalar, HyperTocEntry] as const,
});

export type HealthInsurancePlan_UsesHealthPlanIdStandard = UrlType | TextType;
export const HealthInsurancePlan_UsesHealthPlanIdStandardUnion = createUnionType({
  name: 'HealthInsurancePlan_UsesHealthPlanIdStandard',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Vein_RegionDrained = AnatomicalSystem | AnatomicalStructure;
export const Vein_RegionDrainedUnion = createUnionType({
  name: 'Vein_RegionDrained',
  types: () => [AnatomicalSystem, AnatomicalStructure] as const,
});

export type FloorPlan_NumberOfRooms = QuantitativeValue | NumberType;
export const FloorPlan_NumberOfRoomsUnion = createUnionType({
  name: 'FloorPlan_NumberOfRooms',
  types: () => [QuantitativeValue, NumberScalar] as const,
});

export type FloorPlan_NumberOfBedrooms = NumberType | QuantitativeValue;
export const FloorPlan_NumberOfBedroomsUnion = createUnionType({
  name: 'FloorPlan_NumberOfBedrooms',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type FloorPlan_PetsAllowed = TextType | BooleanType;
export const FloorPlan_PetsAllowedUnion = createUnionType({
  name: 'FloorPlan_PetsAllowed',
  types: () => [TextScalar, BooleanScalar] as const,
});

export type FloorPlan_LayoutImage = ImageObject | UrlType;
export const FloorPlan_LayoutImageUnion = createUnionType({
  name: 'FloorPlan_LayoutImage',
  types: () => [ImageObject, UrlScalar] as const,
});

export type Class_SupersededBy = TextType | Class | Property;
export const Class_SupersededByUnion = createUnionType({
  name: 'Class_SupersededBy',
  types: () => [TextScalar, Class, Property] as const,
});

export type BuyAction_Seller = Organization | Person;
export const BuyAction_SellerUnion = createUnionType({
  name: 'BuyAction_Seller',
  types: () => [Organization, Person] as const,
});

export type BuyAction_Vendor = Person | Organization;
export const BuyAction_VendorUnion = createUnionType({
  name: 'BuyAction_Vendor',
  types: () => [Person, Organization] as const,
});

export type PriceSpecification_ValidFrom = DateTimeType | DateType;
export const PriceSpecification_ValidFromUnion = createUnionType({
  name: 'PriceSpecification_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type PriceSpecification_ValidThrough = DateTimeType | DateType;
export const PriceSpecification_ValidThroughUnion = createUnionType({
  name: 'PriceSpecification_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type PriceSpecification_Price = NumberType | TextType;
export const PriceSpecification_PriceUnion = createUnionType({
  name: 'PriceSpecification_Price',
  types: () => [NumberScalar, TextScalar] as const,
});

export type SportsEvent_HomeTeam = Person | SportsTeam;
export const SportsEvent_HomeTeamUnion = createUnionType({
  name: 'SportsEvent_HomeTeam',
  types: () => [Person, SportsTeam] as const,
});

export type SportsEvent_AwayTeam = SportsTeam | Person;
export const SportsEvent_AwayTeamUnion = createUnionType({
  name: 'SportsEvent_AwayTeam',
  types: () => [SportsTeam, Person] as const,
});

export type SportsEvent_Competitor = Person | SportsTeam;
export const SportsEvent_CompetitorUnion = createUnionType({
  name: 'SportsEvent_Competitor',
  types: () => [Person, SportsTeam] as const,
});

export type SportsEvent_Sport = TextType | UrlType;
export const SportsEvent_SportUnion = createUnionType({
  name: 'SportsEvent_Sport',
  types: () => [TextScalar, UrlScalar] as const,
});

export type Brand_Logo = UrlType | ImageObject;
export const Brand_LogoUnion = createUnionType({
  name: 'Brand_Logo',
  types: () => [UrlScalar, ImageObject] as const,
});

export type ContactPoint_AvailableLanguage = TextType | Language;
export const ContactPoint_AvailableLanguageUnion = createUnionType({
  name: 'ContactPoint_AvailableLanguage',
  types: () => [TextScalar, Language] as const,
});

export type ContactPoint_ServiceArea = GeoShape | AdministrativeArea | Place;
export const ContactPoint_ServiceAreaUnion = createUnionType({
  name: 'ContactPoint_ServiceArea',
  types: () => [GeoShape, AdministrativeArea, Place] as const,
});

export type ContactPoint_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const ContactPoint_AreaServedUnion = createUnionType({
  name: 'ContactPoint_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type ContactPoint_ProductSupported = TextType | Product;
export const ContactPoint_ProductSupportedUnion = createUnionType({
  name: 'ContactPoint_ProductSupported',
  types: () => [TextScalar, Product] as const,
});

export type JobPosting_EstimatedSalary = MonetaryAmountDistribution | MonetaryAmount | NumberType;
export const JobPosting_EstimatedSalaryUnion = createUnionType({
  name: 'JobPosting_EstimatedSalary',
  types: () => [MonetaryAmountDistribution, MonetaryAmount, NumberScalar] as const,
});

export type JobPosting_PhysicalRequirement = UrlType | TextType | DefinedTerm;
export const JobPosting_PhysicalRequirementUnion = createUnionType({
  name: 'JobPosting_PhysicalRequirement',
  types: () => [UrlScalar, TextScalar, DefinedTerm] as const,
});

export type JobPosting_SensoryRequirement = DefinedTerm | UrlType | TextType;
export const JobPosting_SensoryRequirementUnion = createUnionType({
  name: 'JobPosting_SensoryRequirement',
  types: () => [DefinedTerm, UrlScalar, TextScalar] as const,
});

export type JobPosting_JobStartDate = DateType | TextType;
export const JobPosting_JobStartDateUnion = createUnionType({
  name: 'JobPosting_JobStartDate',
  types: () => [DateScalar, TextScalar] as const,
});

export type JobPosting_ExperienceRequirements = TextType | OccupationalExperienceRequirements;
export const JobPosting_ExperienceRequirementsUnion = createUnionType({
  name: 'JobPosting_ExperienceRequirements',
  types: () => [TextScalar, OccupationalExperienceRequirements] as const,
});

export type JobPosting_SecurityClearanceRequirement = UrlType | TextType;
export const JobPosting_SecurityClearanceRequirementUnion = createUnionType({
  name: 'JobPosting_SecurityClearanceRequirement',
  types: () => [UrlScalar, TextScalar] as const,
});

export type JobPosting_EducationRequirements = EducationalOccupationalCredential | TextType;
export const JobPosting_EducationRequirementsUnion = createUnionType({
  name: 'JobPosting_EducationRequirements',
  types: () => [EducationalOccupationalCredential, TextScalar] as const,
});

export type JobPosting_Industry = DefinedTerm | TextType;
export const JobPosting_IndustryUnion = createUnionType({
  name: 'JobPosting_Industry',
  types: () => [DefinedTerm, TextScalar] as const,
});

export type JobPosting_BaseSalary = NumberType | PriceSpecification | MonetaryAmount;
export const JobPosting_BaseSalaryUnion = createUnionType({
  name: 'JobPosting_BaseSalary',
  types: () => [NumberScalar, PriceSpecification, MonetaryAmount] as const,
});

export type JobPosting_DatePosted = DateType | DateTimeType;
export const JobPosting_DatePostedUnion = createUnionType({
  name: 'JobPosting_DatePosted',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type JobPosting_Skills = TextType | DefinedTerm;
export const JobPosting_SkillsUnion = createUnionType({
  name: 'JobPosting_Skills',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type JobPosting_ValidThrough = DateTimeType | DateType;
export const JobPosting_ValidThroughUnion = createUnionType({
  name: 'JobPosting_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type JobPosting_Qualifications = TextType | EducationalOccupationalCredential;
export const JobPosting_QualificationsUnion = createUnionType({
  name: 'JobPosting_Qualifications',
  types: () => [TextScalar, EducationalOccupationalCredential] as const,
});

export type JobPosting_OccupationalCategory = CategoryCode | TextType;
export const JobPosting_OccupationalCategoryUnion = createUnionType({
  name: 'JobPosting_OccupationalCategory',
  types: () => [CategoryCode, TextScalar] as const,
});

export type HotelRoom_Bed = BedDetails | TextType;
export const HotelRoom_BedUnion = createUnionType({
  name: 'HotelRoom_Bed',
  types: () => [BedDetails, TextScalar] as const,
});

export type PlayGameAction_GameAvailabilityType = TextType;
export const PlayGameAction_GameAvailabilityTypeUnion = createUnionType({
  name: 'PlayGameAction_GameAvailabilityType',
  types: () => [TextScalar] as const,
});

export type Reservation_TotalPrice = PriceSpecification | NumberType | TextType;
export const Reservation_TotalPriceUnion = createUnionType({
  name: 'Reservation_TotalPrice',
  types: () => [PriceSpecification, NumberScalar, TextScalar] as const,
});

export type Reservation_Provider = Organization | Person;
export const Reservation_ProviderUnion = createUnionType({
  name: 'Reservation_Provider',
  types: () => [Organization, Person] as const,
});

export type Reservation_Broker = Person | Organization;
export const Reservation_BrokerUnion = createUnionType({
  name: 'Reservation_Broker',
  types: () => [Person, Organization] as const,
});

export type Reservation_BookingAgent = Person | Organization;
export const Reservation_BookingAgentUnion = createUnionType({
  name: 'Reservation_BookingAgent',
  types: () => [Person, Organization] as const,
});

export type Reservation_UnderName = Organization | Person;
export const Reservation_UnderNameUnion = createUnionType({
  name: 'Reservation_UnderName',
  types: () => [Organization, Person] as const,
});

export type QuantitativeValue_ValueReference = TextType | DefinedTerm | StructuredValue | PropertyValue | QuantitativeValue;
export const QuantitativeValue_ValueReferenceUnion = createUnionType({
  name: 'QuantitativeValue_ValueReference',
  types: () => [TextScalar, DefinedTerm, StructuredValue, PropertyValue, QuantitativeValue] as const,
});

export type QuantitativeValue_Value = TextType | NumberType | StructuredValue | BooleanType;
export const QuantitativeValue_ValueUnion = createUnionType({
  name: 'QuantitativeValue_Value',
  types: () => [TextScalar, NumberScalar, StructuredValue, BooleanScalar] as const,
});

export type QuantitativeValue_UnitCode = TextType | UrlType;
export const QuantitativeValue_UnitCodeUnion = createUnionType({
  name: 'QuantitativeValue_UnitCode',
  types: () => [TextScalar, UrlScalar] as const,
});

export type ParcelDelivery_Provider = Organization | Person;
export const ParcelDelivery_ProviderUnion = createUnionType({
  name: 'ParcelDelivery_Provider',
  types: () => [Organization, Person] as const,
});

export type ParcelDelivery_ExpectedArrivalUntil = DateType | DateTimeType;
export const ParcelDelivery_ExpectedArrivalUntilUnion = createUnionType({
  name: 'ParcelDelivery_ExpectedArrivalUntil',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type ParcelDelivery_ExpectedArrivalFrom = DateType | DateTimeType;
export const ParcelDelivery_ExpectedArrivalFromUnion = createUnionType({
  name: 'ParcelDelivery_ExpectedArrivalFrom',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Invoice_TotalPaymentDue = MonetaryAmount | PriceSpecification;
export const Invoice_TotalPaymentDueUnion = createUnionType({
  name: 'Invoice_TotalPaymentDue',
  types: () => [MonetaryAmount, PriceSpecification] as const,
});

export type Invoice_Category = UrlType | TextType | Thing | CategoryCode;
export const Invoice_CategoryUnion = createUnionType({
  name: 'Invoice_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type Invoice_Customer = Organization | Person;
export const Invoice_CustomerUnion = createUnionType({
  name: 'Invoice_Customer',
  types: () => [Organization, Person] as const,
});

export type Invoice_Provider = Organization | Person;
export const Invoice_ProviderUnion = createUnionType({
  name: 'Invoice_Provider',
  types: () => [Organization, Person] as const,
});

export type Invoice_MinimumPaymentDue = MonetaryAmount | PriceSpecification;
export const Invoice_MinimumPaymentDueUnion = createUnionType({
  name: 'Invoice_MinimumPaymentDue',
  types: () => [MonetaryAmount, PriceSpecification] as const,
});

export type Invoice_PaymentDueDate = DateTimeType | DateType;
export const Invoice_PaymentDueDateUnion = createUnionType({
  name: 'Invoice_PaymentDueDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Invoice_Broker = Person | Organization;
export const Invoice_BrokerUnion = createUnionType({
  name: 'Invoice_Broker',
  types: () => [Person, Organization] as const,
});

export type Invoice_PaymentStatus = TextType;
export const Invoice_PaymentStatusUnion = createUnionType({
  name: 'Invoice_PaymentStatus',
  types: () => [TextScalar] as const,
});

export type LodgingReservation_LodgingUnitType = TextType;
export const LodgingReservation_LodgingUnitTypeUnion = createUnionType({
  name: 'LodgingReservation_LodgingUnitType',
  types: () => [TextScalar] as const,
});

export type LodgingReservation_CheckoutTime = DateTimeType | TimeType;
export const LodgingReservation_CheckoutTimeUnion = createUnionType({
  name: 'LodgingReservation_CheckoutTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type LodgingReservation_NumAdults = IntegerType | QuantitativeValue;
export const LodgingReservation_NumAdultsUnion = createUnionType({
  name: 'LodgingReservation_NumAdults',
  types: () => [IntegerScalar, QuantitativeValue] as const,
});

export type LodgingReservation_CheckinTime = DateTimeType | TimeType;
export const LodgingReservation_CheckinTimeUnion = createUnionType({
  name: 'LodgingReservation_CheckinTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type LodgingReservation_NumChildren = IntegerType | QuantitativeValue;
export const LodgingReservation_NumChildrenUnion = createUnionType({
  name: 'LodgingReservation_NumChildren',
  types: () => [IntegerScalar, QuantitativeValue] as const,
});

export type TipAction_Recipient = Person | Audience | ContactPoint | Organization;
export const TipAction_RecipientUnion = createUnionType({
  name: 'TipAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type MusicAlbum_ByArtist = Person | MusicGroup;
export const MusicAlbum_ByArtistUnion = createUnionType({
  name: 'MusicAlbum_ByArtist',
  types: () => [Person, MusicGroup] as const,
});

export type DataFeedItem_DateDeleted = DateTimeType | DateType;
export const DataFeedItem_DateDeletedUnion = createUnionType({
  name: 'DataFeedItem_DateDeleted',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type DataFeedItem_DateCreated = DateType | DateTimeType;
export const DataFeedItem_DateCreatedUnion = createUnionType({
  name: 'DataFeedItem_DateCreated',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type DataFeedItem_DateModified = DateTimeType | DateType;
export const DataFeedItem_DateModifiedUnion = createUnionType({
  name: 'DataFeedItem_DateModified',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type HowToSupply_EstimatedCost = TextType | MonetaryAmount;
export const HowToSupply_EstimatedCostUnion = createUnionType({
  name: 'HowToSupply_EstimatedCost',
  types: () => [TextScalar, MonetaryAmount] as const,
});

export type ProductGroup_VariesBy = TextType | DefinedTerm;
export const ProductGroup_VariesByUnion = createUnionType({
  name: 'ProductGroup_VariesBy',
  types: () => [TextScalar, DefinedTerm] as const,
});

export type ReturnAction_Recipient = Person | Audience | ContactPoint | Organization;
export const ReturnAction_RecipientUnion = createUnionType({
  name: 'ReturnAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type VideoObject_Caption = TextType | MediaObject;
export const VideoObject_CaptionUnion = createUnionType({
  name: 'VideoObject_Caption',
  types: () => [TextScalar, MediaObject] as const,
});

export type VideoObject_MusicBy = Person | MusicGroup;
export const VideoObject_MusicByUnion = createUnionType({
  name: 'VideoObject_MusicBy',
  types: () => [Person, MusicGroup] as const,
});

export type MusicRelease_CreditedTo = Person | Organization;
export const MusicRelease_CreditedToUnion = createUnionType({
  name: 'MusicRelease_CreditedTo',
  types: () => [Person, Organization] as const,
});

export type TaxiReservation_PartySize = IntegerType | QuantitativeValue;
export const TaxiReservation_PartySizeUnion = createUnionType({
  name: 'TaxiReservation_PartySize',
  types: () => [IntegerScalar, QuantitativeValue] as const,
});

export type Service_Category = UrlType | TextType | Thing | CategoryCode;
export const Service_CategoryUnion = createUnionType({
  name: 'Service_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type Service_Offers = Offer | Demand;
export const Service_OffersUnion = createUnionType({
  name: 'Service_Offers',
  types: () => [Offer, Demand] as const,
});

export type Service_Provider = Organization | Person;
export const Service_ProviderUnion = createUnionType({
  name: 'Service_Provider',
  types: () => [Organization, Person] as const,
});

export type Service_TermsOfService = UrlType | TextType;
export const Service_TermsOfServiceUnion = createUnionType({
  name: 'Service_TermsOfService',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Service_Broker = Person | Organization;
export const Service_BrokerUnion = createUnionType({
  name: 'Service_Broker',
  types: () => [Person, Organization] as const,
});

export type Service_IsSimilarTo = Service | Product;
export const Service_IsSimilarToUnion = createUnionType({
  name: 'Service_IsSimilarTo',
  types: () => [Service, Product] as const,
});

export type Service_Brand = Organization | Brand;
export const Service_BrandUnion = createUnionType({
  name: 'Service_Brand',
  types: () => [Organization, Brand] as const,
});

export type Service_Logo = UrlType | ImageObject;
export const Service_LogoUnion = createUnionType({
  name: 'Service_Logo',
  types: () => [UrlScalar, ImageObject] as const,
});

export type Service_ServiceArea = GeoShape | AdministrativeArea | Place;
export const Service_ServiceAreaUnion = createUnionType({
  name: 'Service_ServiceArea',
  types: () => [GeoShape, AdministrativeArea, Place] as const,
});

export type Service_ServiceType = TextType;
export const Service_ServiceTypeUnion = createUnionType({
  name: 'Service_ServiceType',
  types: () => [TextScalar] as const,
});

export type Service_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const Service_AreaServedUnion = createUnionType({
  name: 'Service_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type Service_IsRelatedTo = Service | Product;
export const Service_IsRelatedToUnion = createUnionType({
  name: 'Service_IsRelatedTo',
  types: () => [Service, Product] as const,
});

export type DefinedTerm_InDefinedTermSet = UrlType | DefinedTermSet;
export const DefinedTerm_InDefinedTermSetUnion = createUnionType({
  name: 'DefinedTerm_InDefinedTermSet',
  types: () => [UrlScalar, DefinedTermSet] as const,
});

export type Order_Merchant = Organization | Person;
export const Order_MerchantUnion = createUnionType({
  name: 'Order_Merchant',
  types: () => [Organization, Person] as const,
});

export type Order_Seller = Organization | Person;
export const Order_SellerUnion = createUnionType({
  name: 'Order_Seller',
  types: () => [Organization, Person] as const,
});

export type Order_Customer = Organization | Person;
export const Order_CustomerUnion = createUnionType({
  name: 'Order_Customer',
  types: () => [Organization, Person] as const,
});

export type Order_PaymentDueDate = DateTimeType | DateType;
export const Order_PaymentDueDateUnion = createUnionType({
  name: 'Order_PaymentDueDate',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Order_Broker = Person | Organization;
export const Order_BrokerUnion = createUnionType({
  name: 'Order_Broker',
  types: () => [Person, Organization] as const,
});

export type Order_Discount = TextType | NumberType;
export const Order_DiscountUnion = createUnionType({
  name: 'Order_Discount',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Order_OrderDate = DateType | DateTimeType;
export const Order_OrderDateUnion = createUnionType({
  name: 'Order_OrderDate',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type Order_OrderedItem = Service | OrderItem | Product;
export const Order_OrderedItemUnion = createUnionType({
  name: 'Order_OrderedItem',
  types: () => [Service, OrderItem, Product] as const,
});

export type DietarySupplement_LegalStatus = DrugLegalStatus | TextType;
export const DietarySupplement_LegalStatusUnion = createUnionType({
  name: 'DietarySupplement_LegalStatus',
  types: () => [DrugLegalStatus, TextScalar] as const,
});

export type UnitPriceSpecification_PriceType = TextType;
export const UnitPriceSpecification_PriceTypeUnion = createUnionType({
  name: 'UnitPriceSpecification_PriceType',
  types: () => [TextScalar] as const,
});

export type UnitPriceSpecification_UnitCode = TextType | UrlType;
export const UnitPriceSpecification_UnitCodeUnion = createUnionType({
  name: 'UnitPriceSpecification_UnitCode',
  types: () => [TextScalar, UrlScalar] as const,
});

export type UnitPriceSpecification_BillingDuration = Duration | QuantitativeValue | NumberType;
export const UnitPriceSpecification_BillingDurationUnion = createUnionType({
  name: 'UnitPriceSpecification_BillingDuration',
  types: () => [Duration, QuantitativeValue, NumberScalar] as const,
});

export type BroadcastService_BroadcastFrequency = BroadcastFrequencySpecification | TextType;
export const BroadcastService_BroadcastFrequencyUnion = createUnionType({
  name: 'BroadcastService_BroadcastFrequency',
  types: () => [BroadcastFrequencySpecification, TextScalar] as const,
});

export type BroadcastService_InLanguage = TextType | Language;
export const BroadcastService_InLanguageUnion = createUnionType({
  name: 'BroadcastService_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type RepaymentSpecification_DownPayment = NumberType | MonetaryAmount;
export const RepaymentSpecification_DownPaymentUnion = createUnionType({
  name: 'RepaymentSpecification_DownPayment',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type WebAPI_Documentation = CreativeWork | UrlType;
export const WebAPI_DocumentationUnion = createUnionType({
  name: 'WebAPI_Documentation',
  types: () => [CreativeWork, UrlScalar] as const,
});

export type LymphaticVessel_RegionDrained = AnatomicalSystem | AnatomicalStructure;
export const LymphaticVessel_RegionDrainedUnion = createUnionType({
  name: 'LymphaticVessel_RegionDrained',
  types: () => [AnatomicalSystem, AnatomicalStructure] as const,
});

export type PhysicalActivity_Category = UrlType | TextType | Thing | CategoryCode;
export const PhysicalActivity_CategoryUnion = createUnionType({
  name: 'PhysicalActivity_Category',
  types: () => [UrlScalar, TextScalar, Thing, CategoryCode] as const,
});

export type PhysicalActivity_AssociatedAnatomy = AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy;
export const PhysicalActivity_AssociatedAnatomyUnion = createUnionType({
  name: 'PhysicalActivity_AssociatedAnatomy',
  types: () => [AnatomicalStructure, AnatomicalSystem, SuperficialAnatomy] as const,
});

export type ApartmentComplex_NumberOfBedrooms = NumberType | QuantitativeValue;
export const ApartmentComplex_NumberOfBedroomsUnion = createUnionType({
  name: 'ApartmentComplex_NumberOfBedrooms',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type ApartmentComplex_PetsAllowed = TextType | BooleanType;
export const ApartmentComplex_PetsAllowedUnion = createUnionType({
  name: 'ApartmentComplex_PetsAllowed',
  types: () => [TextScalar, BooleanScalar] as const,
});

export type ChooseAction_Option = TextType | Thing;
export const ChooseAction_OptionUnion = createUnionType({
  name: 'ChooseAction_Option',
  types: () => [TextScalar, Thing] as const,
});

export type ChooseAction_ActionOption = Thing | TextType;
export const ChooseAction_ActionOptionUnion = createUnionType({
  name: 'ChooseAction_ActionOption',
  types: () => [Thing, TextScalar] as const,
});

export type OwnershipInfo_TypeOfGood = Product | Service;
export const OwnershipInfo_TypeOfGoodUnion = createUnionType({
  name: 'OwnershipInfo_TypeOfGood',
  types: () => [Product, Service] as const,
});

export type OwnershipInfo_AcquiredFrom = Organization | Person;
export const OwnershipInfo_AcquiredFromUnion = createUnionType({
  name: 'OwnershipInfo_AcquiredFrom',
  types: () => [Organization, Person] as const,
});

export type SellAction_Buyer = Person | Organization;
export const SellAction_BuyerUnion = createUnionType({
  name: 'SellAction_Buyer',
  types: () => [Person, Organization] as const,
});

export type CategoryCode_InCodeSet = CategoryCodeSet | UrlType;
export const CategoryCode_InCodeSetUnion = createUnionType({
  name: 'CategoryCode_InCodeSet',
  types: () => [CategoryCodeSet, UrlScalar] as const,
});

export type BroadcastEvent_SubtitleLanguage = Language | TextType;
export const BroadcastEvent_SubtitleLanguageUnion = createUnionType({
  name: 'BroadcastEvent_SubtitleLanguage',
  types: () => [Language, TextScalar] as const,
});

export type EngineSpecification_FuelType = TextType | UrlType;
export const EngineSpecification_FuelTypeUnion = createUnionType({
  name: 'EngineSpecification_FuelType',
  types: () => [TextScalar, UrlScalar] as const,
});

export type EngineSpecification_EngineType = TextType | UrlType;
export const EngineSpecification_EngineTypeUnion = createUnionType({
  name: 'EngineSpecification_EngineType',
  types: () => [TextScalar, UrlScalar] as const,
});

export type SendAction_Recipient = Person | Audience | ContactPoint | Organization;
export const SendAction_RecipientUnion = createUnionType({
  name: 'SendAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type RentAction_Landlord = Person | Organization;
export const RentAction_LandlordUnion = createUnionType({
  name: 'RentAction_Landlord',
  types: () => [Person, Organization] as const,
});

export type GeoShape_AddressCountry = Country | TextType;
export const GeoShape_AddressCountryUnion = createUnionType({
  name: 'GeoShape_AddressCountry',
  types: () => [Country, TextScalar] as const,
});

export type GeoShape_Address = TextType | PostalAddress;
export const GeoShape_AddressUnion = createUnionType({
  name: 'GeoShape_Address',
  types: () => [TextScalar, PostalAddress] as const,
});

export type GeoShape_Elevation = TextType | NumberType;
export const GeoShape_ElevationUnion = createUnionType({
  name: 'GeoShape_Elevation',
  types: () => [TextScalar, NumberScalar] as const,
});

export type Recipe_RecipeInstructions = TextType | CreativeWork | ItemList;
export const Recipe_RecipeInstructionsUnion = createUnionType({
  name: 'Recipe_RecipeInstructions',
  types: () => [TextScalar, CreativeWork, ItemList] as const,
});

export type Recipe_RecipeYield = TextType | QuantitativeValue;
export const Recipe_RecipeYieldUnion = createUnionType({
  name: 'Recipe_RecipeYield',
  types: () => [TextScalar, QuantitativeValue] as const,
});

export type DonateAction_Recipient = Person | Audience | ContactPoint | Organization;
export const DonateAction_RecipientUnion = createUnionType({
  name: 'DonateAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type TouristTrip_TouristType = Audience | TextType;
export const TouristTrip_TouristTypeUnion = createUnionType({
  name: 'TouristTrip_TouristType',
  types: () => [Audience, TextScalar] as const,
});

export type PeopleAudience_SuggestedGender = TextType;
export const PeopleAudience_SuggestedGenderUnion = createUnionType({
  name: 'PeopleAudience_SuggestedGender',
  types: () => [TextScalar] as const,
});

export type RealEstateListing_LeaseLength = QuantitativeValue | Duration;
export const RealEstateListing_LeaseLengthUnion = createUnionType({
  name: 'RealEstateListing_LeaseLength',
  types: () => [QuantitativeValue, Duration] as const,
});

export type RealEstateListing_DatePosted = DateType | DateTimeType;
export const RealEstateListing_DatePostedUnion = createUnionType({
  name: 'RealEstateListing_DatePosted',
  types: () => [DateScalar, DateTimeScalar] as const,
});

export type OpeningHoursSpecification_ValidFrom = DateTimeType | DateType;
export const OpeningHoursSpecification_ValidFromUnion = createUnionType({
  name: 'OpeningHoursSpecification_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type OpeningHoursSpecification_ValidThrough = DateTimeType | DateType;
export const OpeningHoursSpecification_ValidThroughUnion = createUnionType({
  name: 'OpeningHoursSpecification_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type Drug_LegalStatus = DrugLegalStatus | TextType;
export const Drug_LegalStatusUnion = createUnionType({
  name: 'Drug_LegalStatus',
  types: () => [DrugLegalStatus, TextScalar] as const,
});

export type Drug_Warning = UrlType | TextType;
export const Drug_WarningUnion = createUnionType({
  name: 'Drug_Warning',
  types: () => [UrlScalar, TextScalar] as const,
});

export type Drug_PrescriptionStatus = TextType;
export const Drug_PrescriptionStatusUnion = createUnionType({
  name: 'Drug_PrescriptionStatus',
  types: () => [TextScalar] as const,
});

export type MonetaryGrant_Funder = Organization | Person;
export const MonetaryGrant_FunderUnion = createUnionType({
  name: 'MonetaryGrant_Funder',
  types: () => [Organization, Person] as const,
});

export type MonetaryGrant_Amount = NumberType | MonetaryAmount;
export const MonetaryGrant_AmountUnion = createUnionType({
  name: 'MonetaryGrant_Amount',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type CompoundPriceSpecification_PriceType = TextType;
export const CompoundPriceSpecification_PriceTypeUnion = createUnionType({
  name: 'CompoundPriceSpecification_PriceType',
  types: () => [TextScalar] as const,
});

export type AggregateOffer_HighPrice = TextType | NumberType;
export const AggregateOffer_HighPriceUnion = createUnionType({
  name: 'AggregateOffer_HighPrice',
  types: () => [TextScalar, NumberScalar] as const,
});

export type AggregateOffer_Offers = Offer | Demand;
export const AggregateOffer_OffersUnion = createUnionType({
  name: 'AggregateOffer_Offers',
  types: () => [Offer, Demand] as const,
});

export type AggregateOffer_LowPrice = TextType | NumberType;
export const AggregateOffer_LowPriceUnion = createUnionType({
  name: 'AggregateOffer_LowPrice',
  types: () => [TextScalar, NumberScalar] as const,
});

export type ReceiveAction_Sender = Person | Audience | Organization;
export const ReceiveAction_SenderUnion = createUnionType({
  name: 'ReceiveAction_Sender',
  types: () => [Person, Audience, Organization] as const,
});

export type EndorseAction_Endorsee = Person | Organization;
export const EndorseAction_EndorseeUnion = createUnionType({
  name: 'EndorseAction_Endorsee',
  types: () => [Person, Organization] as const,
});

export type FoodEstablishmentReservation_PartySize = IntegerType | QuantitativeValue;
export const FoodEstablishmentReservation_PartySizeUnion = createUnionType({
  name: 'FoodEstablishmentReservation_PartySize',
  types: () => [IntegerScalar, QuantitativeValue] as const,
});

export type FoodEstablishmentReservation_StartTime = DateTimeType | TimeType;
export const FoodEstablishmentReservation_StartTimeUnion = createUnionType({
  name: 'FoodEstablishmentReservation_StartTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type FoodEstablishmentReservation_EndTime = DateTimeType | TimeType;
export const FoodEstablishmentReservation_EndTimeUnion = createUnionType({
  name: 'FoodEstablishmentReservation_EndTime',
  types: () => [DateTimeScalar, TimeScalar] as const,
});

export type WriteAction_InLanguage = TextType | Language;
export const WriteAction_InLanguageUnion = createUnionType({
  name: 'WriteAction_InLanguage',
  types: () => [TextScalar, Language] as const,
});

export type GeoCircle_GeoRadius = NumberType | TextType | Distance;
export const GeoCircle_GeoRadiusUnion = createUnionType({
  name: 'GeoCircle_GeoRadius',
  types: () => [NumberScalar, TextScalar, Distance] as const,
});

export type PostalAddress_AddressCountry = Country | TextType;
export const PostalAddress_AddressCountryUnion = createUnionType({
  name: 'PostalAddress_AddressCountry',
  types: () => [Country, TextScalar] as const,
});

export type DeliveryChargeSpecification_IneligibleRegion = Place | TextType | GeoShape;
export const DeliveryChargeSpecification_IneligibleRegionUnion = createUnionType({
  name: 'DeliveryChargeSpecification_IneligibleRegion',
  types: () => [Place, TextScalar, GeoShape] as const,
});

export type DeliveryChargeSpecification_EligibleRegion = GeoShape | TextType | Place;
export const DeliveryChargeSpecification_EligibleRegionUnion = createUnionType({
  name: 'DeliveryChargeSpecification_EligibleRegion',
  types: () => [GeoShape, TextScalar, Place] as const,
});

export type DeliveryChargeSpecification_AreaServed = AdministrativeArea | GeoShape | TextType | Place;
export const DeliveryChargeSpecification_AreaServedUnion = createUnionType({
  name: 'DeliveryChargeSpecification_AreaServed',
  types: () => [AdministrativeArea, GeoShape, TextScalar, Place] as const,
});

export type LocationFeatureSpecification_ValidFrom = DateTimeType | DateType;
export const LocationFeatureSpecification_ValidFromUnion = createUnionType({
  name: 'LocationFeatureSpecification_ValidFrom',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type LocationFeatureSpecification_ValidThrough = DateTimeType | DateType;
export const LocationFeatureSpecification_ValidThroughUnion = createUnionType({
  name: 'LocationFeatureSpecification_ValidThrough',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type FlightReservation_PassengerPriorityStatus = TextType;
export const FlightReservation_PassengerPriorityStatusUnion = createUnionType({
  name: 'FlightReservation_PassengerPriorityStatus',
  types: () => [TextScalar] as const,
});

export type CookAction_FoodEstablishment = Place | FoodEstablishment;
export const CookAction_FoodEstablishmentUnion = createUnionType({
  name: 'CookAction_FoodEstablishment',
  types: () => [Place, FoodEstablishment] as const,
});

export type UserComments_CommentTime = DateTimeType | DateType;
export const UserComments_CommentTimeUnion = createUnionType({
  name: 'UserComments_CommentTime',
  types: () => [DateTimeScalar, DateScalar] as const,
});

export type UserComments_Creator = Organization | Person;
export const UserComments_CreatorUnion = createUnionType({
  name: 'UserComments_Creator',
  types: () => [Organization, Person] as const,
});

export type GovernmentService_Jurisdiction = TextType | AdministrativeArea;
export const GovernmentService_JurisdictionUnion = createUnionType({
  name: 'GovernmentService_Jurisdiction',
  types: () => [TextScalar, AdministrativeArea] as const,
});

export type AuthorizeAction_Recipient = Person | Audience | ContactPoint | Organization;
export const AuthorizeAction_RecipientUnion = createUnionType({
  name: 'AuthorizeAction_Recipient',
  types: () => [Person, Audience, ContactPoint, Organization] as const,
});

export type FinancialProduct_AnnualPercentageRate = NumberType | QuantitativeValue;
export const FinancialProduct_AnnualPercentageRateUnion = createUnionType({
  name: 'FinancialProduct_AnnualPercentageRate',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type FinancialProduct_FeesAndCommissionsSpecification = UrlType | TextType;
export const FinancialProduct_FeesAndCommissionsSpecificationUnion = createUnionType({
  name: 'FinancialProduct_FeesAndCommissionsSpecification',
  types: () => [UrlScalar, TextScalar] as const,
});

export type FinancialProduct_InterestRate = NumberType | QuantitativeValue;
export const FinancialProduct_InterestRateUnion = createUnionType({
  name: 'FinancialProduct_InterestRate',
  types: () => [NumberScalar, QuantitativeValue] as const,
});

export type InvestmentOrDeposit_Amount = NumberType | MonetaryAmount;
export const InvestmentOrDeposit_AmountUnion = createUnionType({
  name: 'InvestmentOrDeposit_Amount',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type EmployeeRole_BaseSalary = NumberType | PriceSpecification | MonetaryAmount;
export const EmployeeRole_BaseSalaryUnion = createUnionType({
  name: 'EmployeeRole_BaseSalary',
  types: () => [NumberScalar, PriceSpecification, MonetaryAmount] as const,
});

export type LoanOrCredit_LoanType = UrlType | TextType;
export const LoanOrCredit_LoanTypeUnion = createUnionType({
  name: 'LoanOrCredit_LoanType',
  types: () => [UrlScalar, TextScalar] as const,
});

export type LoanOrCredit_RequiredCollateral = TextType | Thing;
export const LoanOrCredit_RequiredCollateralUnion = createUnionType({
  name: 'LoanOrCredit_RequiredCollateral',
  types: () => [TextScalar, Thing] as const,
});

export type LoanOrCredit_Amount = NumberType | MonetaryAmount;
export const LoanOrCredit_AmountUnion = createUnionType({
  name: 'LoanOrCredit_Amount',
  types: () => [NumberScalar, MonetaryAmount] as const,
});

export type BankAccount_BankAccountType = TextType | UrlType;
export const BankAccount_BankAccountTypeUnion = createUnionType({
  name: 'BankAccount_BankAccountType',
  types: () => [TextScalar, UrlScalar] as const,
});

// #endregion

// #region Type Roots
/**
 * ============
 * Type Roots
 * ============
 */

export enum CmsThingTypes {
  Text = 'Text',
  Number = 'Number',
  Boolean = 'Boolean',
  Date = 'Date',
  LocalBusiness = 'LocalBusiness',
  InternetCafe = 'InternetCafe',
  Hospital = 'Hospital',
  TelevisionStation = 'TelevisionStation',
  TravelAgency = 'TravelAgency',
  PoliceStation = 'PoliceStation',
  MedicalClinic = 'MedicalClinic',
  Url = 'Url',
  StadiumOrArena = 'StadiumOrArena',
  Campground = 'Campground',
  ReviewNewsArticle = 'ReviewNewsArticle',
  FoodEstablishment = 'FoodEstablishment',
  HealthClub = 'HealthClub',
  Diet = 'Diet',
  AutoPartsStore = 'AutoPartsStore',
  ExercisePlan = 'ExercisePlan',
  RadioStation = 'RadioStation',
  PaymentCard = 'PaymentCard',
  SportsActivityLocation = 'SportsActivityLocation',
  Physician = 'Physician',
  TVSeries = 'TVSeries',
  ChildCare = 'ChildCare',
  SportsClub = 'SportsClub',
  GovernmentOffice = 'GovernmentOffice',
  HealthAndBeautyBusiness = 'HealthAndBeautyBusiness',
  LegislationObject = 'LegislationObject',
  PronounceableText = 'PronounceableText',
  ProductCollection = 'ProductCollection',
  HairSalon = 'HairSalon',
  BarOrPub = 'BarOrPub',
  FastFoodRestaurant = 'FastFoodRestaurant',
  BowlingAlley = 'BowlingAlley',
  AutomotiveBusiness = 'AutomotiveBusiness',
  Thing = 'Thing',
  Distillery = 'Distillery',
  MovieTheater = 'MovieTheater',
  RecyclingCenter = 'RecyclingCenter',
  PalliativeProcedure = 'PalliativeProcedure',
  Winery = 'Winery',
  Store = 'Store',
  LegalService = 'LegalService',
  ArchiveOrganization = 'ArchiveOrganization',
  SelfStorage = 'SelfStorage',
  CovidTestingFacility = 'CovidTestingFacility',
  PhysicalExam = 'PhysicalExam',
  CreditCard = 'CreditCard',
  PawnShop = 'PawnShop',
  HowToSection = 'HowToSection',
  TVSeason = 'TVSeason',
  ShoppingCenter = 'ShoppingCenter',
  CafeOrCoffeeShop = 'CafeOrCoffeeShop',
  EntertainmentBusiness = 'EntertainmentBusiness',
  OfficeEquipmentStore = 'OfficeEquipmentStore',
  MobilePhoneStore = 'MobilePhoneStore',
  MedicalAudience = 'MedicalAudience',
  IceCreamShop = 'IceCreamShop',
  AmpStory = 'AmpStory',
  EmergencyService = 'EmergencyService',
  BioChemEntity = 'BioChemEntity',
  GardenStore = 'GardenStore',
  ExerciseGym = 'ExerciseGym',
  Audiobook = 'Audiobook',
  Organization = 'Organization',
  FireStation = 'FireStation',
  DepositAccount = 'DepositAccount',
  MedicalOrganization = 'MedicalOrganization',
  HowToStep = 'HowToStep',
  Patient = 'Patient',
  MotorcycleDealer = 'MotorcycleDealer',
  Attorney = 'Attorney',
  MusicStore = 'MusicStore',
  MedicalSpecialty = 'MedicalSpecialty',
  FinancialService = 'FinancialService',
  EmploymentAgency = 'EmploymentAgency',
  CreativeWorkSeries = 'CreativeWorkSeries',
  EventSeries = 'EventSeries',
  BeautySalon = 'BeautySalon',
  AdultEntertainment = 'AdultEntertainment',
  LodgingBusiness = 'LodgingBusiness',
  TattooParlor = 'TattooParlor',
  Place = 'Place',
  ComputerStore = 'ComputerStore',
  AutoBodyShop = 'AutoBodyShop',
  AutomatedTeller = 'AutomatedTeller',
  TouristAttraction = 'TouristAttraction',
  ProfessionalService = 'ProfessionalService',
  Protein = 'Protein',
  HardwareStore = 'HardwareStore',
  Gene = 'Gene',
  TennisComplex = 'TennisComplex',
  LibrarySystem = 'LibrarySystem',
  HomeAndConstructionBusiness = 'HomeAndConstructionBusiness',
  SkiResort = 'SkiResort',
  Integer = 'Integer',
  Dentist = 'Dentist',
  Casino = 'Casino',
  MedicalEntity = 'MedicalEntity',
  TireShop = 'TireShop',
  WholesaleStore = 'WholesaleStore',
  Project = 'Project',
  RealEstateAgent = 'RealEstateAgent',
  WorkersUnion = 'WorkersUnion',
  CreativeWork = 'CreativeWork',
  DrugClass = 'DrugClass',
  MolecularEntity = 'MolecularEntity',
  HyperToc = 'HyperToc',
  ElectronicsStore = 'ElectronicsStore',
  FundingAgency = 'FundingAgency',
  Thesis = 'Thesis',
  MedicalBusiness = 'MedicalBusiness',
  DiagnosticLab = 'DiagnosticLab',
  MedicalTest = 'MedicalTest',
  Airline = 'Airline',
  VideoGame = 'VideoGame',
  AnimalShelter = 'AnimalShelter',
  AmusementPark = 'AmusementPark',
  WebPageElement = 'WebPageElement',
  OnlineBusiness = 'OnlineBusiness',
  RadioSeries = 'RadioSeries',
  Float = 'Float',
  ClothingStore = 'ClothingStore',
  SportingGoodsStore = 'SportingGoodsStore',
  SuperficialAnatomy = 'SuperficialAnatomy',
  Consortium = 'Consortium',
  HowToDirection = 'HowToDirection',
  ComicStory = 'ComicStory',
  PodcastSeries = 'PodcastSeries',
  Library = 'Library',
  MusicComposition = 'MusicComposition',
  Optician = 'Optician',
  Brewery = 'Brewery',
  MedicalTestPanel = 'MedicalTestPanel',
  SiteNavigationElement = 'SiteNavigationElement',
  Bakery = 'Bakery',
  MedicalCondition = 'MedicalCondition',
  SportsOrganization = 'SportsOrganization',
  Florist = 'Florist',
  ChemicalSubstance = 'ChemicalSubstance',
  HowToTip = 'HowToTip',
  ComicCoverArt = 'ComicCoverArt',
  Quotation = 'Quotation',
  GeneralContractor = 'GeneralContractor',
  DigitalDocument = 'DigitalDocument',
  HomeGoodsStore = 'HomeGoodsStore',
  Menu = 'Menu',
  DryCleaningOrLaundry = 'DryCleaningOrLaundry',
  WPAdBlock = 'WPAdBlock',
  SpreadsheetDigitalDocument = 'SpreadsheetDigitalDocument',
  JewelryStore = 'JewelryStore',
  ResearchProject = 'ResearchProject',
  SheetMusic = 'SheetMusic',
  MusicRecording = 'MusicRecording',
  MedicalCode = 'MedicalCode',
  CssSelectorType = 'CssSelectorType',
  MenuSection = 'MenuSection',
  MedicalSignOrSymptom = 'MedicalSignOrSymptom',
  BankOrCreditUnion = 'BankOrCreditUnion',
  TouristInformationCenter = 'TouristInformationCenter',
  BookSeries = 'BookSeries',
  NewsMediaOrganization = 'NewsMediaOrganization',
  PerformingGroup = 'PerformingGroup',
  EducationalOrganization = 'EducationalOrganization',
  WPFooter = 'WPFooter',
  MedicalCause = 'MedicalCause',
  FurnitureStore = 'FurnitureStore',
  Pharmacy = 'Pharmacy',
  MedicalIntangible = 'MedicalIntangible',
  HVACBusiness = 'HVACBusiness',
  ComedyClub = 'ComedyClub',
  MathSolver = 'MathSolver',
  MedicalIndication = 'MedicalIndication',
  MedicalStudy = 'MedicalStudy',
  Landform = 'Landform',
  Poster = 'Poster',
  AnatomicalStructure = 'AnatomicalStructure',
  DataCatalog = 'DataCatalog',
  Volcano = 'Volcano',
  Course = 'Course',
  Periodical = 'Periodical',
  XPathType = 'XPathType',
  Clip = 'Clip',
  AutoDealer = 'AutoDealer',
  TextDigitalDocument = 'TextDigitalDocument',
  LiquorStore = 'LiquorStore',
  NightClub = 'NightClub',
  HyperTocEntry = 'HyperTocEntry',
  VideoGameSeries = 'VideoGameSeries',
  Episode = 'Episode',
  NoteDigitalDocument = 'NoteDigitalDocument',
  Sculpture = 'Sculpture',
  Action = 'Action',
  DateTime = 'DateTime',
  Time = 'Time',
  MiPutaMadre = 'MiPutaMadre',
  Restaurant = 'Restaurant',
  FundingScheme = 'FundingScheme',
  MensClothingStore = 'MensClothingStore',
  MedicalProcedure = 'MedicalProcedure',
  ApprovedIndication = 'ApprovedIndication',
  GolfCourse = 'GolfCourse',
  Mountain = 'Mountain',
  PlayAction = 'PlayAction',
  MovieRentalStore = 'MovieRentalStore',
  EducationalOccupationalCredential = 'EducationalOccupationalCredential',
  BikeStore = 'BikeStore',
  LearningResource = 'LearningResource',
  Accommodation = 'Accommodation',
  Person = 'Person',
  MedicalGuideline = 'MedicalGuideline',
  Drawing = 'Drawing',
  MovingCompany = 'MovingCompany',
  Ngo = 'Ngo',
  GasStation = 'GasStation',
  DrugCost = 'DrugCost',
  ShortStory = 'ShortStory',
  Event = 'Event',
  OutletStore = 'OutletStore',
  ElementarySchool = 'ElementarySchool',
  ExerciseAction = 'ExerciseAction',
  DanceEvent = 'DanceEvent',
  PublicSwimmingPool = 'PublicSwimmingPool',
  Nerve = 'Nerve',
  Corporation = 'Corporation',
  SocialEvent = 'SocialEvent',
  AutoRepair = 'AutoRepair',
  DaySpa = 'DaySpa',
  ShoeStore = 'ShoeStore',
  AutoRental = 'AutoRental',
  MovieSeries = 'MovieSeries',
  MotorcycleRepair = 'MotorcycleRepair',
  Book = 'Book',
  Dataset = 'Dataset',
  AutoWash = 'AutoWash',
  NailSalon = 'NailSalon',
  Painting = 'Painting',
  InteractAction = 'InteractAction',
  BookStore = 'BookStore',
  Taxon = 'Taxon',
  LandmarksOrHistoricalBuildings = 'LandmarksOrHistoricalBuildings',
  VisualArtwork = 'VisualArtwork',
  CoverArt = 'CoverArt',
  GroceryStore = 'GroceryStore',
  Continent = 'Continent',
  SearchRescueOrganization = 'SearchRescueOrganization',
  PostOffice = 'PostOffice',
  HobbyShop = 'HobbyShop',
  VeterinaryCare = 'VeterinaryCare',
  Claim = 'Claim',
  WPSideBar = 'WPSideBar',
  SaleEvent = 'SaleEvent',
  BedAndBreakfast = 'BedAndBreakfast',
  Game = 'Game',
  Intangible = 'Intangible',
  AdministrativeArea = 'AdministrativeArea',
  PetStore = 'PetStore',
  SportsTeam = 'SportsTeam',
  CivicStructure = 'CivicStructure',
  Hostel = 'Hostel',
  ResearchOrganization = 'ResearchOrganization',
  Schedule = 'Schedule',
  Cemetery = 'Cemetery',
  Message = 'Message',
  DrugLegalStatus = 'DrugLegalStatus',
  Muscle = 'Muscle',
  Demand = 'Demand',
  Product = 'Product',
  BroadcastChannel = 'BroadcastChannel',
  ComputerLanguage = 'ComputerLanguage',
  Museum = 'Museum',
  ToyStore = 'ToyStore',
  RadioEpisode = 'RadioEpisode',
  WebSite = 'WebSite',
  MedicalRiskFactor = 'MedicalRiskFactor',
  CreativeWorkSeason = 'CreativeWorkSeason',
  Chapter = 'Chapter',
  EducationalOccupationalProgram = 'EducationalOccupationalProgram',
  Vessel = 'Vessel',
  ConvenienceStore = 'ConvenienceStore',
  TaxiStand = 'TaxiStand',
  PropertyValueSpecification = 'PropertyValueSpecification',
  MediaObject = 'MediaObject',
  Motel = 'Motel',
  AudioObject = 'AudioObject',
  Aquarium = 'Aquarium',
  Review = 'Review',
  Electrician = 'Electrician',
  MoveAction = 'MoveAction',
  School = 'School',
  Manuscript = 'Manuscript',
  ScreeningEvent = 'ScreeningEvent',
  Movie = 'Movie',
  BedDetails = 'BedDetails',
  MediaReviewItem = 'MediaReviewItem',
  DepartmentStore = 'DepartmentStore',
  ComedyEvent = 'ComedyEvent',
  Statement = 'Statement',
  Seat = 'Seat',
  PerformAction = 'PerformAction',
  CriticReview = 'CriticReview',
  BroadcastFrequencySpecification = 'BroadcastFrequencySpecification',
  SolveMathAction = 'SolveMathAction',
  IndividualProduct = 'IndividualProduct',
  InfectiousDisease = 'InfectiousDisease',
  DoseSchedule = 'DoseSchedule',
  ComicSeries = 'ComicSeries',
  MedicalContraindication = 'MedicalContraindication',
  TheaterEvent = 'TheaterEvent',
  UpdateAction = 'UpdateAction',
  Notary = 'Notary',
  DefinedTermSet = 'DefinedTermSet',
  CommunicateAction = 'CommunicateAction',
  InsuranceAgency = 'InsuranceAgency',
  City = 'City',
  MusicVideoObject = 'MusicVideoObject',
  Blog = 'Blog',
  OrganizeAction = 'OrganizeAction',
  House = 'House',
  ConsumeAction = 'ConsumeAction',
  WPHeader = 'WPHeader',
  OnlineStore = 'OnlineStore',
  SoftwareSourceCode = 'SoftwareSourceCode',
  ThreeDModel = 'ThreeDModel',
  MusicGroup = 'MusicGroup',
  Play = 'Play',
  Guide = 'Guide',
  EducationEvent = 'EducationEvent',
  Zoo = 'Zoo',
  ArchiveComponent = 'ArchiveComponent',
  Vehicle = 'Vehicle',
  Permit = 'Permit',
  CheckInAction = 'CheckInAction',
  Hotel = 'Hotel',
  AchieveAction = 'AchieveAction',
  ArtGallery = 'ArtGallery',
  PathologyTest = 'PathologyTest',
  BusStop = 'BusStop',
  BloodTest = 'BloodTest',
  Suite = 'Suite',
  Comment = 'Comment',
  ShareAction = 'ShareAction',
  GeospatialGeometry = 'GeospatialGeometry',
  TouristDestination = 'TouristDestination',
  WebContent = 'WebContent',
  RoofingContractor = 'RoofingContractor',
  ListItem = 'ListItem',
  EmailMessage = 'EmailMessage',
  FindAction = 'FindAction',
  Park = 'Park',
  GovernmentOrganization = 'GovernmentOrganization',
  AccountingService = 'AccountingService',
  PlanAction = 'PlanAction',
  DanceGroup = 'DanceGroup',
  DrugStrength = 'DrugStrength',
  BefriendAction = 'BefriendAction',
  HealthTopicContent = 'HealthTopicContent',
  HighSchool = 'HighSchool',
  MiddleSchool = 'MiddleSchool',
  Map = 'Map',
  StructuredValue = 'StructuredValue',
  MedicalDevice = 'MedicalDevice',
  MusicVenue = 'MusicVenue',
  Property = 'Property',
  MedicalSymptom = 'MedicalSymptom',
  HowToItem = 'HowToItem',
  Photograph = 'Photograph',
  DepartAction = 'DepartAction',
  Residence = 'Residence',
  MedicalGuidelineContraindication = 'MedicalGuidelineContraindication',
  Answer = 'Answer',
  Conversation = 'Conversation',
  Plumber = 'Plumber',
  Article = 'Article',
  TrainStation = 'TrainStation',
  DefinedRegion = 'DefinedRegion',
  ImagingTest = 'ImagingTest',
  Ticket = 'Ticket',
  Airport = 'Airport',
  Trip = 'Trip',
  LifestyleModification = 'LifestyleModification',
  OrderItem = 'OrderItem',
  MerchantReturnPolicy = 'MerchantReturnPolicy',
  Atlas = 'Atlas',
  AskAction = 'AskAction',
  PodcastEpisode = 'PodcastEpisode',
  Bone = 'Bone',
  BodyOfWater = 'BodyOfWater',
  Season = 'Season',
  JoinAction = 'JoinAction',
  GameServer = 'GameServer',
  MediaSubscription = 'MediaSubscription',
  ClaimReview = 'ClaimReview',
  Locksmith = 'Locksmith',
  DDxElement = 'DDxElement',
  SoftwareApplication = 'SoftwareApplication',
  SocialMediaPosting = 'SocialMediaPosting',
  HowToTool = 'HowToTool',
  Ligament = 'Ligament',
  MedicalRiskEstimator = 'MedicalRiskEstimator',
  Apartment = 'Apartment',
  WebPage = 'WebPage',
  Preschool = 'Preschool',
  HealthPlanNetwork = 'HealthPlanNetwork',
  Resort = 'Resort',
  CourseInstance = 'CourseInstance',
  HowTo = 'HowTo',
  PublicationEvent = 'PublicationEvent',
  SomeProducts = 'SomeProducts',
  Code = 'Code',
  DiscoverAction = 'DiscoverAction',
  InteractionCounter = 'InteractionCounter',
  Substance = 'Substance',
  RadioSeason = 'RadioSeason',
  BusinessEvent = 'BusinessEvent',
  AssessAction = 'AssessAction',
  AudioObjectSnapshot = 'AudioObjectSnapshot',
  PodcastSeason = 'PodcastSeason',
  TechArticle = 'TechArticle',
  NutritionInformation = 'NutritionInformation',
  Table = 'Table',
  RadioChannel = 'RadioChannel',
  Series = 'Series',
  Language = 'Language',
  CollegeOrUniversity = 'CollegeOrUniversity',
  DataFeed = 'DataFeed',
  TherapeuticProcedure = 'TherapeuticProcedure',
  MusicEvent = 'MusicEvent',
  TradeAction = 'TradeAction',
  MovieClip = 'MovieClip',
  PublicationVolume = 'PublicationVolume',
  State = 'State',
  Pond = 'Pond',
  AnatomicalSystem = 'AnatomicalSystem',
  HousePainter = 'HousePainter',
  EnergyConsumptionDetails = 'EnergyConsumptionDetails',
  MedicalTherapy = 'MedicalTherapy',
  EmployerReview = 'EmployerReview',
  MedicalGuidelineRecommendation = 'MedicalGuidelineRecommendation',
  Newspaper = 'Newspaper',
  ServiceChannel = 'ServiceChannel',
  UserReview = 'UserReview',
  QAPage = 'QAPage',
  ImageObject = 'ImageObject',
  AdvertiserContentArticle = 'AdvertiserContentArticle',
  MonetaryAmount = 'MonetaryAmount',
  Collection = 'Collection',
  GeoCoordinates = 'GeoCoordinates',
  ActionAccessSpecification = 'ActionAccessSpecification',
  TVEpisode = 'TVEpisode',
  CheckAction = 'CheckAction',
  PlaceOfWorship = 'PlaceOfWorship',
  Legislation = 'Legislation',
  SpecialAnnouncement = 'SpecialAnnouncement',
  CollectionPage = 'CollectionPage',
  MediaReview = 'MediaReview',
  ProfilePage = 'ProfilePage',
  PhysicalTherapy = 'PhysicalTherapy',
  PublicationIssue = 'PublicationIssue',
  CDCPMDRecord = 'CDCPMDRecord',
  ViewAction = 'ViewAction',
  VideoGameClip = 'VideoGameClip',
  ExchangeRateSpecification = 'ExchangeRateSpecification',
  MusicPlaylist = 'MusicPlaylist',
  Role = 'Role',
  Playground = 'Playground',
  OfferShippingDetails = 'OfferShippingDetails',
  TelevisionChannel = 'TelevisionChannel',
  ShippingRateSettings = 'ShippingRateSettings',
  PresentationDigitalDocument = 'PresentationDigitalDocument',
  LeaveAction = 'LeaveAction',
  SearchAction = 'SearchAction',
  Crematorium = 'Crematorium',
  MedicalWebPage = 'MedicalWebPage',
  InviteAction = 'InviteAction',
  EatAction = 'EatAction',
  OnDemandEvent = 'OnDemandEvent',
  ChildrensEvent = 'ChildrensEvent',
  ProgramMembership = 'ProgramMembership',
  MedicalConditionStage = 'MedicalConditionStage',
  PayAction = 'PayAction',
  HealthPlanFormulary = 'HealthPlanFormulary',
  DataDownload = 'DataDownload',
  BrainStructure = 'BrainStructure',
  ProductModel = 'ProductModel',
  MedicalObservationalStudy = 'MedicalObservationalStudy',
  VisualArtsEvent = 'VisualArtsEvent',
  Canal = 'Canal',
  SatiricalArticle = 'SatiricalArticle',
  WorkBasedProgram = 'WorkBasedProgram',
  Church = 'Church',
  GovernmentBuilding = 'GovernmentBuilding',
  CatholicChurch = 'CatholicChurch',
  BoatTrip = 'BoatTrip',
  TrainTrip = 'TrainTrip',
  Flight = 'Flight',
  DatedMoneySpecification = 'DatedMoneySpecification',
  FoodEvent = 'FoodEvent',
  ReserveAction = 'ReserveAction',
  ParkingFacility = 'ParkingFacility',
  PreventionIndication = 'PreventionIndication',
  EntryPoint = 'EntryPoint',
  TransferAction = 'TransferAction',
  Barcode = 'Barcode',
  LiteraryEvent = 'LiteraryEvent',
  MedicalSign = 'MedicalSign',
  Observation = 'Observation',
  AlignmentObject = 'AlignmentObject',
  TheaterGroup = 'TheaterGroup',
  LinkRole = 'LinkRole',
  CampingPitch = 'CampingPitch',
  Question = 'Question',
  RiverBodyOfWater = 'RiverBodyOfWater',
  DownloadAction = 'DownloadAction',
  UnRegisterAction = 'UnRegisterAction',
  Beach = 'Beach',
  Rating = 'Rating',
  SurgicalProcedure = 'SurgicalProcedure',
  BusTrip = 'BusTrip',
  MenuItem = 'MenuItem',
  TypeAndQuantityNode = 'TypeAndQuantityNode',
  Embassy = 'Embassy',
  ControlAction = 'ControlAction',
  Quiz = 'Quiz',
  MerchantReturnPolicySeasonalOverride = 'MerchantReturnPolicySeasonalOverride',
  ReplaceAction = 'ReplaceAction',
  DeliveryEvent = 'DeliveryEvent',
  BookmarkAction = 'BookmarkAction',
  Grant = 'Grant',
  Offer = 'Offer',
  Joint = 'Joint',
  MoneyTransfer = 'MoneyTransfer',
  TreatmentIndication = 'TreatmentIndication',
  ItemList = 'ItemList',
  OfferCatalog = 'OfferCatalog',
  OccupationalTherapy = 'OccupationalTherapy',
  ScholarlyArticle = 'ScholarlyArticle',
  WebApplication = 'WebApplication',
  ExhibitionEvent = 'ExhibitionEvent',
  Audience = 'Audience',
  Artery = 'Artery',
  SingleFamilyResidence = 'SingleFamilyResidence',
  MedicalTrial = 'MedicalTrial',
  PsychologicalTreatment = 'PsychologicalTreatment',
  VirtualLocation = 'VirtualLocation',
  Occupation = 'Occupation',
  FollowAction = 'FollowAction',
  UseAction = 'UseAction',
  EventVenue = 'EventVenue',
  Hackathon = 'Hackathon',
  CreateAction = 'CreateAction',
  BorrowAction = 'BorrowAction',
  PropertyValue = 'PropertyValue',
  DiagnosticProcedure = 'DiagnosticProcedure',
  DrinkAction = 'DrinkAction',
  Room = 'Room',
  TravelAction = 'TravelAction',
  Recommendation = 'Recommendation',
  SeaBodyOfWater = 'SeaBodyOfWater',
  OccupationalExperienceRequirements = 'OccupationalExperienceRequirements',
  TVClip = 'TVClip',
  TakeAction = 'TakeAction',
  LendAction = 'LendAction',
  DefenceEstablishment = 'DefenceEstablishment',
  Reservoir = 'Reservoir',
  GiveAction = 'GiveAction',
  DigitalDocumentPermission = 'DigitalDocumentPermission',
  SeekToAction = 'SeekToAction',
  HealthPlanCostSharingSpecification = 'HealthPlanCostSharingSpecification',
  BusStation = 'BusStation',
  RadioClip = 'RadioClip',
  MaximumDoseSchedule = 'MaximumDoseSchedule',
  ItemPage = 'ItemPage',
  PublicToilet = 'PublicToilet',
  RegisterAction = 'RegisterAction',
  ScheduleAction = 'ScheduleAction',
  HealthInsurancePlan = 'HealthInsurancePlan',
  AddAction = 'AddAction',
  ApplyAction = 'ApplyAction',
  Vein = 'Vein',
  UserInteraction = 'UserInteraction',
  UserBlocks = 'UserBlocks',
  Quantity = 'Quantity',
  Distance = 'Distance',
  StatisticalPopulation = 'StatisticalPopulation',
  InstallAction = 'InstallAction',
  VitalSign = 'VitalSign',
  CommentAction = 'CommentAction',
  WatchAction = 'WatchAction',
  FloorPlan = 'FloorPlan',
  Class = 'Class',
  CheckOutAction = 'CheckOutAction',
  BuyAction = 'BuyAction',
  Festival = 'Festival',
  MarryAction = 'MarryAction',
  PriceSpecification = 'PriceSpecification',
  SportsEvent = 'SportsEvent',
  WinAction = 'WinAction',
  RVPark = 'RVPark',
  Energy = 'Energy',
  Brand = 'Brand',
  ContactPoint = 'ContactPoint',
  JobPosting = 'JobPosting',
  MedicalRiskScore = 'MedicalRiskScore',
  HotelRoom = 'HotelRoom',
  SchoolDistrict = 'SchoolDistrict',
  PlayGameAction = 'PlayGameAction',
  Reservation = 'Reservation',
  TrackAction = 'TrackAction',
  QuantitativeValue = 'QuantitativeValue',
  ParcelDelivery = 'ParcelDelivery',
  SpeakableSpecification = 'SpeakableSpecification',
  InformAction = 'InformAction',
  DeliveryTimeSettings = 'DeliveryTimeSettings',
  Invoice = 'Invoice',
  RecommendedDoseSchedule = 'RecommendedDoseSchedule',
  Car = 'Car',
  AboutPage = 'AboutPage',
  LodgingReservation = 'LodgingReservation',
  EndorsementRating = 'EndorsementRating',
  UserPageVisits = 'UserPageVisits',
  TipAction = 'TipAction',
  PerformingArtsTheater = 'PerformingArtsTheater',
  SubscribeAction = 'SubscribeAction',
  OfferForLease = 'OfferForLease',
  CompleteDataFeed = 'CompleteDataFeed',
  Country = 'Country',
  BoatReservation = 'BoatReservation',
  MusicAlbum = 'MusicAlbum',
  DeleteAction = 'DeleteAction',
  QuantitativeValueDistribution = 'QuantitativeValueDistribution',
  DiscussionForumPosting = 'DiscussionForumPosting',
  DataFeedItem = 'DataFeedItem',
  WearAction = 'WearAction',
  HowToSupply = 'HowToSupply',
  SubwayStation = 'SubwayStation',
  ProductGroup = 'ProductGroup',
  PerformanceRole = 'PerformanceRole',
  TieAction = 'TieAction',
  ReturnAction = 'ReturnAction',
  MedicalRiskCalculator = 'MedicalRiskCalculator',
  VideoObject = 'VideoObject',
  MusicRelease = 'MusicRelease',
  PaintAction = 'PaintAction',
  CancelAction = 'CancelAction',
  TaxiReservation = 'TaxiReservation',
  ReadAction = 'ReadAction',
  MedicalScholarlyArticle = 'MedicalScholarlyArticle',
  CategoryCodeSet = 'CategoryCodeSet',
  Service = 'Service',
  DefinedTerm = 'DefinedTerm',
  Order = 'Order',
  OfferForPurchase = 'OfferForPurchase',
  BusOrCoach = 'BusOrCoach',
  Bridge = 'Bridge',
  AggregateRating = 'AggregateRating',
  IgnoreAction = 'IgnoreAction',
  ReportedDoseSchedule = 'ReportedDoseSchedule',
  GovernmentPermit = 'GovernmentPermit',
  BoatTerminal = 'BoatTerminal',
  SuspendAction = 'SuspendAction',
  ArriveAction = 'ArriveAction',
  BusReservation = 'BusReservation',
  DietarySupplement = 'DietarySupplement',
  UserLikes = 'UserLikes',
  UnitPriceSpecification = 'UnitPriceSpecification',
  AllocateAction = 'AllocateAction',
  BroadcastService = 'BroadcastService',
  RepaymentSpecification = 'RepaymentSpecification',
  WebAPI = 'WebAPI',
  LegislativeBuilding = 'LegislativeBuilding',
  RadioBroadcastService = 'RadioBroadcastService',
  ShippingDeliveryTime = 'ShippingDeliveryTime',
  LymphaticVessel = 'LymphaticVessel',
  GatedResidenceCommunity = 'GatedResidenceCommunity',
  PhysicalActivity = 'PhysicalActivity',
  UserPlusOnes = 'UserPlusOnes',
  ApartmentComplex = 'ApartmentComplex',
  RsvpAction = 'RsvpAction',
  Mosque = 'Mosque',
  ChooseAction = 'ChooseAction',
  Courthouse = 'Courthouse',
  SearchResultsPage = 'SearchResultsPage',
  ContactPage = 'ContactPage',
  NewsArticle = 'NewsArticle',
  OwnershipInfo = 'OwnershipInfo',
  AcceptAction = 'AcceptAction',
  SellAction = 'SellAction',
  RentalCarReservation = 'RentalCarReservation',
  LakeBodyOfWater = 'LakeBodyOfWater',
  RadiationTherapy = 'RadiationTherapy',
  CategoryCode = 'CategoryCode',
  Duration = 'Duration',
  Synagogue = 'Synagogue',
  ListenAction = 'ListenAction',
  BroadcastEvent = 'BroadcastEvent',
  ReplyAction = 'ReplyAction',
  MeetingRoom = 'MeetingRoom',
  PhotographAction = 'PhotographAction',
  EngineSpecification = 'EngineSpecification',
  SendAction = 'SendAction',
  Report = 'Report',
  MotorizedBicycle = 'MotorizedBicycle',
  CheckoutPage = 'CheckoutPage',
  LoseAction = 'LoseAction',
  OrderAction = 'OrderAction',
  ComicIssue = 'ComicIssue',
  QuoteAction = 'QuoteAction',
  AMRadioChannel = 'AMRadioChannel',
  MobileApplication = 'MobileApplication',
  CorrectionComment = 'CorrectionComment',
  RentAction = 'RentAction',
  AssignAction = 'AssignAction',
  Mass = 'Mass',
  FMRadioChannel = 'FMRadioChannel',
  BuddhistTemple = 'BuddhistTemple',
  GeoShape = 'GeoShape',
  TrainReservation = 'TrainReservation',
  APIReference = 'APIReference',
  Motorcycle = 'Motorcycle',
  AnalysisNewsArticle = 'AnalysisNewsArticle',
  Recipe = 'Recipe',
  DonateAction = 'DonateAction',
  PostalCodeRangeSpecification = 'PostalCodeRangeSpecification',
  TouristTrip = 'TouristTrip',
  OrganizationRole = 'OrganizationRole',
  PeopleAudience = 'PeopleAudience',
  BreadcrumbList = 'BreadcrumbList',
  WarrantyPromise = 'WarrantyPromise',
  FAQPage = 'FAQPage',
  RealEstateListing = 'RealEstateListing',
  EventReservation = 'EventReservation',
  HinduTemple = 'HinduTemple',
  OpeningHoursSpecification = 'OpeningHoursSpecification',
  ReviewAction = 'ReviewAction',
  Drug = 'Drug',
  Waterfall = 'Waterfall',
  OceanBodyOfWater = 'OceanBodyOfWater',
  EmployerAggregateRating = 'EmployerAggregateRating',
  PreOrderAction = 'PreOrderAction',
  RejectAction = 'RejectAction',
  VideoObjectSnapshot = 'VideoObjectSnapshot',
  ParentAudience = 'ParentAudience',
  DeactivateAction = 'DeactivateAction',
  ResumeAction = 'ResumeAction',
  ReactAction = 'ReactAction',
  InsertAction = 'InsertAction',
  MediaGallery = 'MediaGallery',
  ImageObjectSnapshot = 'ImageObjectSnapshot',
  BlogPosting = 'BlogPosting',
  LikeAction = 'LikeAction',
  UserTweets = 'UserTweets',
  MonetaryGrant = 'MonetaryGrant',
  EducationalAudience = 'EducationalAudience',
  CompoundPriceSpecification = 'CompoundPriceSpecification',
  DataType = 'DataType',
  ImageGallery = 'ImageGallery',
  ConfirmAction = 'ConfirmAction',
  UserCheckins = 'UserCheckins',
  LiveBlogPosting = 'LiveBlogPosting',
  AskPublicNewsArticle = 'AskPublicNewsArticle',
  FoodService = 'FoodService',
  BusinessAudience = 'BusinessAudience',
  AggregateOffer = 'AggregateOffer',
  UserDownloads = 'UserDownloads',
  ReceiveAction = 'ReceiveAction',
  EndorseAction = 'EndorseAction',
  AgreeAction = 'AgreeAction',
  FoodEstablishmentReservation = 'FoodEstablishmentReservation',
  WriteAction = 'WriteAction',
  PrependAction = 'PrependAction',
  GeoCircle = 'GeoCircle',
  DrawAction = 'DrawAction',
  ActivateAction = 'ActivateAction',
  PostalAddress = 'PostalAddress',
  CityHall = 'CityHall',
  MonetaryAmountDistribution = 'MonetaryAmountDistribution',
  DeliveryChargeSpecification = 'DeliveryChargeSpecification',
  LocationFeatureSpecification = 'LocationFeatureSpecification',
  ReportageNewsArticle = 'ReportageNewsArticle',
  FlightReservation = 'FlightReservation',
  Researcher = 'Researcher',
  FilmAction = 'FilmAction',
  UserPlays = 'UserPlays',
  WantAction = 'WantAction',
  DislikeAction = 'DislikeAction',
  Taxi = 'Taxi',
  PaymentChargeSpecification = 'PaymentChargeSpecification',
  CookAction = 'CookAction',
  VoteAction = 'VoteAction',
  ReservationPackage = 'ReservationPackage',
  UserComments = 'UserComments',
  GovernmentService = 'GovernmentService',
  OpinionNewsArticle = 'OpinionNewsArticle',
  BackgroundNewsArticle = 'BackgroundNewsArticle',
  AuthorizeAction = 'AuthorizeAction',
  FinancialProduct = 'FinancialProduct',
  CableOrSatelliteService = 'CableOrSatelliteService',
  TaxiService = 'TaxiService',
  InvestmentOrDeposit = 'InvestmentOrDeposit',
  CurrencyConversionService = 'CurrencyConversionService',
  AppendAction = 'AppendAction',
  VideoGallery = 'VideoGallery',
  EmployeeRole = 'EmployeeRole',
  DisagreeAction = 'DisagreeAction',
  InvestmentFund = 'InvestmentFund',
  LoanOrCredit = 'LoanOrCredit',
  BankAccount = 'BankAccount',
  PaymentService = 'PaymentService',
  BrokerageAccount = 'BrokerageAccount',
  MortgageLoan = 'MortgageLoan',
}
registerEnumType(CmsThingTypes, {
  name: 'CmsThingTypes',
  description: 'CmsThing Types Enum',
});

@ObjectType()
export class CmsThing {
  @Field((type) => [Restaurant])
  Restaurants!: Restaurant[];
  @Field((type) => [LocalBusiness])
  LocalBusinesses!: LocalBusiness[];
  @Field((type) => [FundingScheme])
  FundingSchemes!: FundingScheme[];
  @Field((type) => [InternetCafe])
  InternetCafes!: InternetCafe[];
  @Field((type) => [MensClothingStore])
  MensClothingStores!: MensClothingStore[];
  @Field((type) => [MedicalProcedure])
  MedicalProcedures!: MedicalProcedure[];
  @Field((type) => [Hospital])
  Hospitals!: Hospital[];
  @Field((type) => [CheckOutAction])
  CheckOutActions!: CheckOutAction[];
  @Field((type) => [BuyAction])
  BuyActions!: BuyAction[];
  @Field((type) => [ApprovedIndication])
  ApprovedIndications!: ApprovedIndication[];
  @Field((type) => [TelevisionStation])
  TelevisionStations!: TelevisionStation[];
  @Field((type) => [Festival])
  Festivals!: Festival[];
  @Field((type) => [MarryAction])
  MarryActions!: MarryAction[];
  @Field((type) => [PriceSpecification])
  PriceSpecifications!: PriceSpecification[];
  @Field((type) => [SportsEvent])
  SportsEvents!: SportsEvent[];
  @Field((type) => [GolfCourse])
  GolfCourses!: GolfCourse[];
  @Field((type) => [WinAction])
  WinActions!: WinAction[];
  @Field((type) => [TravelAgency])
  TravelAgencies!: TravelAgency[];
  @Field((type) => [Mountain])
  Mountains!: Mountain[];
  @Field((type) => [RVPark])
  RVParks!: RVPark[];
  @Field((type) => [PlayAction])
  PlayActions!: PlayAction[];
  @Field((type) => [PoliceStation])
  PoliceStations!: PoliceStation[];
  @Field((type) => [MovieRentalStore])
  MovieRentalStores!: MovieRentalStore[];
  @Field((type) => [EducationalOccupationalCredential])
  EducationalOccupationalCredentials!: EducationalOccupationalCredential[];
  @Field((type) => [BikeStore])
  BikeStores!: BikeStore[];
  @Field((type) => [Energy])
  Energy!: Energy[];
  @Field((type) => [BrokerageAccount])
  BrokerageAccounts!: BrokerageAccount[];
  @Field((type) => [MedicalClinic])
  MedicalClinics!: MedicalClinic[];
  @Field((type) => [LearningResource])
  LearningResources!: LearningResource[];
  @Field((type) => [Brand])
  Brands!: Brand[];
  @Field((type) => [ContactPoint])
  ContactPoints!: ContactPoint[];
  @Field((type) => [JobPosting])
  JobPostings!: JobPosting[];
  @Field((type) => [Accommodation])
  Accommodations!: Accommodation[];
  @Field((type) => [MedicalRiskScore])
  MedicalRiskScores!: MedicalRiskScore[];
  @Field((type) => [HotelRoom])
  HotelRooms!: HotelRoom[];
  @Field((type) => [SchoolDistrict])
  SchoolDistricts!: SchoolDistrict[];
  @Field((type) => [PlayGameAction])
  PlayGameActions!: PlayGameAction[];
  @Field((type) => [Reservation])
  Reservations!: Reservation[];
  @Field((type) => [TrackAction])
  TrackActions!: TrackAction[];
  @Field((type) => [Person])
  People!: Person[];
  @Field((type) => [StadiumOrArena])
  StadiumOrArenas!: StadiumOrArena[];
  @Field((type) => [MedicalGuideline])
  MedicalGuidelines!: MedicalGuideline[];
  @Field((type) => [QuantitativeValue])
  QuantitativeValues!: QuantitativeValue[];
  @Field((type) => [Campground])
  Campgrounds!: Campground[];
  @Field((type) => [OpinionNewsArticle])
  OpinionNewsArticles!: OpinionNewsArticle[];
  @Field((type) => [ParcelDelivery])
  ParcelDeliveries!: ParcelDelivery[];
  @Field((type) => [SpeakableSpecification])
  SpeakableSpecifications!: SpeakableSpecification[];
  @Field((type) => [Drawing])
  Drawings!: Drawing[];
  @Field((type) => [InformAction])
  InformActions!: InformAction[];
  @Field((type) => [ReviewNewsArticle])
  ReviewNewsArticles!: ReviewNewsArticle[];
  @Field((type) => [MovingCompany])
  MovingCompanies!: MovingCompany[];
  @Field((type) => [Ngo])
  Ngos!: Ngo[];
  @Field((type) => [DeliveryTimeSettings])
  DeliveryTimeSettings!: DeliveryTimeSettings[];
  @Field((type) => [Invoice])
  Invoices!: Invoice[];
  @Field((type) => [GasStation])
  GasStations!: GasStation[];
  @Field((type) => [RecommendedDoseSchedule])
  RecommendedDoseSchedules!: RecommendedDoseSchedule[];
  @Field((type) => [DrugCost])
  DrugCosts!: DrugCost[];
  @Field((type) => [Car])
  Cars!: Car[];
  @Field((type) => [AboutPage])
  AboutPages!: AboutPage[];
  @Field((type) => [LodgingReservation])
  LodgingReservations!: LodgingReservation[];
  @Field((type) => [EndorsementRating])
  EndorsementRatings!: EndorsementRating[];
  @Field((type) => [ShortStory])
  ShortStories!: ShortStory[];
  @Field((type) => [UserPageVisits])
  UserPageVisits!: UserPageVisits[];
  @Field((type) => [TipAction])
  TipActions!: TipAction[];
  @Field((type) => [PerformingArtsTheater])
  PerformingArtsTheaters!: PerformingArtsTheater[];
  @Field((type) => [Event])
  Events!: Event[];
  @Field((type) => [FoodEstablishment])
  FoodEstablishments!: FoodEstablishment[];
  @Field((type) => [SubscribeAction])
  SubscribeActions!: SubscribeAction[];
  @Field((type) => [OfferForLease])
  OfferForLeases!: OfferForLease[];
  @Field((type) => [CompleteDataFeed])
  CompleteDataFeeds!: CompleteDataFeed[];
  @Field((type) => [OutletStore])
  OutletStores!: OutletStore[];
  @Field((type) => [Country])
  Countries!: Country[];
  @Field((type) => [HealthClub])
  HealthClubs!: HealthClub[];
  @Field((type) => [Diet])
  Diets!: Diet[];
  @Field((type) => [BoatReservation])
  BoatReservations!: BoatReservation[];
  @Field((type) => [ElementarySchool])
  ElementarySchools!: ElementarySchool[];
  @Field((type) => [MusicAlbum])
  MusicAlbums!: MusicAlbum[];
  @Field((type) => [ExerciseAction])
  ExerciseActions!: ExerciseAction[];
  @Field((type) => [AutoPartsStore])
  AutoPartsStores!: AutoPartsStore[];
  @Field((type) => [DanceEvent])
  DanceEvents!: DanceEvent[];
  @Field((type) => [DeleteAction])
  DeleteActions!: DeleteAction[];
  @Field((type) => [QuantitativeValueDistribution])
  QuantitativeValueDistributions!: QuantitativeValueDistribution[];
  @Field((type) => [DiscussionForumPosting])
  DiscussionForumPostings!: DiscussionForumPosting[];
  @Field((type) => [PublicSwimmingPool])
  PublicSwimmingPools!: PublicSwimmingPool[];
  @Field((type) => [Nerve])
  Nerves!: Nerve[];
  @Field((type) => [BackgroundNewsArticle])
  BackgroundNewsArticles!: BackgroundNewsArticle[];
  @Field((type) => [DataFeedItem])
  DataFeedItems!: DataFeedItem[];
  @Field((type) => [WearAction])
  WearActions!: WearAction[];
  @Field((type) => [Corporation])
  Corporations!: Corporation[];
  @Field((type) => [SocialEvent])
  SocialEvents!: SocialEvent[];
  @Field((type) => [HowToSupply])
  HowToSupplies!: HowToSupply[];
  @Field((type) => [ExercisePlan])
  ExercisePlans!: ExercisePlan[];
  @Field((type) => [AutoRepair])
  AutoRepairs!: AutoRepair[];
  @Field((type) => [SubwayStation])
  SubwayStations!: SubwayStation[];
  @Field((type) => [DaySpa])
  DaySpas!: DaySpa[];
  @Field((type) => [RadioStation])
  RadioStations!: RadioStation[];
  @Field((type) => [PaymentCard])
  PaymentCards!: PaymentCard[];
  @Field((type) => [ProductGroup])
  ProductGroups!: ProductGroup[];
  @Field((type) => [ShoeStore])
  ShoeStores!: ShoeStore[];
  @Field((type) => [PerformanceRole])
  PerformanceRoles!: PerformanceRole[];
  @Field((type) => [SportsActivityLocation])
  SportsActivityLocations!: SportsActivityLocation[];
  @Field((type) => [TieAction])
  TieActions!: TieAction[];
  @Field((type) => [AuthorizeAction])
  AuthorizeActions!: AuthorizeAction[];
  @Field((type) => [AutoRental])
  AutoRentals!: AutoRental[];
  @Field((type) => [MortgageLoan])
  MortgageLoans!: MortgageLoan[];
  @Field((type) => [MovieSeries])
  MovieSeries!: MovieSeries[];
  @Field((type) => [ReturnAction])
  ReturnActions!: ReturnAction[];
  @Field((type) => [FinancialProduct])
  FinancialProducts!: FinancialProduct[];
  @Field((type) => [MotorcycleRepair])
  MotorcycleRepairs!: MotorcycleRepair[];
  @Field((type) => [Book])
  Books!: Book[];
  @Field((type) => [MedicalRiskCalculator])
  MedicalRiskCalculators!: MedicalRiskCalculator[];
  @Field((type) => [VideoObject])
  VideoObjects!: VideoObject[];
  @Field((type) => [MusicRelease])
  MusicReleases!: MusicRelease[];
  @Field((type) => [CableOrSatelliteService])
  CableOrSatelliteServices!: CableOrSatelliteService[];
  @Field((type) => [PaintAction])
  PaintActions!: PaintAction[];
  @Field((type) => [CancelAction])
  CancelActions!: CancelAction[];
  @Field((type) => [Dataset])
  Datasets!: Dataset[];
  @Field((type) => [AutoWash])
  AutoWashes!: AutoWash[];
  @Field((type) => [NailSalon])
  NailSalons!: NailSalon[];
  @Field((type) => [Painting])
  Paintings!: Painting[];
  @Field((type) => [Physician])
  Physicians!: Physician[];
  @Field((type) => [TaxiService])
  TaxiServices!: TaxiService[];
  @Field((type) => [InteractAction])
  InteractActions!: InteractAction[];
  @Field((type) => [TaxiReservation])
  TaxiReservations!: TaxiReservation[];
  @Field((type) => [ReadAction])
  ReadActions!: ReadAction[];
  @Field((type) => [MedicalScholarlyArticle])
  MedicalScholarlyArticles!: MedicalScholarlyArticle[];
  @Field((type) => [CategoryCodeSet])
  CategoryCodeSets!: CategoryCodeSet[];
  @Field((type) => [BookStore])
  BookStores!: BookStore[];
  @Field((type) => [Taxon])
  Taxons!: Taxon[];
  @Field((type) => [TVSeries])
  TVSeries!: TVSeries[];
  @Field((type) => [LandmarksOrHistoricalBuildings])
  LandmarksOrHistoricalBuildings!: LandmarksOrHistoricalBuildings[];
  @Field((type) => [Service])
  Services!: Service[];
  @Field((type) => [VisualArtwork])
  VisualArtworks!: VisualArtwork[];
  @Field((type) => [DefinedTerm])
  DefinedTerms!: DefinedTerm[];
  @Field((type) => [CoverArt])
  CoverArts!: CoverArt[];
  @Field((type) => [ChildCare])
  ChildCares!: ChildCare[];
  @Field((type) => [Order])
  Orders!: Order[];
  @Field((type) => [GroceryStore])
  GroceryStores!: GroceryStore[];
  @Field((type) => [Continent])
  Continents!: Continent[];
  @Field((type) => [SportsClub])
  SportsClubs!: SportsClub[];
  @Field((type) => [SearchRescueOrganization])
  SearchRescueOrganizations!: SearchRescueOrganization[];
  @Field((type) => [OfferForPurchase])
  OfferForPurchases!: OfferForPurchase[];
  @Field((type) => [PostOffice])
  PostOffices!: PostOffice[];
  @Field((type) => [BusOrCoach])
  BusOrCoaches!: BusOrCoach[];
  @Field((type) => [HobbyShop])
  HobbyShops!: HobbyShop[];
  @Field((type) => [GovernmentOffice])
  GovernmentOffices!: GovernmentOffice[];
  @Field((type) => [VeterinaryCare])
  VeterinaryCares!: VeterinaryCare[];
  @Field((type) => [Bridge])
  Bridges!: Bridge[];
  @Field((type) => [Claim])
  Claims!: Claim[];
  @Field((type) => [AggregateRating])
  AggregateRatings!: AggregateRating[];
  @Field((type) => [HealthAndBeautyBusiness])
  HealthAndBeautyBusinesses!: HealthAndBeautyBusiness[];
  @Field((type) => [InvestmentOrDeposit])
  InvestmentOrDeposits!: InvestmentOrDeposit[];
  @Field((type) => [IgnoreAction])
  IgnoreActions!: IgnoreAction[];
  @Field((type) => [WPSideBar])
  WPSideBars!: WPSideBar[];
  @Field((type) => [ReportedDoseSchedule])
  ReportedDoseSchedules!: ReportedDoseSchedule[];
  @Field((type) => [GovernmentPermit])
  GovernmentPermits!: GovernmentPermit[];
  @Field((type) => [CurrencyConversionService])
  CurrencyConversionServices!: CurrencyConversionService[];
  @Field((type) => [BoatTerminal])
  BoatTerminals!: BoatTerminal[];
  @Field((type) => [SaleEvent])
  SaleEvents!: SaleEvent[];
  @Field((type) => [BedAndBreakfast])
  BedAndBreakfasts!: BedAndBreakfast[];
  @Field((type) => [Game])
  Games!: Game[];
  @Field((type) => [Intangible])
  Intangibles!: Intangible[];
  @Field((type) => [SuspendAction])
  SuspendActions!: SuspendAction[];
  @Field((type) => [AdministrativeArea])
  AdministrativeAreas!: AdministrativeArea[];
  @Field((type) => [LegislationObject])
  LegislationObjects!: LegislationObject[];
  @Field((type) => [PetStore])
  PetStores!: PetStore[];
  @Field((type) => [PronounceableText])
  PronounceableTexts!: PronounceableText[];
  @Field((type) => [SportsTeam])
  SportsTeams!: SportsTeam[];
  @Field((type) => [ProductCollection])
  ProductCollections!: ProductCollection[];
  @Field((type) => [ArriveAction])
  ArriveActions!: ArriveAction[];
  @Field((type) => [BusReservation])
  BusReservations!: BusReservation[];
  @Field((type) => [DietarySupplement])
  DietarySupplements!: DietarySupplement[];
  @Field((type) => [UserLikes])
  UserLikes!: UserLikes[];
  @Field((type) => [UnitPriceSpecification])
  UnitPriceSpecifications!: UnitPriceSpecification[];
  @Field((type) => [CivicStructure])
  CivicStructures!: CivicStructure[];
  @Field((type) => [AllocateAction])
  AllocateActions!: AllocateAction[];
  @Field((type) => [HairSalon])
  HairSalons!: HairSalon[];
  @Field((type) => [Hostel])
  Hostels!: Hostel[];
  @Field((type) => [ResearchOrganization])
  ResearchOrganizations!: ResearchOrganization[];
  @Field((type) => [Schedule])
  Schedules!: Schedule[];
  @Field((type) => [BarOrPub])
  BarOrPubs!: BarOrPub[];
  @Field((type) => [Cemetery])
  Cemeteries!: Cemetery[];
  @Field((type) => [Message])
  Messages!: Message[];
  @Field((type) => [BroadcastService])
  BroadcastServices!: BroadcastService[];
  @Field((type) => [DrugLegalStatus])
  DrugLegalStatuses!: DrugLegalStatus[];
  @Field((type) => [RepaymentSpecification])
  RepaymentSpecifications!: RepaymentSpecification[];
  @Field((type) => [Muscle])
  Muscles!: Muscle[];
  @Field((type) => [Demand])
  Demands!: Demand[];
  @Field((type) => [WebAPI])
  WebAPIS!: WebAPI[];
  @Field((type) => [LegislativeBuilding])
  LegislativeBuildings!: LegislativeBuilding[];
  @Field((type) => [RadioBroadcastService])
  RadioBroadcastServices!: RadioBroadcastService[];
  @Field((type) => [ShippingDeliveryTime])
  ShippingDeliveryTimes!: ShippingDeliveryTime[];
  @Field((type) => [LymphaticVessel])
  LymphaticVessels!: LymphaticVessel[];
  @Field((type) => [Product])
  Products!: Product[];
  @Field((type) => [BroadcastChannel])
  BroadcastChannels!: BroadcastChannel[];
  @Field((type) => [ComputerLanguage])
  ComputerLanguages!: ComputerLanguage[];
  @Field((type) => [Museum])
  Museums!: Museum[];
  @Field((type) => [ToyStore])
  ToyStores!: ToyStore[];
  @Field((type) => [RadioEpisode])
  RadioEpisodes!: RadioEpisode[];
  @Field((type) => [WebSite])
  WebSites!: WebSite[];
  @Field((type) => [GatedResidenceCommunity])
  GatedResidenceCommunities!: GatedResidenceCommunity[];
  @Field((type) => [MedicalRiskFactor])
  MedicalRiskFactors!: MedicalRiskFactor[];
  @Field((type) => [PhysicalActivity])
  PhysicalActivities!: PhysicalActivity[];
  @Field((type) => [FastFoodRestaurant])
  FastFoodRestaurants!: FastFoodRestaurant[];
  @Field((type) => [CreativeWorkSeason])
  CreativeWorkSeasons!: CreativeWorkSeason[];
  @Field((type) => [Chapter])
  Chapters!: Chapter[];
  @Field((type) => [EducationalOccupationalProgram])
  EducationalOccupationalPrograms!: EducationalOccupationalProgram[];
  @Field((type) => [Vessel])
  Vessels!: Vessel[];
  @Field((type) => [UserPlusOnes])
  UserPlusOnes!: UserPlusOnes[];
  @Field((type) => [BowlingAlley])
  BowlingAlleys!: BowlingAlley[];
  @Field((type) => [ConvenienceStore])
  ConvenienceStores!: ConvenienceStore[];
  @Field((type) => [TaxiStand])
  TaxiStands!: TaxiStand[];
  @Field((type) => [ApartmentComplex])
  ApartmentComplexes!: ApartmentComplex[];
  @Field((type) => [PropertyValueSpecification])
  PropertyValueSpecifications!: PropertyValueSpecification[];
  @Field((type) => [MediaObject])
  MediaObjects!: MediaObject[];
  @Field((type) => [Motel])
  Motels!: Motel[];
  @Field((type) => [RsvpAction])
  RsvpActions!: RsvpAction[];
  @Field((type) => [AutomotiveBusiness])
  AutomotiveBusinesses!: AutomotiveBusiness[];
  @Field((type) => [Mosque])
  Mosques!: Mosque[];
  @Field((type) => [ChooseAction])
  ChooseActions!: ChooseAction[];
  @Field((type) => [Courthouse])
  Courthouses!: Courthouse[];
  @Field((type) => [AudioObject])
  AudioObjects!: AudioObject[];
  @Field((type) => [Aquarium])
  Aquariums!: Aquarium[];
  @Field((type) => [Review])
  Reviews!: Review[];
  @Field((type) => [Electrician])
  Electricians!: Electrician[];
  @Field((type) => [MoveAction])
  MoveActions!: MoveAction[];
  @Field((type) => [School])
  Schools!: School[];
  @Field((type) => [Manuscript])
  Manuscripts!: Manuscript[];
  @Field((type) => [SearchResultsPage])
  SearchResultsPages!: SearchResultsPage[];
  @Field((type) => [ContactPage])
  ContactPages!: ContactPage[];
  @Field((type) => [NewsArticle])
  NewsArticles!: NewsArticle[];
  @Field((type) => [ScreeningEvent])
  ScreeningEvents!: ScreeningEvent[];
  @Field((type) => [OwnershipInfo])
  OwnershipInfos!: OwnershipInfo[];
  @Field((type) => [Movie])
  Movies!: Movie[];
  @Field((type) => [AcceptAction])
  AcceptActions!: AcceptAction[];
  @Field((type) => [Thing])
  Things!: Thing[];
  @Field((type) => [BedDetails])
  BedDetails!: BedDetails[];
  @Field((type) => [SellAction])
  SellActions!: SellAction[];
  @Field((type) => [RentalCarReservation])
  RentalCarReservations!: RentalCarReservation[];
  @Field((type) => [LakeBodyOfWater])
  LakeBodyOfWaters!: LakeBodyOfWater[];
  @Field((type) => [MediaReviewItem])
  MediaReviewItems!: MediaReviewItem[];
  @Field((type) => [DepartmentStore])
  DepartmentStores!: DepartmentStore[];
  @Field((type) => [Distillery])
  Distilleries!: Distillery[];
  @Field((type) => [ComedyEvent])
  ComedyEvents!: ComedyEvent[];
  @Field((type) => [Statement])
  Statements!: Statement[];
  @Field((type) => [Seat])
  Seats!: Seat[];
  @Field((type) => [MovieTheater])
  MovieTheaters!: MovieTheater[];
  @Field((type) => [RadiationTherapy])
  RadiationTherapies!: RadiationTherapy[];
  @Field((type) => [PerformAction])
  PerformActions!: PerformAction[];
  @Field((type) => [CategoryCode])
  CategoryCodes!: CategoryCode[];
  @Field((type) => [CriticReview])
  CriticReviews!: CriticReview[];
  @Field((type) => [BroadcastFrequencySpecification])
  BroadcastFrequencySpecifications!: BroadcastFrequencySpecification[];
  @Field((type) => [RecyclingCenter])
  RecyclingCenters!: RecyclingCenter[];
  @Field((type) => [Duration])
  Durations!: Duration[];
  @Field((type) => [Synagogue])
  Synagogues!: Synagogue[];
  @Field((type) => [ListenAction])
  ListenActions!: ListenAction[];
  @Field((type) => [SolveMathAction])
  SolveMathActions!: SolveMathAction[];
  @Field((type) => [BroadcastEvent])
  BroadcastEvents!: BroadcastEvent[];
  @Field((type) => [AppendAction])
  AppendActions!: AppendAction[];
  @Field((type) => [IndividualProduct])
  IndividualProducts!: IndividualProduct[];
  @Field((type) => [InfectiousDisease])
  InfectiousDiseases!: InfectiousDisease[];
  @Field((type) => [ReplyAction])
  ReplyActions!: ReplyAction[];
  @Field((type) => [PalliativeProcedure])
  PalliativeProcedures!: PalliativeProcedure[];
  @Field((type) => [Winery])
  Wineries!: Winery[];
  @Field((type) => [MeetingRoom])
  MeetingRooms!: MeetingRoom[];
  @Field((type) => [PhotographAction])
  PhotographActions!: PhotographAction[];
  @Field((type) => [EngineSpecification])
  EngineSpecifications!: EngineSpecification[];
  @Field((type) => [SendAction])
  SendActions!: SendAction[];
  @Field((type) => [Report])
  Reports!: Report[];
  @Field((type) => [MotorizedBicycle])
  MotorizedBicycles!: MotorizedBicycle[];
  @Field((type) => [DoseSchedule])
  DoseSchedules!: DoseSchedule[];
  @Field((type) => [ComicSeries])
  ComicSeries!: ComicSeries[];
  @Field((type) => [MedicalContraindication])
  MedicalContraindications!: MedicalContraindication[];
  @Field((type) => [CheckoutPage])
  CheckoutPages!: CheckoutPage[];
  @Field((type) => [TheaterEvent])
  TheaterEvents!: TheaterEvent[];
  @Field((type) => [UpdateAction])
  UpdateActions!: UpdateAction[];
  @Field((type) => [Store])
  Stores!: Store[];
  @Field((type) => [Notary])
  Notaries!: Notary[];
  @Field((type) => [DefinedTermSet])
  DefinedTermSets!: DefinedTermSet[];
  @Field((type) => [LoseAction])
  LoseActions!: LoseAction[];
  @Field((type) => [OrderAction])
  OrderActions!: OrderAction[];
  @Field((type) => [ComicIssue])
  ComicIssues!: ComicIssue[];
  @Field((type) => [CommunicateAction])
  CommunicateActions!: CommunicateAction[];
  @Field((type) => [LegalService])
  LegalServices!: LegalService[];
  @Field((type) => [ArchiveOrganization])
  ArchiveOrganizations!: ArchiveOrganization[];
  @Field((type) => [QuoteAction])
  QuoteActions!: QuoteAction[];
  @Field((type) => [AMRadioChannel])
  AMRadioChannels!: AMRadioChannel[];
  @Field((type) => [InsuranceAgency])
  InsuranceAgencies!: InsuranceAgency[];
  @Field((type) => [MobileApplication])
  MobileApplications!: MobileApplication[];
  @Field((type) => [SelfStorage])
  SelfStorages!: SelfStorage[];
  @Field((type) => [City])
  Cities!: City[];
  @Field((type) => [CovidTestingFacility])
  CovidTestingFacilities!: CovidTestingFacility[];
  @Field((type) => [MusicVideoObject])
  MusicVideoObjects!: MusicVideoObject[];
  @Field((type) => [Blog])
  Blogs!: Blog[];
  @Field((type) => [CorrectionComment])
  CorrectionComments!: CorrectionComment[];
  @Field((type) => [RentAction])
  RentActions!: RentAction[];
  @Field((type) => [AssignAction])
  AssignActions!: AssignAction[];
  @Field((type) => [Mass])
  Masses!: Mass[];
  @Field((type) => [PhysicalExam])
  PhysicalExams!: PhysicalExam[];
  @Field((type) => [OrganizeAction])
  OrganizeActions!: OrganizeAction[];
  @Field((type) => [FMRadioChannel])
  FMRadioChannels!: FMRadioChannel[];
  @Field((type) => [CreditCard])
  CreditCards!: CreditCard[];
  @Field((type) => [BuddhistTemple])
  BuddhistTemples!: BuddhistTemple[];
  @Field((type) => [GeoShape])
  GeoShapes!: GeoShape[];
  @Field((type) => [House])
  Houses!: House[];
  @Field((type) => [ConsumeAction])
  ConsumeActions!: ConsumeAction[];
  @Field((type) => [PawnShop])
  PawnShops!: PawnShop[];
  @Field((type) => [WPHeader])
  WPHeaders!: WPHeader[];
  @Field((type) => [TrainReservation])
  TrainReservations!: TrainReservation[];
  @Field((type) => [HowToSection])
  HowToSections!: HowToSection[];
  @Field((type) => [APIReference])
  APIReferences!: APIReference[];
  @Field((type) => [OnlineStore])
  OnlineStores!: OnlineStore[];
  @Field((type) => [VideoGallery])
  VideoGalleries!: VideoGallery[];
  @Field((type) => [Motorcycle])
  Motorcycles!: Motorcycle[];
  @Field((type) => [SoftwareSourceCode])
  SoftwareSourceCodes!: SoftwareSourceCode[];
  @Field((type) => [AnalysisNewsArticle])
  AnalysisNewsArticles!: AnalysisNewsArticle[];
  @Field((type) => [ThreeDModel])
  ThreeDModels!: ThreeDModel[];
  @Field((type) => [MusicGroup])
  MusicGroups!: MusicGroup[];
  @Field((type) => [Play])
  Plays!: Play[];
  @Field((type) => [Guide])
  Guides!: Guide[];
  @Field((type) => [EducationEvent])
  EducationEvents!: EducationEvent[];
  @Field((type) => [Zoo])
  Zoos!: Zoo[];
  @Field((type) => [ArchiveComponent])
  ArchiveComponents!: ArchiveComponent[];
  @Field((type) => [TVSeason])
  TVSeasons!: TVSeason[];
  @Field((type) => [ShoppingCenter])
  ShoppingCenters!: ShoppingCenter[];
  @Field((type) => [Recipe])
  Recipes!: Recipe[];
  @Field((type) => [Vehicle])
  Vehicles!: Vehicle[];
  @Field((type) => [Permit])
  Permits!: Permit[];
  @Field((type) => [CheckInAction])
  CheckInActions!: CheckInAction[];
  @Field((type) => [DonateAction])
  DonateActions!: DonateAction[];
  @Field((type) => [Hotel])
  Hotels!: Hotel[];
  @Field((type) => [PostalCodeRangeSpecification])
  PostalCodeRangeSpecifications!: PostalCodeRangeSpecification[];
  @Field((type) => [AchieveAction])
  AchieveActions!: AchieveAction[];
  @Field((type) => [CafeOrCoffeeShop])
  CafeOrCoffeeShops!: CafeOrCoffeeShop[];
  @Field((type) => [EmployeeRole])
  EmployeeRoles!: EmployeeRole[];
  @Field((type) => [TouristTrip])
  TouristTrips!: TouristTrip[];
  @Field((type) => [ArtGallery])
  ArtGalleries!: ArtGallery[];
  @Field((type) => [PathologyTest])
  PathologyTests!: PathologyTest[];
  @Field((type) => [OrganizationRole])
  OrganizationRoles!: OrganizationRole[];
  @Field((type) => [PeopleAudience])
  PeopleAudiences!: PeopleAudience[];
  @Field((type) => [BusStop])
  BusStops!: BusStop[];
  @Field((type) => [EntertainmentBusiness])
  EntertainmentBusinesses!: EntertainmentBusiness[];
  @Field((type) => [BloodTest])
  BloodTests!: BloodTest[];
  @Field((type) => [Suite])
  Suites!: Suite[];
  @Field((type) => [Comment])
  Comments!: Comment[];
  @Field((type) => [OfficeEquipmentStore])
  OfficeEquipmentStores!: OfficeEquipmentStore[];
  @Field((type) => [ShareAction])
  ShareActions!: ShareAction[];
  @Field((type) => [BreadcrumbList])
  BreadcrumbLists!: BreadcrumbList[];
  @Field((type) => [GeospatialGeometry])
  GeospatialGeometries!: GeospatialGeometry[];
  @Field((type) => [TouristDestination])
  TouristDestinations!: TouristDestination[];
  @Field((type) => [WebContent])
  WebContents!: WebContent[];
  @Field((type) => [RoofingContractor])
  RoofingContractors!: RoofingContractor[];
  @Field((type) => [MobilePhoneStore])
  MobilePhoneStores!: MobilePhoneStore[];
  @Field((type) => [WarrantyPromise])
  WarrantyPromises!: WarrantyPromise[];
  @Field((type) => [ListItem])
  ListItems!: ListItem[];
  @Field((type) => [EmailMessage])
  EmailMessages!: EmailMessage[];
  @Field((type) => [FAQPage])
  FAQPages!: FAQPage[];
  @Field((type) => [FindAction])
  FindActions!: FindAction[];
  @Field((type) => [Park])
  Parks!: Park[];
  @Field((type) => [GovernmentOrganization])
  GovernmentOrganizations!: GovernmentOrganization[];
  @Field((type) => [RealEstateListing])
  RealEstateListings!: RealEstateListing[];
  @Field((type) => [MedicalAudience])
  MedicalAudiences!: MedicalAudience[];
  @Field((type) => [EventReservation])
  EventReservations!: EventReservation[];
  @Field((type) => [DisagreeAction])
  DisagreeActions!: DisagreeAction[];
  @Field((type) => [IceCreamShop])
  IceCreamShops!: IceCreamShop[];
  @Field((type) => [HinduTemple])
  HinduTemples!: HinduTemple[];
  @Field((type) => [AccountingService])
  AccountingServices!: AccountingService[];
  @Field((type) => [PlanAction])
  PlanActions!: PlanAction[];
  @Field((type) => [AmpStory])
  AmpStories!: AmpStory[];
  @Field((type) => [DanceGroup])
  DanceGroups!: DanceGroup[];
  @Field((type) => [EmergencyService])
  EmergencyServices!: EmergencyService[];
  @Field((type) => [DrugStrength])
  DrugStrengths!: DrugStrength[];
  @Field((type) => [OpeningHoursSpecification])
  OpeningHoursSpecifications!: OpeningHoursSpecification[];
  @Field((type) => [BefriendAction])
  BefriendActions!: BefriendAction[];
  @Field((type) => [BioChemEntity])
  BioChemEntities!: BioChemEntity[];
  @Field((type) => [HealthTopicContent])
  HealthTopicContents!: HealthTopicContent[];
  @Field((type) => [HighSchool])
  HighSchools!: HighSchool[];
  @Field((type) => [ReviewAction])
  ReviewActions!: ReviewAction[];
  @Field((type) => [MiddleSchool])
  MiddleSchools!: MiddleSchool[];
  @Field((type) => [Map])
  Maps!: Map[];
  @Field((type) => [Drug])
  Drugs!: Drug[];
  @Field((type) => [StructuredValue])
  StructuredValues!: StructuredValue[];
  @Field((type) => [Waterfall])
  Waterfalls!: Waterfall[];
  @Field((type) => [GardenStore])
  GardenStores!: GardenStore[];
  @Field((type) => [MedicalDevice])
  MedicalDevices!: MedicalDevice[];
  @Field((type) => [MusicVenue])
  MusicVenues!: MusicVenue[];
  @Field((type) => [Property])
  Properties!: Property[];
  @Field((type) => [MedicalSymptom])
  MedicalSymptoms!: MedicalSymptom[];
  @Field((type) => [OceanBodyOfWater])
  OceanBodyOfWaters!: OceanBodyOfWater[];
  @Field((type) => [EmployerAggregateRating])
  EmployerAggregateRatings!: EmployerAggregateRating[];
  @Field((type) => [PreOrderAction])
  PreOrderActions!: PreOrderAction[];
  @Field((type) => [RejectAction])
  RejectActions!: RejectAction[];
  @Field((type) => [HowToItem])
  HowToItems!: HowToItem[];
  @Field((type) => [VideoObjectSnapshot])
  VideoObjectSnapshots!: VideoObjectSnapshot[];
  @Field((type) => [ParentAudience])
  ParentAudiences!: ParentAudience[];
  @Field((type) => [ExerciseGym])
  ExerciseGyms!: ExerciseGym[];
  @Field((type) => [Photograph])
  Photographs!: Photograph[];
  @Field((type) => [DepartAction])
  DepartActions!: DepartAction[];
  @Field((type) => [Audiobook])
  Audiobooks!: Audiobook[];
  @Field((type) => [Residence])
  Residences!: Residence[];
  @Field((type) => [DeactivateAction])
  DeactivateActions!: DeactivateAction[];
  @Field((type) => [MedicalGuidelineContraindication])
  MedicalGuidelineContraindications!: MedicalGuidelineContraindication[];
  @Field((type) => [Answer])
  Answers!: Answer[];
  @Field((type) => [ResumeAction])
  ResumeActions!: ResumeAction[];
  @Field((type) => [ReactAction])
  ReactActions!: ReactAction[];
  @Field((type) => [Conversation])
  Conversations!: Conversation[];
  @Field((type) => [Plumber])
  Plumbers!: Plumber[];
  @Field((type) => [Organization])
  Organizations!: Organization[];
  @Field((type) => [FireStation])
  FireStations!: FireStation[];
  @Field((type) => [Article])
  Articles!: Article[];
  @Field((type) => [TrainStation])
  TrainStations!: TrainStation[];
  @Field((type) => [InsertAction])
  InsertActions!: InsertAction[];
  @Field((type) => [DepositAccount])
  DepositAccounts!: DepositAccount[];
  @Field((type) => [DefinedRegion])
  DefinedRegions!: DefinedRegion[];
  @Field((type) => [MediaGallery])
  MediaGalleries!: MediaGallery[];
  @Field((type) => [ImagingTest])
  ImagingTests!: ImagingTest[];
  @Field((type) => [ImageObjectSnapshot])
  ImageObjectSnapshots!: ImageObjectSnapshot[];
  @Field((type) => [MedicalOrganization])
  MedicalOrganizations!: MedicalOrganization[];
  @Field((type) => [Ticket])
  Tickets!: Ticket[];
  @Field((type) => [HowToStep])
  HowToSteps!: HowToStep[];
  @Field((type) => [Airport])
  Airports!: Airport[];
  @Field((type) => [Trip])
  Trips!: Trip[];
  @Field((type) => [LifestyleModification])
  LifestyleModifications!: LifestyleModification[];
  @Field((type) => [OrderItem])
  OrderItems!: OrderItem[];
  @Field((type) => [BlogPosting])
  BlogPostings!: BlogPosting[];
  @Field((type) => [MerchantReturnPolicy])
  MerchantReturnPolicies!: MerchantReturnPolicy[];
  @Field((type) => [LikeAction])
  LikeActions!: LikeAction[];
  @Field((type) => [Patient])
  Patients!: Patient[];
  @Field((type) => [MotorcycleDealer])
  MotorcycleDealers!: MotorcycleDealer[];
  @Field((type) => [Atlas])
  Atlases!: Atlas[];
  @Field((type) => [UserTweets])
  UserTweets!: UserTweets[];
  @Field((type) => [AskAction])
  AskActions!: AskAction[];
  @Field((type) => [PodcastEpisode])
  PodcastEpisodes!: PodcastEpisode[];
  @Field((type) => [Bone])
  Bones!: Bone[];
  @Field((type) => [MonetaryGrant])
  MonetaryGrants!: MonetaryGrant[];
  @Field((type) => [EducationalAudience])
  EducationalAudiences!: EducationalAudience[];
  @Field((type) => [CompoundPriceSpecification])
  CompoundPriceSpecifications!: CompoundPriceSpecification[];
  @Field((type) => [BodyOfWater])
  BodyOfWaters!: BodyOfWater[];
  @Field((type) => [Season])
  Seasons!: Season[];
  @Field((type) => [DataType])
  DataTypes!: DataType[];
  @Field((type) => [JoinAction])
  JoinActions!: JoinAction[];
  @Field((type) => [GameServer])
  GameServers!: GameServer[];
  @Field((type) => [MediaSubscription])
  MediaSubscriptions!: MediaSubscription[];
  @Field((type) => [ClaimReview])
  ClaimReviews!: ClaimReview[];
  @Field((type) => [Locksmith])
  Locksmiths!: Locksmith[];
  @Field((type) => [Attorney])
  Attorneys!: Attorney[];
  @Field((type) => [MusicStore])
  MusicStores!: MusicStore[];
  @Field((type) => [ImageGallery])
  ImageGalleries!: ImageGallery[];
  @Field((type) => [DDxElement])
  DDxElements!: DDxElement[];
  @Field((type) => [SoftwareApplication])
  SoftwareApplications!: SoftwareApplication[];
  @Field((type) => [ConfirmAction])
  ConfirmActions!: ConfirmAction[];
  @Field((type) => [UserCheckins])
  UserCheckins!: UserCheckins[];
  @Field((type) => [SocialMediaPosting])
  SocialMediaPostings!: SocialMediaPosting[];
  @Field((type) => [HowToTool])
  HowToTools!: HowToTool[];
  @Field((type) => [Ligament])
  Ligaments!: Ligament[];
  @Field((type) => [MedicalRiskEstimator])
  MedicalRiskEstimators!: MedicalRiskEstimator[];
  @Field((type) => [Apartment])
  Apartments!: Apartment[];
  @Field((type) => [WebPage])
  WebPages!: WebPage[];
  @Field((type) => [Preschool])
  Preschools!: Preschool[];
  @Field((type) => [HealthPlanNetwork])
  HealthPlanNetworks!: HealthPlanNetwork[];
  @Field((type) => [MedicalSpecialty])
  MedicalSpecialties!: MedicalSpecialty[];
  @Field((type) => [Resort])
  Resorts!: Resort[];
  @Field((type) => [CourseInstance])
  CourseInstances!: CourseInstance[];
  @Field((type) => [HowTo])
  HowTos!: HowTo[];
  @Field((type) => [PublicationEvent])
  PublicationEvents!: PublicationEvent[];
  @Field((type) => [SomeProducts])
  SomeProducts!: SomeProducts[];
  @Field((type) => [Code])
  Codes!: Code[];
  @Field((type) => [DiscoverAction])
  DiscoverActions!: DiscoverAction[];
  @Field((type) => [FinancialService])
  FinancialServices!: FinancialService[];
  @Field((type) => [EmploymentAgency])
  EmploymentAgencies!: EmploymentAgency[];
  @Field((type) => [InteractionCounter])
  InteractionCounters!: InteractionCounter[];
  @Field((type) => [LiveBlogPosting])
  LiveBlogPostings!: LiveBlogPosting[];
  @Field((type) => [AskPublicNewsArticle])
  AskPublicNewsArticles!: AskPublicNewsArticle[];
  @Field((type) => [Substance])
  Substances!: Substance[];
  @Field((type) => [RadioSeason])
  RadioSeasons!: RadioSeason[];
  @Field((type) => [CreativeWorkSeries])
  CreativeWorkSeries!: CreativeWorkSeries[];
  @Field((type) => [BusinessEvent])
  BusinessEvents!: BusinessEvent[];
  @Field((type) => [AssessAction])
  AssessActions!: AssessAction[];
  @Field((type) => [EventSeries])
  EventSeries!: EventSeries[];
  @Field((type) => [AudioObjectSnapshot])
  AudioObjectSnapshots!: AudioObjectSnapshot[];
  @Field((type) => [BeautySalon])
  BeautySalons!: BeautySalon[];
  @Field((type) => [FoodService])
  FoodServices!: FoodService[];
  @Field((type) => [PodcastSeason])
  PodcastSeasons!: PodcastSeason[];
  @Field((type) => [BusinessAudience])
  BusinessAudiences!: BusinessAudience[];
  @Field((type) => [AggregateOffer])
  AggregateOffers!: AggregateOffer[];
  @Field((type) => [TechArticle])
  TechArticles!: TechArticle[];
  @Field((type) => [AdultEntertainment])
  AdultEntertainments!: AdultEntertainment[];
  @Field((type) => [NutritionInformation])
  NutritionInformations!: NutritionInformation[];
  @Field((type) => [Table])
  Tables!: Table[];
  @Field((type) => [RadioChannel])
  RadioChannels!: RadioChannel[];
  @Field((type) => [UserDownloads])
  UserDownloads!: UserDownloads[];
  @Field((type) => [LodgingBusiness])
  LodgingBusinesses!: LodgingBusiness[];
  @Field((type) => [Series])
  Series!: Series[];
  @Field((type) => [Language])
  Languages!: Language[];
  @Field((type) => [CollegeOrUniversity])
  CollegeOrUniversities!: CollegeOrUniversity[];
  @Field((type) => [TattooParlor])
  TattooParlors!: TattooParlor[];
  @Field((type) => [DataFeed])
  DataFeeds!: DataFeed[];
  @Field((type) => [TherapeuticProcedure])
  TherapeuticProcedures!: TherapeuticProcedure[];
  @Field((type) => [MusicEvent])
  MusicEvents!: MusicEvent[];
  @Field((type) => [TradeAction])
  TradeActions!: TradeAction[];
  @Field((type) => [Place])
  Places!: Place[];
  @Field((type) => [MovieClip])
  MovieClips!: MovieClip[];
  @Field((type) => [PublicationVolume])
  PublicationVolumes!: PublicationVolume[];
  @Field((type) => [State])
  States!: State[];
  @Field((type) => [ComputerStore])
  ComputerStores!: ComputerStore[];
  @Field((type) => [ReceiveAction])
  ReceiveActions!: ReceiveAction[];
  @Field((type) => [Pond])
  Ponds!: Pond[];
  @Field((type) => [AnatomicalSystem])
  AnatomicalSystems!: AnatomicalSystem[];
  @Field((type) => [EndorseAction])
  EndorseActions!: EndorseAction[];
  @Field((type) => [HousePainter])
  HousePainters!: HousePainter[];
  @Field((type) => [EnergyConsumptionDetails])
  EnergyConsumptionDetails!: EnergyConsumptionDetails[];
  @Field((type) => [MedicalTherapy])
  MedicalTherapies!: MedicalTherapy[];
  @Field((type) => [EmployerReview])
  EmployerReviews!: EmployerReview[];
  @Field((type) => [AutoBodyShop])
  AutoBodyShops!: AutoBodyShop[];
  @Field((type) => [AutomatedTeller])
  AutomatedTellers!: AutomatedTeller[];
  @Field((type) => [AgreeAction])
  AgreeActions!: AgreeAction[];
  @Field((type) => [MedicalGuidelineRecommendation])
  MedicalGuidelineRecommendations!: MedicalGuidelineRecommendation[];
  @Field((type) => [TouristAttraction])
  TouristAttractions!: TouristAttraction[];
  @Field((type) => [Newspaper])
  Newspapers!: Newspaper[];
  @Field((type) => [ProfessionalService])
  ProfessionalServices!: ProfessionalService[];
  @Field((type) => [ServiceChannel])
  ServiceChannels!: ServiceChannel[];
  @Field((type) => [UserReview])
  UserReviews!: UserReview[];
  @Field((type) => [QAPage])
  QAPages!: QAPage[];
  @Field((type) => [ImageObject])
  ImageObjects!: ImageObject[];
  @Field((type) => [Protein])
  Proteins!: Protein[];
  @Field((type) => [AdvertiserContentArticle])
  AdvertiserContentArticles!: AdvertiserContentArticle[];
  @Field((type) => [MonetaryAmount])
  MonetaryAmounts!: MonetaryAmount[];
  @Field((type) => [Collection])
  Collections!: Collection[];
  @Field((type) => [GeoCoordinates])
  GeoCoordinates!: GeoCoordinates[];
  @Field((type) => [ActionAccessSpecification])
  ActionAccessSpecifications!: ActionAccessSpecification[];
  @Field((type) => [HardwareStore])
  HardwareStores!: HardwareStore[];
  @Field((type) => [Gene])
  Genes!: Gene[];
  @Field((type) => [TennisComplex])
  TennisComplexes!: TennisComplex[];
  @Field((type) => [TVEpisode])
  TVEpisodes!: TVEpisode[];
  @Field((type) => [CheckAction])
  CheckActions!: CheckAction[];
  @Field((type) => [PlaceOfWorship])
  PlaceOfWorships!: PlaceOfWorship[];
  @Field((type) => [Legislation])
  Legislations!: Legislation[];
  @Field((type) => [SpecialAnnouncement])
  SpecialAnnouncements!: SpecialAnnouncement[];
  @Field((type) => [LibrarySystem])
  LibrarySystems!: LibrarySystem[];
  @Field((type) => [CollectionPage])
  CollectionPages!: CollectionPage[];
  @Field((type) => [MediaReview])
  MediaReviews!: MediaReview[];
  @Field((type) => [ProfilePage])
  ProfilePages!: ProfilePage[];
  @Field((type) => [HomeAndConstructionBusiness])
  HomeAndConstructionBusinesses!: HomeAndConstructionBusiness[];
  @Field((type) => [PhysicalTherapy])
  PhysicalTherapies!: PhysicalTherapy[];
  @Field((type) => [SkiResort])
  SkiResorts!: SkiResort[];
  @Field((type) => [FoodEstablishmentReservation])
  FoodEstablishmentReservations!: FoodEstablishmentReservation[];
  @Field((type) => [PublicationIssue])
  PublicationIssues!: PublicationIssue[];
  @Field((type) => [CDCPMDRecord])
  CDCPMDRecords!: CDCPMDRecord[];
  @Field((type) => [ViewAction])
  ViewActions!: ViewAction[];
  @Field((type) => [WriteAction])
  WriteActions!: WriteAction[];
  @Field((type) => [Dentist])
  Dentists!: Dentist[];
  @Field((type) => [Casino])
  Casinos!: Casino[];
  @Field((type) => [MedicalEntity])
  MedicalEntities!: MedicalEntity[];
  @Field((type) => [VideoGameClip])
  VideoGameClips!: VideoGameClip[];
  @Field((type) => [TireShop])
  TireShops!: TireShop[];
  @Field((type) => [PrependAction])
  PrependActions!: PrependAction[];
  @Field((type) => [WholesaleStore])
  WholesaleStores!: WholesaleStore[];
  @Field((type) => [Project])
  Projects!: Project[];
  @Field((type) => [ExchangeRateSpecification])
  ExchangeRateSpecifications!: ExchangeRateSpecification[];
  @Field((type) => [MusicPlaylist])
  MusicPlaylists!: MusicPlaylist[];
  @Field((type) => [RealEstateAgent])
  RealEstateAgents!: RealEstateAgent[];
  @Field((type) => [WorkersUnion])
  WorkersUnions!: WorkersUnion[];
  @Field((type) => [Role])
  Roles!: Role[];
  @Field((type) => [CreativeWork])
  CreativeWorks!: CreativeWork[];
  @Field((type) => [DrugClass])
  DrugClasses!: DrugClass[];
  @Field((type) => [GeoCircle])
  GeoCircles!: GeoCircle[];
  @Field((type) => [DrawAction])
  DrawActions!: DrawAction[];
  @Field((type) => [ActivateAction])
  ActivateActions!: ActivateAction[];
  @Field((type) => [Playground])
  Playgrounds!: Playground[];
  @Field((type) => [OfferShippingDetails])
  OfferShippingDetails!: OfferShippingDetails[];
  @Field((type) => [MolecularEntity])
  MolecularEntities!: MolecularEntity[];
  @Field((type) => [HyperToc])
  HyperTocs!: HyperToc[];
  @Field((type) => [PostalAddress])
  PostalAddresses!: PostalAddress[];
  @Field((type) => [TelevisionChannel])
  TelevisionChannels!: TelevisionChannel[];
  @Field((type) => [ShippingRateSettings])
  ShippingRateSettings!: ShippingRateSettings[];
  @Field((type) => [ElectronicsStore])
  ElectronicsStores!: ElectronicsStore[];
  @Field((type) => [PresentationDigitalDocument])
  PresentationDigitalDocuments!: PresentationDigitalDocument[];
  @Field((type) => [CityHall])
  CityHalls!: CityHall[];
  @Field((type) => [FundingAgency])
  FundingAgencies!: FundingAgency[];
  @Field((type) => [Thesis])
  Theses!: Thesis[];
  @Field((type) => [LeaveAction])
  LeaveActions!: LeaveAction[];
  @Field((type) => [MedicalBusiness])
  MedicalBusinesses!: MedicalBusiness[];
  @Field((type) => [SearchAction])
  SearchActions!: SearchAction[];
  @Field((type) => [MonetaryAmountDistribution])
  MonetaryAmountDistributions!: MonetaryAmountDistribution[];
  @Field((type) => [Crematorium])
  Crematoriums!: Crematorium[];
  @Field((type) => [DeliveryChargeSpecification])
  DeliveryChargeSpecifications!: DeliveryChargeSpecification[];
  @Field((type) => [MedicalWebPage])
  MedicalWebPages!: MedicalWebPage[];
  @Field((type) => [InviteAction])
  InviteActions!: InviteAction[];
  @Field((type) => [DiagnosticLab])
  DiagnosticLabs!: DiagnosticLab[];
  @Field((type) => [MedicalTest])
  MedicalTests!: MedicalTest[];
  @Field((type) => [Airline])
  Airlines!: Airline[];
  @Field((type) => [EatAction])
  EatActions!: EatAction[];
  @Field((type) => [OnDemandEvent])
  OnDemandEvents!: OnDemandEvent[];
  @Field((type) => [VideoGame])
  VideoGames!: VideoGame[];
  @Field((type) => [LocationFeatureSpecification])
  LocationFeatureSpecifications!: LocationFeatureSpecification[];
  @Field((type) => [ChildrensEvent])
  ChildrensEvents!: ChildrensEvent[];
  @Field((type) => [ProgramMembership])
  ProgramMemberships!: ProgramMembership[];
  @Field((type) => [AnimalShelter])
  AnimalShelters!: AnimalShelter[];
  @Field((type) => [AmusementPark])
  AmusementParks!: AmusementPark[];
  @Field((type) => [MedicalConditionStage])
  MedicalConditionStages!: MedicalConditionStage[];
  @Field((type) => [PayAction])
  PayActions!: PayAction[];
  @Field((type) => [HealthPlanFormulary])
  HealthPlanFormularies!: HealthPlanFormulary[];
  @Field((type) => [DataDownload])
  DataDownloads!: DataDownload[];
  @Field((type) => [ReportageNewsArticle])
  ReportageNewsArticles!: ReportageNewsArticle[];
  @Field((type) => [WebPageElement])
  WebPageElements!: WebPageElement[];
  @Field((type) => [BrainStructure])
  BrainStructures!: BrainStructure[];
  @Field((type) => [ProductModel])
  ProductModels!: ProductModel[];
  @Field((type) => [OnlineBusiness])
  OnlineBusinesses!: OnlineBusiness[];
  @Field((type) => [MedicalObservationalStudy])
  MedicalObservationalStudies!: MedicalObservationalStudy[];
  @Field((type) => [Class])
  Classes!: Class[];
  @Field((type) => [RadioSeries])
  RadioSeries!: RadioSeries[];
  @Field((type) => [VisualArtsEvent])
  VisualArtsEvents!: VisualArtsEvent[];
  @Field((type) => [Canal])
  Canals!: Canal[];
  @Field((type) => [FlightReservation])
  FlightReservations!: FlightReservation[];
  @Field((type) => [SatiricalArticle])
  SatiricalArticles!: SatiricalArticle[];
  @Field((type) => [WorkBasedProgram])
  WorkBasedPrograms!: WorkBasedProgram[];
  @Field((type) => [Church])
  Churches!: Church[];
  @Field((type) => [GovernmentBuilding])
  GovernmentBuildings!: GovernmentBuilding[];
  @Field((type) => [ClothingStore])
  ClothingStores!: ClothingStore[];
  @Field((type) => [CatholicChurch])
  CatholicChurches!: CatholicChurch[];
  @Field((type) => [BoatTrip])
  BoatTrips!: BoatTrip[];
  @Field((type) => [Researcher])
  Researchers!: Researcher[];
  @Field((type) => [SportingGoodsStore])
  SportingGoodsStores!: SportingGoodsStore[];
  @Field((type) => [TrainTrip])
  TrainTrips!: TrainTrip[];
  @Field((type) => [SuperficialAnatomy])
  SuperficialAnatomies!: SuperficialAnatomy[];
  @Field((type) => [Flight])
  Flights!: Flight[];
  @Field((type) => [DatedMoneySpecification])
  DatedMoneySpecifications!: DatedMoneySpecification[];
  @Field((type) => [FilmAction])
  FilmActions!: FilmAction[];
  @Field((type) => [Consortium])
  Consortiums!: Consortium[];
  @Field((type) => [HowToDirection])
  HowToDirections!: HowToDirection[];
  @Field((type) => [ComicStory])
  ComicStories!: ComicStory[];
  @Field((type) => [FoodEvent])
  FoodEvents!: FoodEvent[];
  @Field((type) => [ReserveAction])
  ReserveActions!: ReserveAction[];
  @Field((type) => [ParkingFacility])
  ParkingFacilities!: ParkingFacility[];
  @Field((type) => [PreventionIndication])
  PreventionIndications!: PreventionIndication[];
  @Field((type) => [UserPlays])
  UserPlays!: UserPlays[];
  @Field((type) => [InvestmentFund])
  InvestmentFunds!: InvestmentFund[];
  @Field((type) => [EntryPoint])
  EntryPoints!: EntryPoint[];
  @Field((type) => [TransferAction])
  TransferActions!: TransferAction[];
  @Field((type) => [Barcode])
  Barcodes!: Barcode[];
  @Field((type) => [PodcastSeries])
  PodcastSeries!: PodcastSeries[];
  @Field((type) => [LiteraryEvent])
  LiteraryEvents!: LiteraryEvent[];
  @Field((type) => [Library])
  Libraries!: Library[];
  @Field((type) => [MedicalSign])
  MedicalSigns!: MedicalSign[];
  @Field((type) => [WantAction])
  WantActions!: WantAction[];
  @Field((type) => [DislikeAction])
  DislikeActions!: DislikeAction[];
  @Field((type) => [Observation])
  Observations!: Observation[];
  @Field((type) => [AlignmentObject])
  AlignmentObjects!: AlignmentObject[];
  @Field((type) => [MusicComposition])
  MusicCompositions!: MusicComposition[];
  @Field((type) => [Optician])
  Opticians!: Optician[];
  @Field((type) => [Brewery])
  Breweries!: Brewery[];
  @Field((type) => [TheaterGroup])
  TheaterGroups!: TheaterGroup[];
  @Field((type) => [MedicalTestPanel])
  MedicalTestPanels!: MedicalTestPanel[];
  @Field((type) => [LinkRole])
  LinkRoles!: LinkRole[];
  @Field((type) => [CampingPitch])
  CampingPitches!: CampingPitch[];
  @Field((type) => [Question])
  Questions!: Question[];
  @Field((type) => [SiteNavigationElement])
  SiteNavigationElements!: SiteNavigationElement[];
  @Field((type) => [RiverBodyOfWater])
  RiverBodyOfWaters!: RiverBodyOfWater[];
  @Field((type) => [DownloadAction])
  DownloadActions!: DownloadAction[];
  @Field((type) => [Bakery])
  Bakeries!: Bakery[];
  @Field((type) => [MedicalCondition])
  MedicalConditions!: MedicalCondition[];
  @Field((type) => [SportsOrganization])
  SportsOrganizations!: SportsOrganization[];
  @Field((type) => [Florist])
  Florists!: Florist[];
  @Field((type) => [UnRegisterAction])
  UnRegisterActions!: UnRegisterAction[];
  @Field((type) => [Beach])
  Beaches!: Beach[];
  @Field((type) => [Rating])
  Ratings!: Rating[];
  @Field((type) => [ChemicalSubstance])
  ChemicalSubstances!: ChemicalSubstance[];
  @Field((type) => [SurgicalProcedure])
  SurgicalProcedures!: SurgicalProcedure[];
  @Field((type) => [Taxi])
  Taxis!: Taxi[];
  @Field((type) => [BusTrip])
  BusTrips!: BusTrip[];
  @Field((type) => [MenuItem])
  MenuItems!: MenuItem[];
  @Field((type) => [TypeAndQuantityNode])
  TypeAndQuantityNodes!: TypeAndQuantityNode[];
  @Field((type) => [Embassy])
  Embassies!: Embassy[];
  @Field((type) => [HowToTip])
  HowToTips!: HowToTip[];
  @Field((type) => [ControlAction])
  ControlActions!: ControlAction[];
  @Field((type) => [Quiz])
  Quizzes!: Quiz[];
  @Field((type) => [ComicCoverArt])
  ComicCoverArts!: ComicCoverArt[];
  @Field((type) => [Quotation])
  Quotations!: Quotation[];
  @Field((type) => [MerchantReturnPolicySeasonalOverride])
  MerchantReturnPolicySeasonalOverrides!: MerchantReturnPolicySeasonalOverride[];
  @Field((type) => [ReplaceAction])
  ReplaceActions!: ReplaceAction[];
  @Field((type) => [GeneralContractor])
  GeneralContractors!: GeneralContractor[];
  @Field((type) => [DeliveryEvent])
  DeliveryEvents!: DeliveryEvent[];
  @Field((type) => [DigitalDocument])
  DigitalDocuments!: DigitalDocument[];
  @Field((type) => [HomeGoodsStore])
  HomeGoodsStores!: HomeGoodsStore[];
  @Field((type) => [Menu])
  Menus!: Menu[];
  @Field((type) => [DryCleaningOrLaundry])
  DryCleaningOrLaundries!: DryCleaningOrLaundry[];
  @Field((type) => [WPAdBlock])
  WPAdBlocks!: WPAdBlock[];
  @Field((type) => [BookmarkAction])
  BookmarkActions!: BookmarkAction[];
  @Field((type) => [Grant])
  Grants!: Grant[];
  @Field((type) => [SpreadsheetDigitalDocument])
  SpreadsheetDigitalDocuments!: SpreadsheetDigitalDocument[];
  @Field((type) => [JewelryStore])
  JewelryStores!: JewelryStore[];
  @Field((type) => [ResearchProject])
  ResearchProjects!: ResearchProject[];
  @Field((type) => [SheetMusic])
  SheetMusics!: SheetMusic[];
  @Field((type) => [Offer])
  Offers!: Offer[];
  @Field((type) => [MusicRecording])
  MusicRecordings!: MusicRecording[];
  @Field((type) => [MedicalCode])
  MedicalCodes!: MedicalCode[];
  @Field((type) => [Joint])
  Joints!: Joint[];
  @Field((type) => [MoneyTransfer])
  MoneyTransfers!: MoneyTransfer[];
  @Field((type) => [MenuSection])
  MenuSections!: MenuSection[];
  @Field((type) => [MedicalSignOrSymptom])
  MedicalSignOrSymptoms!: MedicalSignOrSymptom[];
  @Field((type) => [BankOrCreditUnion])
  BankOrCreditUnions!: BankOrCreditUnion[];
  @Field((type) => [TreatmentIndication])
  TreatmentIndications!: TreatmentIndication[];
  @Field((type) => [ItemList])
  ItemLists!: ItemList[];
  @Field((type) => [TouristInformationCenter])
  TouristInformationCenters!: TouristInformationCenter[];
  @Field((type) => [OfferCatalog])
  OfferCatalogs!: OfferCatalog[];
  @Field((type) => [OccupationalTherapy])
  OccupationalTherapies!: OccupationalTherapy[];
  @Field((type) => [PaymentChargeSpecification])
  PaymentChargeSpecifications!: PaymentChargeSpecification[];
  @Field((type) => [BookSeries])
  BookSeries!: BookSeries[];
  @Field((type) => [NewsMediaOrganization])
  NewsMediaOrganizations!: NewsMediaOrganization[];
  @Field((type) => [ScholarlyArticle])
  ScholarlyArticles!: ScholarlyArticle[];
  @Field((type) => [WebApplication])
  WebApplications!: WebApplication[];
  @Field((type) => [ExhibitionEvent])
  ExhibitionEvents!: ExhibitionEvent[];
  @Field((type) => [Audience])
  Audiences!: Audience[];
  @Field((type) => [Artery])
  Arteries!: Artery[];
  @Field((type) => [PerformingGroup])
  PerformingGroups!: PerformingGroup[];
  @Field((type) => [SingleFamilyResidence])
  SingleFamilyResidences!: SingleFamilyResidence[];
  @Field((type) => [MedicalTrial])
  MedicalTrials!: MedicalTrial[];
  @Field((type) => [EducationalOrganization])
  EducationalOrganizations!: EducationalOrganization[];
  @Field((type) => [PsychologicalTreatment])
  PsychologicalTreatments!: PsychologicalTreatment[];
  @Field((type) => [VirtualLocation])
  VirtualLocations!: VirtualLocation[];
  @Field((type) => [Occupation])
  Occupations!: Occupation[];
  @Field((type) => [WPFooter])
  WPFooters!: WPFooter[];
  @Field((type) => [LoanOrCredit])
  LoanOrCredits!: LoanOrCredit[];
  @Field((type) => [MedicalCause])
  MedicalCauses!: MedicalCause[];
  @Field((type) => [FollowAction])
  FollowActions!: FollowAction[];
  @Field((type) => [CookAction])
  CookActions!: CookAction[];
  @Field((type) => [UseAction])
  UseActions!: UseAction[];
  @Field((type) => [EventVenue])
  EventVenues!: EventVenue[];
  @Field((type) => [BankAccount])
  BankAccounts!: BankAccount[];
  @Field((type) => [Hackathon])
  Hackathons!: Hackathon[];
  @Field((type) => [CreateAction])
  CreateActions!: CreateAction[];
  @Field((type) => [FurnitureStore])
  FurnitureStores!: FurnitureStore[];
  @Field((type) => [BorrowAction])
  BorrowActions!: BorrowAction[];
  @Field((type) => [PropertyValue])
  PropertyValues!: PropertyValue[];
  @Field((type) => [DiagnosticProcedure])
  DiagnosticProcedures!: DiagnosticProcedure[];
  @Field((type) => [DrinkAction])
  DrinkActions!: DrinkAction[];
  @Field((type) => [Pharmacy])
  Pharmacies!: Pharmacy[];
  @Field((type) => [Room])
  Rooms!: Room[];
  @Field((type) => [TravelAction])
  TravelActions!: TravelAction[];
  @Field((type) => [Recommendation])
  Recommendations!: Recommendation[];
  @Field((type) => [SeaBodyOfWater])
  SeaBodyOfWaters!: SeaBodyOfWater[];
  @Field((type) => [OccupationalExperienceRequirements])
  OccupationalExperienceRequirements!: OccupationalExperienceRequirements[];
  @Field((type) => [TVClip])
  TVClips!: TVClip[];
  @Field((type) => [MedicalIntangible])
  MedicalIntangibles!: MedicalIntangible[];
  @Field((type) => [TakeAction])
  TakeActions!: TakeAction[];
  @Field((type) => [HVACBusiness])
  HVACBusinesses!: HVACBusiness[];
  @Field((type) => [ComedyClub])
  ComedyClubs!: ComedyClub[];
  @Field((type) => [MathSolver])
  MathSolvers!: MathSolver[];
  @Field((type) => [LendAction])
  LendActions!: LendAction[];
  @Field((type) => [VoteAction])
  VoteActions!: VoteAction[];
  @Field((type) => [MedicalIndication])
  MedicalIndications!: MedicalIndication[];
  @Field((type) => [MedicalStudy])
  MedicalStudies!: MedicalStudy[];
  @Field((type) => [Landform])
  Landforms!: Landform[];
  @Field((type) => [DefenceEstablishment])
  DefenceEstablishments!: DefenceEstablishment[];
  @Field((type) => [Poster])
  Posters!: Poster[];
  @Field((type) => [Reservoir])
  Reservoirs!: Reservoir[];
  @Field((type) => [GiveAction])
  GiveActions!: GiveAction[];
  @Field((type) => [DigitalDocumentPermission])
  DigitalDocumentPermissions!: DigitalDocumentPermission[];
  @Field((type) => [ReservationPackage])
  ReservationPackages!: ReservationPackage[];
  @Field((type) => [AnatomicalStructure])
  AnatomicalStructures!: AnatomicalStructure[];
  @Field((type) => [DataCatalog])
  DataCatalogs!: DataCatalog[];
  @Field((type) => [SeekToAction])
  SeekToActions!: SeekToAction[];
  @Field((type) => [Volcano])
  Volcanoes!: Volcano[];
  @Field((type) => [Course])
  Courses!: Course[];
  @Field((type) => [HealthPlanCostSharingSpecification])
  HealthPlanCostSharingSpecifications!: HealthPlanCostSharingSpecification[];
  @Field((type) => [BusStation])
  BusStations!: BusStation[];
  @Field((type) => [Periodical])
  Periodicals!: Periodical[];
  @Field((type) => [RadioClip])
  RadioClips!: RadioClip[];
  @Field((type) => [MaximumDoseSchedule])
  MaximumDoseSchedules!: MaximumDoseSchedule[];
  @Field((type) => [ItemPage])
  ItemPages!: ItemPage[];
  @Field((type) => [Clip])
  Clips!: Clip[];
  @Field((type) => [UserComments])
  UserComments!: UserComments[];
  @Field((type) => [PublicToilet])
  PublicToilets!: PublicToilet[];
  @Field((type) => [AutoDealer])
  AutoDealers!: AutoDealer[];
  @Field((type) => [RegisterAction])
  RegisterActions!: RegisterAction[];
  @Field((type) => [ScheduleAction])
  ScheduleActions!: ScheduleAction[];
  @Field((type) => [TextDigitalDocument])
  TextDigitalDocuments!: TextDigitalDocument[];
  @Field((type) => [HealthInsurancePlan])
  HealthInsurancePlans!: HealthInsurancePlan[];
  @Field((type) => [LiquorStore])
  LiquorStores!: LiquorStore[];
  @Field((type) => [AddAction])
  AddActions!: AddAction[];
  @Field((type) => [NightClub])
  NightClubs!: NightClub[];
  @Field((type) => [ApplyAction])
  ApplyActions!: ApplyAction[];
  @Field((type) => [HyperTocEntry])
  HyperTocEntries!: HyperTocEntry[];
  @Field((type) => [Vein])
  Veins!: Vein[];
  @Field((type) => [GovernmentService])
  GovernmentServices!: GovernmentService[];
  @Field((type) => [UserInteraction])
  UserInteractions!: UserInteraction[];
  @Field((type) => [UserBlocks])
  UserBlocks!: UserBlocks[];
  @Field((type) => [VideoGameSeries])
  VideoGameSeries!: VideoGameSeries[];
  @Field((type) => [Quantity])
  Quantities!: Quantity[];
  @Field((type) => [Distance])
  Distances!: Distance[];
  @Field((type) => [StatisticalPopulation])
  StatisticalPopulations!: StatisticalPopulation[];
  @Field((type) => [Episode])
  Episodes!: Episode[];
  @Field((type) => [InstallAction])
  InstallActions!: InstallAction[];
  @Field((type) => [VitalSign])
  VitalSigns!: VitalSign[];
  @Field((type) => [CommentAction])
  CommentActions!: CommentAction[];
  @Field((type) => [WatchAction])
  WatchActions!: WatchAction[];
  @Field((type) => [NoteDigitalDocument])
  NoteDigitalDocuments!: NoteDigitalDocument[];
  @Field((type) => [PaymentService])
  PaymentServices!: PaymentService[];
  @Field((type) => [Sculpture])
  Sculptures!: Sculpture[];
  @Field((type) => [Action])
  Actions!: Action[];
  @Field((type) => [FloorPlan])
  FloorPlans!: FloorPlan[];
}
// #endregion
