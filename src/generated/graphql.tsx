import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AcademicInstitution = {
  __typename?: "AcademicInstitution";
  address_id?: Maybe<Scalars["Int"]>;
  country: Scalars["String"];
  country_code: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["Int"];
  institution_type: InstitutionTypeEnum;
  is_custom: Scalars["Boolean"];
  is_enabled: Scalars["Boolean"];
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
  website?: Maybe<Scalars["String"]>;
};

export type AcademicInstitutionCreateManyAddressInput = {
  country: Scalars["String"];
  country_code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  institution_type: InstitutionTypeEnum;
  is_custom: Scalars["Boolean"];
  is_enabled: Scalars["Boolean"];
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type AcademicInstitutionCreateManyAddressInputEnvelope = {
  data: Array<AcademicInstitutionCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AcademicInstitutionCreateNestedManyWithoutAddressInput = {
  connect?: InputMaybe<Array<AcademicInstitutionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AcademicInstitutionCreateOrConnectWithoutAddressInput>
  >;
  create?: InputMaybe<Array<AcademicInstitutionCreateWithoutAddressInput>>;
  createMany?: InputMaybe<AcademicInstitutionCreateManyAddressInputEnvelope>;
};

export type AcademicInstitutionCreateNestedOneWithoutEducationsInput = {
  connect?: InputMaybe<AcademicInstitutionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AcademicInstitutionCreateOrConnectWithoutEducationsInput>;
  create?: InputMaybe<AcademicInstitutionCreateWithoutEducationsInput>;
};

export type AcademicInstitutionCreateOrConnectWithoutAddressInput = {
  create: AcademicInstitutionCreateWithoutAddressInput;
  where: AcademicInstitutionWhereUniqueInput;
};

export type AcademicInstitutionCreateOrConnectWithoutEducationsInput = {
  create: AcademicInstitutionCreateWithoutEducationsInput;
  where: AcademicInstitutionWhereUniqueInput;
};

export type AcademicInstitutionCreateWithoutAddressInput = {
  country: Scalars["String"];
  country_code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  educations?: InputMaybe<EducationCreateNestedManyWithoutAcademic_InstitutionInput>;
  institution_type: InstitutionTypeEnum;
  is_custom: Scalars["Boolean"];
  is_enabled: Scalars["Boolean"];
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type AcademicInstitutionCreateWithoutEducationsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutAcademic_InstitutionsInput>;
  country: Scalars["String"];
  country_code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  institution_type: InstitutionTypeEnum;
  is_custom: Scalars["Boolean"];
  is_enabled: Scalars["Boolean"];
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type AcademicInstitutionListRelationFilter = {
  every?: InputMaybe<AcademicInstitutionWhereInput>;
  none?: InputMaybe<AcademicInstitutionWhereInput>;
  some?: InputMaybe<AcademicInstitutionWhereInput>;
};

export type AcademicInstitutionRelationFilter = {
  is?: InputMaybe<AcademicInstitutionWhereInput>;
  isNot?: InputMaybe<AcademicInstitutionWhereInput>;
};

export type AcademicInstitutionScalarWhereInput = {
  AND?: InputMaybe<Array<AcademicInstitutionScalarWhereInput>>;
  NOT?: InputMaybe<Array<AcademicInstitutionScalarWhereInput>>;
  OR?: InputMaybe<Array<AcademicInstitutionScalarWhereInput>>;
  address_id?: InputMaybe<IntNullableFilter>;
  country?: InputMaybe<StringFilter>;
  country_code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  institution_type?: InputMaybe<EnumInstitutionTypeEnumFilter>;
  is_custom?: InputMaybe<BoolFilter>;
  is_enabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type AcademicInstitutionUpdateManyMutationInput = {
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  institution_type?: InputMaybe<EnumInstitutionTypeEnumFieldUpdateOperationsInput>;
  is_custom?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AcademicInstitutionUpdateManyWithWhereWithoutAddressInput = {
  data: AcademicInstitutionUpdateManyMutationInput;
  where: AcademicInstitutionScalarWhereInput;
};

export type AcademicInstitutionUpdateManyWithoutAddressInput = {
  connect?: InputMaybe<Array<AcademicInstitutionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AcademicInstitutionCreateOrConnectWithoutAddressInput>
  >;
  create?: InputMaybe<Array<AcademicInstitutionCreateWithoutAddressInput>>;
  createMany?: InputMaybe<AcademicInstitutionCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<AcademicInstitutionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AcademicInstitutionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AcademicInstitutionWhereUniqueInput>>;
  set?: InputMaybe<Array<AcademicInstitutionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<AcademicInstitutionUpdateWithWhereUniqueWithoutAddressInput>
  >;
  updateMany?: InputMaybe<
    Array<AcademicInstitutionUpdateManyWithWhereWithoutAddressInput>
  >;
  upsert?: InputMaybe<
    Array<AcademicInstitutionUpsertWithWhereUniqueWithoutAddressInput>
  >;
};

export type AcademicInstitutionUpdateOneRequiredWithoutEducationsInput = {
  connect?: InputMaybe<AcademicInstitutionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AcademicInstitutionCreateOrConnectWithoutEducationsInput>;
  create?: InputMaybe<AcademicInstitutionCreateWithoutEducationsInput>;
  update?: InputMaybe<AcademicInstitutionUpdateWithoutEducationsInput>;
  upsert?: InputMaybe<AcademicInstitutionUpsertWithoutEducationsInput>;
};

export type AcademicInstitutionUpdateWithWhereUniqueWithoutAddressInput = {
  data: AcademicInstitutionUpdateWithoutAddressInput;
  where: AcademicInstitutionWhereUniqueInput;
};

export type AcademicInstitutionUpdateWithoutAddressInput = {
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  educations?: InputMaybe<EducationUpdateManyWithoutAcademic_InstitutionInput>;
  institution_type?: InputMaybe<EnumInstitutionTypeEnumFieldUpdateOperationsInput>;
  is_custom?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AcademicInstitutionUpdateWithoutEducationsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutAcademic_InstitutionsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  institution_type?: InputMaybe<EnumInstitutionTypeEnumFieldUpdateOperationsInput>;
  is_custom?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AcademicInstitutionUpsertWithWhereUniqueWithoutAddressInput = {
  create: AcademicInstitutionCreateWithoutAddressInput;
  update: AcademicInstitutionUpdateWithoutAddressInput;
  where: AcademicInstitutionWhereUniqueInput;
};

export type AcademicInstitutionUpsertWithoutEducationsInput = {
  create: AcademicInstitutionCreateWithoutEducationsInput;
  update: AcademicInstitutionUpdateWithoutEducationsInput;
};

export type AcademicInstitutionWhereInput = {
  AND?: InputMaybe<Array<AcademicInstitutionWhereInput>>;
  NOT?: InputMaybe<Array<AcademicInstitutionWhereInput>>;
  OR?: InputMaybe<Array<AcademicInstitutionWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntNullableFilter>;
  country?: InputMaybe<StringFilter>;
  country_code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  educations?: InputMaybe<EducationListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  institution_type?: InputMaybe<EnumInstitutionTypeEnumFilter>;
  is_custom?: InputMaybe<BoolFilter>;
  is_enabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type AcademicInstitutionWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type AccessToken = {
  __typename?: "AccessToken";
  access_token: Scalars["String"];
};

/** Add a new sponsor company */
export type AddSponsorCompanyInput = {
  company_id: Scalars["Float"];
  logo?: InputMaybe<Scalars["String"]>;
  perks: Array<PerkClaimInput>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  tier: Scalars["String"];
};

export type AddressCreateNestedOneWithoutAcademic_InstitutionsInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutAcademic_InstitutionsInput>;
  create?: InputMaybe<AddressCreateWithoutAcademic_InstitutionsInput>;
};

export type AddressCreateNestedOneWithoutUsers_As_AddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_AddressInput>;
  create?: InputMaybe<AddressCreateWithoutUsers_As_AddressInput>;
};

export type AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput =
  {
    connect?: InputMaybe<AddressWhereUniqueInput>;
    connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_Emergency_Contact_AddressInput>;
    create?: InputMaybe<AddressCreateWithoutUsers_As_Emergency_Contact_AddressInput>;
  };

export type AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_Shipping_AddressInput>;
  create?: InputMaybe<AddressCreateWithoutUsers_As_Shipping_AddressInput>;
};

export type AddressCreateOrConnectWithoutAcademic_InstitutionsInput = {
  create: AddressCreateWithoutAcademic_InstitutionsInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateOrConnectWithoutUsers_As_AddressInput = {
  create: AddressCreateWithoutUsers_As_AddressInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateOrConnectWithoutUsers_As_Emergency_Contact_AddressInput =
  {
    create: AddressCreateWithoutUsers_As_Emergency_Contact_AddressInput;
    where: AddressWhereUniqueInput;
  };

export type AddressCreateOrConnectWithoutUsers_As_Shipping_AddressInput = {
  create: AddressCreateWithoutUsers_As_Shipping_AddressInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateWithoutAcademic_InstitutionsInput = {
  city: Scalars["String"];
  country: Scalars["String"];
  country_code?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  line_1: Scalars["String"];
  line_2?: InputMaybe<Scalars["String"]>;
  line_3?: InputMaybe<Scalars["String"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  state_province: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users_as_address?: InputMaybe<UserCreateNestedManyWithoutAddressInput>;
  users_as_emergency_contact_address?: InputMaybe<UserCreateNestedManyWithoutEmergency_Contact_AddressInput>;
  users_as_shipping_address?: InputMaybe<UserCreateNestedManyWithoutShipping_AddressInput>;
  zip_postal_code: Scalars["String"];
};

export type AddressCreateWithoutUsers_As_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionCreateNestedManyWithoutAddressInput>;
  city: Scalars["String"];
  country: Scalars["String"];
  country_code?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  line_1: Scalars["String"];
  line_2?: InputMaybe<Scalars["String"]>;
  line_3?: InputMaybe<Scalars["String"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  state_province: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users_as_emergency_contact_address?: InputMaybe<UserCreateNestedManyWithoutEmergency_Contact_AddressInput>;
  users_as_shipping_address?: InputMaybe<UserCreateNestedManyWithoutShipping_AddressInput>;
  zip_postal_code: Scalars["String"];
};

export type AddressCreateWithoutUsers_As_Emergency_Contact_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionCreateNestedManyWithoutAddressInput>;
  city: Scalars["String"];
  country: Scalars["String"];
  country_code?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  line_1: Scalars["String"];
  line_2?: InputMaybe<Scalars["String"]>;
  line_3?: InputMaybe<Scalars["String"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  state_province: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users_as_address?: InputMaybe<UserCreateNestedManyWithoutAddressInput>;
  users_as_shipping_address?: InputMaybe<UserCreateNestedManyWithoutShipping_AddressInput>;
  zip_postal_code: Scalars["String"];
};

export type AddressCreateWithoutUsers_As_Shipping_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionCreateNestedManyWithoutAddressInput>;
  city: Scalars["String"];
  country: Scalars["String"];
  country_code?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  line_1: Scalars["String"];
  line_2?: InputMaybe<Scalars["String"]>;
  line_3?: InputMaybe<Scalars["String"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  state_province: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users_as_address?: InputMaybe<UserCreateNestedManyWithoutAddressInput>;
  users_as_emergency_contact_address?: InputMaybe<UserCreateNestedManyWithoutEmergency_Contact_AddressInput>;
  zip_postal_code: Scalars["String"];
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateOneWithoutAcademic_InstitutionsInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutAcademic_InstitutionsInput>;
  create?: InputMaybe<AddressCreateWithoutAcademic_InstitutionsInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<AddressUpdateWithoutAcademic_InstitutionsInput>;
  upsert?: InputMaybe<AddressUpsertWithoutAcademic_InstitutionsInput>;
};

export type AddressUpdateOneWithoutUsers_As_AddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_AddressInput>;
  create?: InputMaybe<AddressCreateWithoutUsers_As_AddressInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<AddressUpdateWithoutUsers_As_AddressInput>;
  upsert?: InputMaybe<AddressUpsertWithoutUsers_As_AddressInput>;
};

export type AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_Emergency_Contact_AddressInput>;
  create?: InputMaybe<AddressCreateWithoutUsers_As_Emergency_Contact_AddressInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<AddressUpdateWithoutUsers_As_Emergency_Contact_AddressInput>;
  upsert?: InputMaybe<AddressUpsertWithoutUsers_As_Emergency_Contact_AddressInput>;
};

export type AddressUpdateOneWithoutUsers_As_Shipping_AddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutUsers_As_Shipping_AddressInput>;
  create?: InputMaybe<AddressCreateWithoutUsers_As_Shipping_AddressInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<AddressUpdateWithoutUsers_As_Shipping_AddressInput>;
  upsert?: InputMaybe<AddressUpsertWithoutUsers_As_Shipping_AddressInput>;
};

export type AddressUpdateWithoutAcademic_InstitutionsInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  line_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  line_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  line_3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state_province?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users_as_address?: InputMaybe<UserUpdateManyWithoutAddressInput>;
  users_as_emergency_contact_address?: InputMaybe<UserUpdateManyWithoutEmergency_Contact_AddressInput>;
  users_as_shipping_address?: InputMaybe<UserUpdateManyWithoutShipping_AddressInput>;
  zip_postal_code?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateWithoutUsers_As_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionUpdateManyWithoutAddressInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  line_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  line_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  line_3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state_province?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users_as_emergency_contact_address?: InputMaybe<UserUpdateManyWithoutEmergency_Contact_AddressInput>;
  users_as_shipping_address?: InputMaybe<UserUpdateManyWithoutShipping_AddressInput>;
  zip_postal_code?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateWithoutUsers_As_Emergency_Contact_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionUpdateManyWithoutAddressInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  line_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  line_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  line_3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state_province?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users_as_address?: InputMaybe<UserUpdateManyWithoutAddressInput>;
  users_as_shipping_address?: InputMaybe<UserUpdateManyWithoutShipping_AddressInput>;
  zip_postal_code?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpdateWithoutUsers_As_Shipping_AddressInput = {
  academic_institutions?: InputMaybe<AcademicInstitutionUpdateManyWithoutAddressInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  country_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  line_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  line_2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  line_3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  state_province?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users_as_address?: InputMaybe<UserUpdateManyWithoutAddressInput>;
  users_as_emergency_contact_address?: InputMaybe<UserUpdateManyWithoutEmergency_Contact_AddressInput>;
  zip_postal_code?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AddressUpsertWithoutAcademic_InstitutionsInput = {
  create: AddressCreateWithoutAcademic_InstitutionsInput;
  update: AddressUpdateWithoutAcademic_InstitutionsInput;
};

export type AddressUpsertWithoutUsers_As_AddressInput = {
  create: AddressCreateWithoutUsers_As_AddressInput;
  update: AddressUpdateWithoutUsers_As_AddressInput;
};

export type AddressUpsertWithoutUsers_As_Emergency_Contact_AddressInput = {
  create: AddressCreateWithoutUsers_As_Emergency_Contact_AddressInput;
  update: AddressUpdateWithoutUsers_As_Emergency_Contact_AddressInput;
};

export type AddressUpsertWithoutUsers_As_Shipping_AddressInput = {
  create: AddressCreateWithoutUsers_As_Shipping_AddressInput;
  update: AddressUpdateWithoutUsers_As_Shipping_AddressInput;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  academic_institutions?: InputMaybe<AcademicInstitutionListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  country_code?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  line_1?: InputMaybe<StringFilter>;
  line_2?: InputMaybe<StringNullableFilter>;
  line_3?: InputMaybe<StringNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  state_province?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users_as_address?: InputMaybe<UserListRelationFilter>;
  users_as_emergency_contact_address?: InputMaybe<UserListRelationFilter>;
  users_as_shipping_address?: InputMaybe<UserListRelationFilter>;
  zip_postal_code?: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type AggregateStatistics = {
  __typename?: "AggregateStatistics";
  count: Scalars["Float"];
};

export type AugmentedClaim = {
  __typename?: "AugmentedClaim";
  claim_id: Scalars["Float"];
  discord_id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  position: Scalars["String"];
  stage_id: Scalars["Float"];
  user_id: Scalars["Float"];
};

export type AuthResponse = {
  __typename?: "AuthResponse";
  accessJwt: Scalars["String"];
  refreshJwt: Scalars["String"];
  user: User;
};

export type AuthTokenCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  expire_time: Scalars["DateTime"];
  id?: InputMaybe<Scalars["Int"]>;
  token: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type AuthTokenCreateManyUserInputEnvelope = {
  data: Array<AuthTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AuthTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AuthTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuthTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuthTokenCreateManyUserInputEnvelope>;
};

export type AuthTokenCreateOrConnectWithoutUserInput = {
  create: AuthTokenCreateWithoutUserInput;
  where: AuthTokenWhereUniqueInput;
};

export type AuthTokenCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  expire_time: Scalars["DateTime"];
  token: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type AuthTokenListRelationFilter = {
  every?: InputMaybe<AuthTokenWhereInput>;
  none?: InputMaybe<AuthTokenWhereInput>;
  some?: InputMaybe<AuthTokenWhereInput>;
};

export type AuthTokenScalarWhereInput = {
  AND?: InputMaybe<Array<AuthTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<AuthTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<AuthTokenScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  expire_time?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type AuthTokenUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expire_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthTokenUpdateManyWithWhereWithoutUserInput = {
  data: AuthTokenUpdateManyMutationInput;
  where: AuthTokenScalarWhereInput;
};

export type AuthTokenUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AuthTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuthTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuthTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuthTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AuthTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuthTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuthTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<AuthTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<AuthTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AuthTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AuthTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AuthTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: AuthTokenUpdateWithoutUserInput;
  where: AuthTokenWhereUniqueInput;
};

export type AuthTokenUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expire_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AuthTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: AuthTokenCreateWithoutUserInput;
  update: AuthTokenUpdateWithoutUserInput;
  where: AuthTokenWhereUniqueInput;
};

export type AuthTokenWhereInput = {
  AND?: InputMaybe<Array<AuthTokenWhereInput>>;
  NOT?: InputMaybe<Array<AuthTokenWhereInput>>;
  OR?: InputMaybe<Array<AuthTokenWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  expire_time?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type AuthTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BooleanFieldAnswerTypeWrapper = {
  __typename?: "BooleanFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Scalars["Boolean"]>;
};

export type Claim = {
  __typename?: "Claim";
  created_at: Scalars["DateTime"];
  fields: Array<FieldWithAnswer>;
  fields_HACKTHENORTH2021_APPLICATIONS: TypedClaimsResolver_Hackthenorth2021_Applications_OutputWrapper;
  fields_HACKTHENORTH2021_CONTACT_LISTS: TypedClaimsResolver_Hackthenorth2021_Contact_Lists_OutputWrapper;
  fields_HACKTHENORTH2021_MENTORSHIP_PROFILES: TypedClaimsResolver_Hackthenorth2021_Mentorship_Profiles_OutputWrapper;
  fields_HACKTHENORTH2021_MENTORSHIP_REQUESTS: TypedClaimsResolver_Hackthenorth2021_Mentorship_Requests_OutputWrapper;
  fields_HACKTHENORTH2021_REIMBURSEMENTS: TypedClaimsResolver_Hackthenorth2021_Reimbursements_OutputWrapper;
  fields_HACKTHENORTH2021_REVIEWS: TypedClaimsResolver_Hackthenorth2021_Reviews_OutputWrapper;
  fields_HACKTHENORTH2021_SPONSOR_PERKS: TypedClaimsResolver_Hackthenorth2021_Sponsor_Perks_OutputWrapper;
  fields_HACKTHENORTH2021_TECHNICAL_JARGON: TypedClaimsResolver_Hackthenorth2021_Technical_Jargon_OutputWrapper;
  fields_HACKTHENORTH2022_CONTACT_LISTS: TypedClaimsResolver_Hackthenorth2022_Contact_Lists_OutputWrapper;
  id: Scalars["Int"];
  name: Scalars["String"];
  pipeline_id: Scalars["Int"];
  reviews: Array<Review>;
  stage: Stage;
  stage_id: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["Int"];
};

/** Create claim data */
export type ClaimCreateInput = {
  answers?: InputMaybe<Array<FieldAnswerInput>>;
  files?: InputMaybe<Array<FileInput>>;
  name: Scalars["String"];
  owner_id?: InputMaybe<Scalars["Int"]>;
  pipeline_id?: InputMaybe<Scalars["Int"]>;
  pipeline_slug?: InputMaybe<Scalars["String"]>;
  stage_id?: InputMaybe<Scalars["Int"]>;
  stage_slug?: InputMaybe<Scalars["String"]>;
};

export type ClaimCreateManyPipelineInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  stage_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type ClaimCreateManyPipelineInputEnvelope = {
  data: Array<ClaimCreateManyPipelineInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ClaimCreateManyStageInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipeline_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type ClaimCreateManyStageInputEnvelope = {
  data: Array<ClaimCreateManyStageInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ClaimCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipeline_id: Scalars["Int"];
  stage_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ClaimCreateManyUserInputEnvelope = {
  data: Array<ClaimCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ClaimCreateNestedManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<ClaimCreateManyPipelineInputEnvelope>;
};

export type ClaimCreateNestedManyWithoutStageInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutStageInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutStageInput>>;
  createMany?: InputMaybe<ClaimCreateManyStageInputEnvelope>;
};

export type ClaimCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClaimCreateManyUserInputEnvelope>;
};

export type ClaimCreateNestedOneWithoutCollaboratorsInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutCollaboratorsInput>;
  create?: InputMaybe<ClaimCreateWithoutCollaboratorsInput>;
};

export type ClaimCreateNestedOneWithoutField_AnswersInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutField_AnswersInput>;
  create?: InputMaybe<ClaimCreateWithoutField_AnswersInput>;
};

export type ClaimCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<ClaimCreateWithoutReviewsInput>;
};

export type ClaimCreateOrConnectWithoutCollaboratorsInput = {
  create: ClaimCreateWithoutCollaboratorsInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateOrConnectWithoutField_AnswersInput = {
  create: ClaimCreateWithoutField_AnswersInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateOrConnectWithoutPipelineInput = {
  create: ClaimCreateWithoutPipelineInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateOrConnectWithoutReviewsInput = {
  create: ClaimCreateWithoutReviewsInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateOrConnectWithoutStageInput = {
  create: ClaimCreateWithoutStageInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateOrConnectWithoutUserInput = {
  create: ClaimCreateWithoutUserInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimCreateWithoutCollaboratorsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutClaimInput>;
  name: Scalars["String"];
  pipeline: PipelineCreateNestedOneWithoutClaimsInput;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutClaimInput>;
  stage: StageCreateNestedOneWithoutClaimsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutClaimsInput;
};

export type ClaimCreateWithoutField_AnswersInput = {
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutClaimInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  pipeline: PipelineCreateNestedOneWithoutClaimsInput;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutClaimInput>;
  stage: StageCreateNestedOneWithoutClaimsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutClaimsInput;
};

export type ClaimCreateWithoutPipelineInput = {
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutClaimInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutClaimInput>;
  name: Scalars["String"];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutClaimInput>;
  stage: StageCreateNestedOneWithoutClaimsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutClaimsInput;
};

export type ClaimCreateWithoutReviewsInput = {
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutClaimInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutClaimInput>;
  name: Scalars["String"];
  pipeline: PipelineCreateNestedOneWithoutClaimsInput;
  stage: StageCreateNestedOneWithoutClaimsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutClaimsInput;
};

export type ClaimCreateWithoutStageInput = {
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutClaimInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutClaimInput>;
  name: Scalars["String"];
  pipeline: PipelineCreateNestedOneWithoutClaimsInput;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutClaimInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutClaimsInput;
};

export type ClaimCreateWithoutUserInput = {
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutClaimInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutClaimInput>;
  name: Scalars["String"];
  pipeline: PipelineCreateNestedOneWithoutClaimsInput;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutClaimInput>;
  stage: StageCreateNestedOneWithoutClaimsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ClaimListRelationFilter = {
  every?: InputMaybe<ClaimWhereInput>;
  none?: InputMaybe<ClaimWhereInput>;
  some?: InputMaybe<ClaimWhereInput>;
};

export type ClaimOrderByInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pipeline_id?: InputMaybe<SortOrder>;
  stage_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type ClaimRelationFilter = {
  is?: InputMaybe<ClaimWhereInput>;
  isNot?: InputMaybe<ClaimWhereInput>;
};

export enum ClaimScalarFieldEnum {
  CreatedAt = "created_at",
  Id = "id",
  Name = "name",
  PipelineId = "pipeline_id",
  StageId = "stage_id",
  UpdatedAt = "updated_at",
  UserId = "user_id",
}

export type ClaimScalarWhereInput = {
  AND?: InputMaybe<Array<ClaimScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClaimScalarWhereInput>>;
  OR?: InputMaybe<Array<ClaimScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  stage_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

/** Claims Field Answer filter input */
export type ClaimSubscriptionFieldAnswerFilterInput = {
  field_answer_value: Scalars["String"];
  field_slug: Scalars["String"];
};

/** Update claim data */
export type ClaimUpdateInput = {
  answers?: InputMaybe<Array<FieldAnswerInput>>;
  files?: InputMaybe<Array<FileInput>>;
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
  stage_id?: InputMaybe<Scalars["Int"]>;
  stage_slug?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["Int"]>;
};

export type ClaimUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimUpdateManyWithWhereWithoutPipelineInput = {
  data: ClaimUpdateManyMutationInput;
  where: ClaimScalarWhereInput;
};

export type ClaimUpdateManyWithWhereWithoutStageInput = {
  data: ClaimUpdateManyMutationInput;
  where: ClaimScalarWhereInput;
};

export type ClaimUpdateManyWithWhereWithoutUserInput = {
  data: ClaimUpdateManyMutationInput;
  where: ClaimScalarWhereInput;
};

export type ClaimUpdateManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<ClaimCreateManyPipelineInputEnvelope>;
  delete?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimUpdateWithWhereUniqueWithoutPipelineInput>>;
  updateMany?: InputMaybe<Array<ClaimUpdateManyWithWhereWithoutPipelineInput>>;
  upsert?: InputMaybe<Array<ClaimUpsertWithWhereUniqueWithoutPipelineInput>>;
};

export type ClaimUpdateManyWithoutStageInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutStageInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutStageInput>>;
  createMany?: InputMaybe<ClaimCreateManyStageInputEnvelope>;
  delete?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimUpdateWithWhereUniqueWithoutStageInput>>;
  updateMany?: InputMaybe<Array<ClaimUpdateManyWithWhereWithoutStageInput>>;
  upsert?: InputMaybe<Array<ClaimUpsertWithWhereUniqueWithoutStageInput>>;
};

export type ClaimUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClaimCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClaimCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClaimCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClaimScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  set?: InputMaybe<Array<ClaimWhereUniqueInput>>;
  update?: InputMaybe<Array<ClaimUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClaimUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClaimUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClaimUpdateOneRequiredWithoutCollaboratorsInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutCollaboratorsInput>;
  create?: InputMaybe<ClaimCreateWithoutCollaboratorsInput>;
  update?: InputMaybe<ClaimUpdateWithoutCollaboratorsInput>;
  upsert?: InputMaybe<ClaimUpsertWithoutCollaboratorsInput>;
};

export type ClaimUpdateOneRequiredWithoutField_AnswersInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutField_AnswersInput>;
  create?: InputMaybe<ClaimCreateWithoutField_AnswersInput>;
  update?: InputMaybe<ClaimUpdateWithoutField_AnswersInput>;
  upsert?: InputMaybe<ClaimUpsertWithoutField_AnswersInput>;
};

export type ClaimUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<ClaimWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClaimCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<ClaimCreateWithoutReviewsInput>;
  update?: InputMaybe<ClaimUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<ClaimUpsertWithoutReviewsInput>;
};

export type ClaimUpdateWithWhereUniqueWithoutPipelineInput = {
  data: ClaimUpdateWithoutPipelineInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpdateWithWhereUniqueWithoutStageInput = {
  data: ClaimUpdateWithoutStageInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpdateWithWhereUniqueWithoutUserInput = {
  data: ClaimUpdateWithoutUserInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpdateWithoutCollaboratorsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutClaimInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutClaimsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutClaimInput>;
  stage?: InputMaybe<StageUpdateOneRequiredWithoutClaimsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClaimsInput>;
};

export type ClaimUpdateWithoutField_AnswersInput = {
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutClaimInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutClaimsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutClaimInput>;
  stage?: InputMaybe<StageUpdateOneRequiredWithoutClaimsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClaimsInput>;
};

export type ClaimUpdateWithoutPipelineInput = {
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutClaimInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutClaimInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutClaimInput>;
  stage?: InputMaybe<StageUpdateOneRequiredWithoutClaimsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClaimsInput>;
};

export type ClaimUpdateWithoutReviewsInput = {
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutClaimInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutClaimInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutClaimsInput>;
  stage?: InputMaybe<StageUpdateOneRequiredWithoutClaimsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClaimsInput>;
};

export type ClaimUpdateWithoutStageInput = {
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutClaimInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutClaimInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutClaimsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutClaimInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClaimsInput>;
};

export type ClaimUpdateWithoutUserInput = {
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutClaimInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutClaimInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutClaimsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutClaimInput>;
  stage?: InputMaybe<StageUpdateOneRequiredWithoutClaimsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClaimUpsertWithWhereUniqueWithoutPipelineInput = {
  create: ClaimCreateWithoutPipelineInput;
  update: ClaimUpdateWithoutPipelineInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpsertWithWhereUniqueWithoutStageInput = {
  create: ClaimCreateWithoutStageInput;
  update: ClaimUpdateWithoutStageInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpsertWithWhereUniqueWithoutUserInput = {
  create: ClaimCreateWithoutUserInput;
  update: ClaimUpdateWithoutUserInput;
  where: ClaimWhereUniqueInput;
};

export type ClaimUpsertWithoutCollaboratorsInput = {
  create: ClaimCreateWithoutCollaboratorsInput;
  update: ClaimUpdateWithoutCollaboratorsInput;
};

export type ClaimUpsertWithoutField_AnswersInput = {
  create: ClaimCreateWithoutField_AnswersInput;
  update: ClaimUpdateWithoutField_AnswersInput;
};

export type ClaimUpsertWithoutReviewsInput = {
  create: ClaimCreateWithoutReviewsInput;
  update: ClaimUpdateWithoutReviewsInput;
};

export type ClaimWhereInput = {
  AND?: InputMaybe<Array<ClaimWhereInput>>;
  NOT?: InputMaybe<Array<ClaimWhereInput>>;
  OR?: InputMaybe<Array<ClaimWhereInput>>;
  collaborators?: InputMaybe<CollaboratorListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  field_answers?: InputMaybe<FieldAnswerListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  stage?: InputMaybe<StageRelationFilter>;
  stage_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ClaimWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type CoffeeChatDetails = {
  __typename?: "CoffeeChatDetails";
  channel: Scalars["String"];
  claim_id: Scalars["Float"];
  company: Scalars["String"];
  duration: Scalars["Float"];
  sponsor_discord_id: Scalars["String"];
  sponsor_name: Scalars["String"];
  start_time: Scalars["String"];
};

export type Collaborator = {
  __typename?: "Collaborator";
  claim: Claim;
  claim_id: Scalars["Int"];
  created_at: Scalars["DateTime"];
  id: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["Int"];
};

export type CollaboratorCreateManyClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type CollaboratorCreateManyClaimInputEnvelope = {
  data: Array<CollaboratorCreateManyClaimInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CollaboratorCreateManyUserInput = {
  claim_id: Scalars["Int"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CollaboratorCreateManyUserInputEnvelope = {
  data: Array<CollaboratorCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CollaboratorCreateNestedManyWithoutClaimInput = {
  connect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CollaboratorCreateOrConnectWithoutClaimInput>
  >;
  create?: InputMaybe<Array<CollaboratorCreateWithoutClaimInput>>;
  createMany?: InputMaybe<CollaboratorCreateManyClaimInputEnvelope>;
};

export type CollaboratorCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CollaboratorCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<CollaboratorCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollaboratorCreateManyUserInputEnvelope>;
};

export type CollaboratorCreateOrConnectWithoutClaimInput = {
  create: CollaboratorCreateWithoutClaimInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorCreateOrConnectWithoutUserInput = {
  create: CollaboratorCreateWithoutUserInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorCreateWithoutClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutCollaboratorsInput;
};

export type CollaboratorCreateWithoutUserInput = {
  claim: ClaimCreateNestedOneWithoutCollaboratorsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CollaboratorListRelationFilter = {
  every?: InputMaybe<CollaboratorWhereInput>;
  none?: InputMaybe<CollaboratorWhereInput>;
  some?: InputMaybe<CollaboratorWhereInput>;
};

export type CollaboratorScalarWhereInput = {
  AND?: InputMaybe<Array<CollaboratorScalarWhereInput>>;
  NOT?: InputMaybe<Array<CollaboratorScalarWhereInput>>;
  OR?: InputMaybe<Array<CollaboratorScalarWhereInput>>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type CollaboratorUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CollaboratorUpdateManyWithWhereWithoutClaimInput = {
  data: CollaboratorUpdateManyMutationInput;
  where: CollaboratorScalarWhereInput;
};

export type CollaboratorUpdateManyWithWhereWithoutUserInput = {
  data: CollaboratorUpdateManyMutationInput;
  where: CollaboratorScalarWhereInput;
};

export type CollaboratorUpdateManyWithoutClaimInput = {
  connect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CollaboratorCreateOrConnectWithoutClaimInput>
  >;
  create?: InputMaybe<Array<CollaboratorCreateWithoutClaimInput>>;
  createMany?: InputMaybe<CollaboratorCreateManyClaimInputEnvelope>;
  delete?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CollaboratorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  set?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  update?: InputMaybe<
    Array<CollaboratorUpdateWithWhereUniqueWithoutClaimInput>
  >;
  updateMany?: InputMaybe<
    Array<CollaboratorUpdateManyWithWhereWithoutClaimInput>
  >;
  upsert?: InputMaybe<
    Array<CollaboratorUpsertWithWhereUniqueWithoutClaimInput>
  >;
};

export type CollaboratorUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<CollaboratorCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<CollaboratorCreateWithoutUserInput>>;
  createMany?: InputMaybe<CollaboratorCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CollaboratorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  set?: InputMaybe<Array<CollaboratorWhereUniqueInput>>;
  update?: InputMaybe<Array<CollaboratorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<CollaboratorUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<CollaboratorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CollaboratorUpdateWithWhereUniqueWithoutClaimInput = {
  data: CollaboratorUpdateWithoutClaimInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorUpdateWithWhereUniqueWithoutUserInput = {
  data: CollaboratorUpdateWithoutUserInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorUpdateWithoutClaimInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCollaboratorsInput>;
};

export type CollaboratorUpdateWithoutUserInput = {
  claim?: InputMaybe<ClaimUpdateOneRequiredWithoutCollaboratorsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CollaboratorUpsertWithWhereUniqueWithoutClaimInput = {
  create: CollaboratorCreateWithoutClaimInput;
  update: CollaboratorUpdateWithoutClaimInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorUpsertWithWhereUniqueWithoutUserInput = {
  create: CollaboratorCreateWithoutUserInput;
  update: CollaboratorUpdateWithoutUserInput;
  where: CollaboratorWhereUniqueInput;
};

export type CollaboratorWhereInput = {
  AND?: InputMaybe<Array<CollaboratorWhereInput>>;
  NOT?: InputMaybe<Array<CollaboratorWhereInput>>;
  OR?: InputMaybe<Array<CollaboratorWhereInput>>;
  claim?: InputMaybe<ClaimRelationFilter>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type CollaboratorWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Company = {
  __typename?: "Company";
  created_at: Scalars["DateTime"];
  id: Scalars["Int"];
  name: Scalars["String"];
  slug: Scalars["String"];
  twitter?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  website: Scalars["String"];
};

export type CompanyCreateNestedOneWithoutSponsor_CompaniesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSponsor_CompaniesInput>;
  create?: InputMaybe<CompanyCreateWithoutSponsor_CompaniesInput>;
};

export type CompanyCreateNestedOneWithoutSponsorsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<CompanyCreateWithoutSponsorsInput>;
};

export type CompanyCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<CompanyCreateWithoutUsersInput>;
};

export type CompanyCreateOrConnectWithoutSponsor_CompaniesInput = {
  create: CompanyCreateWithoutSponsor_CompaniesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutSponsorsInput = {
  create: CompanyCreateWithoutSponsorsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutUsersInput = {
  create: CompanyCreateWithoutUsersInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutSponsor_CompaniesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  sponsors?: InputMaybe<SponsorCreateNestedOneWithoutCompanyInput>;
  twitter?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users?: InputMaybe<UserCreateNestedOneWithoutCompanyInput>;
  website: Scalars["String"];
};

export type CompanyCreateWithoutSponsorsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutCompanyInput>;
  twitter?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users?: InputMaybe<UserCreateNestedOneWithoutCompanyInput>;
  website: Scalars["String"];
};

export type CompanyCreateWithoutUsersInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutCompanyInput>;
  sponsors?: InputMaybe<SponsorCreateNestedOneWithoutCompanyInput>;
  twitter?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website: Scalars["String"];
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateOneRequiredWithoutSponsor_CompaniesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSponsor_CompaniesInput>;
  create?: InputMaybe<CompanyCreateWithoutSponsor_CompaniesInput>;
  update?: InputMaybe<CompanyUpdateWithoutSponsor_CompaniesInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSponsor_CompaniesInput>;
};

export type CompanyUpdateOneRequiredWithoutSponsorsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<CompanyCreateWithoutSponsorsInput>;
  update?: InputMaybe<CompanyUpdateWithoutSponsorsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSponsorsInput>;
};

export type CompanyUpdateOneWithoutUsersInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<CompanyCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<CompanyUpdateWithoutUsersInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutUsersInput>;
};

export type CompanyUpdateWithoutSponsor_CompaniesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsors?: InputMaybe<SponsorUpdateOneWithoutCompanyInput>;
  twitter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateOneWithoutCompanyInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyUpdateWithoutSponsorsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutCompanyInput>;
  twitter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateOneWithoutCompanyInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyUpdateWithoutUsersInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutCompanyInput>;
  sponsors?: InputMaybe<SponsorUpdateOneWithoutCompanyInput>;
  twitter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CompanyUpsertWithoutSponsor_CompaniesInput = {
  create: CompanyCreateWithoutSponsor_CompaniesInput;
  update: CompanyUpdateWithoutSponsor_CompaniesInput;
};

export type CompanyUpsertWithoutSponsorsInput = {
  create: CompanyCreateWithoutSponsorsInput;
  update: CompanyUpdateWithoutSponsorsInput;
};

export type CompanyUpsertWithoutUsersInput = {
  create: CompanyCreateWithoutUsersInput;
  update: CompanyUpdateWithoutUsersInput;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  sponsor_companies?: InputMaybe<SponsorCompanyListRelationFilter>;
  sponsors?: InputMaybe<SponsorRelationFilter>;
  twitter?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserRelationFilter>;
  website?: InputMaybe<StringFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CustomEventScheduleUpdateInput = {
  banner_link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  links?: InputMaybe<EventScheduleUpdatelinksInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventScheduleUpdatetagsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

/** Create stage without pipeline id */
export type CustomFieldCreateWithoutPipelineInput = {
  field_type: Scalars["String"];
  is_required: Scalars["Boolean"];
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
  valid_values?: InputMaybe<Array<Scalars["String"]>>;
};

/** Create stage without pipeline id */
export type CustomStageCreateWithoutPipelineInput = {
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DevpostData = {
  __typename?: "DevpostData";
  checkin_time: Scalars["String"];
  devpost_link: Scalars["String"];
  judging_time: Scalars["String"];
  project_name: Scalars["String"];
  room: Scalars["String"];
  team_member_names: Array<Scalars["String"]>;
};

export type DevpostDataInput = {
  project_title: Scalars["String"];
  submission_url: Scalars["String"];
  video_demo_link: Scalars["String"];
};

export type EducationCreateManyAcademic_InstitutionInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  current_status: Scalars["String"];
  current_year?: InputMaybe<Scalars["Int"]>;
  degree?: InputMaybe<Scalars["String"]>;
  graduating_year: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  minor?: InputMaybe<Scalars["String"]>;
  program?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EducationCreateManyAcademic_InstitutionInputEnvelope = {
  data: Array<EducationCreateManyAcademic_InstitutionInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EducationCreateNestedManyWithoutAcademic_InstitutionInput = {
  connect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EducationCreateOrConnectWithoutAcademic_InstitutionInput>
  >;
  create?: InputMaybe<Array<EducationCreateWithoutAcademic_InstitutionInput>>;
  createMany?: InputMaybe<EducationCreateManyAcademic_InstitutionInputEnvelope>;
};

export type EducationCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<EducationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EducationCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<EducationCreateWithoutUsersInput>;
};

export type EducationCreateOrConnectWithoutAcademic_InstitutionInput = {
  create: EducationCreateWithoutAcademic_InstitutionInput;
  where: EducationWhereUniqueInput;
};

export type EducationCreateOrConnectWithoutUsersInput = {
  create: EducationCreateWithoutUsersInput;
  where: EducationWhereUniqueInput;
};

export type EducationCreateWithoutAcademic_InstitutionInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  current_status: Scalars["String"];
  current_year?: InputMaybe<Scalars["Int"]>;
  degree?: InputMaybe<Scalars["String"]>;
  graduating_year: Scalars["Int"];
  minor?: InputMaybe<Scalars["String"]>;
  program?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  users?: InputMaybe<UserCreateNestedManyWithoutEducationInput>;
};

export type EducationCreateWithoutUsersInput = {
  academic_institution: AcademicInstitutionCreateNestedOneWithoutEducationsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  current_status: Scalars["String"];
  current_year?: InputMaybe<Scalars["Int"]>;
  degree?: InputMaybe<Scalars["String"]>;
  graduating_year: Scalars["Int"];
  minor?: InputMaybe<Scalars["String"]>;
  program?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EducationListRelationFilter = {
  every?: InputMaybe<EducationWhereInput>;
  none?: InputMaybe<EducationWhereInput>;
  some?: InputMaybe<EducationWhereInput>;
};

export type EducationRelationFilter = {
  is?: InputMaybe<EducationWhereInput>;
  isNot?: InputMaybe<EducationWhereInput>;
};

export type EducationScalarWhereInput = {
  AND?: InputMaybe<Array<EducationScalarWhereInput>>;
  NOT?: InputMaybe<Array<EducationScalarWhereInput>>;
  OR?: InputMaybe<Array<EducationScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  current_status?: InputMaybe<StringFilter>;
  current_year?: InputMaybe<IntNullableFilter>;
  degree?: InputMaybe<StringNullableFilter>;
  graduating_year?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  institution_id?: InputMaybe<IntFilter>;
  minor?: InputMaybe<StringNullableFilter>;
  program?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EducationUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  current_status?: InputMaybe<StringFieldUpdateOperationsInput>;
  current_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  degree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  graduating_year?: InputMaybe<IntFieldUpdateOperationsInput>;
  minor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  program?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EducationUpdateManyWithWhereWithoutAcademic_InstitutionInput = {
  data: EducationUpdateManyMutationInput;
  where: EducationScalarWhereInput;
};

export type EducationUpdateManyWithoutAcademic_InstitutionInput = {
  connect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EducationCreateOrConnectWithoutAcademic_InstitutionInput>
  >;
  create?: InputMaybe<Array<EducationCreateWithoutAcademic_InstitutionInput>>;
  createMany?: InputMaybe<EducationCreateManyAcademic_InstitutionInputEnvelope>;
  delete?: InputMaybe<Array<EducationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EducationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  set?: InputMaybe<Array<EducationWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EducationUpdateWithWhereUniqueWithoutAcademic_InstitutionInput>
  >;
  updateMany?: InputMaybe<
    Array<EducationUpdateManyWithWhereWithoutAcademic_InstitutionInput>
  >;
  upsert?: InputMaybe<
    Array<EducationUpsertWithWhereUniqueWithoutAcademic_InstitutionInput>
  >;
};

export type EducationUpdateOneWithoutUsersInput = {
  connect?: InputMaybe<EducationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EducationCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<EducationCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<EducationUpdateWithoutUsersInput>;
  upsert?: InputMaybe<EducationUpsertWithoutUsersInput>;
};

export type EducationUpdateWithWhereUniqueWithoutAcademic_InstitutionInput = {
  data: EducationUpdateWithoutAcademic_InstitutionInput;
  where: EducationWhereUniqueInput;
};

export type EducationUpdateWithoutAcademic_InstitutionInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  current_status?: InputMaybe<StringFieldUpdateOperationsInput>;
  current_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  degree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  graduating_year?: InputMaybe<IntFieldUpdateOperationsInput>;
  minor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  program?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutEducationInput>;
};

export type EducationUpdateWithoutUsersInput = {
  academic_institution?: InputMaybe<AcademicInstitutionUpdateOneRequiredWithoutEducationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  current_status?: InputMaybe<StringFieldUpdateOperationsInput>;
  current_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  degree?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  graduating_year?: InputMaybe<IntFieldUpdateOperationsInput>;
  minor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  program?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EducationUpsertWithWhereUniqueWithoutAcademic_InstitutionInput = {
  create: EducationCreateWithoutAcademic_InstitutionInput;
  update: EducationUpdateWithoutAcademic_InstitutionInput;
  where: EducationWhereUniqueInput;
};

export type EducationUpsertWithoutUsersInput = {
  create: EducationCreateWithoutUsersInput;
  update: EducationUpdateWithoutUsersInput;
};

export type EducationWhereInput = {
  AND?: InputMaybe<Array<EducationWhereInput>>;
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  OR?: InputMaybe<Array<EducationWhereInput>>;
  academic_institution?: InputMaybe<AcademicInstitutionRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  current_status?: InputMaybe<StringFilter>;
  current_year?: InputMaybe<IntNullableFilter>;
  degree?: InputMaybe<StringNullableFilter>;
  graduating_year?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  institution_id?: InputMaybe<IntFilter>;
  minor?: InputMaybe<StringNullableFilter>;
  program?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type EducationWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Email = {
  __typename?: "Email";
  campaign: Scalars["String"];
  context?: Maybe<Scalars["JSON"]>;
  created_at: Scalars["DateTime"];
  html: Scalars["String"];
  id: Scalars["Int"];
  send_time: Scalars["DateTime"];
  sent: Scalars["Boolean"];
  subject: Scalars["String"];
  to_email: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumInstitutionTypeEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<InstitutionTypeEnum>;
};

export type EnumInstitutionTypeEnumFilter = {
  equals?: InputMaybe<InstitutionTypeEnum>;
  in?: InputMaybe<Array<InstitutionTypeEnum>>;
  not?: InputMaybe<NestedEnumInstitutionTypeEnumFilter>;
  notIn?: InputMaybe<Array<InstitutionTypeEnum>>;
};

export type EnumPersonRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<PersonRole>;
};

export type EnumPersonRoleFilter = {
  equals?: InputMaybe<PersonRole>;
  in?: InputMaybe<Array<PersonRole>>;
  not?: InputMaybe<NestedEnumPersonRoleFilter>;
  notIn?: InputMaybe<Array<PersonRole>>;
};

export type EnumRecordTypeEmailFieldUpdateOperationsInput = {
  set?: InputMaybe<RecordTypeEmail>;
};

export type EnumRecordTypeEmailFilter = {
  equals?: InputMaybe<RecordTypeEmail>;
  in?: InputMaybe<Array<RecordTypeEmail>>;
  not?: InputMaybe<NestedEnumRecordTypeEmailFilter>;
  notIn?: InputMaybe<Array<RecordTypeEmail>>;
};

export type EnumSponsorCompanyStageFieldUpdateOperationsInput = {
  set?: InputMaybe<SponsorCompanyStage>;
};

export type EnumSponsorCompanyStageFilter = {
  equals?: InputMaybe<SponsorCompanyStage>;
  in?: InputMaybe<Array<SponsorCompanyStage>>;
  not?: InputMaybe<NestedEnumSponsorCompanyStageFilter>;
  notIn?: InputMaybe<Array<SponsorCompanyStage>>;
};

export type EnumSponsorCompanyTierFieldUpdateOperationsInput = {
  set?: InputMaybe<SponsorCompanyTier>;
};

export type EnumSponsorCompanyTierFilter = {
  equals?: InputMaybe<SponsorCompanyTier>;
  in?: InputMaybe<Array<SponsorCompanyTier>>;
  not?: InputMaybe<NestedEnumSponsorCompanyTierFilter>;
  notIn?: InputMaybe<Array<SponsorCompanyTier>>;
};

export type Event = {
  __typename?: "Event";
  contact_email?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["Int"]>;
  cost_currency?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  has_food?: Maybe<Scalars["Boolean"]>;
  has_reimbursements?: Maybe<Scalars["Boolean"]>;
  id: Scalars["Int"];
  judging_model?: Maybe<Scalars["String"]>;
  length_hours?: Maybe<Scalars["Int"]>;
  max_age_restriction?: Maybe<Scalars["Int"]>;
  min_age_restriction?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  size?: Maybe<Scalars["Int"]>;
  slug: Scalars["String"];
  start_time: Scalars["DateTime"];
  submission_url?: Maybe<Scalars["String"]>;
  swarm_event_id?: Maybe<Scalars["String"]>;
  tags: Array<Scalars["String"]>;
  themes: Array<Scalars["String"]>;
  timezone?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  website?: Maybe<Scalars["String"]>;
};

export type EventActivityCreateManyEventInput = {
  category?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  end_time?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  location?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventActivityCreateManyEventInputEnvelope = {
  data: Array<EventActivityCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventActivityCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventActivityCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventActivityCreateManyEventInputEnvelope>;
};

export type EventActivityCreateNestedOneWithoutEvent_Activity_RedemptionsInput =
  {
    connect?: InputMaybe<EventActivityWhereUniqueInput>;
    connectOrCreate?: InputMaybe<EventActivityCreateOrConnectWithoutEvent_Activity_RedemptionsInput>;
    create?: InputMaybe<EventActivityCreateWithoutEvent_Activity_RedemptionsInput>;
  };

export type EventActivityCreateOrConnectWithoutEventInput = {
  create: EventActivityCreateWithoutEventInput;
  where: EventActivityWhereUniqueInput;
};

export type EventActivityCreateOrConnectWithoutEvent_Activity_RedemptionsInput =
  {
    create: EventActivityCreateWithoutEvent_Activity_RedemptionsInput;
    where: EventActivityWhereUniqueInput;
  };

export type EventActivityCreateWithoutEventInput = {
  category?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  end_time?: InputMaybe<Scalars["DateTime"]>;
  event_activity_redemptions?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutEvent_ActivityInput>;
  location?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventActivityCreateWithoutEvent_Activity_RedemptionsInput = {
  category?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  end_time?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutEvent_ActivitiesInput;
  location?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventActivityListRelationFilter = {
  every?: InputMaybe<EventActivityWhereInput>;
  none?: InputMaybe<EventActivityWhereInput>;
  some?: InputMaybe<EventActivityWhereInput>;
};

export type EventActivityRedemptionCreateManyEvent_ActivityInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id?: InputMaybe<Scalars["Int"]>;
  volunteer_id: Scalars["Int"];
};

export type EventActivityRedemptionCreateManyEvent_ActivityInputEnvelope = {
  data: Array<EventActivityRedemptionCreateManyEvent_ActivityInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventActivityRedemptionCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_activity_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  volunteer_id: Scalars["Int"];
};

export type EventActivityRedemptionCreateManyUserInputEnvelope = {
  data: Array<EventActivityRedemptionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventActivityRedemptionCreateManyVolunteerInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_activity_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id?: InputMaybe<Scalars["Int"]>;
};

export type EventActivityRedemptionCreateManyVolunteerInputEnvelope = {
  data: Array<EventActivityRedemptionCreateManyVolunteerInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventActivityRedemptionCreateNestedManyWithoutEvent_ActivityInput =
  {
    connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
    connectOrCreate?: InputMaybe<
      Array<EventActivityRedemptionCreateOrConnectWithoutEvent_ActivityInput>
    >;
    create?: InputMaybe<
      Array<EventActivityRedemptionCreateWithoutEvent_ActivityInput>
    >;
    createMany?: InputMaybe<EventActivityRedemptionCreateManyEvent_ActivityInputEnvelope>;
  };

export type EventActivityRedemptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityRedemptionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<EventActivityRedemptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventActivityRedemptionCreateManyUserInputEnvelope>;
};

export type EventActivityRedemptionCreateNestedManyWithoutVolunteerInput = {
  connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityRedemptionCreateOrConnectWithoutVolunteerInput>
  >;
  create?: InputMaybe<
    Array<EventActivityRedemptionCreateWithoutVolunteerInput>
  >;
  createMany?: InputMaybe<EventActivityRedemptionCreateManyVolunteerInputEnvelope>;
};

export type EventActivityRedemptionCreateOrConnectWithoutEvent_ActivityInput = {
  create: EventActivityRedemptionCreateWithoutEvent_ActivityInput;
  where: EventActivityRedemptionWhereUniqueInput;
};

export type EventActivityRedemptionCreateOrConnectWithoutUserInput = {
  create: EventActivityRedemptionCreateWithoutUserInput;
  where: EventActivityRedemptionWhereUniqueInput;
};

export type EventActivityRedemptionCreateOrConnectWithoutVolunteerInput = {
  create: EventActivityRedemptionCreateWithoutVolunteerInput;
  where: EventActivityRedemptionWhereUniqueInput;
};

export type EventActivityRedemptionCreateWithoutEvent_ActivityInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutEvent_Activity_Redemptions_UserInput>;
  volunteer: UserCreateNestedOneWithoutEvent_Activity_Redemptions_EventInput;
};

export type EventActivityRedemptionCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_activity: EventActivityCreateNestedOneWithoutEvent_Activity_RedemptionsInput;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  volunteer: UserCreateNestedOneWithoutEvent_Activity_Redemptions_EventInput;
};

export type EventActivityRedemptionCreateWithoutVolunteerInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_activity: EventActivityCreateNestedOneWithoutEvent_Activity_RedemptionsInput;
  override_reason?: InputMaybe<Scalars["String"]>;
  scan_time: Scalars["DateTime"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutEvent_Activity_Redemptions_UserInput>;
};

export type EventActivityRedemptionListRelationFilter = {
  every?: InputMaybe<EventActivityRedemptionWhereInput>;
  none?: InputMaybe<EventActivityRedemptionWhereInput>;
  some?: InputMaybe<EventActivityRedemptionWhereInput>;
};

export type EventActivityRedemptionScalarWhereInput = {
  AND?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  OR?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_activity_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  override_reason?: InputMaybe<StringNullableFilter>;
  scan_time?: InputMaybe<DateTimeFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
  volunteer_id?: InputMaybe<IntFilter>;
};

export type EventActivityRedemptionUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  override_reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scan_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventActivityRedemptionUpdateManyWithWhereWithoutEvent_ActivityInput =
  {
    data: EventActivityRedemptionUpdateManyMutationInput;
    where: EventActivityRedemptionScalarWhereInput;
  };

export type EventActivityRedemptionUpdateManyWithWhereWithoutUserInput = {
  data: EventActivityRedemptionUpdateManyMutationInput;
  where: EventActivityRedemptionScalarWhereInput;
};

export type EventActivityRedemptionUpdateManyWithWhereWithoutVolunteerInput = {
  data: EventActivityRedemptionUpdateManyMutationInput;
  where: EventActivityRedemptionScalarWhereInput;
};

export type EventActivityRedemptionUpdateManyWithoutEvent_ActivityInput = {
  connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityRedemptionCreateOrConnectWithoutEvent_ActivityInput>
  >;
  create?: InputMaybe<
    Array<EventActivityRedemptionCreateWithoutEvent_ActivityInput>
  >;
  createMany?: InputMaybe<EventActivityRedemptionCreateManyEvent_ActivityInputEnvelope>;
  delete?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  set?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventActivityRedemptionUpdateWithWhereUniqueWithoutEvent_ActivityInput>
  >;
  updateMany?: InputMaybe<
    Array<EventActivityRedemptionUpdateManyWithWhereWithoutEvent_ActivityInput>
  >;
  upsert?: InputMaybe<
    Array<EventActivityRedemptionUpsertWithWhereUniqueWithoutEvent_ActivityInput>
  >;
};

export type EventActivityRedemptionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityRedemptionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<EventActivityRedemptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventActivityRedemptionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  set?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventActivityRedemptionUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<EventActivityRedemptionUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<EventActivityRedemptionUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type EventActivityRedemptionUpdateManyWithoutVolunteerInput = {
  connect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityRedemptionCreateOrConnectWithoutVolunteerInput>
  >;
  create?: InputMaybe<
    Array<EventActivityRedemptionCreateWithoutVolunteerInput>
  >;
  createMany?: InputMaybe<EventActivityRedemptionCreateManyVolunteerInputEnvelope>;
  delete?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventActivityRedemptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  set?: InputMaybe<Array<EventActivityRedemptionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventActivityRedemptionUpdateWithWhereUniqueWithoutVolunteerInput>
  >;
  updateMany?: InputMaybe<
    Array<EventActivityRedemptionUpdateManyWithWhereWithoutVolunteerInput>
  >;
  upsert?: InputMaybe<
    Array<EventActivityRedemptionUpsertWithWhereUniqueWithoutVolunteerInput>
  >;
};

export type EventActivityRedemptionUpdateWithWhereUniqueWithoutEvent_ActivityInput =
  {
    data: EventActivityRedemptionUpdateWithoutEvent_ActivityInput;
    where: EventActivityRedemptionWhereUniqueInput;
  };

export type EventActivityRedemptionUpdateWithWhereUniqueWithoutUserInput = {
  data: EventActivityRedemptionUpdateWithoutUserInput;
  where: EventActivityRedemptionWhereUniqueInput;
};

export type EventActivityRedemptionUpdateWithWhereUniqueWithoutVolunteerInput =
  {
    data: EventActivityRedemptionUpdateWithoutVolunteerInput;
    where: EventActivityRedemptionWhereUniqueInput;
  };

export type EventActivityRedemptionUpdateWithoutEvent_ActivityInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  override_reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scan_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutEvent_Activity_Redemptions_UserInput>;
  volunteer?: InputMaybe<UserUpdateOneRequiredWithoutEvent_Activity_Redemptions_EventInput>;
};

export type EventActivityRedemptionUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activity?: InputMaybe<EventActivityUpdateOneRequiredWithoutEvent_Activity_RedemptionsInput>;
  override_reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scan_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  volunteer?: InputMaybe<UserUpdateOneRequiredWithoutEvent_Activity_Redemptions_EventInput>;
};

export type EventActivityRedemptionUpdateWithoutVolunteerInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activity?: InputMaybe<EventActivityUpdateOneRequiredWithoutEvent_Activity_RedemptionsInput>;
  override_reason?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scan_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutEvent_Activity_Redemptions_UserInput>;
};

export type EventActivityRedemptionUpsertWithWhereUniqueWithoutEvent_ActivityInput =
  {
    create: EventActivityRedemptionCreateWithoutEvent_ActivityInput;
    update: EventActivityRedemptionUpdateWithoutEvent_ActivityInput;
    where: EventActivityRedemptionWhereUniqueInput;
  };

export type EventActivityRedemptionUpsertWithWhereUniqueWithoutUserInput = {
  create: EventActivityRedemptionCreateWithoutUserInput;
  update: EventActivityRedemptionUpdateWithoutUserInput;
  where: EventActivityRedemptionWhereUniqueInput;
};

export type EventActivityRedemptionUpsertWithWhereUniqueWithoutVolunteerInput =
  {
    create: EventActivityRedemptionCreateWithoutVolunteerInput;
    update: EventActivityRedemptionUpdateWithoutVolunteerInput;
    where: EventActivityRedemptionWhereUniqueInput;
  };

export type EventActivityRedemptionWhereInput = {
  AND?: InputMaybe<Array<EventActivityRedemptionWhereInput>>;
  NOT?: InputMaybe<Array<EventActivityRedemptionWhereInput>>;
  OR?: InputMaybe<Array<EventActivityRedemptionWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_activity?: InputMaybe<EventActivityRelationFilter>;
  event_activity_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  override_reason?: InputMaybe<StringNullableFilter>;
  scan_time?: InputMaybe<DateTimeFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
  volunteer?: InputMaybe<UserRelationFilter>;
  volunteer_id?: InputMaybe<IntFilter>;
};

export type EventActivityRedemptionWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventActivityRelationFilter = {
  is?: InputMaybe<EventActivityWhereInput>;
  isNot?: InputMaybe<EventActivityWhereInput>;
};

export type EventActivityScalarWhereInput = {
  AND?: InputMaybe<Array<EventActivityScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventActivityScalarWhereInput>>;
  OR?: InputMaybe<Array<EventActivityScalarWhereInput>>;
  category?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  restrictions?: InputMaybe<JsonNullableFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventActivityUpdateManyMutationInput = {
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventActivityUpdateManyWithWhereWithoutEventInput = {
  data: EventActivityUpdateManyMutationInput;
  where: EventActivityScalarWhereInput;
};

export type EventActivityUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventActivityCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventActivityCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventActivityCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventActivityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventActivityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<EventActivityWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventActivityUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<EventActivityUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<EventActivityUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type EventActivityUpdateOneRequiredWithoutEvent_Activity_RedemptionsInput =
  {
    connect?: InputMaybe<EventActivityWhereUniqueInput>;
    connectOrCreate?: InputMaybe<EventActivityCreateOrConnectWithoutEvent_Activity_RedemptionsInput>;
    create?: InputMaybe<EventActivityCreateWithoutEvent_Activity_RedemptionsInput>;
    update?: InputMaybe<EventActivityUpdateWithoutEvent_Activity_RedemptionsInput>;
    upsert?: InputMaybe<EventActivityUpsertWithoutEvent_Activity_RedemptionsInput>;
  };

export type EventActivityUpdateWithWhereUniqueWithoutEventInput = {
  data: EventActivityUpdateWithoutEventInput;
  where: EventActivityWhereUniqueInput;
};

export type EventActivityUpdateWithoutEventInput = {
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event_activity_redemptions?: InputMaybe<EventActivityRedemptionUpdateManyWithoutEvent_ActivityInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventActivityUpdateWithoutEvent_Activity_RedemptionsInput = {
  category?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutEvent_ActivitiesInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  restrictions?: InputMaybe<Scalars["JSON"]>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventActivityUpsertWithWhereUniqueWithoutEventInput = {
  create: EventActivityCreateWithoutEventInput;
  update: EventActivityUpdateWithoutEventInput;
  where: EventActivityWhereUniqueInput;
};

export type EventActivityUpsertWithoutEvent_Activity_RedemptionsInput = {
  create: EventActivityCreateWithoutEvent_Activity_RedemptionsInput;
  update: EventActivityUpdateWithoutEvent_Activity_RedemptionsInput;
};

export type EventActivityWhereInput = {
  AND?: InputMaybe<Array<EventActivityWhereInput>>;
  NOT?: InputMaybe<Array<EventActivityWhereInput>>;
  OR?: InputMaybe<Array<EventActivityWhereInput>>;
  category?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_activity_redemptions?: InputMaybe<EventActivityRedemptionListRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  restrictions?: InputMaybe<JsonNullableFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventActivityWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventAttendee = {
  __typename?: "EventAttendee";
  badge_codes: Array<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  event_id: Scalars["Int"];
  id: Scalars["Int"];
  role: Scalars["String"];
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["Int"];
};

export type EventAttendeeCreateManyEventInput = {
  badge_codes?: InputMaybe<EventAttendeeCreateManybadge_CodesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  role: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type EventAttendeeCreateManyEventInputEnvelope = {
  data: Array<EventAttendeeCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventAttendeeCreateManyUserInput = {
  badge_codes?: InputMaybe<EventAttendeeCreateManybadge_CodesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  role: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventAttendeeCreateManyUserInputEnvelope = {
  data: Array<EventAttendeeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventAttendeeCreateManybadge_CodesInput = {
  set: Array<Scalars["String"]>;
};

export type EventAttendeeCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAttendeeCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventAttendeeCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventAttendeeCreateManyEventInputEnvelope>;
};

export type EventAttendeeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAttendeeCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<EventAttendeeCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventAttendeeCreateManyUserInputEnvelope>;
};

export type EventAttendeeCreateOrConnectWithoutEventInput = {
  create: EventAttendeeCreateWithoutEventInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeCreateOrConnectWithoutUserInput = {
  create: EventAttendeeCreateWithoutUserInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeCreateWithoutEventInput = {
  badge_codes?: InputMaybe<EventAttendeeCreatebadge_CodesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  role: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutEvent_AttendeesInput;
};

export type EventAttendeeCreateWithoutUserInput = {
  badge_codes?: InputMaybe<EventAttendeeCreatebadge_CodesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutEvent_AttendeesInput;
  role: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventAttendeeCreatebadge_CodesInput = {
  set: Array<Scalars["String"]>;
};

export type EventAttendeeEvent_Attendees_Role_User_Id_Event_Id_KeyCompoundUniqueInput =
  {
    event_id: Scalars["Int"];
    role: Scalars["String"];
    user_id: Scalars["Int"];
  };

export type EventAttendeeListRelationFilter = {
  every?: InputMaybe<EventAttendeeWhereInput>;
  none?: InputMaybe<EventAttendeeWhereInput>;
  some?: InputMaybe<EventAttendeeWhereInput>;
};

export type EventAttendeeOrderByInput = {
  badge_codes?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  event_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export enum EventAttendeeScalarFieldEnum {
  BadgeCodes = "badge_codes",
  CreatedAt = "created_at",
  EventId = "event_id",
  Id = "id",
  Role = "role",
  UpdatedAt = "updated_at",
  UserId = "user_id",
}

export type EventAttendeeScalarWhereInput = {
  AND?: InputMaybe<Array<EventAttendeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventAttendeeScalarWhereInput>>;
  OR?: InputMaybe<Array<EventAttendeeScalarWhereInput>>;
  badge_codes?: InputMaybe<StringNullableListFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type EventAttendeeUpdateManyMutationInput = {
  badge_codes?: InputMaybe<EventAttendeeUpdatebadge_CodesInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
  data: EventAttendeeUpdateManyMutationInput;
  where: EventAttendeeScalarWhereInput;
};

export type EventAttendeeUpdateManyWithWhereWithoutUserInput = {
  data: EventAttendeeUpdateManyMutationInput;
  where: EventAttendeeScalarWhereInput;
};

export type EventAttendeeUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAttendeeCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventAttendeeCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventAttendeeCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventAttendeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventAttendeeUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<EventAttendeeUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<EventAttendeeUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type EventAttendeeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAttendeeCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<EventAttendeeCreateWithoutUserInput>>;
  createMany?: InputMaybe<EventAttendeeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventAttendeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EventAttendeeWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventAttendeeUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<EventAttendeeUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<EventAttendeeUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
  data: EventAttendeeUpdateWithoutEventInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeUpdateWithWhereUniqueWithoutUserInput = {
  data: EventAttendeeUpdateWithoutUserInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeUpdateWithoutEventInput = {
  badge_codes?: InputMaybe<EventAttendeeUpdatebadge_CodesInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEvent_AttendeesInput>;
};

export type EventAttendeeUpdateWithoutUserInput = {
  badge_codes?: InputMaybe<EventAttendeeUpdatebadge_CodesInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutEvent_AttendeesInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventAttendeeUpdatebadge_CodesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
  create: EventAttendeeCreateWithoutEventInput;
  update: EventAttendeeUpdateWithoutEventInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeUpsertWithWhereUniqueWithoutUserInput = {
  create: EventAttendeeCreateWithoutUserInput;
  update: EventAttendeeUpdateWithoutUserInput;
  where: EventAttendeeWhereUniqueInput;
};

export type EventAttendeeWhereInput = {
  AND?: InputMaybe<Array<EventAttendeeWhereInput>>;
  NOT?: InputMaybe<Array<EventAttendeeWhereInput>>;
  OR?: InputMaybe<Array<EventAttendeeWhereInput>>;
  badge_codes?: InputMaybe<StringNullableListFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type EventAttendeeWhereUniqueInput = {
  event_attendees_role_user_id_event_id_key?: InputMaybe<EventAttendeeEvent_Attendees_Role_User_Id_Event_Id_KeyCompoundUniqueInput>;
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventCreateInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateNestedOneWithoutEvent_ActivitiesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_ActivitiesInput>;
  create?: InputMaybe<EventCreateWithoutEvent_ActivitiesInput>;
};

export type EventCreateNestedOneWithoutEvent_AttendeesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_AttendeesInput>;
  create?: InputMaybe<EventCreateWithoutEvent_AttendeesInput>;
};

export type EventCreateNestedOneWithoutEvent_ScheduleInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_ScheduleInput>;
  create?: InputMaybe<EventCreateWithoutEvent_ScheduleInput>;
};

export type EventCreateNestedOneWithoutEvent_UpdatesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_UpdatesInput>;
  create?: InputMaybe<EventCreateWithoutEvent_UpdatesInput>;
};

export type EventCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<EventCreateWithoutFilesInput>;
};

export type EventCreateNestedOneWithoutMentor_RequestsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<EventCreateWithoutMentor_RequestsInput>;
};

export type EventCreateNestedOneWithoutMentorsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMentorsInput>;
  create?: InputMaybe<EventCreateWithoutMentorsInput>;
};

export type EventCreateNestedOneWithoutPipelinesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPipelinesInput>;
  create?: InputMaybe<EventCreateWithoutPipelinesInput>;
};

export type EventCreateNestedOneWithoutSponsor_CompaniesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsor_CompaniesInput>;
  create?: InputMaybe<EventCreateWithoutSponsor_CompaniesInput>;
};

export type EventCreateNestedOneWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<EventCreateWithoutSponsor_IndividualsInput>;
};

export type EventCreateNestedOneWithoutSponsorsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<EventCreateWithoutSponsorsInput>;
};

export type EventCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<EventCreateWithoutSubmissionsInput>;
};

export type EventCreateNestedOneWithoutTeam_MembersInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<EventCreateWithoutTeam_MembersInput>;
};

export type EventCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<EventCreateWithoutTeamsInput>;
};

export type EventCreateOrConnectWithoutEvent_ActivitiesInput = {
  create: EventCreateWithoutEvent_ActivitiesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEvent_AttendeesInput = {
  create: EventCreateWithoutEvent_AttendeesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEvent_ScheduleInput = {
  create: EventCreateWithoutEvent_ScheduleInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEvent_UpdatesInput = {
  create: EventCreateWithoutEvent_UpdatesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutFilesInput = {
  create: EventCreateWithoutFilesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutMentor_RequestsInput = {
  create: EventCreateWithoutMentor_RequestsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutMentorsInput = {
  create: EventCreateWithoutMentorsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutPipelinesInput = {
  create: EventCreateWithoutPipelinesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutSponsor_CompaniesInput = {
  create: EventCreateWithoutSponsor_CompaniesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutSponsor_IndividualsInput = {
  create: EventCreateWithoutSponsor_IndividualsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutSponsorsInput = {
  create: EventCreateWithoutSponsorsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutSubmissionsInput = {
  create: EventCreateWithoutSubmissionsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutTeam_MembersInput = {
  create: EventCreateWithoutTeam_MembersInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutTeamsInput = {
  create: EventCreateWithoutTeamsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutEvent_ActivitiesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEvent_AttendeesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEvent_ScheduleInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEvent_UpdatesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutFilesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutMentor_RequestsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutMentorsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutPipelinesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutSponsor_CompaniesInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutSponsor_IndividualsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutSponsorsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutSubmissionsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutTeam_MembersInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutTeamsInput = {
  contact_email?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["Int"]>;
  cost_currency?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_activities?: InputMaybe<EventActivityCreateNestedManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqCreateNestedManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleCreateNestedManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryCreateNestedManyWithoutEventInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutEventInput>;
  has_food?: InputMaybe<Scalars["Boolean"]>;
  has_reimbursements?: InputMaybe<Scalars["Boolean"]>;
  judging_model?: InputMaybe<Scalars["String"]>;
  length_hours?: InputMaybe<Scalars["Int"]>;
  mail_templates?: InputMaybe<MailTemplateCreateNestedManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListCreateNestedManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<Scalars["Int"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutEventInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  pipelines?: InputMaybe<PipelineCreateNestedManyWithoutEventInput>;
  size?: InputMaybe<Scalars["Int"]>;
  slug: Scalars["String"];
  sponsor_companies?: InputMaybe<SponsorCompanyCreateNestedManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorCreateNestedManyWithoutEventInput>;
  start_time: Scalars["DateTime"];
  submission_url?: InputMaybe<Scalars["String"]>;
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<EventCreatetagsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutEventInput>;
  themes?: InputMaybe<EventCreatethemesInput>;
  timezone?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type EventCreatetagsInput = {
  set: Array<Scalars["String"]>;
};

export type EventCreatethemesInput = {
  set: Array<Scalars["String"]>;
};

export type EventFaqCreateManyEventInput = {
  answer: Scalars["String"];
  category: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  links?: InputMaybe<EventFaqCreateManylinksInput>;
  question: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventFaqCreateManyEventInputEnvelope = {
  data: Array<EventFaqCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventFaqCreateManylinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventFaqCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventFaqWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventFaqCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventFaqCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventFaqCreateManyEventInputEnvelope>;
};

export type EventFaqCreateOrConnectWithoutEventInput = {
  create: EventFaqCreateWithoutEventInput;
  where: EventFaqWhereUniqueInput;
};

export type EventFaqCreateWithoutEventInput = {
  answer: Scalars["String"];
  category: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  links?: InputMaybe<EventFaqCreatelinksInput>;
  question: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventFaqCreatelinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventFaqListRelationFilter = {
  every?: InputMaybe<EventFaqWhereInput>;
  none?: InputMaybe<EventFaqWhereInput>;
  some?: InputMaybe<EventFaqWhereInput>;
};

export type EventFaqScalarWhereInput = {
  AND?: InputMaybe<Array<EventFaqScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventFaqScalarWhereInput>>;
  OR?: InputMaybe<Array<EventFaqScalarWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  question?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventFaqUpdateManyMutationInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  links?: InputMaybe<EventFaqUpdatelinksInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventFaqUpdateManyWithWhereWithoutEventInput = {
  data: EventFaqUpdateManyMutationInput;
  where: EventFaqScalarWhereInput;
};

export type EventFaqUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventFaqWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventFaqCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<EventFaqCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventFaqCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventFaqWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventFaqScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventFaqWhereUniqueInput>>;
  set?: InputMaybe<Array<EventFaqWhereUniqueInput>>;
  update?: InputMaybe<Array<EventFaqUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<EventFaqUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<EventFaqUpsertWithWhereUniqueWithoutEventInput>>;
};

export type EventFaqUpdateWithWhereUniqueWithoutEventInput = {
  data: EventFaqUpdateWithoutEventInput;
  where: EventFaqWhereUniqueInput;
};

export type EventFaqUpdateWithoutEventInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  links?: InputMaybe<EventFaqUpdatelinksInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventFaqUpdatelinksInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventFaqUpsertWithWhereUniqueWithoutEventInput = {
  create: EventFaqCreateWithoutEventInput;
  update: EventFaqUpdateWithoutEventInput;
  where: EventFaqWhereUniqueInput;
};

export type EventFaqWhereInput = {
  AND?: InputMaybe<Array<EventFaqWhereInput>>;
  NOT?: InputMaybe<Array<EventFaqWhereInput>>;
  OR?: InputMaybe<Array<EventFaqWhereInput>>;
  answer?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  question?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventFaqWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventOrderByInput = {
  contact_email?: InputMaybe<SortOrder>;
  cost?: InputMaybe<SortOrder>;
  cost_currency?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  has_food?: InputMaybe<SortOrder>;
  has_reimbursements?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  judging_model?: InputMaybe<SortOrder>;
  length_hours?: InputMaybe<SortOrder>;
  max_age_restriction?: InputMaybe<SortOrder>;
  min_age_restriction?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  submission_url?: InputMaybe<SortOrder>;
  swarm_event_id?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  themes?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export enum EventScalarFieldEnum {
  ContactEmail = "contact_email",
  Cost = "cost",
  CostCurrency = "cost_currency",
  CreatedAt = "created_at",
  Description = "description",
  EndTime = "end_time",
  HasFood = "has_food",
  HasReimbursements = "has_reimbursements",
  Id = "id",
  JudgingModel = "judging_model",
  LengthHours = "length_hours",
  MaxAgeRestriction = "max_age_restriction",
  MinAgeRestriction = "min_age_restriction",
  Name = "name",
  Size = "size",
  Slug = "slug",
  StartTime = "start_time",
  SubmissionUrl = "submission_url",
  SwarmEventId = "swarm_event_id",
  Tags = "tags",
  Themes = "themes",
  Timezone = "timezone",
  UpdatedAt = "updated_at",
  Website = "website",
}

export type EventScheduleCreateInput = {
  banner_link?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event: EventCreateNestedOneWithoutEvent_ScheduleInput;
  links?: InputMaybe<EventScheduleCreatelinksInput>;
  location: Scalars["String"];
  start_time: Scalars["DateTime"];
  tags?: InputMaybe<EventScheduleCreatetagsInput>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventScheduleCreateManyEventInput = {
  banner_link?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  id?: InputMaybe<Scalars["Int"]>;
  links?: InputMaybe<EventScheduleCreateManylinksInput>;
  location: Scalars["String"];
  start_time: Scalars["DateTime"];
  tags?: InputMaybe<EventScheduleCreateManytagsInput>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventScheduleCreateManyEventInputEnvelope = {
  data: Array<EventScheduleCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventScheduleCreateManylinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventScheduleCreateManytagsInput = {
  set: Array<Scalars["String"]>;
};

export type EventScheduleCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventScheduleCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventScheduleCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventScheduleCreateManyEventInputEnvelope>;
};

export type EventScheduleCreateOrConnectWithoutEventInput = {
  create: EventScheduleCreateWithoutEventInput;
  where: EventScheduleWhereUniqueInput;
};

export type EventScheduleCreateWithoutEventInput = {
  banner_link?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  links?: InputMaybe<EventScheduleCreatelinksInput>;
  location: Scalars["String"];
  start_time: Scalars["DateTime"];
  tags?: InputMaybe<EventScheduleCreatetagsInput>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventScheduleCreatelinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventScheduleCreatetagsInput = {
  set: Array<Scalars["String"]>;
};

export type EventScheduleListRelationFilter = {
  every?: InputMaybe<EventScheduleWhereInput>;
  none?: InputMaybe<EventScheduleWhereInput>;
  some?: InputMaybe<EventScheduleWhereInput>;
};

export type EventScheduleScalarWhereInput = {
  AND?: InputMaybe<Array<EventScheduleScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScheduleScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScheduleScalarWhereInput>>;
  banner_link?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventScheduleUpdateManyMutationInput = {
  banner_link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  links?: InputMaybe<EventScheduleUpdatelinksInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventScheduleUpdatetagsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventScheduleUpdateManyWithWhereWithoutEventInput = {
  data: EventScheduleUpdateManyMutationInput;
  where: EventScheduleScalarWhereInput;
};

export type EventScheduleUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventScheduleCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventScheduleCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventScheduleCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<EventScheduleWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventScheduleUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<EventScheduleUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<EventScheduleUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type EventScheduleUpdateWithWhereUniqueWithoutEventInput = {
  data: EventScheduleUpdateWithoutEventInput;
  where: EventScheduleWhereUniqueInput;
};

export type EventScheduleUpdateWithoutEventInput = {
  banner_link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  links?: InputMaybe<EventScheduleUpdatelinksInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventScheduleUpdatetagsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventScheduleUpdatelinksInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventScheduleUpdatetagsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventScheduleUpsertWithWhereUniqueWithoutEventInput = {
  create: EventScheduleCreateWithoutEventInput;
  update: EventScheduleUpdateWithoutEventInput;
  where: EventScheduleWhereUniqueInput;
};

export type EventScheduleWhereInput = {
  AND?: InputMaybe<Array<EventScheduleWhereInput>>;
  NOT?: InputMaybe<Array<EventScheduleWhereInput>>;
  OR?: InputMaybe<Array<EventScheduleWhereInput>>;
  banner_link?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventUpdateEntry = {
  __typename?: "EventUpdateEntry";
  category: Scalars["String"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  event_id: Scalars["Int"];
  id: Scalars["Int"];
  links: Array<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  send_time?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type EventUpdateEntryCreateInput = {
  category: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  event: EventCreateNestedOneWithoutEvent_UpdatesInput;
  links?: InputMaybe<EventUpdateEntryCreatelinksInput>;
  location?: InputMaybe<Scalars["String"]>;
  send_time?: InputMaybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventUpdateEntryCreateManyEventInput = {
  category: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  links?: InputMaybe<EventUpdateEntryCreateManylinksInput>;
  location?: InputMaybe<Scalars["String"]>;
  send_time?: InputMaybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventUpdateEntryCreateManyEventInputEnvelope = {
  data: Array<EventUpdateEntryCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventUpdateEntryCreateManylinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventUpdateEntryCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventUpdateEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventUpdateEntryCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventUpdateEntryCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventUpdateEntryCreateManyEventInputEnvelope>;
};

export type EventUpdateEntryCreateOrConnectWithoutEventInput = {
  create: EventUpdateEntryCreateWithoutEventInput;
  where: EventUpdateEntryWhereUniqueInput;
};

export type EventUpdateEntryCreateWithoutEventInput = {
  category: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  links?: InputMaybe<EventUpdateEntryCreatelinksInput>;
  location?: InputMaybe<Scalars["String"]>;
  send_time?: InputMaybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type EventUpdateEntryCreatelinksInput = {
  set: Array<Scalars["String"]>;
};

export type EventUpdateEntryListRelationFilter = {
  every?: InputMaybe<EventUpdateEntryWhereInput>;
  none?: InputMaybe<EventUpdateEntryWhereInput>;
  some?: InputMaybe<EventUpdateEntryWhereInput>;
};

export type EventUpdateEntryScalarWhereInput = {
  AND?: InputMaybe<Array<EventUpdateEntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventUpdateEntryScalarWhereInput>>;
  OR?: InputMaybe<Array<EventUpdateEntryScalarWhereInput>>;
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringNullableFilter>;
  send_time?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventUpdateEntryUpdateManyMutationInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<EventUpdateEntryUpdatelinksInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  send_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateEntryUpdateManyWithWhereWithoutEventInput = {
  data: EventUpdateEntryUpdateManyMutationInput;
  where: EventUpdateEntryScalarWhereInput;
};

export type EventUpdateEntryUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventUpdateEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventUpdateEntryCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventUpdateEntryCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventUpdateEntryCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<EventUpdateEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventUpdateEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventUpdateEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<EventUpdateEntryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<EventUpdateEntryUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<EventUpdateEntryUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<EventUpdateEntryUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type EventUpdateEntryUpdateWithWhereUniqueWithoutEventInput = {
  data: EventUpdateEntryUpdateWithoutEventInput;
  where: EventUpdateEntryWhereUniqueInput;
};

export type EventUpdateEntryUpdateWithoutEventInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<EventUpdateEntryUpdatelinksInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  send_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateEntryUpdatelinksInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventUpdateEntryUpsertWithWhereUniqueWithoutEventInput = {
  create: EventUpdateEntryCreateWithoutEventInput;
  update: EventUpdateEntryUpdateWithoutEventInput;
  where: EventUpdateEntryWhereUniqueInput;
};

export type EventUpdateEntryWhereInput = {
  AND?: InputMaybe<Array<EventUpdateEntryWhereInput>>;
  NOT?: InputMaybe<Array<EventUpdateEntryWhereInput>>;
  OR?: InputMaybe<Array<EventUpdateEntryWhereInput>>;
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringNullableFilter>;
  send_time?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type EventUpdateEntryWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type EventUpdateOneRequiredWithoutEvent_ActivitiesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_ActivitiesInput>;
  create?: InputMaybe<EventCreateWithoutEvent_ActivitiesInput>;
  update?: InputMaybe<EventUpdateWithoutEvent_ActivitiesInput>;
  upsert?: InputMaybe<EventUpsertWithoutEvent_ActivitiesInput>;
};

export type EventUpdateOneRequiredWithoutEvent_AttendeesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEvent_AttendeesInput>;
  create?: InputMaybe<EventCreateWithoutEvent_AttendeesInput>;
  update?: InputMaybe<EventUpdateWithoutEvent_AttendeesInput>;
  upsert?: InputMaybe<EventUpsertWithoutEvent_AttendeesInput>;
};

export type EventUpdateOneRequiredWithoutMentor_RequestsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<EventCreateWithoutMentor_RequestsInput>;
  update?: InputMaybe<EventUpdateWithoutMentor_RequestsInput>;
  upsert?: InputMaybe<EventUpsertWithoutMentor_RequestsInput>;
};

export type EventUpdateOneRequiredWithoutMentorsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutMentorsInput>;
  create?: InputMaybe<EventCreateWithoutMentorsInput>;
  update?: InputMaybe<EventUpdateWithoutMentorsInput>;
  upsert?: InputMaybe<EventUpsertWithoutMentorsInput>;
};

export type EventUpdateOneRequiredWithoutPipelinesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPipelinesInput>;
  create?: InputMaybe<EventCreateWithoutPipelinesInput>;
  update?: InputMaybe<EventUpdateWithoutPipelinesInput>;
  upsert?: InputMaybe<EventUpsertWithoutPipelinesInput>;
};

export type EventUpdateOneRequiredWithoutSponsor_CompaniesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsor_CompaniesInput>;
  create?: InputMaybe<EventCreateWithoutSponsor_CompaniesInput>;
  update?: InputMaybe<EventUpdateWithoutSponsor_CompaniesInput>;
  upsert?: InputMaybe<EventUpsertWithoutSponsor_CompaniesInput>;
};

export type EventUpdateOneRequiredWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<EventCreateWithoutSponsor_IndividualsInput>;
  update?: InputMaybe<EventUpdateWithoutSponsor_IndividualsInput>;
  upsert?: InputMaybe<EventUpsertWithoutSponsor_IndividualsInput>;
};

export type EventUpdateOneRequiredWithoutSponsorsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<EventCreateWithoutSponsorsInput>;
  update?: InputMaybe<EventUpdateWithoutSponsorsInput>;
  upsert?: InputMaybe<EventUpsertWithoutSponsorsInput>;
};

export type EventUpdateOneRequiredWithoutSubmissionsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<EventCreateWithoutSubmissionsInput>;
  update?: InputMaybe<EventUpdateWithoutSubmissionsInput>;
  upsert?: InputMaybe<EventUpsertWithoutSubmissionsInput>;
};

export type EventUpdateOneRequiredWithoutTeam_MembersInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<EventCreateWithoutTeam_MembersInput>;
  update?: InputMaybe<EventUpdateWithoutTeam_MembersInput>;
  upsert?: InputMaybe<EventUpsertWithoutTeam_MembersInput>;
};

export type EventUpdateOneRequiredWithoutTeamsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<EventCreateWithoutTeamsInput>;
  update?: InputMaybe<EventUpdateWithoutTeamsInput>;
  upsert?: InputMaybe<EventUpsertWithoutTeamsInput>;
};

export type EventUpdateOneWithoutFilesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<EventCreateWithoutFilesInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<EventUpdateWithoutFilesInput>;
  upsert?: InputMaybe<EventUpsertWithoutFilesInput>;
};

export type EventUpdateWithoutEvent_ActivitiesInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutEvent_AttendeesInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutFilesInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutMentor_RequestsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutMentorsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutPipelinesInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutSponsor_CompaniesInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutSponsor_IndividualsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutSponsorsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutSubmissionsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutTeam_MembersInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutTeamsInput = {
  contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cost?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  cost_currency?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event_activities?: InputMaybe<EventActivityUpdateManyWithoutEventInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutEventInput>;
  event_faqs?: InputMaybe<EventFaqUpdateManyWithoutEventInput>;
  event_schedule?: InputMaybe<EventScheduleUpdateManyWithoutEventInput>;
  event_updates?: InputMaybe<EventUpdateEntryUpdateManyWithoutEventInput>;
  files?: InputMaybe<FileUpdateManyWithoutEventInput>;
  has_food?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  has_reimbursements?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  judging_model?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  length_hours?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mail_templates?: InputMaybe<MailTemplateUpdateManyWithoutEventInput>;
  mailing_list?: InputMaybe<MailingListUpdateManyWithoutEventInput>;
  max_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutEventInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutEventInput>;
  min_age_restriction?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pipelines?: InputMaybe<PipelineUpdateManyWithoutEventInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_companies?: InputMaybe<SponsorCompanyUpdateManyWithoutEventInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutEventInput>;
  sponsors?: InputMaybe<SponsorUpdateManyWithoutEventInput>;
  start_time?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submission_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutEventInput>;
  swarm_event_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  tags?: InputMaybe<EventUpdatetagsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutEventInput>;
  themes?: InputMaybe<EventUpdatethemesInput>;
  timezone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdatetagsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventUpdatethemesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type EventUpsertWithoutEvent_ActivitiesInput = {
  create: EventCreateWithoutEvent_ActivitiesInput;
  update: EventUpdateWithoutEvent_ActivitiesInput;
};

export type EventUpsertWithoutEvent_AttendeesInput = {
  create: EventCreateWithoutEvent_AttendeesInput;
  update: EventUpdateWithoutEvent_AttendeesInput;
};

export type EventUpsertWithoutFilesInput = {
  create: EventCreateWithoutFilesInput;
  update: EventUpdateWithoutFilesInput;
};

export type EventUpsertWithoutMentor_RequestsInput = {
  create: EventCreateWithoutMentor_RequestsInput;
  update: EventUpdateWithoutMentor_RequestsInput;
};

export type EventUpsertWithoutMentorsInput = {
  create: EventCreateWithoutMentorsInput;
  update: EventUpdateWithoutMentorsInput;
};

export type EventUpsertWithoutPipelinesInput = {
  create: EventCreateWithoutPipelinesInput;
  update: EventUpdateWithoutPipelinesInput;
};

export type EventUpsertWithoutSponsor_CompaniesInput = {
  create: EventCreateWithoutSponsor_CompaniesInput;
  update: EventUpdateWithoutSponsor_CompaniesInput;
};

export type EventUpsertWithoutSponsor_IndividualsInput = {
  create: EventCreateWithoutSponsor_IndividualsInput;
  update: EventUpdateWithoutSponsor_IndividualsInput;
};

export type EventUpsertWithoutSponsorsInput = {
  create: EventCreateWithoutSponsorsInput;
  update: EventUpdateWithoutSponsorsInput;
};

export type EventUpsertWithoutSubmissionsInput = {
  create: EventCreateWithoutSubmissionsInput;
  update: EventUpdateWithoutSubmissionsInput;
};

export type EventUpsertWithoutTeam_MembersInput = {
  create: EventCreateWithoutTeam_MembersInput;
  update: EventUpdateWithoutTeam_MembersInput;
};

export type EventUpsertWithoutTeamsInput = {
  create: EventCreateWithoutTeamsInput;
  update: EventUpdateWithoutTeamsInput;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  contact_email?: InputMaybe<StringNullableFilter>;
  cost?: InputMaybe<IntNullableFilter>;
  cost_currency?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  end_time?: InputMaybe<DateTimeFilter>;
  event_activities?: InputMaybe<EventActivityListRelationFilter>;
  event_attendees?: InputMaybe<EventAttendeeListRelationFilter>;
  event_faqs?: InputMaybe<EventFaqListRelationFilter>;
  event_schedule?: InputMaybe<EventScheduleListRelationFilter>;
  event_updates?: InputMaybe<EventUpdateEntryListRelationFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  has_food?: InputMaybe<BoolNullableFilter>;
  has_reimbursements?: InputMaybe<BoolNullableFilter>;
  id?: InputMaybe<IntFilter>;
  judging_model?: InputMaybe<StringNullableFilter>;
  length_hours?: InputMaybe<IntNullableFilter>;
  mail_templates?: InputMaybe<MailTemplateListRelationFilter>;
  mailing_list?: InputMaybe<MailingListListRelationFilter>;
  max_age_restriction?: InputMaybe<IntNullableFilter>;
  mentor_requests?: InputMaybe<MentorRequestListRelationFilter>;
  mentors?: InputMaybe<MentorListRelationFilter>;
  min_age_restriction?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  pipelines?: InputMaybe<PipelineListRelationFilter>;
  size?: InputMaybe<IntNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  sponsor_companies?: InputMaybe<SponsorCompanyListRelationFilter>;
  sponsor_individuals?: InputMaybe<SponsorIndividualListRelationFilter>;
  sponsors?: InputMaybe<SponsorListRelationFilter>;
  start_time?: InputMaybe<DateTimeFilter>;
  submission_url?: InputMaybe<StringNullableFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  swarm_event_id?: InputMaybe<StringNullableFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  team_members?: InputMaybe<TeamMemberListRelationFilter>;
  teams?: InputMaybe<TeamListRelationFilter>;
  themes?: InputMaybe<StringNullableListFilter>;
  timezone?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type Field = {
  __typename?: "Field";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
};

export type FieldAnswer = {
  __typename?: "FieldAnswer";
  claim_id: Scalars["Int"];
  created_at: Scalars["DateTime"];
  field_id: Scalars["Int"];
  id: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  value: Scalars["JSON"];
};

export type FieldAnswerCreateManyClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type FieldAnswerCreateManyClaimInputEnvelope = {
  data: Array<FieldAnswerCreateManyClaimInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FieldAnswerCreateManyFieldInput = {
  claim_id: Scalars["Int"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type FieldAnswerCreateManyFieldInputEnvelope = {
  data: Array<FieldAnswerCreateManyFieldInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FieldAnswerCreateNestedManyWithoutClaimInput = {
  connect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FieldAnswerCreateOrConnectWithoutClaimInput>
  >;
  create?: InputMaybe<Array<FieldAnswerCreateWithoutClaimInput>>;
  createMany?: InputMaybe<FieldAnswerCreateManyClaimInputEnvelope>;
};

export type FieldAnswerCreateNestedManyWithoutFieldInput = {
  connect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FieldAnswerCreateOrConnectWithoutFieldInput>
  >;
  create?: InputMaybe<Array<FieldAnswerCreateWithoutFieldInput>>;
  createMany?: InputMaybe<FieldAnswerCreateManyFieldInputEnvelope>;
};

export type FieldAnswerCreateOrConnectWithoutClaimInput = {
  create: FieldAnswerCreateWithoutClaimInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerCreateOrConnectWithoutFieldInput = {
  create: FieldAnswerCreateWithoutFieldInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerCreateWithoutClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  field: FieldCreateNestedOneWithoutField_AnswersInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type FieldAnswerCreateWithoutFieldInput = {
  claim: ClaimCreateNestedOneWithoutField_AnswersInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value?: InputMaybe<Scalars["String"]>;
};

export type FieldAnswerField_Answers_Claim_Id_Field_Id_KeyCompoundUniqueInput =
  {
    claim_id: Scalars["Int"];
    field_id: Scalars["Int"];
  };

export type FieldAnswerInput = {
  answer?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type FieldAnswerListRelationFilter = {
  every?: InputMaybe<FieldAnswerWhereInput>;
  none?: InputMaybe<FieldAnswerWhereInput>;
  some?: InputMaybe<FieldAnswerWhereInput>;
};

export type FieldAnswerScalarWhereInput = {
  AND?: InputMaybe<Array<FieldAnswerScalarWhereInput>>;
  NOT?: InputMaybe<Array<FieldAnswerScalarWhereInput>>;
  OR?: InputMaybe<Array<FieldAnswerScalarWhereInput>>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  field_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type FieldAnswerUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FieldAnswerUpdateManyWithWhereWithoutClaimInput = {
  data: FieldAnswerUpdateManyMutationInput;
  where: FieldAnswerScalarWhereInput;
};

export type FieldAnswerUpdateManyWithWhereWithoutFieldInput = {
  data: FieldAnswerUpdateManyMutationInput;
  where: FieldAnswerScalarWhereInput;
};

export type FieldAnswerUpdateManyWithoutClaimInput = {
  connect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FieldAnswerCreateOrConnectWithoutClaimInput>
  >;
  create?: InputMaybe<Array<FieldAnswerCreateWithoutClaimInput>>;
  createMany?: InputMaybe<FieldAnswerCreateManyClaimInputEnvelope>;
  delete?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FieldAnswerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  update?: InputMaybe<Array<FieldAnswerUpdateWithWhereUniqueWithoutClaimInput>>;
  updateMany?: InputMaybe<
    Array<FieldAnswerUpdateManyWithWhereWithoutClaimInput>
  >;
  upsert?: InputMaybe<Array<FieldAnswerUpsertWithWhereUniqueWithoutClaimInput>>;
};

export type FieldAnswerUpdateManyWithoutFieldInput = {
  connect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FieldAnswerCreateOrConnectWithoutFieldInput>
  >;
  create?: InputMaybe<Array<FieldAnswerCreateWithoutFieldInput>>;
  createMany?: InputMaybe<FieldAnswerCreateManyFieldInputEnvelope>;
  delete?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FieldAnswerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<FieldAnswerWhereUniqueInput>>;
  update?: InputMaybe<Array<FieldAnswerUpdateWithWhereUniqueWithoutFieldInput>>;
  updateMany?: InputMaybe<
    Array<FieldAnswerUpdateManyWithWhereWithoutFieldInput>
  >;
  upsert?: InputMaybe<Array<FieldAnswerUpsertWithWhereUniqueWithoutFieldInput>>;
};

export type FieldAnswerUpdateWithWhereUniqueWithoutClaimInput = {
  data: FieldAnswerUpdateWithoutClaimInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerUpdateWithWhereUniqueWithoutFieldInput = {
  data: FieldAnswerUpdateWithoutFieldInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerUpdateWithoutClaimInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  field?: InputMaybe<FieldUpdateOneRequiredWithoutField_AnswersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FieldAnswerUpdateWithoutFieldInput = {
  claim?: InputMaybe<ClaimUpdateOneRequiredWithoutField_AnswersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FieldAnswerUpsertWithWhereUniqueWithoutClaimInput = {
  create: FieldAnswerCreateWithoutClaimInput;
  update: FieldAnswerUpdateWithoutClaimInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerUpsertWithWhereUniqueWithoutFieldInput = {
  create: FieldAnswerCreateWithoutFieldInput;
  update: FieldAnswerUpdateWithoutFieldInput;
  where: FieldAnswerWhereUniqueInput;
};

export type FieldAnswerWhereInput = {
  AND?: InputMaybe<Array<FieldAnswerWhereInput>>;
  NOT?: InputMaybe<Array<FieldAnswerWhereInput>>;
  OR?: InputMaybe<Array<FieldAnswerWhereInput>>;
  claim?: InputMaybe<ClaimRelationFilter>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  field?: InputMaybe<FieldRelationFilter>;
  field_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type FieldAnswerWhereUniqueInput = {
  field_answers_claim_id_field_id_key?: InputMaybe<FieldAnswerField_Answers_Claim_Id_Field_Id_KeyCompoundUniqueInput>;
  id?: InputMaybe<Scalars["Int"]>;
};

export type FieldCreateManyPipelineInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  fcfs_available?: InputMaybe<FieldCreateManyfcfs_AvailableInput>;
  field_type: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  is_required?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  valid_values?: InputMaybe<FieldCreateManyvalid_ValuesInput>;
};

export type FieldCreateManyPipelineInputEnvelope = {
  data: Array<FieldCreateManyPipelineInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FieldCreateManyfcfs_AvailableInput = {
  set: Array<Scalars["String"]>;
};

export type FieldCreateManyvalid_ValuesInput = {
  set: Array<Scalars["String"]>;
};

export type FieldCreateNestedManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<FieldWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FieldCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<FieldCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<FieldCreateManyPipelineInputEnvelope>;
};

export type FieldCreateNestedOneWithoutField_AnswersInput = {
  connect?: InputMaybe<FieldWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FieldCreateOrConnectWithoutField_AnswersInput>;
  create?: InputMaybe<FieldCreateWithoutField_AnswersInput>;
};

export type FieldCreateOrConnectWithoutField_AnswersInput = {
  create: FieldCreateWithoutField_AnswersInput;
  where: FieldWhereUniqueInput;
};

export type FieldCreateOrConnectWithoutPipelineInput = {
  create: FieldCreateWithoutPipelineInput;
  where: FieldWhereUniqueInput;
};

export type FieldCreateWithoutField_AnswersInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  fcfs_available?: InputMaybe<FieldCreatefcfs_AvailableInput>;
  field_type: Scalars["String"];
  is_required?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline: PipelineCreateNestedOneWithoutFieldsInput;
  slug?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  valid_values?: InputMaybe<FieldCreatevalid_ValuesInput>;
};

export type FieldCreateWithoutPipelineInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  fcfs_available?: InputMaybe<FieldCreatefcfs_AvailableInput>;
  field_answers?: InputMaybe<FieldAnswerCreateNestedManyWithoutFieldInput>;
  field_type: Scalars["String"];
  is_required?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  valid_values?: InputMaybe<FieldCreatevalid_ValuesInput>;
};

export type FieldCreatefcfs_AvailableInput = {
  set: Array<Scalars["String"]>;
};

export type FieldCreatevalid_ValuesInput = {
  set: Array<Scalars["String"]>;
};

export type FieldListRelationFilter = {
  every?: InputMaybe<FieldWhereInput>;
  none?: InputMaybe<FieldWhereInput>;
  some?: InputMaybe<FieldWhereInput>;
};

export type FieldRelationFilter = {
  is?: InputMaybe<FieldWhereInput>;
  isNot?: InputMaybe<FieldWhereInput>;
};

export type FieldScalarWhereInput = {
  AND?: InputMaybe<Array<FieldScalarWhereInput>>;
  NOT?: InputMaybe<Array<FieldScalarWhereInput>>;
  OR?: InputMaybe<Array<FieldScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  fcfs_available?: InputMaybe<StringNullableListFilter>;
  field_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  is_required?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  valid_values?: InputMaybe<StringNullableListFilter>;
};

export type FieldUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fcfs_available?: InputMaybe<FieldUpdatefcfs_AvailableInput>;
  field_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid_values?: InputMaybe<FieldUpdatevalid_ValuesInput>;
};

export type FieldUpdateManyWithWhereWithoutPipelineInput = {
  data: FieldUpdateManyMutationInput;
  where: FieldScalarWhereInput;
};

export type FieldUpdateManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<FieldWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FieldCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<FieldCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<FieldCreateManyPipelineInputEnvelope>;
  delete?: InputMaybe<Array<FieldWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FieldScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FieldWhereUniqueInput>>;
  set?: InputMaybe<Array<FieldWhereUniqueInput>>;
  update?: InputMaybe<Array<FieldUpdateWithWhereUniqueWithoutPipelineInput>>;
  updateMany?: InputMaybe<Array<FieldUpdateManyWithWhereWithoutPipelineInput>>;
  upsert?: InputMaybe<Array<FieldUpsertWithWhereUniqueWithoutPipelineInput>>;
};

export type FieldUpdateOneRequiredWithoutField_AnswersInput = {
  connect?: InputMaybe<FieldWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FieldCreateOrConnectWithoutField_AnswersInput>;
  create?: InputMaybe<FieldCreateWithoutField_AnswersInput>;
  update?: InputMaybe<FieldUpdateWithoutField_AnswersInput>;
  upsert?: InputMaybe<FieldUpsertWithoutField_AnswersInput>;
};

export type FieldUpdateWithWhereUniqueWithoutPipelineInput = {
  data: FieldUpdateWithoutPipelineInput;
  where: FieldWhereUniqueInput;
};

export type FieldUpdateWithoutField_AnswersInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fcfs_available?: InputMaybe<FieldUpdatefcfs_AvailableInput>;
  field_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutFieldsInput>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid_values?: InputMaybe<FieldUpdatevalid_ValuesInput>;
};

export type FieldUpdateWithoutPipelineInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fcfs_available?: InputMaybe<FieldUpdatefcfs_AvailableInput>;
  field_answers?: InputMaybe<FieldAnswerUpdateManyWithoutFieldInput>;
  field_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_required?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid_values?: InputMaybe<FieldUpdatevalid_ValuesInput>;
};

export type FieldUpdatefcfs_AvailableInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type FieldUpdatevalid_ValuesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type FieldUpsertWithWhereUniqueWithoutPipelineInput = {
  create: FieldCreateWithoutPipelineInput;
  update: FieldUpdateWithoutPipelineInput;
  where: FieldWhereUniqueInput;
};

export type FieldUpsertWithoutField_AnswersInput = {
  create: FieldCreateWithoutField_AnswersInput;
  update: FieldUpdateWithoutField_AnswersInput;
};

export type FieldWhereInput = {
  AND?: InputMaybe<Array<FieldWhereInput>>;
  NOT?: InputMaybe<Array<FieldWhereInput>>;
  OR?: InputMaybe<Array<FieldWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  fcfs_available?: InputMaybe<StringNullableListFilter>;
  field_answers?: InputMaybe<FieldAnswerListRelationFilter>;
  field_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  is_required?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  valid_values?: InputMaybe<StringNullableListFilter>;
};

export type FieldWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type FieldWithAnswer = {
  __typename?: "FieldWithAnswer";
  answer?: Maybe<FieldAnswer>;
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
};

export type File = {
  __typename?: "File";
  created_at: Scalars["DateTime"];
  download: FileDownload;
  event_slug?: Maybe<Scalars["String"]>;
  file_type: Scalars["String"];
  id: Scalars["Int"];
  mime_type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: Maybe<Scalars["Int"]>;
  updated_at: Scalars["DateTime"];
  user_id?: Maybe<Scalars["Int"]>;
};

export type FileCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  file_type: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  mime_type?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id?: InputMaybe<Scalars["Int"]>;
};

export type FileCreateManyEventInputEnvelope = {
  data: Array<FileCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FileCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug?: InputMaybe<Scalars["String"]>;
  file_type: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  mime_type?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FileCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<FileCreateWithoutEventInput>>;
  createMany?: InputMaybe<FileCreateManyEventInputEnvelope>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateNestedOneWithoutSponsorsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<FileCreateWithoutSponsorsInput>;
};

export type FileCreateOrConnectWithoutEventInput = {
  create: FileCreateWithoutEventInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutSponsorsInput = {
  create: FileCreateWithoutSponsorsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  file_type: Scalars["String"];
  mime_type?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  sponsors?: InputMaybe<SponsorCreateNestedOneWithoutFilesInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutFilesInput>;
};

export type FileCreateWithoutSponsorsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event?: InputMaybe<EventCreateNestedOneWithoutFilesInput>;
  file_type: Scalars["String"];
  mime_type?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutFilesInput>;
};

export type FileCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event?: InputMaybe<EventCreateNestedOneWithoutFilesInput>;
  file_type: Scalars["String"];
  mime_type?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path: Scalars["String"];
  size?: InputMaybe<Scalars["Int"]>;
  sponsors?: InputMaybe<SponsorCreateNestedOneWithoutFilesInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type FileDownload = {
  __typename?: "FileDownload";
  expiry: Scalars["String"];
  is_valid: Scalars["Boolean"];
  name: Scalars["String"];
  uri: Scalars["String"];
};

export type FileFieldAnswerType = {
  __typename?: "FileFieldAnswerType";
  expiry: Scalars["String"];
  id: Scalars["Int"];
  is_valid?: Maybe<Scalars["Boolean"]>;
  mime_type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  uri: Scalars["String"];
};

export type FileFieldAnswerTypeWrapper = {
  __typename?: "FileFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Array<FileFieldAnswerType>>;
};

export type FileInput = {
  fieldId: Scalars["Float"];
  file: Scalars["Upload"];
  type: Scalars["String"];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileOrderByInput = {
  created_at?: InputMaybe<SortOrder>;
  event_slug?: InputMaybe<SortOrder>;
  file_type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mime_type?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  s3_path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export enum FileScalarFieldEnum {
  CreatedAt = "created_at",
  EventSlug = "event_slug",
  FileType = "file_type",
  Id = "id",
  MimeType = "mime_type",
  Name = "name",
  Permissions = "permissions",
  S3Path = "s3_path",
  Size = "size",
  UpdatedAt = "updated_at",
  UserId = "user_id",
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_slug?: InputMaybe<StringNullableFilter>;
  file_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  mime_type?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  s3_path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type FileUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  mime_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutEventInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<FileCreateWithoutEventInput>>;
  createMany?: InputMaybe<FileCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutEventInput>>;
};

export type FileUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateOneWithoutSponsorsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutSponsorsInput>;
  create?: InputMaybe<FileCreateWithoutSponsorsInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<FileUpdateWithoutSponsorsInput>;
  upsert?: InputMaybe<FileUpsertWithoutSponsorsInput>;
};

export type FileUpdateWithWhereUniqueWithoutEventInput = {
  data: FileUpdateWithoutEventInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  mime_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsors?: InputMaybe<SponsorUpdateOneWithoutFilesInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFilesInput>;
};

export type FileUpdateWithoutSponsorsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutFilesInput>;
  file_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  mime_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutFilesInput>;
};

export type FileUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneWithoutFilesInput>;
  file_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  mime_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  s3_path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsors?: InputMaybe<SponsorUpdateOneWithoutFilesInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutEventInput = {
  create: FileCreateWithoutEventInput;
  update: FileUpdateWithoutEventInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithoutSponsorsInput = {
  create: FileCreateWithoutSponsorsInput;
  update: FileUpdateWithoutSponsorsInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringNullableFilter>;
  file_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  mime_type?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  s3_path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntNullableFilter>;
  sponsors?: InputMaybe<SponsorRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type FirebaseTokenCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value: Scalars["String"];
};

export type FirebaseTokenCreateManyUserInputEnvelope = {
  data: Array<FirebaseTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FirebaseTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FirebaseTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FirebaseTokenCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<FirebaseTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<FirebaseTokenCreateManyUserInputEnvelope>;
};

export type FirebaseTokenCreateOrConnectWithoutUserInput = {
  create: FirebaseTokenCreateWithoutUserInput;
  where: FirebaseTokenWhereUniqueInput;
};

export type FirebaseTokenCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value: Scalars["String"];
};

export type FirebaseTokenListRelationFilter = {
  every?: InputMaybe<FirebaseTokenWhereInput>;
  none?: InputMaybe<FirebaseTokenWhereInput>;
  some?: InputMaybe<FirebaseTokenWhereInput>;
};

export type FirebaseTokenScalarWhereInput = {
  AND?: InputMaybe<Array<FirebaseTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<FirebaseTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<FirebaseTokenScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FirebaseTokenUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FirebaseTokenUpdateManyWithWhereWithoutUserInput = {
  data: FirebaseTokenUpdateManyMutationInput;
  where: FirebaseTokenScalarWhereInput;
};

export type FirebaseTokenUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FirebaseTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FirebaseTokenCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<FirebaseTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<FirebaseTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FirebaseTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FirebaseTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FirebaseTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<FirebaseTokenWhereUniqueInput>>;
  update?: InputMaybe<
    Array<FirebaseTokenUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<FirebaseTokenUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<FirebaseTokenUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type FirebaseTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: FirebaseTokenUpdateWithoutUserInput;
  where: FirebaseTokenWhereUniqueInput;
};

export type FirebaseTokenUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FirebaseTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: FirebaseTokenCreateWithoutUserInput;
  update: FirebaseTokenUpdateWithoutUserInput;
  where: FirebaseTokenWhereUniqueInput;
};

export type FirebaseTokenWhereInput = {
  AND?: InputMaybe<Array<FirebaseTokenWhereInput>>;
  NOT?: InputMaybe<Array<FirebaseTokenWhereInput>>;
  OR?: InputMaybe<Array<FirebaseTokenWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
  value?: InputMaybe<StringFilter>;
};

export type FirebaseTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type ForgottenPasswordCreateManyUserInput = {
  callback_url?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  is_disabled?: InputMaybe<Scalars["Boolean"]>;
  token: Scalars["String"];
  token_only: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ForgottenPasswordCreateManyUserInputEnvelope = {
  data: Array<ForgottenPasswordCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ForgottenPasswordCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ForgottenPasswordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ForgottenPasswordCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<ForgottenPasswordCreateWithoutUserInput>>;
  createMany?: InputMaybe<ForgottenPasswordCreateManyUserInputEnvelope>;
};

export type ForgottenPasswordCreateOrConnectWithoutUserInput = {
  create: ForgottenPasswordCreateWithoutUserInput;
  where: ForgottenPasswordWhereUniqueInput;
};

export type ForgottenPasswordCreateWithoutUserInput = {
  callback_url?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  is_disabled?: InputMaybe<Scalars["Boolean"]>;
  token: Scalars["String"];
  token_only: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ForgottenPasswordListRelationFilter = {
  every?: InputMaybe<ForgottenPasswordWhereInput>;
  none?: InputMaybe<ForgottenPasswordWhereInput>;
  some?: InputMaybe<ForgottenPasswordWhereInput>;
};

export type ForgottenPasswordScalarWhereInput = {
  AND?: InputMaybe<Array<ForgottenPasswordScalarWhereInput>>;
  NOT?: InputMaybe<Array<ForgottenPasswordScalarWhereInput>>;
  OR?: InputMaybe<Array<ForgottenPasswordScalarWhereInput>>;
  callback_url?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  is_disabled?: InputMaybe<BoolNullableFilter>;
  token?: InputMaybe<StringFilter>;
  token_only?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ForgottenPasswordUpdateManyMutationInput = {
  callback_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  token_only?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ForgottenPasswordUpdateManyWithWhereWithoutUserInput = {
  data: ForgottenPasswordUpdateManyMutationInput;
  where: ForgottenPasswordScalarWhereInput;
};

export type ForgottenPasswordUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ForgottenPasswordWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ForgottenPasswordCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<ForgottenPasswordCreateWithoutUserInput>>;
  createMany?: InputMaybe<ForgottenPasswordCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ForgottenPasswordWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ForgottenPasswordScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ForgottenPasswordWhereUniqueInput>>;
  set?: InputMaybe<Array<ForgottenPasswordWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ForgottenPasswordUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<ForgottenPasswordUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<ForgottenPasswordUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type ForgottenPasswordUpdateWithWhereUniqueWithoutUserInput = {
  data: ForgottenPasswordUpdateWithoutUserInput;
  where: ForgottenPasswordWhereUniqueInput;
};

export type ForgottenPasswordUpdateWithoutUserInput = {
  callback_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  token_only?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ForgottenPasswordUpsertWithWhereUniqueWithoutUserInput = {
  create: ForgottenPasswordCreateWithoutUserInput;
  update: ForgottenPasswordUpdateWithoutUserInput;
  where: ForgottenPasswordWhereUniqueInput;
};

export type ForgottenPasswordWhereInput = {
  AND?: InputMaybe<Array<ForgottenPasswordWhereInput>>;
  NOT?: InputMaybe<Array<ForgottenPasswordWhereInput>>;
  OR?: InputMaybe<Array<ForgottenPasswordWhereInput>>;
  callback_url?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  is_disabled?: InputMaybe<BoolNullableFilter>;
  token?: InputMaybe<StringFilter>;
  token_only?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type ForgottenPasswordWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export enum Gender {
  Female = "female",
  Male = "male",
  Other = "other",
  PreferNotToSpecify = "prefer_not_to_specify",
}

export type HealthResponse = {
  __typename?: "HealthResponse";
  healthy: Scalars["Boolean"];
};

export enum InstitutionTypeEnum {
  HighSchool = "high_school",
  MiddleSchool = "middle_school",
  Other = "other",
  PostSecondary = "post_secondary",
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]>;
  divide?: InputMaybe<Scalars["Int"]>;
  increment?: InputMaybe<Scalars["Int"]>;
  multiply?: InputMaybe<Scalars["Int"]>;
  set?: InputMaybe<Scalars["Int"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["Int"]>>;
  has?: InputMaybe<Scalars["Int"]>;
  hasEvery?: InputMaybe<Array<Scalars["Int"]>>;
  hasSome?: InputMaybe<Array<Scalars["Int"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type JsonFieldAnswerTypeWrapper = {
  __typename?: "JSONFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Scalars["JSON"]>;
};

export type JwtToken = {
  __typename?: "JWTToken";
  accessJwt: Scalars["String"];
  user: User;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
};

export type MailTemplateCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  html: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  subject: Scalars["String"];
  trigger_id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MailTemplateCreateManyEventInputEnvelope = {
  data: Array<MailTemplateCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MailTemplateCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<MailTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MailTemplateCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MailTemplateCreateWithoutEventInput>>;
  createMany?: InputMaybe<MailTemplateCreateManyEventInputEnvelope>;
};

export type MailTemplateCreateOrConnectWithoutEventInput = {
  create: MailTemplateCreateWithoutEventInput;
  where: MailTemplateWhereUniqueInput;
};

export type MailTemplateCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  html: Scalars["String"];
  mail_trigger?: InputMaybe<MailTriggerCreateNestedOneWithoutMail_TemplatesInput>;
  name: Scalars["String"];
  slug: Scalars["String"];
  subject: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MailTemplateListRelationFilter = {
  every?: InputMaybe<MailTemplateWhereInput>;
  none?: InputMaybe<MailTemplateWhereInput>;
  some?: InputMaybe<MailTemplateWhereInput>;
};

export type MailTemplateRelationFilter = {
  is?: InputMaybe<MailTemplateWhereInput>;
  isNot?: InputMaybe<MailTemplateWhereInput>;
};

export type MailTemplateScalarWhereInput = {
  AND?: InputMaybe<Array<MailTemplateScalarWhereInput>>;
  NOT?: InputMaybe<Array<MailTemplateScalarWhereInput>>;
  OR?: InputMaybe<Array<MailTemplateScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  event_id?: InputMaybe<IntFilter>;
  html?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  subject?: InputMaybe<StringFilter>;
  trigger_id?: InputMaybe<IntNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MailTemplateUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  html?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subject?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MailTemplateUpdateManyWithWhereWithoutEventInput = {
  data: MailTemplateUpdateManyMutationInput;
  where: MailTemplateScalarWhereInput;
};

export type MailTemplateUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<MailTemplateWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MailTemplateCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MailTemplateCreateWithoutEventInput>>;
  createMany?: InputMaybe<MailTemplateCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<MailTemplateWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MailTemplateScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MailTemplateWhereUniqueInput>>;
  set?: InputMaybe<Array<MailTemplateWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MailTemplateUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<MailTemplateUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<MailTemplateUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type MailTemplateUpdateWithWhereUniqueWithoutEventInput = {
  data: MailTemplateUpdateWithoutEventInput;
  where: MailTemplateWhereUniqueInput;
};

export type MailTemplateUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  html?: InputMaybe<StringFieldUpdateOperationsInput>;
  mail_trigger?: InputMaybe<MailTriggerUpdateOneWithoutMail_TemplatesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subject?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MailTemplateUpsertWithWhereUniqueWithoutEventInput = {
  create: MailTemplateCreateWithoutEventInput;
  update: MailTemplateUpdateWithoutEventInput;
  where: MailTemplateWhereUniqueInput;
};

export type MailTemplateWhereInput = {
  AND?: InputMaybe<Array<MailTemplateWhereInput>>;
  NOT?: InputMaybe<Array<MailTemplateWhereInput>>;
  OR?: InputMaybe<Array<MailTemplateWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  html?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  mail_trigger?: InputMaybe<MailTriggerRelationFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  subject?: InputMaybe<StringFilter>;
  trigger_id?: InputMaybe<IntNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MailTemplateWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
  trigger_id?: InputMaybe<Scalars["Int"]>;
};

export type MailTriggerCreateNestedOneWithoutMail_TemplatesInput = {
  connect?: InputMaybe<MailTriggerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MailTriggerCreateOrConnectWithoutMail_TemplatesInput>;
  create?: InputMaybe<MailTriggerCreateWithoutMail_TemplatesInput>;
};

export type MailTriggerCreateOrConnectWithoutMail_TemplatesInput = {
  create: MailTriggerCreateWithoutMail_TemplatesInput;
  where: MailTriggerWhereUniqueInput;
};

export type MailTriggerCreateWithoutMail_TemplatesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  record_id: Scalars["Int"];
  record_type: RecordTypeEmail;
  trigger_type: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MailTriggerMail_Triggers_Record_Id_Record_Type_Trigger_Type_KeyCompoundUniqueInput =
  {
    record_id: Scalars["Int"];
    record_type: RecordTypeEmail;
    trigger_type: Scalars["String"];
  };

export type MailTriggerRelationFilter = {
  is?: InputMaybe<MailTriggerWhereInput>;
  isNot?: InputMaybe<MailTriggerWhereInput>;
};

export type MailTriggerUpdateOneWithoutMail_TemplatesInput = {
  connect?: InputMaybe<MailTriggerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MailTriggerCreateOrConnectWithoutMail_TemplatesInput>;
  create?: InputMaybe<MailTriggerCreateWithoutMail_TemplatesInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<MailTriggerUpdateWithoutMail_TemplatesInput>;
  upsert?: InputMaybe<MailTriggerUpsertWithoutMail_TemplatesInput>;
};

export type MailTriggerUpdateWithoutMail_TemplatesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  record_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  record_type?: InputMaybe<EnumRecordTypeEmailFieldUpdateOperationsInput>;
  trigger_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MailTriggerUpsertWithoutMail_TemplatesInput = {
  create: MailTriggerCreateWithoutMail_TemplatesInput;
  update: MailTriggerUpdateWithoutMail_TemplatesInput;
};

export type MailTriggerWhereInput = {
  AND?: InputMaybe<Array<MailTriggerWhereInput>>;
  NOT?: InputMaybe<Array<MailTriggerWhereInput>>;
  OR?: InputMaybe<Array<MailTriggerWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  mail_templates?: InputMaybe<MailTemplateRelationFilter>;
  record_id?: InputMaybe<IntFilter>;
  record_type?: InputMaybe<EnumRecordTypeEmailFilter>;
  trigger_type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MailTriggerWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  mail_triggers_record_id_record_type_trigger_type_key?: InputMaybe<MailTriggerMail_Triggers_Record_Id_Record_Type_Trigger_Type_KeyCompoundUniqueInput>;
};

export type MailingList = {
  __typename?: "MailingList";
  created_at: Scalars["DateTime"];
  email: Scalars["String"];
  event_slug: Scalars["String"];
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type MailingListCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MailingListCreateManyEventInputEnvelope = {
  data: Array<MailingListCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MailingListCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<MailingListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MailingListCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MailingListCreateWithoutEventInput>>;
  createMany?: InputMaybe<MailingListCreateManyEventInputEnvelope>;
};

export type MailingListCreateOrConnectWithoutEventInput = {
  create: MailingListCreateWithoutEventInput;
  where: MailingListWhereUniqueInput;
};

export type MailingListCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MailingListListRelationFilter = {
  every?: InputMaybe<MailingListWhereInput>;
  none?: InputMaybe<MailingListWhereInput>;
  some?: InputMaybe<MailingListWhereInput>;
};

export type MailingListMailing_List_Event_Slug_Email_KeyCompoundUniqueInput = {
  email: Scalars["String"];
  event_slug: Scalars["String"];
};

export type MailingListOrderByInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  event_slug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export enum MailingListScalarFieldEnum {
  CreatedAt = "created_at",
  Email = "email",
  EventSlug = "event_slug",
  Id = "id",
  Name = "name",
  UpdatedAt = "updated_at",
}

export type MailingListScalarWhereInput = {
  AND?: InputMaybe<Array<MailingListScalarWhereInput>>;
  NOT?: InputMaybe<Array<MailingListScalarWhereInput>>;
  OR?: InputMaybe<Array<MailingListScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

/** mailing list signup response */
export type MailingListSignupReturnType = {
  __typename?: "MailingListSignupReturnType";
  alreadySignup?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
};

export type MailingListUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MailingListUpdateManyWithWhereWithoutEventInput = {
  data: MailingListUpdateManyMutationInput;
  where: MailingListScalarWhereInput;
};

export type MailingListUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<MailingListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MailingListCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MailingListCreateWithoutEventInput>>;
  createMany?: InputMaybe<MailingListCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<MailingListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MailingListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MailingListWhereUniqueInput>>;
  set?: InputMaybe<Array<MailingListWhereUniqueInput>>;
  update?: InputMaybe<Array<MailingListUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<
    Array<MailingListUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<Array<MailingListUpsertWithWhereUniqueWithoutEventInput>>;
};

export type MailingListUpdateWithWhereUniqueWithoutEventInput = {
  data: MailingListUpdateWithoutEventInput;
  where: MailingListWhereUniqueInput;
};

export type MailingListUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MailingListUpsertWithWhereUniqueWithoutEventInput = {
  create: MailingListCreateWithoutEventInput;
  update: MailingListUpdateWithoutEventInput;
  where: MailingListWhereUniqueInput;
};

export type MailingListWhereInput = {
  AND?: InputMaybe<Array<MailingListWhereInput>>;
  NOT?: InputMaybe<Array<MailingListWhereInput>>;
  OR?: InputMaybe<Array<MailingListWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MailingListWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  mailing_list_event_slug_email_key?: InputMaybe<MailingListMailing_List_Event_Slug_Email_KeyCompoundUniqueInput>;
};

export type MentorCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type MentorCreateManyEventInputEnvelope = {
  data: Array<MentorCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorCreateManyUserInputEnvelope = {
  data: Array<MentorCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MentorCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<MentorCreateWithoutEventInput>>;
  createMany?: InputMaybe<MentorCreateManyEventInputEnvelope>;
};

export type MentorCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MentorCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MentorCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorCreateManyUserInputEnvelope>;
};

export type MentorCreateNestedOneWithoutMentor_RequestsInput = {
  connect?: InputMaybe<MentorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MentorCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<MentorCreateWithoutMentor_RequestsInput>;
};

export type MentorCreateOrConnectWithoutEventInput = {
  create: MentorCreateWithoutEventInput;
  where: MentorWhereUniqueInput;
};

export type MentorCreateOrConnectWithoutMentor_RequestsInput = {
  create: MentorCreateWithoutMentor_RequestsInput;
  where: MentorWhereUniqueInput;
};

export type MentorCreateOrConnectWithoutUserInput = {
  create: MentorCreateWithoutUserInput;
  where: MentorWhereUniqueInput;
};

export type MentorCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutMentorInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentorsInput;
};

export type MentorCreateWithoutMentor_RequestsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutMentorsInput;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentorsInput;
};

export type MentorCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutMentorsInput;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutMentorInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorListRelationFilter = {
  every?: InputMaybe<MentorWhereInput>;
  none?: InputMaybe<MentorWhereInput>;
  some?: InputMaybe<MentorWhereInput>;
};

export type MentorMentors_Event_Id_User_Id_KeyCompoundUniqueInput = {
  event_id: Scalars["Int"];
  user_id: Scalars["Int"];
};

export type MentorRelationFilter = {
  is?: InputMaybe<MentorWhereInput>;
  isNot?: InputMaybe<MentorWhereInput>;
};

export type MentorRequestCommentCreateManyMentor_RequestInput = {
  author_id: Scalars["Int"];
  body: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCommentCreateManyMentor_RequestInputEnvelope = {
  data: Array<MentorRequestCommentCreateManyMentor_RequestInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorRequestCommentCreateManyUserInput = {
  body: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  request_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCommentCreateManyUserInputEnvelope = {
  data: Array<MentorRequestCommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorRequestCommentCreateNestedManyWithoutMentor_RequestInput = {
  connect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCommentCreateOrConnectWithoutMentor_RequestInput>
  >;
  create?: InputMaybe<
    Array<MentorRequestCommentCreateWithoutMentor_RequestInput>
  >;
  createMany?: InputMaybe<MentorRequestCommentCreateManyMentor_RequestInputEnvelope>;
};

export type MentorRequestCommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCommentCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MentorRequestCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorRequestCommentCreateManyUserInputEnvelope>;
};

export type MentorRequestCommentCreateOrConnectWithoutMentor_RequestInput = {
  create: MentorRequestCommentCreateWithoutMentor_RequestInput;
  where: MentorRequestCommentWhereUniqueInput;
};

export type MentorRequestCommentCreateOrConnectWithoutUserInput = {
  create: MentorRequestCommentCreateWithoutUserInput;
  where: MentorRequestCommentWhereUniqueInput;
};

export type MentorRequestCommentCreateWithoutMentor_RequestInput = {
  body: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentor_Request_CommentsInput;
};

export type MentorRequestCommentCreateWithoutUserInput = {
  body: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  mentor_request: MentorRequestCreateNestedOneWithoutMentor_Request_CommentsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCommentListRelationFilter = {
  every?: InputMaybe<MentorRequestCommentWhereInput>;
  none?: InputMaybe<MentorRequestCommentWhereInput>;
  some?: InputMaybe<MentorRequestCommentWhereInput>;
};

export type MentorRequestCommentScalarWhereInput = {
  AND?: InputMaybe<Array<MentorRequestCommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<MentorRequestCommentScalarWhereInput>>;
  OR?: InputMaybe<Array<MentorRequestCommentScalarWhereInput>>;
  author_id?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  request_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MentorRequestCommentUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorRequestCommentUpdateManyWithWhereWithoutMentor_RequestInput =
  {
    data: MentorRequestCommentUpdateManyMutationInput;
    where: MentorRequestCommentScalarWhereInput;
  };

export type MentorRequestCommentUpdateManyWithWhereWithoutUserInput = {
  data: MentorRequestCommentUpdateManyMutationInput;
  where: MentorRequestCommentScalarWhereInput;
};

export type MentorRequestCommentUpdateManyWithoutMentor_RequestInput = {
  connect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCommentCreateOrConnectWithoutMentor_RequestInput>
  >;
  create?: InputMaybe<
    Array<MentorRequestCommentCreateWithoutMentor_RequestInput>
  >;
  createMany?: InputMaybe<MentorRequestCommentCreateManyMentor_RequestInputEnvelope>;
  delete?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorRequestCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MentorRequestCommentUpdateWithWhereUniqueWithoutMentor_RequestInput>
  >;
  updateMany?: InputMaybe<
    Array<MentorRequestCommentUpdateManyWithWhereWithoutMentor_RequestInput>
  >;
  upsert?: InputMaybe<
    Array<MentorRequestCommentUpsertWithWhereUniqueWithoutMentor_RequestInput>
  >;
};

export type MentorRequestCommentUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCommentCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MentorRequestCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorRequestCommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorRequestCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorRequestCommentWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MentorRequestCommentUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MentorRequestCommentUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<MentorRequestCommentUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type MentorRequestCommentUpdateWithWhereUniqueWithoutMentor_RequestInput =
  {
    data: MentorRequestCommentUpdateWithoutMentor_RequestInput;
    where: MentorRequestCommentWhereUniqueInput;
  };

export type MentorRequestCommentUpdateWithWhereUniqueWithoutUserInput = {
  data: MentorRequestCommentUpdateWithoutUserInput;
  where: MentorRequestCommentWhereUniqueInput;
};

export type MentorRequestCommentUpdateWithoutMentor_RequestInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentor_Request_CommentsInput>;
};

export type MentorRequestCommentUpdateWithoutUserInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mentor_request?: InputMaybe<MentorRequestUpdateOneRequiredWithoutMentor_Request_CommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorRequestCommentUpsertWithWhereUniqueWithoutMentor_RequestInput =
  {
    create: MentorRequestCommentCreateWithoutMentor_RequestInput;
    update: MentorRequestCommentUpdateWithoutMentor_RequestInput;
    where: MentorRequestCommentWhereUniqueInput;
  };

export type MentorRequestCommentUpsertWithWhereUniqueWithoutUserInput = {
  create: MentorRequestCommentCreateWithoutUserInput;
  update: MentorRequestCommentUpdateWithoutUserInput;
  where: MentorRequestCommentWhereUniqueInput;
};

export type MentorRequestCommentWhereInput = {
  AND?: InputMaybe<Array<MentorRequestCommentWhereInput>>;
  NOT?: InputMaybe<Array<MentorRequestCommentWhereInput>>;
  OR?: InputMaybe<Array<MentorRequestCommentWhereInput>>;
  author_id?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  mentor_request?: InputMaybe<MentorRequestRelationFilter>;
  request_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type MentorRequestCommentWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type MentorRequestCreateManyEventInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  hacker_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  mentor_id?: InputMaybe<Scalars["Int"]>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCreateManyEventInputEnvelope = {
  data: Array<MentorRequestCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorRequestCreateManyMentorInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_id: Scalars["Int"];
  hacker_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCreateManyMentorInputEnvelope = {
  data: Array<MentorRequestCreateManyMentorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorRequestCreateManyUserInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_id: Scalars["Int"];
  id?: InputMaybe<Scalars["Int"]>;
  mentor_id?: InputMaybe<Scalars["Int"]>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestCreateManyUserInputEnvelope = {
  data: Array<MentorRequestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MentorRequestCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutEventInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyEventInputEnvelope>;
};

export type MentorRequestCreateNestedManyWithoutMentorInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutMentorInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutMentorInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyMentorInputEnvelope>;
};

export type MentorRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyUserInputEnvelope>;
};

export type MentorRequestCreateNestedOneWithoutMentor_Request_CommentsInput = {
  connect?: InputMaybe<MentorRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MentorRequestCreateOrConnectWithoutMentor_Request_CommentsInput>;
  create?: InputMaybe<MentorRequestCreateWithoutMentor_Request_CommentsInput>;
};

export type MentorRequestCreateOrConnectWithoutEventInput = {
  create: MentorRequestCreateWithoutEventInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestCreateOrConnectWithoutMentorInput = {
  create: MentorRequestCreateWithoutMentorInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestCreateOrConnectWithoutMentor_Request_CommentsInput = {
  create: MentorRequestCreateWithoutMentor_Request_CommentsInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestCreateOrConnectWithoutUserInput = {
  create: MentorRequestCreateWithoutUserInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestCreateWithoutEventInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  mentor?: InputMaybe<MentorCreateNestedOneWithoutMentor_RequestsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutMentor_RequestInput>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentor_RequestsInput;
};

export type MentorRequestCreateWithoutMentorInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutMentor_RequestsInput;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutMentor_RequestInput>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentor_RequestsInput;
};

export type MentorRequestCreateWithoutMentor_Request_CommentsInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutMentor_RequestsInput;
  mentor?: InputMaybe<MentorCreateNestedOneWithoutMentor_RequestsInput>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutMentor_RequestsInput;
};

export type MentorRequestCreateWithoutUserInput = {
  anonymous: Scalars["Boolean"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutMentor_RequestsInput;
  mentor?: InputMaybe<MentorCreateNestedOneWithoutMentor_RequestsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutMentor_RequestInput>;
  request: Scalars["String"];
  resolved: Scalars["Boolean"];
  tags?: InputMaybe<Scalars["JSON"]>;
  title: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MentorRequestListRelationFilter = {
  every?: InputMaybe<MentorRequestWhereInput>;
  none?: InputMaybe<MentorRequestWhereInput>;
  some?: InputMaybe<MentorRequestWhereInput>;
};

export type MentorRequestRelationFilter = {
  is?: InputMaybe<MentorRequestWhereInput>;
  isNot?: InputMaybe<MentorRequestWhereInput>;
};

export type MentorRequestScalarWhereInput = {
  AND?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  anonymous?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  hacker_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  mentor_id?: InputMaybe<IntNullableFilter>;
  request?: InputMaybe<StringFilter>;
  resolved?: InputMaybe<BoolFilter>;
  tags?: InputMaybe<JsonNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MentorRequestUpdateManyMutationInput = {
  anonymous?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  request?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorRequestUpdateManyWithWhereWithoutEventInput = {
  data: MentorRequestUpdateManyMutationInput;
  where: MentorRequestScalarWhereInput;
};

export type MentorRequestUpdateManyWithWhereWithoutMentorInput = {
  data: MentorRequestUpdateManyMutationInput;
  where: MentorRequestScalarWhereInput;
};

export type MentorRequestUpdateManyWithWhereWithoutUserInput = {
  data: MentorRequestUpdateManyMutationInput;
  where: MentorRequestScalarWhereInput;
};

export type MentorRequestUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutEventInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MentorRequestUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<MentorRequestUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<MentorRequestUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type MentorRequestUpdateManyWithoutMentorInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutMentorInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutMentorInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyMentorInputEnvelope>;
  delete?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MentorRequestUpdateWithWhereUniqueWithoutMentorInput>
  >;
  updateMany?: InputMaybe<
    Array<MentorRequestUpdateManyWithWhereWithoutMentorInput>
  >;
  upsert?: InputMaybe<
    Array<MentorRequestUpsertWithWhereUniqueWithoutMentorInput>
  >;
};

export type MentorRequestUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MentorRequestCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<MentorRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorRequestWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MentorRequestUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MentorRequestUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<MentorRequestUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type MentorRequestUpdateOneRequiredWithoutMentor_Request_CommentsInput =
  {
    connect?: InputMaybe<MentorRequestWhereUniqueInput>;
    connectOrCreate?: InputMaybe<MentorRequestCreateOrConnectWithoutMentor_Request_CommentsInput>;
    create?: InputMaybe<MentorRequestCreateWithoutMentor_Request_CommentsInput>;
    update?: InputMaybe<MentorRequestUpdateWithoutMentor_Request_CommentsInput>;
    upsert?: InputMaybe<MentorRequestUpsertWithoutMentor_Request_CommentsInput>;
  };

export type MentorRequestUpdateWithWhereUniqueWithoutEventInput = {
  data: MentorRequestUpdateWithoutEventInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpdateWithWhereUniqueWithoutMentorInput = {
  data: MentorRequestUpdateWithoutMentorInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: MentorRequestUpdateWithoutUserInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpdateWithoutEventInput = {
  anonymous?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mentor?: InputMaybe<MentorUpdateOneWithoutMentor_RequestsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutMentor_RequestInput>;
  request?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentor_RequestsInput>;
};

export type MentorRequestUpdateWithoutMentorInput = {
  anonymous?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMentor_RequestsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutMentor_RequestInput>;
  request?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentor_RequestsInput>;
};

export type MentorRequestUpdateWithoutMentor_Request_CommentsInput = {
  anonymous?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMentor_RequestsInput>;
  mentor?: InputMaybe<MentorUpdateOneWithoutMentor_RequestsInput>;
  request?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentor_RequestsInput>;
};

export type MentorRequestUpdateWithoutUserInput = {
  anonymous?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMentor_RequestsInput>;
  mentor?: InputMaybe<MentorUpdateOneWithoutMentor_RequestsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutMentor_RequestInput>;
  request?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tags?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorRequestUpsertWithWhereUniqueWithoutEventInput = {
  create: MentorRequestCreateWithoutEventInput;
  update: MentorRequestUpdateWithoutEventInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpsertWithWhereUniqueWithoutMentorInput = {
  create: MentorRequestCreateWithoutMentorInput;
  update: MentorRequestUpdateWithoutMentorInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: MentorRequestCreateWithoutUserInput;
  update: MentorRequestUpdateWithoutUserInput;
  where: MentorRequestWhereUniqueInput;
};

export type MentorRequestUpsertWithoutMentor_Request_CommentsInput = {
  create: MentorRequestCreateWithoutMentor_Request_CommentsInput;
  update: MentorRequestUpdateWithoutMentor_Request_CommentsInput;
};

export type MentorRequestWhereInput = {
  AND?: InputMaybe<Array<MentorRequestWhereInput>>;
  NOT?: InputMaybe<Array<MentorRequestWhereInput>>;
  OR?: InputMaybe<Array<MentorRequestWhereInput>>;
  anonymous?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  hacker_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  mentor?: InputMaybe<MentorRelationFilter>;
  mentor_id?: InputMaybe<IntNullableFilter>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentListRelationFilter>;
  request?: InputMaybe<StringFilter>;
  resolved?: InputMaybe<BoolFilter>;
  tags?: InputMaybe<JsonNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type MentorRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type MentorScalarWhereInput = {
  AND?: InputMaybe<Array<MentorScalarWhereInput>>;
  NOT?: InputMaybe<Array<MentorScalarWhereInput>>;
  OR?: InputMaybe<Array<MentorScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  skills?: InputMaybe<JsonNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type MentorUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorUpdateManyWithWhereWithoutEventInput = {
  data: MentorUpdateManyMutationInput;
  where: MentorScalarWhereInput;
};

export type MentorUpdateManyWithWhereWithoutUserInput = {
  data: MentorUpdateManyMutationInput;
  where: MentorScalarWhereInput;
};

export type MentorUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MentorCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<MentorCreateWithoutEventInput>>;
  createMany?: InputMaybe<MentorCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<MentorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorWhereUniqueInput>>;
  update?: InputMaybe<Array<MentorUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<MentorUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<MentorUpsertWithWhereUniqueWithoutEventInput>>;
};

export type MentorUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MentorCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MentorCreateWithoutUserInput>>;
  createMany?: InputMaybe<MentorCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MentorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MentorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MentorWhereUniqueInput>>;
  set?: InputMaybe<Array<MentorWhereUniqueInput>>;
  update?: InputMaybe<Array<MentorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MentorUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MentorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MentorUpdateOneWithoutMentor_RequestsInput = {
  connect?: InputMaybe<MentorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MentorCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<MentorCreateWithoutMentor_RequestsInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<MentorUpdateWithoutMentor_RequestsInput>;
  upsert?: InputMaybe<MentorUpsertWithoutMentor_RequestsInput>;
};

export type MentorUpdateWithWhereUniqueWithoutEventInput = {
  data: MentorUpdateWithoutEventInput;
  where: MentorWhereUniqueInput;
};

export type MentorUpdateWithWhereUniqueWithoutUserInput = {
  data: MentorUpdateWithoutUserInput;
  where: MentorWhereUniqueInput;
};

export type MentorUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutMentorInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentorsInput>;
};

export type MentorUpdateWithoutMentor_RequestsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMentorsInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMentorsInput>;
};

export type MentorUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutMentorsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutMentorInput>;
  skills?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MentorUpsertWithWhereUniqueWithoutEventInput = {
  create: MentorCreateWithoutEventInput;
  update: MentorUpdateWithoutEventInput;
  where: MentorWhereUniqueInput;
};

export type MentorUpsertWithWhereUniqueWithoutUserInput = {
  create: MentorCreateWithoutUserInput;
  update: MentorUpdateWithoutUserInput;
  where: MentorWhereUniqueInput;
};

export type MentorUpsertWithoutMentor_RequestsInput = {
  create: MentorCreateWithoutMentor_RequestsInput;
  update: MentorUpdateWithoutMentor_RequestsInput;
};

export type MentorWhereInput = {
  AND?: InputMaybe<Array<MentorWhereInput>>;
  NOT?: InputMaybe<Array<MentorWhereInput>>;
  OR?: InputMaybe<Array<MentorWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  mentor_requests?: InputMaybe<MentorRequestListRelationFilter>;
  skills?: InputMaybe<JsonNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type MentorWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  mentors_event_id_user_id_key?: InputMaybe<MentorMentors_Event_Id_User_Id_KeyCompoundUniqueInput>;
};

export type Mutation = {
  __typename?: "Mutation";
  addScheduleItem: ScheduleItem;
  addToMailingList: MailingListSignupReturnType;
  changePassword: UpdatePasswordSuccess;
  confirmSent: Array<Email>;
  createClaim: Claim;
  createCollaborator: Collaborator;
  createCompany: Company;
  createEmail: Email;
  createEvent: Event;
  createEventAttendee: EventAttendee;
  createEventUpdate: EventUpdateEntry;
  createField: Field;
  createInstitution: AcademicInstitution;
  createPipeline: Pipeline;
  createProjectSubmission: Scalars["String"];
  createReview: Review;
  createSponsorCompany: Scalars["String"];
  createSponsorIndividual: JwtToken;
  createSponsorIndividual_Organizer: JwtToken;
  createSponsorPerk: Success;
  createStage: Stage;
  createTeamFormationProfile: Claim;
  createUser: User;
  deleteClaim: Success;
  deleteClaims: Success;
  deleteCollaborator: Collaborator;
  deleteCompany: Company;
  deleteEmails: Array<Email>;
  deleteEvent: Success;
  deleteEventAttendee: EventAttendee;
  deleteField: Field;
  deleteFieldAnswer: FieldAnswer;
  deleteInstitution: AcademicInstitution;
  deleteProjectSubmission: Success;
  deleteReview: Review;
  deleteScheduleItem: ScheduleItem;
  deleteSponsorCompany: Success;
  deleteSponsorIndividual: Success;
  deleteTeamFormationProfile: Claim;
  deleteUser: Success;
  generateAccessToken: AccessToken;
  generateRandomPassword: Success;
  impersonateUser: JwtToken;
  linkProject: SubmitProjectResult;
  loginSponsorIndividual: JwtToken;
  loginWithJWT: AuthResponse;
  loginWithPassword: AuthResponse;
  markTeamAsFinalized: Team;
  moveClaims: Array<Claim>;
  refreshTokens: AuthResponse;
  removeFromMailingList: Array<MailingList>;
  resetPassword: UpdatePasswordSuccess;
  sendSlackReviewMessage: Scalars["Boolean"];
  updateClaim: Claim;
  updateCompany: Company;
  updateEvent: Event;
  updateEventAttendee: EventAttendee;
  updateField: Field;
  updatePipeline: Pipeline;
  updateProjectSubmission: Scalars["String"];
  updateProjectSubmissionStatus: Success;
  updateReview: Review;
  updateScheduleItem: ScheduleItem;
  updateSponsorCompany: SponsorCompany;
  updateSponsorIndividual: SponsorIndividual;
  updateStage: Stage;
  updateSubmissionTable: Submission;
  updateTeamFormationProfile: Claim;
  updateUserEmail: User;
  upload: File;
  verifyAccessToken: Roles;
};

export type MutationAddScheduleItemArgs = {
  data: EventScheduleCreateInput;
};

export type MutationAddToMailingListArgs = {
  email: Scalars["String"];
  event_slug: Scalars["String"];
};

export type MutationChangePasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
};

export type MutationConfirmSentArgs = {
  id: Scalars["Float"];
  sent: Scalars["Boolean"];
};

export type MutationCreateClaimArgs = {
  data: ClaimCreateInput;
};

export type MutationCreateCollaboratorArgs = {
  claim_id: Scalars["Float"];
  pipeline_id?: InputMaybe<Scalars["Float"]>;
  user_id: Scalars["Float"];
};

export type MutationCreateCompanyArgs = {
  name: Scalars["String"];
  twitter?: InputMaybe<Scalars["String"]>;
  website: Scalars["String"];
};

export type MutationCreateEmailArgs = {
  campaign: Scalars["String"];
  html: Scalars["String"];
  sendTime: Scalars["DateTime"];
  sent?: InputMaybe<Scalars["Boolean"]>;
  subject: Scalars["String"];
  toEmail: Scalars["String"];
};

export type MutationCreateEventArgs = {
  data: EventCreateInput;
};

export type MutationCreateEventAttendeeArgs = {
  event_id: Scalars["Float"];
  role: Scalars["String"];
  user_id: Scalars["Float"];
};

export type MutationCreateEventUpdateArgs = {
  data: EventUpdateEntryCreateInput;
};

export type MutationCreateFieldArgs = {
  fcfs_available?: InputMaybe<Array<Scalars["String"]>>;
  field_type: Scalars["String"];
  is_required: Scalars["Boolean"];
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline_slug: Scalars["String"];
  slug: Scalars["String"];
  valid_values?: InputMaybe<Array<Scalars["String"]>>;
};

export type MutationCreateInstitutionArgs = {
  country: Scalars["String"];
  country_code: Scalars["String"];
  institution_type: InstitutionTypeEnum;
  is_custom: Scalars["Boolean"];
  is_enabled: Scalars["Boolean"];
  name: Scalars["String"];
  website?: InputMaybe<Scalars["String"]>;
};

export type MutationCreatePipelineArgs = {
  data: PipelineCreateInput;
};

export type MutationCreateProjectSubmissionArgs = {
  data: ProjectSubmissionCreateInput;
};

export type MutationCreateReviewArgs = {
  claim_id: Scalars["Float"];
  note?: InputMaybe<Scalars["String"]>;
  original_stage_id: Scalars["Float"];
};

export type MutationCreateSponsorCompanyArgs = {
  data: AddSponsorCompanyInput;
};

export type MutationCreateSponsorIndividualArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  sponsor_jwt: Scalars["String"];
};

export type MutationCreateSponsorIndividual_OrganizerArgs = {
  email: Scalars["String"];
  sponsor_jwt: Scalars["String"];
};

export type MutationCreateSponsorPerkArgs = {
  perks: Array<PerkClaimInput>;
  sponsor_company_slug: Scalars["String"];
};

export type MutationCreateStageArgs = {
  data: StageCreateInput;
};

export type MutationCreateTeamFormationProfileArgs = {
  data: TeamFormationCreateProfile;
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type MutationDeleteClaimArgs = {
  id: Scalars["Int"];
};

export type MutationDeleteClaimsArgs = {
  where?: InputMaybe<ClaimWhereInput>;
};

export type MutationDeleteCollaboratorArgs = {
  claim_id: Scalars["Float"];
  user_id: Scalars["Float"];
};

export type MutationDeleteCompanyArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteEmailsArgs = {
  email: Scalars["String"];
};

export type MutationDeleteEventArgs = {
  slug: Scalars["String"];
};

export type MutationDeleteEventAttendeeArgs = {
  event_id: Scalars["Float"];
  role: Scalars["String"];
  user_id: Scalars["Float"];
};

export type MutationDeleteFieldArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteFieldAnswerArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteInstitutionArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteProjectSubmissionArgs = {
  team_id: Scalars["String"];
};

export type MutationDeleteReviewArgs = {
  id: Scalars["Float"];
};

export type MutationDeleteScheduleItemArgs = {
  where: EventScheduleWhereUniqueInput;
};

export type MutationDeleteSponsorCompanyArgs = {
  slug: Scalars["String"];
};

export type MutationDeleteSponsorIndividualArgs = {
  email: Scalars["String"];
  sponsor_company_slug: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Float"];
};

export type MutationGenerateAccessTokenArgs = {
  event_slug?: InputMaybe<Scalars["String"]>;
  role: Scalars["String"];
  user_id: Scalars["Float"];
};

export type MutationGenerateRandomPasswordArgs = {
  email: Scalars["String"];
};

export type MutationImpersonateUserArgs = {
  args: UserWhereUniqueInput;
  expiresIn?: InputMaybe<Scalars["Float"]>;
};

export type MutationLinkProjectArgs = {
  project_claim_id: Scalars["Int"];
  user_claim_id: Scalars["Int"];
};

export type MutationLoginSponsorIndividualArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  sponsor_jwt: Scalars["String"];
};

export type MutationLoginWithJwtArgs = {
  jwt: Scalars["String"];
  setCookie?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationLoginWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  setCookie?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationMarkTeamAsFinalizedArgs = {
  id: Scalars["String"];
};

export type MutationMoveClaimsArgs = {
  toStage: Scalars["Float"];
  where: ClaimWhereInput;
};

export type MutationRefreshTokensArgs = {
  refreshJwt: Scalars["String"];
  setCookie?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationRemoveFromMailingListArgs = {
  email: Scalars["String"];
  event_slug?: InputMaybe<Scalars["String"]>;
};

export type MutationResetPasswordArgs = {
  callback_url: Scalars["String"];
  email: Scalars["String"];
};

export type MutationSendSlackReviewMessageArgs = {
  message: Scalars["String"];
};

export type MutationUpdateClaimArgs = {
  data: ClaimUpdateInput;
};

export type MutationUpdateCompanyArgs = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
  website?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateEventArgs = {
  data: UpdateEventInput;
};

export type MutationUpdateEventAttendeeArgs = {
  badge_code: Scalars["String"];
  id: Scalars["Float"];
};

export type MutationUpdateFieldArgs = {
  fcfs_available?: InputMaybe<Array<Scalars["String"]>>;
  field_type?: InputMaybe<Scalars["String"]>;
  id: Scalars["Float"];
  is_required?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<Scalars["String"]>;
  valid_values?: InputMaybe<Array<Scalars["String"]>>;
};

export type MutationUpdatePipelineArgs = {
  data: PipelineUpdateInput;
};

export type MutationUpdateProjectSubmissionArgs = {
  data: ProjectSubmissionCreateInput;
  team_id: Scalars["String"];
};

export type MutationUpdateProjectSubmissionStatusArgs = {
  is_finalized: Scalars["Boolean"];
  team_id: Scalars["String"];
};

export type MutationUpdateReviewArgs = {
  claim_id?: InputMaybe<Scalars["Float"]>;
  id: Scalars["Float"];
  reviewer_id?: InputMaybe<Scalars["Float"]>;
};

export type MutationUpdateScheduleItemArgs = {
  data: CustomEventScheduleUpdateInput;
  where: EventScheduleWhereUniqueInput;
};

export type MutationUpdateSponsorCompanyArgs = {
  data: UpdateSponsorCompanyInput;
  where: SponsorCompanyWhereUniqueSlugInput;
};

export type MutationUpdateSponsorIndividualArgs = {
  data: SponsorIndividualUpdateInput;
  where: SponsorIndividualWhereUniqueEmailInput;
};

export type MutationUpdateStageArgs = {
  data: StageUpdateInput;
};

export type MutationUpdateSubmissionTableArgs = {
  devpost_data: DevpostDataInput;
  id: Scalars["Float"];
};

export type MutationUpdateTeamFormationProfileArgs = {
  data: TeamFormationUpdateProfile;
};

export type MutationUpdateUserEmailArgs = {
  email: Scalars["String"];
  id: Scalars["Float"];
};

export type MutationUploadArgs = {
  event_slug: Scalars["String"];
  file: Scalars["Upload"];
  type: Scalars["String"];
};

export type MutationVerifyAccessTokenArgs = {
  discord_id: Scalars["String"];
  discord_id_field: Scalars["Float"];
  discord_tag: Scalars["String"];
  discord_tag_field: Scalars["Float"];
  event_slug?: InputMaybe<Scalars["String"]>;
  pronouns_field_id: Scalars["Float"];
  token: Scalars["String"];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumInstitutionTypeEnumFilter = {
  equals?: InputMaybe<InstitutionTypeEnum>;
  in?: InputMaybe<Array<InstitutionTypeEnum>>;
  not?: InputMaybe<NestedEnumInstitutionTypeEnumFilter>;
  notIn?: InputMaybe<Array<InstitutionTypeEnum>>;
};

export type NestedEnumPersonRoleFilter = {
  equals?: InputMaybe<PersonRole>;
  in?: InputMaybe<Array<PersonRole>>;
  not?: InputMaybe<NestedEnumPersonRoleFilter>;
  notIn?: InputMaybe<Array<PersonRole>>;
};

export type NestedEnumRecordTypeEmailFilter = {
  equals?: InputMaybe<RecordTypeEmail>;
  in?: InputMaybe<Array<RecordTypeEmail>>;
  not?: InputMaybe<NestedEnumRecordTypeEmailFilter>;
  notIn?: InputMaybe<Array<RecordTypeEmail>>;
};

export type NestedEnumSponsorCompanyStageFilter = {
  equals?: InputMaybe<SponsorCompanyStage>;
  in?: InputMaybe<Array<SponsorCompanyStage>>;
  not?: InputMaybe<NestedEnumSponsorCompanyStageFilter>;
  notIn?: InputMaybe<Array<SponsorCompanyStage>>;
};

export type NestedEnumSponsorCompanyTierFilter = {
  equals?: InputMaybe<SponsorCompanyTier>;
  in?: InputMaybe<Array<SponsorCompanyTier>>;
  not?: InputMaybe<NestedEnumSponsorCompanyTierFilter>;
  notIn?: InputMaybe<Array<SponsorCompanyTier>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Float"]>;
  divide?: InputMaybe<Scalars["Float"]>;
  increment?: InputMaybe<Scalars["Float"]>;
  multiply?: InputMaybe<Scalars["Float"]>;
  set?: InputMaybe<Scalars["Float"]>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]>;
  divide?: InputMaybe<Scalars["Int"]>;
  increment?: InputMaybe<Scalars["Int"]>;
  multiply?: InputMaybe<Scalars["Int"]>;
  set?: InputMaybe<Scalars["Int"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type NumberFieldAnswerTypeWrapper = {
  __typename?: "NumberFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
};

export type OrderedClaims = {
  __typename?: "OrderedClaims";
  details?: Maybe<CoffeeChatDetails>;
  order?: Maybe<Array<AugmentedClaim>>;
};

export type OutlineDocument = {
  __typename?: "OutlineDocument";
  createdAt: Scalars["String"];
  id: Scalars["String"];
  publishedAt: Scalars["String"];
  text: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["String"];
  url: Scalars["String"];
};

export type PerkClaimInput = {
  answer?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
};

export type PersonCreateManyUserInput = {
  company?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email_hashes?: InputMaybe<PersonCreateManyemail_HashesInput>;
  emails?: InputMaybe<PersonCreateManyemailsInput>;
  family_name?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
  given_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  interests?: InputMaybe<PersonCreateManyinterestsInput>;
  middle_names?: InputMaybe<Scalars["String"]>;
  phone_number: Scalars["String"];
  relationship?: InputMaybe<Scalars["String"]>;
  role: PersonRole;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PersonCreateManyUserInputEnvelope = {
  data: Array<PersonCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type PersonCreateManyemail_HashesInput = {
  set: Array<Scalars["String"]>;
};

export type PersonCreateManyemailsInput = {
  set: Array<Scalars["String"]>;
};

export type PersonCreateManyinterestsInput = {
  set: Array<Scalars["String"]>;
};

export type PersonCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutUserInput>>;
  createMany?: InputMaybe<PersonCreateManyUserInputEnvelope>;
};

export type PersonCreateOrConnectWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutUserInput = {
  company?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  email_hashes?: InputMaybe<PersonCreateemail_HashesInput>;
  emails?: InputMaybe<PersonCreateemailsInput>;
  family_name?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
  given_name?: InputMaybe<Scalars["String"]>;
  interests?: InputMaybe<PersonCreateinterestsInput>;
  middle_names?: InputMaybe<Scalars["String"]>;
  phone_number: Scalars["String"];
  relationship?: InputMaybe<Scalars["String"]>;
  role: PersonRole;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PersonCreateemail_HashesInput = {
  set: Array<Scalars["String"]>;
};

export type PersonCreateemailsInput = {
  set: Array<Scalars["String"]>;
};

export type PersonCreateinterestsInput = {
  set: Array<Scalars["String"]>;
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export enum PersonRole {
  EmergencyContact = "emergency_contact",
  Guest = "guest",
  Judge = "judge",
  Mentor = "mentor",
  Organizer = "organizer",
  Recruiter = "recruiter",
  Speaker = "speaker",
  Sponsor = "sponsor",
  Volunteer = "volunteer",
}

export type PersonScalarWhereInput = {
  AND?: InputMaybe<Array<PersonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereInput>>;
  company?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email_hashes?: InputMaybe<StringNullableListFilter>;
  emails?: InputMaybe<StringNullableListFilter>;
  family_name?: InputMaybe<StringNullableFilter>;
  full_name?: InputMaybe<StringNullableFilter>;
  given_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  interests?: InputMaybe<StringNullableListFilter>;
  middle_names?: InputMaybe<StringNullableFilter>;
  phone_number?: InputMaybe<StringFilter>;
  relationship?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumPersonRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type PersonUpdateManyMutationInput = {
  company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<PersonUpdateemail_HashesInput>;
  emails?: InputMaybe<PersonUpdateemailsInput>;
  family_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  given_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  interests?: InputMaybe<PersonUpdateinterestsInput>;
  middle_names?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<StringFieldUpdateOperationsInput>;
  relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumPersonRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateManyWithWhereWithoutUserInput = {
  data: PersonUpdateManyMutationInput;
  where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutUserInput>>;
  createMany?: InputMaybe<PersonCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PersonUpdateWithWhereUniqueWithoutUserInput = {
  data: PersonUpdateWithoutUserInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutUserInput = {
  company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<PersonUpdateemail_HashesInput>;
  emails?: InputMaybe<PersonUpdateemailsInput>;
  family_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  full_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  given_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  interests?: InputMaybe<PersonUpdateinterestsInput>;
  middle_names?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<StringFieldUpdateOperationsInput>;
  relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumPersonRoleFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateemail_HashesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type PersonUpdateemailsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type PersonUpdateinterestsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type PersonUpsertWithWhereUniqueWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  update: PersonUpdateWithoutUserInput;
  where: PersonWhereUniqueInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  company?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email_hashes?: InputMaybe<StringNullableListFilter>;
  emails?: InputMaybe<StringNullableListFilter>;
  family_name?: InputMaybe<StringNullableFilter>;
  full_name?: InputMaybe<StringNullableFilter>;
  given_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  interests?: InputMaybe<StringNullableListFilter>;
  middle_names?: InputMaybe<StringNullableFilter>;
  phone_number?: InputMaybe<StringFilter>;
  relationship?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumPersonRoleFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Pipeline = {
  __typename?: "Pipeline";
  count: Scalars["Float"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  end_time?: Maybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  fields: Array<Field>;
  id: Scalars["Int"];
  max_num_claims?: Maybe<Scalars["Int"]>;
  max_num_collaborators?: Maybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  relationships: Array<Scalars["String"]>;
  slug: Scalars["String"];
  stage_order: Array<Scalars["Int"]>;
  stages: Array<Stage>;
  start_time?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

/** Create pipeline data */
export type PipelineCreateInput = {
  description: Scalars["String"];
  event_slug: Scalars["String"];
  fields: Array<CustomFieldCreateWithoutPipelineInput>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<Array<Scalars["Int"]>>;
  stages: Array<CustomStageCreateWithoutPipelineInput>;
  type: Scalars["String"];
};

export type PipelineCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  end_time?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineCreateManyrelationshipsInput>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<PipelineCreateManystage_OrderInput>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PipelineCreateManyEventInputEnvelope = {
  data: Array<PipelineCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type PipelineCreateManyrelationshipsInput = {
  set: Array<Scalars["String"]>;
};

export type PipelineCreateManystage_OrderInput = {
  set: Array<Scalars["Int"]>;
};

export type PipelineCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PipelineCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PipelineCreateWithoutEventInput>>;
  createMany?: InputMaybe<PipelineCreateManyEventInputEnvelope>;
};

export type PipelineCreateNestedOneWithoutClaimsInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<PipelineCreateWithoutClaimsInput>;
};

export type PipelineCreateNestedOneWithoutFieldsInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutFieldsInput>;
  create?: InputMaybe<PipelineCreateWithoutFieldsInput>;
};

export type PipelineCreateNestedOneWithoutStagesInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutStagesInput>;
  create?: InputMaybe<PipelineCreateWithoutStagesInput>;
};

export type PipelineCreateOrConnectWithoutClaimsInput = {
  create: PipelineCreateWithoutClaimsInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineCreateOrConnectWithoutEventInput = {
  create: PipelineCreateWithoutEventInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineCreateOrConnectWithoutFieldsInput = {
  create: PipelineCreateWithoutFieldsInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineCreateOrConnectWithoutStagesInput = {
  create: PipelineCreateWithoutStagesInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineCreateWithoutClaimsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  end_time?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutPipelinesInput;
  fields?: InputMaybe<FieldCreateNestedManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineCreaterelationshipsInput>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<PipelineCreatestage_OrderInput>;
  stages?: InputMaybe<StageCreateNestedManyWithoutPipelineInput>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PipelineCreateWithoutEventInput = {
  claims?: InputMaybe<ClaimCreateNestedManyWithoutPipelineInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  end_time?: InputMaybe<Scalars["DateTime"]>;
  fields?: InputMaybe<FieldCreateNestedManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineCreaterelationshipsInput>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<PipelineCreatestage_OrderInput>;
  stages?: InputMaybe<StageCreateNestedManyWithoutPipelineInput>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PipelineCreateWithoutFieldsInput = {
  claims?: InputMaybe<ClaimCreateNestedManyWithoutPipelineInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  end_time?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutPipelinesInput;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineCreaterelationshipsInput>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<PipelineCreatestage_OrderInput>;
  stages?: InputMaybe<StageCreateNestedManyWithoutPipelineInput>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PipelineCreateWithoutStagesInput = {
  claims?: InputMaybe<ClaimCreateNestedManyWithoutPipelineInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  end_time?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutPipelinesInput;
  fields?: InputMaybe<FieldCreateNestedManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineCreaterelationshipsInput>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<PipelineCreatestage_OrderInput>;
  start_time?: InputMaybe<Scalars["DateTime"]>;
  type?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PipelineCreaterelationshipsInput = {
  set: Array<Scalars["String"]>;
};

export type PipelineCreatestage_OrderInput = {
  set: Array<Scalars["Int"]>;
};

export type PipelineListRelationFilter = {
  every?: InputMaybe<PipelineWhereInput>;
  none?: InputMaybe<PipelineWhereInput>;
  some?: InputMaybe<PipelineWhereInput>;
};

export type PipelineOrderByInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  event_slug?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  max_num_claims?: InputMaybe<SortOrder>;
  max_num_collaborators?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  relationships?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stage_order?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type PipelineRelationFilter = {
  is?: InputMaybe<PipelineWhereInput>;
  isNot?: InputMaybe<PipelineWhereInput>;
};

export enum PipelineScalarFieldEnum {
  CreatedAt = "created_at",
  Description = "description",
  EndTime = "end_time",
  EventSlug = "event_slug",
  Id = "id",
  MaxNumClaims = "max_num_claims",
  MaxNumCollaborators = "max_num_collaborators",
  Name = "name",
  Permissions = "permissions",
  Relationships = "relationships",
  Slug = "slug",
  StageOrder = "stage_order",
  StartTime = "start_time",
  Type = "type",
  UpdatedAt = "updated_at",
}

export type PipelineScalarWhereInput = {
  AND?: InputMaybe<Array<PipelineScalarWhereInput>>;
  NOT?: InputMaybe<Array<PipelineScalarWhereInput>>;
  OR?: InputMaybe<Array<PipelineScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  max_num_claims?: InputMaybe<IntNullableFilter>;
  max_num_collaborators?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  relationships?: InputMaybe<StringNullableListFilter>;
  slug?: InputMaybe<StringFilter>;
  stage_order?: InputMaybe<IntNullableListFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

/** Update pipeline data */
export type PipelineUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  max_num_claims?: InputMaybe<Scalars["Int"]>;
  max_num_collaborators?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
  stage_order?: InputMaybe<Array<Scalars["Int"]>>;
  type?: InputMaybe<Scalars["String"]>;
};

export type PipelineUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  max_num_claims?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  max_num_collaborators?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineUpdaterelationshipsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage_order?: InputMaybe<PipelineUpdatestage_OrderInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineUpdateManyWithWhereWithoutEventInput = {
  data: PipelineUpdateManyMutationInput;
  where: PipelineScalarWhereInput;
};

export type PipelineUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PipelineCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PipelineCreateWithoutEventInput>>;
  createMany?: InputMaybe<PipelineCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PipelineScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  set?: InputMaybe<Array<PipelineWhereUniqueInput>>;
  update?: InputMaybe<Array<PipelineUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<PipelineUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<PipelineUpsertWithWhereUniqueWithoutEventInput>>;
};

export type PipelineUpdateOneRequiredWithoutClaimsInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<PipelineCreateWithoutClaimsInput>;
  update?: InputMaybe<PipelineUpdateWithoutClaimsInput>;
  upsert?: InputMaybe<PipelineUpsertWithoutClaimsInput>;
};

export type PipelineUpdateOneRequiredWithoutFieldsInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutFieldsInput>;
  create?: InputMaybe<PipelineCreateWithoutFieldsInput>;
  update?: InputMaybe<PipelineUpdateWithoutFieldsInput>;
  upsert?: InputMaybe<PipelineUpsertWithoutFieldsInput>;
};

export type PipelineUpdateOneRequiredWithoutStagesInput = {
  connect?: InputMaybe<PipelineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PipelineCreateOrConnectWithoutStagesInput>;
  create?: InputMaybe<PipelineCreateWithoutStagesInput>;
  update?: InputMaybe<PipelineUpdateWithoutStagesInput>;
  upsert?: InputMaybe<PipelineUpsertWithoutStagesInput>;
};

export type PipelineUpdateWithWhereUniqueWithoutEventInput = {
  data: PipelineUpdateWithoutEventInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineUpdateWithoutClaimsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPipelinesInput>;
  fields?: InputMaybe<FieldUpdateManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  max_num_collaborators?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineUpdaterelationshipsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage_order?: InputMaybe<PipelineUpdatestage_OrderInput>;
  stages?: InputMaybe<StageUpdateManyWithoutPipelineInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineUpdateWithoutEventInput = {
  claims?: InputMaybe<ClaimUpdateManyWithoutPipelineInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  fields?: InputMaybe<FieldUpdateManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  max_num_collaborators?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineUpdaterelationshipsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage_order?: InputMaybe<PipelineUpdatestage_OrderInput>;
  stages?: InputMaybe<StageUpdateManyWithoutPipelineInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineUpdateWithoutFieldsInput = {
  claims?: InputMaybe<ClaimUpdateManyWithoutPipelineInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPipelinesInput>;
  max_num_claims?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  max_num_collaborators?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineUpdaterelationshipsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage_order?: InputMaybe<PipelineUpdatestage_OrderInput>;
  stages?: InputMaybe<StageUpdateManyWithoutPipelineInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineUpdateWithoutStagesInput = {
  claims?: InputMaybe<ClaimUpdateManyWithoutPipelineInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPipelinesInput>;
  fields?: InputMaybe<FieldUpdateManyWithoutPipelineInput>;
  max_num_claims?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  max_num_collaborators?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  relationships?: InputMaybe<PipelineUpdaterelationshipsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage_order?: InputMaybe<PipelineUpdatestage_OrderInput>;
  start_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PipelineUpdaterelationshipsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type PipelineUpdatestage_OrderInput = {
  push?: InputMaybe<Array<Scalars["Int"]>>;
  set?: InputMaybe<Array<Scalars["Int"]>>;
};

export type PipelineUpsertWithWhereUniqueWithoutEventInput = {
  create: PipelineCreateWithoutEventInput;
  update: PipelineUpdateWithoutEventInput;
  where: PipelineWhereUniqueInput;
};

export type PipelineUpsertWithoutClaimsInput = {
  create: PipelineCreateWithoutClaimsInput;
  update: PipelineUpdateWithoutClaimsInput;
};

export type PipelineUpsertWithoutFieldsInput = {
  create: PipelineCreateWithoutFieldsInput;
  update: PipelineUpdateWithoutFieldsInput;
};

export type PipelineUpsertWithoutStagesInput = {
  create: PipelineCreateWithoutStagesInput;
  update: PipelineUpdateWithoutStagesInput;
};

export type PipelineWhereInput = {
  AND?: InputMaybe<Array<PipelineWhereInput>>;
  NOT?: InputMaybe<Array<PipelineWhereInput>>;
  OR?: InputMaybe<Array<PipelineWhereInput>>;
  claims?: InputMaybe<ClaimListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_time?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  fields?: InputMaybe<FieldListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  max_num_claims?: InputMaybe<IntNullableFilter>;
  max_num_collaborators?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  relationships?: InputMaybe<StringNullableListFilter>;
  slug?: InputMaybe<StringFilter>;
  stage_order?: InputMaybe<IntNullableListFilter>;
  stages?: InputMaybe<StageListRelationFilter>;
  start_time?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type PipelineWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type PrizeCreateManySponsorInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  prize: Scalars["String"];
  quantity?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PrizeCreateManySponsorInputEnvelope = {
  data: Array<PrizeCreateManySponsorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type PrizeCreateNestedManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutSponsorInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<PrizeCreateManySponsorInputEnvelope>;
};

export type PrizeCreateOrConnectWithoutSponsorInput = {
  create: PrizeCreateWithoutSponsorInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeCreateWithoutSponsorInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  name: Scalars["String"];
  prize: Scalars["String"];
  quantity?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type PrizeListRelationFilter = {
  every?: InputMaybe<PrizeWhereInput>;
  none?: InputMaybe<PrizeWhereInput>;
  some?: InputMaybe<PrizeWhereInput>;
};

export type PrizeScalarWhereInput = {
  AND?: InputMaybe<Array<PrizeScalarWhereInput>>;
  NOT?: InputMaybe<Array<PrizeScalarWhereInput>>;
  OR?: InputMaybe<Array<PrizeScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  prize?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntNullableFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type PrizeUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prize?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PrizeUpdateManyWithWhereWithoutSponsorInput = {
  data: PrizeUpdateManyMutationInput;
  where: PrizeScalarWhereInput;
};

export type PrizeUpdateManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PrizeCreateOrConnectWithoutSponsorInput>>;
  create?: InputMaybe<Array<PrizeCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<PrizeCreateManySponsorInputEnvelope>;
  delete?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PrizeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  set?: InputMaybe<Array<PrizeWhereUniqueInput>>;
  update?: InputMaybe<Array<PrizeUpdateWithWhereUniqueWithoutSponsorInput>>;
  updateMany?: InputMaybe<Array<PrizeUpdateManyWithWhereWithoutSponsorInput>>;
  upsert?: InputMaybe<Array<PrizeUpsertWithWhereUniqueWithoutSponsorInput>>;
};

export type PrizeUpdateWithWhereUniqueWithoutSponsorInput = {
  data: PrizeUpdateWithoutSponsorInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeUpdateWithoutSponsorInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  prize?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PrizeUpsertWithWhereUniqueWithoutSponsorInput = {
  create: PrizeCreateWithoutSponsorInput;
  update: PrizeUpdateWithoutSponsorInput;
  where: PrizeWhereUniqueInput;
};

export type PrizeWhereInput = {
  AND?: InputMaybe<Array<PrizeWhereInput>>;
  NOT?: InputMaybe<Array<PrizeWhereInput>>;
  OR?: InputMaybe<Array<PrizeWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  prize?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntNullableFilter>;
  sponsor?: InputMaybe<SponsorRelationFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type PrizeWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** Create Team with Team member emails & devpost link */
export type ProjectSubmissionCreateInput = {
  devpost_url: Scalars["String"];
  team_member_contact_info: Array<TeamMemberContactInfoInput>;
};

export type ProjectSubmissionData = {
  __typename?: "ProjectSubmissionData";
  devpost_link: Scalars["String"];
  is_finalized: Scalars["Boolean"];
  team_id: Scalars["String"];
  team_member_contact_info: Array<TeamMemberContactInfoData>;
};

export type Query = {
  __typename?: "Query";
  checkSponsorExists: Scalars["Boolean"];
  claim: Claim;
  claimByDevpostLink: Claim;
  claimByDiscordId: Claim;
  claimByTerm: Claim;
  claims: Array<Claim>;
  claimsByCollaborator: Array<Claim>;
  collaborators: Array<Collaborator>;
  companies: Array<Company>;
  company: Company;
  emails: Array<Email>;
  event: Event;
  eventAttendee: EventAttendee;
  eventAttendees: Array<EventAttendee>;
  eventSchedule: Array<ScheduleItem>;
  eventUpdates: Array<EventUpdateEntry>;
  events: Array<Event>;
  field: Field;
  file: File;
  files: Array<File>;
  findManyByTeamIDs: Array<Scalars["JSON"]>;
  getClaimStatistics: AggregateStatistics;
  getCoffeeChatDetails: CoffeeChatDetails;
  hackerCoffeeChatClaim: OrderedClaims;
  healthy: HealthResponse;
  institution: AcademicInstitution;
  institutions: Array<AcademicInstitution>;
  issueSponsorJWT: Scalars["String"];
  judgingInfo: DevpostData;
  mailingListEntries: Array<MailingList>;
  me: User;
  orderedClaims: OrderedClaims;
  outlineDocument: OutlineDocument;
  pipeline: Pipeline;
  pipelines: Array<Pipeline>;
  projectSubmission: ProjectSubmissionData;
  review: Review;
  reviews: Array<Review>;
  sampleEvent: TEvent;
  sampleEvents: Array<TEvent>;
  sponsorCompaniesByEvent: Array<SponsorCompany>;
  sponsorCompany: SponsorCompany;
  sponsorIndividual: SponsorIndividual;
  sponsorIndividualsByEvent: Array<SponsorIndividual>;
  user: User;
  userIsRegisteredHopin: Scalars["Boolean"];
  users: Array<User>;
};

export type QueryCheckSponsorExistsArgs = {
  email: Scalars["String"];
  jwt: Scalars["String"];
};

export type QueryClaimArgs = {
  id: Scalars["Int"];
};

export type QueryClaimByDevpostLinkArgs = {
  devpost_link: Scalars["String"];
  devpost_link_field_id?: InputMaybe<Scalars["Float"]>;
  pipeline_id: Scalars["Float"];
};

export type QueryClaimByDiscordIdArgs = {
  discord_field_id?: InputMaybe<Scalars["Float"]>;
  discord_id: Scalars["String"];
  pipeline_id: Scalars["Float"];
};

export type QueryClaimByTermArgs = {
  pipeline_id: Scalars["Float"];
  term: Scalars["String"];
};

export type QueryClaimsArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClaimOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ClaimWhereInput>;
};

export type QueryClaimsByCollaboratorArgs = {
  pipeline_slug: Scalars["String"];
  user_id: Scalars["Float"];
};

export type QueryCollaboratorsArgs = {
  claim_id: Scalars["Float"];
};

export type QueryCompanyArgs = {
  id: Scalars["Float"];
};

export type QueryEmailsArgs = {
  email: Scalars["String"];
};

export type QueryEventArgs = {
  slug: Scalars["String"];
};

export type QueryEventAttendeeArgs = {
  where: EventAttendeeWhereUniqueInput;
};

export type QueryEventAttendeesArgs = {
  cursor?: InputMaybe<EventAttendeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventAttendeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventAttendeeOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EventAttendeeWhereInput>;
};

export type QueryEventScheduleArgs = {
  slug: Scalars["String"];
  where?: InputMaybe<EventScheduleWhereInput>;
};

export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EventWhereInput>;
};

export type QueryFieldArgs = {
  id: Scalars["Float"];
};

export type QueryFileArgs = {
  id: Scalars["Float"];
};

export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FileWhereInput>;
};

export type QueryFindManyByTeamIDsArgs = {
  team_ids: Array<Scalars["String"]>;
};

export type QueryGetClaimStatisticsArgs = {
  cursor?: InputMaybe<ClaimWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClaimScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClaimOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ClaimWhereInput>;
};

export type QueryGetCoffeeChatDetailsArgs = {
  sponsor_claim_id: Scalars["Float"];
};

export type QueryHackerCoffeeChatClaimArgs = {
  discord_id: Scalars["String"];
  pipeline_id: Scalars["Float"];
  rep_field_id: Scalars["Float"];
};

export type QueryInstitutionArgs = {
  id: Scalars["Float"];
};

export type QueryIssueSponsorJwtArgs = {
  sponsor_company_slug: Scalars["String"];
};

export type QueryMailingListEntriesArgs = {
  cursor?: InputMaybe<MailingListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MailingListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MailingListOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MailingListWhereInput>;
};

export type QueryOrderedClaimsArgs = {
  finshed_stage_id: Scalars["Float"];
  pipeline_id: Scalars["Float"];
  position_field_id: Scalars["Float"];
  rep_field_id: Scalars["Float"];
  sponsor_claim_id: Scalars["Float"];
};

export type QueryOutlineDocumentArgs = {
  share_id: Scalars["String"];
};

export type QueryPipelineArgs = {
  slug: Scalars["String"];
};

export type QueryPipelinesArgs = {
  cursor?: InputMaybe<PipelineWhereUniqueInput>;
  distinct?: InputMaybe<Array<PipelineScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PipelineOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PipelineWhereInput>;
};

export type QueryReviewArgs = {
  id: Scalars["Float"];
};

export type QuerySampleEventArgs = {
  id: Scalars["Float"];
};

export type QuerySponsorCompaniesByEventArgs = {
  event_slug: Scalars["String"];
};

export type QuerySponsorCompanyArgs = {
  slug: Scalars["String"];
};

export type QuerySponsorIndividualArgs = {
  email: Scalars["String"];
};

export type QuerySponsorIndividualsByEventArgs = {
  event_slug: Scalars["String"];
};

export type QueryUserArgs = {
  id: Scalars["Float"];
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export enum RecordTypeEmail {
  Claim = "claim",
  Event = "event",
  File = "file",
  Pipeline = "pipeline",
  User = "user",
}

export type RepresentativeCreateManySponsorInput = {
  activated?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_poc?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<RepresentativeCreateManyskillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type RepresentativeCreateManySponsorInputEnvelope = {
  data: Array<RepresentativeCreateManySponsorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type RepresentativeCreateManyUserInput = {
  activated?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  is_poc?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<RepresentativeCreateManyskillsInput>;
  sponsor_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type RepresentativeCreateManyUserInputEnvelope = {
  data: Array<RepresentativeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type RepresentativeCreateManyskillsInput = {
  set: Array<Scalars["String"]>;
};

export type RepresentativeCreateNestedManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RepresentativeCreateOrConnectWithoutSponsorInput>
  >;
  create?: InputMaybe<Array<RepresentativeCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<RepresentativeCreateManySponsorInputEnvelope>;
};

export type RepresentativeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RepresentativeCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<RepresentativeCreateWithoutUserInput>>;
  createMany?: InputMaybe<RepresentativeCreateManyUserInputEnvelope>;
};

export type RepresentativeCreateOrConnectWithoutSponsorInput = {
  create: RepresentativeCreateWithoutSponsorInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeCreateOrConnectWithoutUserInput = {
  create: RepresentativeCreateWithoutUserInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeCreateWithoutSponsorInput = {
  activated?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  is_poc?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<RepresentativeCreateskillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutRepresentativesInput;
};

export type RepresentativeCreateWithoutUserInput = {
  activated?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  is_poc?: InputMaybe<Scalars["Boolean"]>;
  role?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<RepresentativeCreateskillsInput>;
  sponsor: SponsorCreateNestedOneWithoutRepresentativesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type RepresentativeCreateskillsInput = {
  set: Array<Scalars["String"]>;
};

export type RepresentativeListRelationFilter = {
  every?: InputMaybe<RepresentativeWhereInput>;
  none?: InputMaybe<RepresentativeWhereInput>;
  some?: InputMaybe<RepresentativeWhereInput>;
};

export type RepresentativeScalarWhereInput = {
  AND?: InputMaybe<Array<RepresentativeScalarWhereInput>>;
  NOT?: InputMaybe<Array<RepresentativeScalarWhereInput>>;
  OR?: InputMaybe<Array<RepresentativeScalarWhereInput>>;
  activated?: InputMaybe<BoolNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  is_poc?: InputMaybe<BoolNullableFilter>;
  role?: InputMaybe<StringNullableFilter>;
  skills?: InputMaybe<StringNullableListFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type RepresentativeUpdateManyMutationInput = {
  activated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  is_poc?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<RepresentativeUpdateskillsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RepresentativeUpdateManyWithWhereWithoutSponsorInput = {
  data: RepresentativeUpdateManyMutationInput;
  where: RepresentativeScalarWhereInput;
};

export type RepresentativeUpdateManyWithWhereWithoutUserInput = {
  data: RepresentativeUpdateManyMutationInput;
  where: RepresentativeScalarWhereInput;
};

export type RepresentativeUpdateManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RepresentativeCreateOrConnectWithoutSponsorInput>
  >;
  create?: InputMaybe<Array<RepresentativeCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<RepresentativeCreateManySponsorInputEnvelope>;
  delete?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RepresentativeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  set?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  update?: InputMaybe<
    Array<RepresentativeUpdateWithWhereUniqueWithoutSponsorInput>
  >;
  updateMany?: InputMaybe<
    Array<RepresentativeUpdateManyWithWhereWithoutSponsorInput>
  >;
  upsert?: InputMaybe<
    Array<RepresentativeUpsertWithWhereUniqueWithoutSponsorInput>
  >;
};

export type RepresentativeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<RepresentativeCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<RepresentativeCreateWithoutUserInput>>;
  createMany?: InputMaybe<RepresentativeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RepresentativeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  set?: InputMaybe<Array<RepresentativeWhereUniqueInput>>;
  update?: InputMaybe<
    Array<RepresentativeUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<RepresentativeUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<RepresentativeUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type RepresentativeUpdateWithWhereUniqueWithoutSponsorInput = {
  data: RepresentativeUpdateWithoutSponsorInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeUpdateWithWhereUniqueWithoutUserInput = {
  data: RepresentativeUpdateWithoutUserInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeUpdateWithoutSponsorInput = {
  activated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  is_poc?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<RepresentativeUpdateskillsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRepresentativesInput>;
};

export type RepresentativeUpdateWithoutUserInput = {
  activated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  is_poc?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  skills?: InputMaybe<RepresentativeUpdateskillsInput>;
  sponsor?: InputMaybe<SponsorUpdateOneRequiredWithoutRepresentativesInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RepresentativeUpdateskillsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type RepresentativeUpsertWithWhereUniqueWithoutSponsorInput = {
  create: RepresentativeCreateWithoutSponsorInput;
  update: RepresentativeUpdateWithoutSponsorInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeUpsertWithWhereUniqueWithoutUserInput = {
  create: RepresentativeCreateWithoutUserInput;
  update: RepresentativeUpdateWithoutUserInput;
  where: RepresentativeWhereUniqueInput;
};

export type RepresentativeWhereInput = {
  AND?: InputMaybe<Array<RepresentativeWhereInput>>;
  NOT?: InputMaybe<Array<RepresentativeWhereInput>>;
  OR?: InputMaybe<Array<RepresentativeWhereInput>>;
  activated?: InputMaybe<BoolNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  is_poc?: InputMaybe<BoolNullableFilter>;
  role?: InputMaybe<StringNullableFilter>;
  skills?: InputMaybe<StringNullableListFilter>;
  sponsor?: InputMaybe<SponsorRelationFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type RepresentativeWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Review = {
  __typename?: "Review";
  claim_id: Scalars["Int"];
  created_at: Scalars["DateTime"];
  id: Scalars["Int"];
  note?: Maybe<Scalars["String"]>;
  reviewer_id: Scalars["Int"];
  updated_at: Scalars["DateTime"];
};

export type ReviewCreateManyClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  note?: InputMaybe<Scalars["String"]>;
  reviewer_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReviewCreateManyClaimInputEnvelope = {
  data: Array<ReviewCreateManyClaimInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReviewCreateManyUserInput = {
  claim_id: Scalars["Int"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  note?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReviewCreateNestedManyWithoutClaimInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutClaimInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutClaimInput>>;
  createMany?: InputMaybe<ReviewCreateManyClaimInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutClaimInput = {
  create: ReviewCreateWithoutClaimInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutClaimInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  note?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutReviewsInput;
};

export type ReviewCreateWithoutUserInput = {
  claim: ClaimCreateNestedOneWithoutReviewsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  note?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  note?: InputMaybe<StringNullableFilter>;
  reviewer_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ReviewUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutClaimInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutClaimInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutClaimInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutClaimInput>>;
  createMany?: InputMaybe<ReviewCreateManyClaimInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutClaimInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutClaimInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutClaimInput>>;
};

export type ReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutClaimInput = {
  data: ReviewUpdateWithoutClaimInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutClaimInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReviewsInput>;
};

export type ReviewUpdateWithoutUserInput = {
  claim?: InputMaybe<ClaimUpdateOneRequiredWithoutReviewsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutClaimInput = {
  create: ReviewCreateWithoutClaimInput;
  update: ReviewUpdateWithoutClaimInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  claim?: InputMaybe<ClaimRelationFilter>;
  claim_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  note?: InputMaybe<StringNullableFilter>;
  reviewer_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type Roles = {
  __typename?: "Roles";
  claim_id: Scalars["Float"];
  id: Scalars["Float"];
  roles: Array<Scalars["String"]>;
};

export type ScheduleItem = {
  __typename?: "ScheduleItem";
  banner_link?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  end_time: Scalars["DateTime"];
  event_id: Scalars["Int"];
  id: Scalars["Int"];
  links: Array<Scalars["String"]>;
  location: Scalars["String"];
  start_time: Scalars["DateTime"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type Sponsor = {
  __typename?: "Sponsor";
  available_perks?: Maybe<Scalars["JSON"]>;
  company_id: Scalars["Int"];
  created_at: Scalars["DateTime"];
  event_id: Scalars["Int"];
  feature_description?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  invoice_id?: Maybe<Scalars["Int"]>;
  poc_accepted_code_of_conduct?: Maybe<Scalars["Boolean"]>;
  tier: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type SponsorCompany = {
  __typename?: "SponsorCompany";
  coc_accepted: Scalars["Boolean"];
  company_id: Scalars["Int"];
  created_at: Scalars["DateTime"];
  event_slug: Scalars["String"];
  id: Scalars["Int"];
  invite_code?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  primary_contact_email?: Maybe<Scalars["String"]>;
  primary_contact_name?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  stage: SponsorCompanyStage;
  tc_accepted: Scalars["Boolean"];
  tier: SponsorCompanyTier;
  updated_at: Scalars["DateTime"];
};

export type SponsorCompanyCreateManyCompanyInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  stage: SponsorCompanyStage;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier: SponsorCompanyTier;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCompanyCreateManyCompanyInputEnvelope = {
  data: Array<SponsorCompanyCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorCompanyCreateManyEventInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  company_id: Scalars["Int"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  stage: SponsorCompanyStage;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier: SponsorCompanyTier;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCompanyCreateManyEventInputEnvelope = {
  data: Array<SponsorCompanyCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorCompanyCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorCompanyCreateOrConnectWithoutCompanyInput>
  >;
  create?: InputMaybe<Array<SponsorCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<SponsorCompanyCreateManyCompanyInputEnvelope>;
};

export type SponsorCompanyCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorCompanyCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SponsorCompanyCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorCompanyCreateManyEventInputEnvelope>;
};

export type SponsorCompanyCreateNestedOneWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<SponsorCompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCompanyCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<SponsorCompanyCreateWithoutSponsor_IndividualsInput>;
};

export type SponsorCompanyCreateOrConnectWithoutCompanyInput = {
  create: SponsorCompanyCreateWithoutCompanyInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyCreateOrConnectWithoutEventInput = {
  create: SponsorCompanyCreateWithoutEventInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyCreateOrConnectWithoutSponsor_IndividualsInput = {
  create: SponsorCompanyCreateWithoutSponsor_IndividualsInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyCreateWithoutCompanyInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsor_CompaniesInput;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutSponsor_CompanyInput>;
  stage: SponsorCompanyStage;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier: SponsorCompanyTier;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCompanyCreateWithoutEventInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  company: CompanyCreateNestedOneWithoutSponsor_CompaniesInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutSponsor_CompanyInput>;
  stage: SponsorCompanyStage;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier: SponsorCompanyTier;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCompanyCreateWithoutSponsor_IndividualsInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  company: CompanyCreateNestedOneWithoutSponsor_CompaniesInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsor_CompaniesInput;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  stage: SponsorCompanyStage;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier: SponsorCompanyTier;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCompanyListRelationFilter = {
  every?: InputMaybe<SponsorCompanyWhereInput>;
  none?: InputMaybe<SponsorCompanyWhereInput>;
  some?: InputMaybe<SponsorCompanyWhereInput>;
};

export type SponsorCompanyRelationFilter = {
  is?: InputMaybe<SponsorCompanyWhereInput>;
  isNot?: InputMaybe<SponsorCompanyWhereInput>;
};

export type SponsorCompanyScalarWhereInput = {
  AND?: InputMaybe<Array<SponsorCompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<SponsorCompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<SponsorCompanyScalarWhereInput>>;
  coc_accepted?: InputMaybe<BoolFilter>;
  company_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  invite_code?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  primary_contact_email?: InputMaybe<StringNullableFilter>;
  primary_contact_name?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  stage?: InputMaybe<EnumSponsorCompanyStageFilter>;
  tc_accepted?: InputMaybe<BoolFilter>;
  tier?: InputMaybe<EnumSponsorCompanyTierFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SponsorCompanySponsor_Companies_Event_Slug_Company_Id_KeyCompoundUniqueInput =
  {
    company_id: Scalars["Int"];
    event_slug: Scalars["String"];
  };

export enum SponsorCompanyStage {
  Active = "Active",
  Pending = "Pending",
}

export enum SponsorCompanyTier {
  Bronze = "bronze",
  Gold = "gold",
  Partner = "partner",
  Silver = "silver",
  Startup = "startup",
}

export type SponsorCompanyUpdateManyMutationInput = {
  coc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invite_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage?: InputMaybe<EnumSponsorCompanyStageFieldUpdateOperationsInput>;
  tc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tier?: InputMaybe<EnumSponsorCompanyTierFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorCompanyUpdateManyWithWhereWithoutCompanyInput = {
  data: SponsorCompanyUpdateManyMutationInput;
  where: SponsorCompanyScalarWhereInput;
};

export type SponsorCompanyUpdateManyWithWhereWithoutEventInput = {
  data: SponsorCompanyUpdateManyMutationInput;
  where: SponsorCompanyScalarWhereInput;
};

export type SponsorCompanyUpdateManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorCompanyCreateOrConnectWithoutCompanyInput>
  >;
  create?: InputMaybe<Array<SponsorCompanyCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<SponsorCompanyCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorCompanyUpdateWithWhereUniqueWithoutCompanyInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorCompanyUpdateManyWithWhereWithoutCompanyInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorCompanyUpsertWithWhereUniqueWithoutCompanyInput>
  >;
};

export type SponsorCompanyUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorCompanyCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SponsorCompanyCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorCompanyCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorCompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorCompanyWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorCompanyUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorCompanyUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorCompanyUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type SponsorCompanyUpdateOneRequiredWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<SponsorCompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCompanyCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<SponsorCompanyCreateWithoutSponsor_IndividualsInput>;
  update?: InputMaybe<SponsorCompanyUpdateWithoutSponsor_IndividualsInput>;
  upsert?: InputMaybe<SponsorCompanyUpsertWithoutSponsor_IndividualsInput>;
};

export type SponsorCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
  data: SponsorCompanyUpdateWithoutCompanyInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyUpdateWithWhereUniqueWithoutEventInput = {
  data: SponsorCompanyUpdateWithoutEventInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyUpdateWithoutCompanyInput = {
  coc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  invite_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutSponsor_CompanyInput>;
  stage?: InputMaybe<EnumSponsorCompanyStageFieldUpdateOperationsInput>;
  tc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tier?: InputMaybe<EnumSponsorCompanyTierFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorCompanyUpdateWithoutEventInput = {
  coc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invite_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutSponsor_CompanyInput>;
  stage?: InputMaybe<EnumSponsorCompanyStageFieldUpdateOperationsInput>;
  tc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tier?: InputMaybe<EnumSponsorCompanyTierFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorCompanyUpdateWithoutSponsor_IndividualsInput = {
  coc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  invite_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  primary_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stage?: InputMaybe<EnumSponsorCompanyStageFieldUpdateOperationsInput>;
  tc_accepted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  tier?: InputMaybe<EnumSponsorCompanyTierFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
  create: SponsorCompanyCreateWithoutCompanyInput;
  update: SponsorCompanyUpdateWithoutCompanyInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyUpsertWithWhereUniqueWithoutEventInput = {
  create: SponsorCompanyCreateWithoutEventInput;
  update: SponsorCompanyUpdateWithoutEventInput;
  where: SponsorCompanyWhereUniqueInput;
};

export type SponsorCompanyUpsertWithoutSponsor_IndividualsInput = {
  create: SponsorCompanyCreateWithoutSponsor_IndividualsInput;
  update: SponsorCompanyUpdateWithoutSponsor_IndividualsInput;
};

export type SponsorCompanyWhereInput = {
  AND?: InputMaybe<Array<SponsorCompanyWhereInput>>;
  NOT?: InputMaybe<Array<SponsorCompanyWhereInput>>;
  OR?: InputMaybe<Array<SponsorCompanyWhereInput>>;
  coc_accepted?: InputMaybe<BoolFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  invite_code?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  primary_contact_email?: InputMaybe<StringNullableFilter>;
  primary_contact_name?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  sponsor_individuals?: InputMaybe<SponsorIndividualListRelationFilter>;
  stage?: InputMaybe<EnumSponsorCompanyStageFilter>;
  tc_accepted?: InputMaybe<BoolFilter>;
  tier?: InputMaybe<EnumSponsorCompanyTierFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SponsorCompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
  sponsor_companies_event_slug_company_id_key?: InputMaybe<SponsorCompanySponsor_Companies_Event_Slug_Company_Id_KeyCompoundUniqueInput>;
};

export type SponsorCompanyWhereUniqueSlugInput = {
  slug: Scalars["String"];
};

export type SponsorCreateManyEventInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company_id: Scalars["Int"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  feature_description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  invoice_id?: InputMaybe<Scalars["Int"]>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCreateManyEventInputEnvelope = {
  data: Array<SponsorCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SponsorCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<SponsorCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorCreateManyEventInputEnvelope>;
};

export type SponsorCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SponsorCreateWithoutCompanyInput>;
};

export type SponsorCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<SponsorCreateWithoutFilesInput>;
};

export type SponsorCreateNestedOneWithoutRepresentativesInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutRepresentativesInput>;
  create?: InputMaybe<SponsorCreateWithoutRepresentativesInput>;
};

export type SponsorCreateNestedOneWithoutSponsor_ScansInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutSponsor_ScansInput>;
  create?: InputMaybe<SponsorCreateWithoutSponsor_ScansInput>;
};

export type SponsorCreateOrConnectWithoutCompanyInput = {
  create: SponsorCreateWithoutCompanyInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorCreateOrConnectWithoutEventInput = {
  create: SponsorCreateWithoutEventInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorCreateOrConnectWithoutFilesInput = {
  create: SponsorCreateWithoutFilesInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorCreateOrConnectWithoutRepresentativesInput = {
  create: SponsorCreateWithoutRepresentativesInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorCreateOrConnectWithoutSponsor_ScansInput = {
  create: SponsorCreateWithoutSponsor_ScansInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorCreateWithoutCompanyInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsorsInput;
  feature_description?: InputMaybe<Scalars["String"]>;
  files?: InputMaybe<FileCreateNestedOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutSponsorInput>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCreateWithoutEventInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company: CompanyCreateNestedOneWithoutSponsorsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  feature_description?: InputMaybe<Scalars["String"]>;
  files?: InputMaybe<FileCreateNestedOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutSponsorInput>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCreateWithoutFilesInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company: CompanyCreateNestedOneWithoutSponsorsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsorsInput;
  feature_description?: InputMaybe<Scalars["String"]>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutSponsorInput>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCreateWithoutRepresentativesInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company: CompanyCreateNestedOneWithoutSponsorsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsorsInput;
  feature_description?: InputMaybe<Scalars["String"]>;
  files?: InputMaybe<FileCreateNestedOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutSponsorInput>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorCreateWithoutSponsor_ScansInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company: CompanyCreateNestedOneWithoutSponsorsInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsorsInput;
  feature_description?: InputMaybe<Scalars["String"]>;
  files?: InputMaybe<FileCreateNestedOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<Scalars["Boolean"]>;
  prizes?: InputMaybe<PrizeCreateNestedManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutSponsorInput>;
  tier: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorIndividual = {
  __typename?: "SponsorIndividual";
  created_at: Scalars["DateTime"];
  event_slug: Scalars["String"];
  first_name?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  last_name?: Maybe<Scalars["String"]>;
  preferred_name?: Maybe<Scalars["String"]>;
  role_in_company?: Maybe<Scalars["String"]>;
  sponsor_company_slug: Scalars["String"];
  updated_at: Scalars["DateTime"];
  user_id: Scalars["Int"];
};

export type SponsorIndividualCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  sponsor_company_slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type SponsorIndividualCreateManyEventInputEnvelope = {
  data: Array<SponsorIndividualCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorIndividualCreateManySponsor_CompanyInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  first_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type SponsorIndividualCreateManySponsor_CompanyInputEnvelope = {
  data: Array<SponsorIndividualCreateManySponsor_CompanyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorIndividualCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  first_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  sponsor_company_slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorIndividualCreateManyUserInputEnvelope = {
  data: Array<SponsorIndividualCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorIndividualCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SponsorIndividualCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorIndividualCreateManyEventInputEnvelope>;
};

export type SponsorIndividualCreateNestedManyWithoutSponsor_CompanyInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutSponsor_CompanyInput>
  >;
  create?: InputMaybe<
    Array<SponsorIndividualCreateWithoutSponsor_CompanyInput>
  >;
  createMany?: InputMaybe<SponsorIndividualCreateManySponsor_CompanyInputEnvelope>;
};

export type SponsorIndividualCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SponsorIndividualCreateWithoutUserInput>>;
  createMany?: InputMaybe<SponsorIndividualCreateManyUserInputEnvelope>;
};

export type SponsorIndividualCreateOrConnectWithoutEventInput = {
  create: SponsorIndividualCreateWithoutEventInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualCreateOrConnectWithoutSponsor_CompanyInput = {
  create: SponsorIndividualCreateWithoutSponsor_CompanyInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualCreateOrConnectWithoutUserInput = {
  create: SponsorIndividualCreateWithoutUserInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  sponsor_company: SponsorCompanyCreateNestedOneWithoutSponsor_IndividualsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutSponsor_IndividualsInput;
};

export type SponsorIndividualCreateWithoutSponsor_CompanyInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsor_IndividualsInput;
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutSponsor_IndividualsInput;
};

export type SponsorIndividualCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutSponsor_IndividualsInput;
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  role_in_company?: InputMaybe<Scalars["String"]>;
  sponsor_company: SponsorCompanyCreateNestedOneWithoutSponsor_IndividualsInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorIndividualListRelationFilter = {
  every?: InputMaybe<SponsorIndividualWhereInput>;
  none?: InputMaybe<SponsorIndividualWhereInput>;
  some?: InputMaybe<SponsorIndividualWhereInput>;
};

export type SponsorIndividualScalarWhereInput = {
  AND?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  NOT?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  OR?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_slug?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  preferred_name?: InputMaybe<StringNullableFilter>;
  role_in_company?: InputMaybe<StringNullableFilter>;
  sponsor_company_slug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type SponsorIndividualSponsor_Individuals_Sponsor_Company_Slug_User_Id_KeyCompoundUniqueInput =
  {
    sponsor_company_slug: Scalars["String"];
    user_id: Scalars["Int"];
  };

export type SponsorIndividualSponsor_Individuals_User_Id_Event_Slug_KeyCompoundUniqueInput =
  {
    event_slug: Scalars["String"];
    user_id: Scalars["Int"];
  };

export type SponsorIndividualUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferred_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role_in_company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_company?: InputMaybe<SponsorCompanyUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSponsor_IndividualsInput>;
};

export type SponsorIndividualUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferred_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role_in_company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorIndividualUpdateManyWithWhereWithoutEventInput = {
  data: SponsorIndividualUpdateManyMutationInput;
  where: SponsorIndividualScalarWhereInput;
};

export type SponsorIndividualUpdateManyWithWhereWithoutSponsor_CompanyInput = {
  data: SponsorIndividualUpdateManyMutationInput;
  where: SponsorIndividualScalarWhereInput;
};

export type SponsorIndividualUpdateManyWithWhereWithoutUserInput = {
  data: SponsorIndividualUpdateManyMutationInput;
  where: SponsorIndividualScalarWhereInput;
};

export type SponsorIndividualUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SponsorIndividualCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorIndividualCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorIndividualUpdateWithWhereUniqueWithoutEventInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorIndividualUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorIndividualUpsertWithWhereUniqueWithoutEventInput>
  >;
};

export type SponsorIndividualUpdateManyWithoutSponsor_CompanyInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutSponsor_CompanyInput>
  >;
  create?: InputMaybe<
    Array<SponsorIndividualCreateWithoutSponsor_CompanyInput>
  >;
  createMany?: InputMaybe<SponsorIndividualCreateManySponsor_CompanyInputEnvelope>;
  delete?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorIndividualUpdateWithWhereUniqueWithoutSponsor_CompanyInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorIndividualUpdateManyWithWhereWithoutSponsor_CompanyInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorIndividualUpsertWithWhereUniqueWithoutSponsor_CompanyInput>
  >;
};

export type SponsorIndividualUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorIndividualCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SponsorIndividualCreateWithoutUserInput>>;
  createMany?: InputMaybe<SponsorIndividualCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorIndividualScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorIndividualWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorIndividualUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorIndividualUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorIndividualUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type SponsorIndividualUpdateWithWhereUniqueWithoutEventInput = {
  data: SponsorIndividualUpdateWithoutEventInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualUpdateWithWhereUniqueWithoutSponsor_CompanyInput =
  {
    data: SponsorIndividualUpdateWithoutSponsor_CompanyInput;
    where: SponsorIndividualWhereUniqueInput;
  };

export type SponsorIndividualUpdateWithWhereUniqueWithoutUserInput = {
  data: SponsorIndividualUpdateWithoutUserInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferred_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role_in_company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_company?: InputMaybe<SponsorCompanyUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSponsor_IndividualsInput>;
};

export type SponsorIndividualUpdateWithoutSponsor_CompanyInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferred_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role_in_company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSponsor_IndividualsInput>;
};

export type SponsorIndividualUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  preferred_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role_in_company?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_company?: InputMaybe<SponsorCompanyUpdateOneRequiredWithoutSponsor_IndividualsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorIndividualUpsertWithWhereUniqueWithoutEventInput = {
  create: SponsorIndividualCreateWithoutEventInput;
  update: SponsorIndividualUpdateWithoutEventInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualUpsertWithWhereUniqueWithoutSponsor_CompanyInput =
  {
    create: SponsorIndividualCreateWithoutSponsor_CompanyInput;
    update: SponsorIndividualUpdateWithoutSponsor_CompanyInput;
    where: SponsorIndividualWhereUniqueInput;
  };

export type SponsorIndividualUpsertWithWhereUniqueWithoutUserInput = {
  create: SponsorIndividualCreateWithoutUserInput;
  update: SponsorIndividualUpdateWithoutUserInput;
  where: SponsorIndividualWhereUniqueInput;
};

export type SponsorIndividualWhereInput = {
  AND?: InputMaybe<Array<SponsorIndividualWhereInput>>;
  NOT?: InputMaybe<Array<SponsorIndividualWhereInput>>;
  OR?: InputMaybe<Array<SponsorIndividualWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  preferred_name?: InputMaybe<StringNullableFilter>;
  role_in_company?: InputMaybe<StringNullableFilter>;
  sponsor_company?: InputMaybe<SponsorCompanyRelationFilter>;
  sponsor_company_slug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type SponsorIndividualWhereUniqueEmailInput = {
  email: Scalars["String"];
};

export type SponsorIndividualWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals_sponsor_company_slug_user_id_key?: InputMaybe<SponsorIndividualSponsor_Individuals_Sponsor_Company_Slug_User_Id_KeyCompoundUniqueInput>;
  sponsor_individuals_user_id_event_slug_key?: InputMaybe<SponsorIndividualSponsor_Individuals_User_Id_Event_Slug_KeyCompoundUniqueInput>;
};

export type SponsorListRelationFilter = {
  every?: InputMaybe<SponsorWhereInput>;
  none?: InputMaybe<SponsorWhereInput>;
  some?: InputMaybe<SponsorWhereInput>;
};

export type SponsorRelationFilter = {
  is?: InputMaybe<SponsorWhereInput>;
  isNot?: InputMaybe<SponsorWhereInput>;
};

export type SponsorScalarWhereInput = {
  AND?: InputMaybe<Array<SponsorScalarWhereInput>>;
  NOT?: InputMaybe<Array<SponsorScalarWhereInput>>;
  OR?: InputMaybe<Array<SponsorScalarWhereInput>>;
  available_perks?: InputMaybe<JsonNullableFilter>;
  company_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_id?: InputMaybe<IntFilter>;
  feature_description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  invoice_id?: InputMaybe<IntNullableFilter>;
  poc_accepted_code_of_conduct?: InputMaybe<BoolNullableFilter>;
  tier?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SponsorScanCreateManySponsorInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type SponsorScanCreateManySponsorInputEnvelope = {
  data: Array<SponsorScanCreateManySponsorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorScanCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  sponsor_id: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorScanCreateManyUserInputEnvelope = {
  data: Array<SponsorScanCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorScanCreateNestedManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorScanCreateOrConnectWithoutSponsorInput>
  >;
  create?: InputMaybe<Array<SponsorScanCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<SponsorScanCreateManySponsorInputEnvelope>;
};

export type SponsorScanCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorScanCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SponsorScanCreateWithoutUserInput>>;
  createMany?: InputMaybe<SponsorScanCreateManyUserInputEnvelope>;
};

export type SponsorScanCreateOrConnectWithoutSponsorInput = {
  create: SponsorScanCreateWithoutSponsorInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanCreateOrConnectWithoutUserInput = {
  create: SponsorScanCreateWithoutUserInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanCreateWithoutSponsorInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutSponsor_ScansInput;
};

export type SponsorScanCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  sponsor: SponsorCreateNestedOneWithoutSponsor_ScansInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SponsorScanListRelationFilter = {
  every?: InputMaybe<SponsorScanWhereInput>;
  none?: InputMaybe<SponsorScanWhereInput>;
  some?: InputMaybe<SponsorScanWhereInput>;
};

export type SponsorScanScalarWhereInput = {
  AND?: InputMaybe<Array<SponsorScanScalarWhereInput>>;
  NOT?: InputMaybe<Array<SponsorScanScalarWhereInput>>;
  OR?: InputMaybe<Array<SponsorScanScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type SponsorScanUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorScanUpdateManyWithWhereWithoutSponsorInput = {
  data: SponsorScanUpdateManyMutationInput;
  where: SponsorScanScalarWhereInput;
};

export type SponsorScanUpdateManyWithWhereWithoutUserInput = {
  data: SponsorScanUpdateManyMutationInput;
  where: SponsorScanScalarWhereInput;
};

export type SponsorScanUpdateManyWithoutSponsorInput = {
  connect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorScanCreateOrConnectWithoutSponsorInput>
  >;
  create?: InputMaybe<Array<SponsorScanCreateWithoutSponsorInput>>;
  createMany?: InputMaybe<SponsorScanCreateManySponsorInputEnvelope>;
  delete?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorScanScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  update?: InputMaybe<
    Array<SponsorScanUpdateWithWhereUniqueWithoutSponsorInput>
  >;
  updateMany?: InputMaybe<
    Array<SponsorScanUpdateManyWithWhereWithoutSponsorInput>
  >;
  upsert?: InputMaybe<
    Array<SponsorScanUpsertWithWhereUniqueWithoutSponsorInput>
  >;
};

export type SponsorScanUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SponsorScanCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<SponsorScanCreateWithoutUserInput>>;
  createMany?: InputMaybe<SponsorScanCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorScanScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorScanWhereUniqueInput>>;
  update?: InputMaybe<Array<SponsorScanUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<SponsorScanUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<SponsorScanUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SponsorScanUpdateWithWhereUniqueWithoutSponsorInput = {
  data: SponsorScanUpdateWithoutSponsorInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanUpdateWithWhereUniqueWithoutUserInput = {
  data: SponsorScanUpdateWithoutUserInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanUpdateWithoutSponsorInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSponsor_ScansInput>;
};

export type SponsorScanUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sponsor?: InputMaybe<SponsorUpdateOneRequiredWithoutSponsor_ScansInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorScanUpsertWithWhereUniqueWithoutSponsorInput = {
  create: SponsorScanCreateWithoutSponsorInput;
  update: SponsorScanUpdateWithoutSponsorInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanUpsertWithWhereUniqueWithoutUserInput = {
  create: SponsorScanCreateWithoutUserInput;
  update: SponsorScanUpdateWithoutUserInput;
  where: SponsorScanWhereUniqueInput;
};

export type SponsorScanWhereInput = {
  AND?: InputMaybe<Array<SponsorScanWhereInput>>;
  NOT?: InputMaybe<Array<SponsorScanWhereInput>>;
  OR?: InputMaybe<Array<SponsorScanWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sponsor?: InputMaybe<SponsorRelationFilter>;
  sponsor_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type SponsorScanWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type SponsorSponsors_Event_Id_Company_Id_KeyCompoundUniqueInput = {
  company_id: Scalars["Int"];
  event_id: Scalars["Int"];
};

export type SponsorUpdateManyMutationInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpdateManyWithWhereWithoutEventInput = {
  data: SponsorUpdateManyMutationInput;
  where: SponsorScalarWhereInput;
};

export type SponsorUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<SponsorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SponsorCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<SponsorCreateWithoutEventInput>>;
  createMany?: InputMaybe<SponsorCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<SponsorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SponsorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SponsorWhereUniqueInput>>;
  set?: InputMaybe<Array<SponsorWhereUniqueInput>>;
  update?: InputMaybe<Array<SponsorUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<SponsorUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<SponsorUpsertWithWhereUniqueWithoutEventInput>>;
};

export type SponsorUpdateOneRequiredWithoutRepresentativesInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutRepresentativesInput>;
  create?: InputMaybe<SponsorCreateWithoutRepresentativesInput>;
  update?: InputMaybe<SponsorUpdateWithoutRepresentativesInput>;
  upsert?: InputMaybe<SponsorUpsertWithoutRepresentativesInput>;
};

export type SponsorUpdateOneRequiredWithoutSponsor_ScansInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutSponsor_ScansInput>;
  create?: InputMaybe<SponsorCreateWithoutSponsor_ScansInput>;
  update?: InputMaybe<SponsorUpdateWithoutSponsor_ScansInput>;
  upsert?: InputMaybe<SponsorUpsertWithoutSponsor_ScansInput>;
};

export type SponsorUpdateOneWithoutCompanyInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SponsorCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<SponsorUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<SponsorUpsertWithoutCompanyInput>;
};

export type SponsorUpdateOneWithoutFilesInput = {
  connect?: InputMaybe<SponsorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SponsorCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<SponsorCreateWithoutFilesInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<SponsorUpdateWithoutFilesInput>;
  upsert?: InputMaybe<SponsorUpsertWithoutFilesInput>;
};

export type SponsorUpdateWithWhereUniqueWithoutEventInput = {
  data: SponsorUpdateWithoutEventInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorUpdateWithoutCompanyInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsorsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutSponsorInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpdateWithoutEventInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsorsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutSponsorInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpdateWithoutFilesInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsorsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsorsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutSponsorInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpdateWithoutRepresentativesInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsorsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsorsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutSponsorInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutSponsorInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpdateWithoutSponsor_ScansInput = {
  available_perks?: InputMaybe<Scalars["JSON"]>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsorsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsorsInput>;
  feature_description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateOneWithoutSponsorsInput>;
  poc_accepted_code_of_conduct?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  prizes?: InputMaybe<PrizeUpdateManyWithoutSponsorInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutSponsorInput>;
  tier?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SponsorUpsertWithWhereUniqueWithoutEventInput = {
  create: SponsorCreateWithoutEventInput;
  update: SponsorUpdateWithoutEventInput;
  where: SponsorWhereUniqueInput;
};

export type SponsorUpsertWithoutCompanyInput = {
  create: SponsorCreateWithoutCompanyInput;
  update: SponsorUpdateWithoutCompanyInput;
};

export type SponsorUpsertWithoutFilesInput = {
  create: SponsorCreateWithoutFilesInput;
  update: SponsorUpdateWithoutFilesInput;
};

export type SponsorUpsertWithoutRepresentativesInput = {
  create: SponsorCreateWithoutRepresentativesInput;
  update: SponsorUpdateWithoutRepresentativesInput;
};

export type SponsorUpsertWithoutSponsor_ScansInput = {
  create: SponsorCreateWithoutSponsor_ScansInput;
  update: SponsorUpdateWithoutSponsor_ScansInput;
};

export type SponsorWhereInput = {
  AND?: InputMaybe<Array<SponsorWhereInput>>;
  NOT?: InputMaybe<Array<SponsorWhereInput>>;
  OR?: InputMaybe<Array<SponsorWhereInput>>;
  available_perks?: InputMaybe<JsonNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  company_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  feature_description?: InputMaybe<StringNullableFilter>;
  files?: InputMaybe<FileRelationFilter>;
  id?: InputMaybe<IntFilter>;
  invoice_id?: InputMaybe<IntNullableFilter>;
  poc_accepted_code_of_conduct?: InputMaybe<BoolNullableFilter>;
  prizes?: InputMaybe<PrizeListRelationFilter>;
  representatives?: InputMaybe<RepresentativeListRelationFilter>;
  sponsor_scans?: InputMaybe<SponsorScanListRelationFilter>;
  tier?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SponsorWhereUniqueInput = {
  company_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  invoice_id?: InputMaybe<Scalars["Int"]>;
  sponsors_event_id_company_id_key?: InputMaybe<SponsorSponsors_Event_Id_Company_Id_KeyCompoundUniqueInput>;
};

export type Stage = {
  __typename?: "Stage";
  count: Scalars["Int"];
  created_at: Scalars["DateTime"];
  id: Scalars["Int"];
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

/** Create stages */
export type StageCreateInput = {
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Float"];
  slug: Scalars["String"];
};

export type StageCreateManyPipelineInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type StageCreateManyPipelineInputEnvelope = {
  data: Array<StageCreateManyPipelineInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type StageCreateNestedManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<StageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StageCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<StageCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<StageCreateManyPipelineInputEnvelope>;
};

export type StageCreateNestedOneWithoutClaimsInput = {
  connect?: InputMaybe<StageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StageCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<StageCreateWithoutClaimsInput>;
};

export type StageCreateOrConnectWithoutClaimsInput = {
  create: StageCreateWithoutClaimsInput;
  where: StageWhereUniqueInput;
};

export type StageCreateOrConnectWithoutPipelineInput = {
  create: StageCreateWithoutPipelineInput;
  where: StageWhereUniqueInput;
};

export type StageCreateWithoutClaimsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline: PipelineCreateNestedOneWithoutStagesInput;
  slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type StageCreateWithoutPipelineInput = {
  claims?: InputMaybe<ClaimCreateNestedManyWithoutStageInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type StageListRelationFilter = {
  every?: InputMaybe<StageWhereInput>;
  none?: InputMaybe<StageWhereInput>;
  some?: InputMaybe<StageWhereInput>;
};

export type StageRelationFilter = {
  is?: InputMaybe<StageWhereInput>;
  isNot?: InputMaybe<StageWhereInput>;
};

export type StageScalarWhereInput = {
  AND?: InputMaybe<Array<StageScalarWhereInput>>;
  NOT?: InputMaybe<Array<StageScalarWhereInput>>;
  OR?: InputMaybe<Array<StageScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

/** Update stages data */
export type StageUpdateInput = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Scalars["JSON"]>;
};

export type StageUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StageUpdateManyWithWhereWithoutPipelineInput = {
  data: StageUpdateManyMutationInput;
  where: StageScalarWhereInput;
};

export type StageUpdateManyWithoutPipelineInput = {
  connect?: InputMaybe<Array<StageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StageCreateOrConnectWithoutPipelineInput>>;
  create?: InputMaybe<Array<StageCreateWithoutPipelineInput>>;
  createMany?: InputMaybe<StageCreateManyPipelineInputEnvelope>;
  delete?: InputMaybe<Array<StageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StageWhereUniqueInput>>;
  set?: InputMaybe<Array<StageWhereUniqueInput>>;
  update?: InputMaybe<Array<StageUpdateWithWhereUniqueWithoutPipelineInput>>;
  updateMany?: InputMaybe<Array<StageUpdateManyWithWhereWithoutPipelineInput>>;
  upsert?: InputMaybe<Array<StageUpsertWithWhereUniqueWithoutPipelineInput>>;
};

export type StageUpdateOneRequiredWithoutClaimsInput = {
  connect?: InputMaybe<StageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StageCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<StageCreateWithoutClaimsInput>;
  update?: InputMaybe<StageUpdateWithoutClaimsInput>;
  upsert?: InputMaybe<StageUpsertWithoutClaimsInput>;
};

export type StageUpdateWithWhereUniqueWithoutPipelineInput = {
  data: StageUpdateWithoutPipelineInput;
  where: StageWhereUniqueInput;
};

export type StageUpdateWithoutClaimsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  pipeline?: InputMaybe<PipelineUpdateOneRequiredWithoutStagesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StageUpdateWithoutPipelineInput = {
  claims?: InputMaybe<ClaimUpdateManyWithoutStageInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<Scalars["JSON"]>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StageUpsertWithWhereUniqueWithoutPipelineInput = {
  create: StageCreateWithoutPipelineInput;
  update: StageUpdateWithoutPipelineInput;
  where: StageWhereUniqueInput;
};

export type StageUpsertWithoutClaimsInput = {
  create: StageCreateWithoutClaimsInput;
  update: StageUpdateWithoutClaimsInput;
};

export type StageWhereInput = {
  AND?: InputMaybe<Array<StageWhereInput>>;
  NOT?: InputMaybe<Array<StageWhereInput>>;
  OR?: InputMaybe<Array<StageWhereInput>>;
  claims?: InputMaybe<ClaimListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<JsonNullableFilter>;
  pipeline?: InputMaybe<PipelineRelationFilter>;
  pipeline_id?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type StageWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type StringArrayFieldAnswerTypeWrapper = {
  __typename?: "StringArrayFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Array<Scalars["String"]>>;
};

export type StringFieldAnswerTypeWrapper = {
  __typename?: "StringFieldAnswerTypeWrapper";
  created_at: Scalars["DateTime"];
  fcfs_available: Array<Scalars["String"]>;
  field_type: Scalars["String"];
  id: Scalars["Int"];
  is_required?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  permissions?: Maybe<Scalars["JSON"]>;
  pipeline_id: Scalars["Int"];
  slug?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  valid_values: Array<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["String"]>>;
  has?: InputMaybe<Scalars["String"]>;
  hasEvery?: InputMaybe<Array<Scalars["String"]>>;
  hasSome?: InputMaybe<Array<Scalars["String"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type Submission = {
  __typename?: "Submission";
  categories: Array<Scalars["String"]>;
  contact_info: Scalars["String"];
  created_at: Scalars["DateTime"];
  devpost_name: Scalars["String"];
  devpost_url: Scalars["String"];
  event_id: Scalars["Int"];
  id: Scalars["Int"];
  location?: Maybe<Scalars["String"]>;
  pitch_type: Scalars["String"];
  repository_urls: Array<Scalars["String"]>;
  team_id?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  video_url?: Maybe<Scalars["String"]>;
};

export type SubmissionCreateManyEventInput = {
  categories?: InputMaybe<SubmissionCreateManycategoriesInput>;
  contact_info: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  devpost_name: Scalars["String"];
  devpost_url: Scalars["String"];
  id?: InputMaybe<Scalars["Int"]>;
  location?: InputMaybe<Scalars["String"]>;
  pitch_type: Scalars["String"];
  repository_urls?: InputMaybe<SubmissionCreateManyrepository_UrlsInput>;
  team_id?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  video_url?: InputMaybe<Scalars["String"]>;
};

export type SubmissionCreateManyEventInputEnvelope = {
  data: Array<SubmissionCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SubmissionCreateManycategoriesInput = {
  set: Array<Scalars["String"]>;
};

export type SubmissionCreateManyrepository_UrlsInput = {
  set: Array<Scalars["String"]>;
};

export type SubmissionCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SubmissionCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SubmissionCreateWithoutEventInput>>;
  createMany?: InputMaybe<SubmissionCreateManyEventInputEnvelope>;
};

export type SubmissionCreateNestedOneWithoutTeamInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutTeamInput>;
  create?: InputMaybe<SubmissionCreateWithoutTeamInput>;
};

export type SubmissionCreateNestedOneWithoutUser_SubmissionsInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutUser_SubmissionsInput>;
  create?: InputMaybe<SubmissionCreateWithoutUser_SubmissionsInput>;
};

export type SubmissionCreateOrConnectWithoutEventInput = {
  create: SubmissionCreateWithoutEventInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutTeamInput = {
  create: SubmissionCreateWithoutTeamInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutUser_SubmissionsInput = {
  create: SubmissionCreateWithoutUser_SubmissionsInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateWithoutEventInput = {
  categories?: InputMaybe<SubmissionCreatecategoriesInput>;
  contact_info: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  devpost_name: Scalars["String"];
  devpost_url: Scalars["String"];
  location?: InputMaybe<Scalars["String"]>;
  pitch_type: Scalars["String"];
  repository_urls?: InputMaybe<SubmissionCreaterepository_UrlsInput>;
  team?: InputMaybe<TeamCreateNestedOneWithoutSubmissionInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutSubmissionInput>;
  video_url?: InputMaybe<Scalars["String"]>;
};

export type SubmissionCreateWithoutTeamInput = {
  categories?: InputMaybe<SubmissionCreatecategoriesInput>;
  contact_info: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  devpost_name: Scalars["String"];
  devpost_url: Scalars["String"];
  event: EventCreateNestedOneWithoutSubmissionsInput;
  location?: InputMaybe<Scalars["String"]>;
  pitch_type: Scalars["String"];
  repository_urls?: InputMaybe<SubmissionCreaterepository_UrlsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutSubmissionInput>;
  video_url?: InputMaybe<Scalars["String"]>;
};

export type SubmissionCreateWithoutUser_SubmissionsInput = {
  categories?: InputMaybe<SubmissionCreatecategoriesInput>;
  contact_info: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  devpost_name: Scalars["String"];
  devpost_url: Scalars["String"];
  event: EventCreateNestedOneWithoutSubmissionsInput;
  location?: InputMaybe<Scalars["String"]>;
  pitch_type: Scalars["String"];
  repository_urls?: InputMaybe<SubmissionCreaterepository_UrlsInput>;
  team?: InputMaybe<TeamCreateNestedOneWithoutSubmissionInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  video_url?: InputMaybe<Scalars["String"]>;
};

export type SubmissionCreatecategoriesInput = {
  set: Array<Scalars["String"]>;
};

export type SubmissionCreaterepository_UrlsInput = {
  set: Array<Scalars["String"]>;
};

export type SubmissionListRelationFilter = {
  every?: InputMaybe<SubmissionWhereInput>;
  none?: InputMaybe<SubmissionWhereInput>;
  some?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionRelationFilter = {
  is?: InputMaybe<SubmissionWhereInput>;
  isNot?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionScalarWhereInput = {
  AND?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  categories?: InputMaybe<StringNullableListFilter>;
  contact_info?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  devpost_name?: InputMaybe<StringFilter>;
  devpost_url?: InputMaybe<StringFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringNullableFilter>;
  pitch_type?: InputMaybe<StringFilter>;
  repository_urls?: InputMaybe<StringNullableListFilter>;
  team_id?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  video_url?: InputMaybe<StringNullableFilter>;
};

export type SubmissionUpdateManyMutationInput = {
  categories?: InputMaybe<SubmissionUpdatecategoriesInput>;
  contact_info?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  devpost_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  devpost_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pitch_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  repository_urls?: InputMaybe<SubmissionUpdaterepository_UrlsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SubmissionUpdateManyWithWhereWithoutEventInput = {
  data: SubmissionUpdateManyMutationInput;
  where: SubmissionScalarWhereInput;
};

export type SubmissionUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<SubmissionCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<SubmissionCreateWithoutEventInput>>;
  createMany?: InputMaybe<SubmissionCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<
    Array<SubmissionUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<Array<SubmissionUpsertWithWhereUniqueWithoutEventInput>>;
};

export type SubmissionUpdateOneRequiredWithoutUser_SubmissionsInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutUser_SubmissionsInput>;
  create?: InputMaybe<SubmissionCreateWithoutUser_SubmissionsInput>;
  update?: InputMaybe<SubmissionUpdateWithoutUser_SubmissionsInput>;
  upsert?: InputMaybe<SubmissionUpsertWithoutUser_SubmissionsInput>;
};

export type SubmissionUpdateOneWithoutTeamInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutTeamInput>;
  create?: InputMaybe<SubmissionCreateWithoutTeamInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<SubmissionUpdateWithoutTeamInput>;
  upsert?: InputMaybe<SubmissionUpsertWithoutTeamInput>;
};

export type SubmissionUpdateWithWhereUniqueWithoutEventInput = {
  data: SubmissionUpdateWithoutEventInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpdateWithoutEventInput = {
  categories?: InputMaybe<SubmissionUpdatecategoriesInput>;
  contact_info?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  devpost_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  devpost_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pitch_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  repository_urls?: InputMaybe<SubmissionUpdaterepository_UrlsInput>;
  team?: InputMaybe<TeamUpdateOneWithoutSubmissionInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutSubmissionInput>;
  video_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SubmissionUpdateWithoutTeamInput = {
  categories?: InputMaybe<SubmissionUpdatecategoriesInput>;
  contact_info?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  devpost_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  devpost_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSubmissionsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pitch_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  repository_urls?: InputMaybe<SubmissionUpdaterepository_UrlsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutSubmissionInput>;
  video_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SubmissionUpdateWithoutUser_SubmissionsInput = {
  categories?: InputMaybe<SubmissionUpdatecategoriesInput>;
  contact_info?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  devpost_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  devpost_url?: InputMaybe<StringFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSubmissionsInput>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pitch_type?: InputMaybe<StringFieldUpdateOperationsInput>;
  repository_urls?: InputMaybe<SubmissionUpdaterepository_UrlsInput>;
  team?: InputMaybe<TeamUpdateOneWithoutSubmissionInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SubmissionUpdatecategoriesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type SubmissionUpdaterepository_UrlsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type SubmissionUpsertWithWhereUniqueWithoutEventInput = {
  create: SubmissionCreateWithoutEventInput;
  update: SubmissionUpdateWithoutEventInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpsertWithoutTeamInput = {
  create: SubmissionCreateWithoutTeamInput;
  update: SubmissionUpdateWithoutTeamInput;
};

export type SubmissionUpsertWithoutUser_SubmissionsInput = {
  create: SubmissionCreateWithoutUser_SubmissionsInput;
  update: SubmissionUpdateWithoutUser_SubmissionsInput;
};

export type SubmissionWhereInput = {
  AND?: InputMaybe<Array<SubmissionWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionWhereInput>>;
  OR?: InputMaybe<Array<SubmissionWhereInput>>;
  categories?: InputMaybe<StringNullableListFilter>;
  contact_info?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  devpost_name?: InputMaybe<StringFilter>;
  devpost_url?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringNullableFilter>;
  pitch_type?: InputMaybe<StringFilter>;
  repository_urls?: InputMaybe<StringNullableListFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  team_id?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_submissions?: InputMaybe<UserSubmissionListRelationFilter>;
  video_url?: InputMaybe<StringNullableFilter>;
};

export type SubmissionWhereUniqueInput = {
  devpost_url?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

export type SubmitProjectResult = {
  __typename?: "SubmitProjectResult";
  judging_group: Scalars["String"];
  start_time: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  claimUpserts: Claim;
  eventUpdatesSubscription: EventUpdateEntry;
};

export type SubscriptionClaimUpsertsArgs = {
  field_answer_filter?: InputMaybe<
    Array<ClaimSubscriptionFieldAnswerFilterInput>
  >;
  pipeline_id: Scalars["Float"];
  stage_ids?: InputMaybe<Array<Scalars["Float"]>>;
  user_ids?: InputMaybe<Array<Scalars["Float"]>>;
};

export type Success = {
  __typename?: "Success";
  status: Scalars["String"];
};

export type TEvent = {
  __typename?: "TEvent";
  description?: Maybe<Scalars["String"]>;
  end_time: Scalars["Float"];
  event_type: Scalars["String"];
  id: Scalars["Float"];
  name: Scalars["String"];
  permission?: Maybe<Scalars["String"]>;
  private_url: Scalars["String"];
  public_url?: Maybe<Scalars["String"]>;
  related_events: Array<Scalars["Int"]>;
  speakers: Array<TSpeaker>;
  start_time: Scalars["Float"];
};

export type TSpeaker = {
  __typename?: "TSpeaker";
  name: Scalars["String"];
  profile_pic?: Maybe<Scalars["String"]>;
};

export type Team = {
  __typename?: "Team";
  created_at: Scalars["DateTime"];
  created_by_id?: Maybe<Scalars["Int"]>;
  disabled: Scalars["Boolean"];
  event_slug: Scalars["String"];
  id: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type TeamCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  created_by_id?: InputMaybe<Scalars["Int"]>;
  disabled: Scalars["Boolean"];
  id?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamCreateManyEventInputEnvelope = {
  data: Array<TeamCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  disabled: Scalars["Boolean"];
  event_slug: Scalars["String"];
  id?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamCreateManyUserInputEnvelope = {
  data: Array<TeamCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutEventInput>>;
  createMany?: InputMaybe<TeamCreateManyEventInputEnvelope>;
};

export type TeamCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamCreateManyUserInputEnvelope>;
};

export type TeamCreateNestedOneWithoutSubmissionInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSubmissionInput>;
  create?: InputMaybe<TeamCreateWithoutSubmissionInput>;
};

export type TeamCreateNestedOneWithoutTeam_MembersInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<TeamCreateWithoutTeam_MembersInput>;
};

export type TeamCreateOrConnectWithoutEventInput = {
  create: TeamCreateWithoutEventInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutSubmissionInput = {
  create: TeamCreateWithoutSubmissionInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutTeam_MembersInput = {
  create: TeamCreateWithoutTeam_MembersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutUserInput = {
  create: TeamCreateWithoutUserInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  disabled: Scalars["Boolean"];
  id?: InputMaybe<Scalars["String"]>;
  submission?: InputMaybe<SubmissionCreateNestedOneWithoutTeamInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutTeamsInput>;
};

export type TeamCreateWithoutSubmissionInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  disabled: Scalars["Boolean"];
  event: EventCreateNestedOneWithoutTeamsInput;
  id?: InputMaybe<Scalars["String"]>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutTeamsInput>;
};

export type TeamCreateWithoutTeam_MembersInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  disabled: Scalars["Boolean"];
  event: EventCreateNestedOneWithoutTeamsInput;
  id?: InputMaybe<Scalars["String"]>;
  submission?: InputMaybe<SubmissionCreateNestedOneWithoutTeamInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutTeamsInput>;
};

export type TeamCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  disabled: Scalars["Boolean"];
  event: EventCreateNestedOneWithoutTeamsInput;
  id?: InputMaybe<Scalars["String"]>;
  submission?: InputMaybe<SubmissionCreateNestedOneWithoutTeamInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamFormationCreateProfile = {
  about_me?: InputMaybe<Scalars["String"]>;
  competitiveness: Scalars["String"];
  devpost?: InputMaybe<Scalars["String"]>;
  discord_tag: Scalars["String"];
  facebook?: InputMaybe<Scalars["String"]>;
  github?: InputMaybe<Scalars["String"]>;
  linkedin?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  profile_pic: Scalars["Upload"];
  pronouns?: InputMaybe<Array<Scalars["String"]>>;
  skills_and_technologies?: InputMaybe<Array<Scalars["String"]>>;
  team_found: Scalars["Boolean"];
};

export type TeamFormationUpdateProfile = {
  about_me?: InputMaybe<Scalars["String"]>;
  competitiveness?: InputMaybe<Scalars["String"]>;
  devpost?: InputMaybe<Scalars["String"]>;
  discord_tag?: InputMaybe<Scalars["String"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  github?: InputMaybe<Scalars["String"]>;
  linkedin?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  preferred_name?: InputMaybe<Scalars["String"]>;
  profile_pic?: InputMaybe<Scalars["Upload"]>;
  pronouns?: InputMaybe<Array<Scalars["String"]>>;
  skills_and_technologies?: InputMaybe<Array<Scalars["String"]>>;
  team_found?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamListRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamMember = {
  __typename?: "TeamMember";
  created_at: Scalars["DateTime"];
  event_slug: Scalars["String"];
  team_id: Scalars["String"];
  updated_at: Scalars["DateTime"];
  user_id: Scalars["Int"];
};

export type TeamMemberContactInfoData = {
  __typename?: "TeamMemberContactInfoData";
  discord_tag: Scalars["String"];
  email: Scalars["String"];
};

export type TeamMemberContactInfoInput = {
  discord_id?: InputMaybe<Scalars["String"]>;
  discord_tag: Scalars["String"];
  email: Scalars["String"];
};

export type TeamMemberCreateManyEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  team_id: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type TeamMemberCreateManyEventInputEnvelope = {
  data: Array<TeamMemberCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamMemberCreateManyTeamInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user_id: Scalars["Int"];
};

export type TeamMemberCreateManyTeamInputEnvelope = {
  data: Array<TeamMemberCreateManyTeamInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamMemberCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event_slug: Scalars["String"];
  team_id: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamMemberCreateManyUserInputEnvelope = {
  data: Array<TeamMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TeamMemberCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyEventInputEnvelope>;
};

export type TeamMemberCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutTeamInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
};

export type TeamMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
};

export type TeamMemberCreateOrConnectWithoutEventInput = {
  create: TeamMemberCreateWithoutEventInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateOrConnectWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateOrConnectWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateWithoutEventInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  team: TeamCreateNestedOneWithoutTeam_MembersInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutTeam_MembersInput;
};

export type TeamMemberCreateWithoutTeamInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutTeam_MembersInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutTeam_MembersInput;
};

export type TeamMemberCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  event: EventCreateNestedOneWithoutTeam_MembersInput;
  team: TeamCreateNestedOneWithoutTeam_MembersInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TeamMemberListRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberScalarWhereInput = {
  AND?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event_slug?: InputMaybe<StringFilter>;
  team_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type TeamMemberUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMemberUpdateManyWithWhereWithoutEventInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<
    Array<TeamMemberUpdateManyWithWhereWithoutEventInput>
  >;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutEventInput>>;
};

export type TeamMemberUpdateManyWithoutTeamInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutTeamInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TeamMemberUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TeamMemberCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TeamMemberUpdateWithWhereUniqueWithoutEventInput = {
  data: TeamMemberUpdateWithoutEventInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutTeam_MembersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeam_MembersInput>;
};

export type TeamMemberUpdateWithoutTeamInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTeam_MembersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeam_MembersInput>;
};

export type TeamMemberUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTeam_MembersInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutTeam_MembersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMemberUpsertWithWhereUniqueWithoutEventInput = {
  create: TeamMemberCreateWithoutEventInput;
  update: TeamMemberUpdateWithoutEventInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  update: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  update: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUser_IdEvent_SlugCompoundUniqueInput = {
  event_slug: Scalars["String"];
  user_id: Scalars["Int"];
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  team_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type TeamMemberWhereUniqueInput = {
  user_id_event_slug?: InputMaybe<TeamMemberUser_IdEvent_SlugCompoundUniqueInput>;
};

export type TeamRelationFilter = {
  is?: InputMaybe<TeamWhereInput>;
  isNot?: InputMaybe<TeamWhereInput>;
};

export type TeamScalarWhereInput = {
  AND?: InputMaybe<Array<TeamScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  created_by_id?: InputMaybe<IntNullableFilter>;
  disabled?: InputMaybe<BoolFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TeamUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateManyWithWhereWithoutEventInput = {
  data: TeamUpdateManyMutationInput;
  where: TeamScalarWhereInput;
};

export type TeamUpdateManyWithWhereWithoutUserInput = {
  data: TeamUpdateManyMutationInput;
  where: TeamScalarWhereInput;
};

export type TeamUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutEventInput>>;
  createMany?: InputMaybe<TeamCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<TeamUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<TeamUpsertWithWhereUniqueWithoutEventInput>>;
};

export type TeamUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TeamWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TeamUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TeamUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TeamUpdateOneRequiredWithoutTeam_MembersInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<TeamCreateWithoutTeam_MembersInput>;
  update?: InputMaybe<TeamUpdateWithoutTeam_MembersInput>;
  upsert?: InputMaybe<TeamUpsertWithoutTeam_MembersInput>;
};

export type TeamUpdateOneWithoutSubmissionInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutSubmissionInput>;
  create?: InputMaybe<TeamCreateWithoutSubmissionInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<TeamUpdateWithoutSubmissionInput>;
  upsert?: InputMaybe<TeamUpsertWithoutSubmissionInput>;
};

export type TeamUpdateWithWhereUniqueWithoutEventInput = {
  data: TeamUpdateWithoutEventInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateWithWhereUniqueWithoutUserInput = {
  data: TeamUpdateWithoutUserInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateWithoutEventInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneWithoutTeamInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutTeamInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTeamsInput>;
};

export type TeamUpdateWithoutSubmissionInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTeamsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutTeamInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTeamsInput>;
};

export type TeamUpdateWithoutTeam_MembersInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTeamsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneWithoutTeamInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutTeamsInput>;
};

export type TeamUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutTeamsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneWithoutTeamInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutTeamInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpsertWithWhereUniqueWithoutEventInput = {
  create: TeamCreateWithoutEventInput;
  update: TeamUpdateWithoutEventInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithWhereUniqueWithoutUserInput = {
  create: TeamCreateWithoutUserInput;
  update: TeamUpdateWithoutUserInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpsertWithoutSubmissionInput = {
  create: TeamCreateWithoutSubmissionInput;
  update: TeamUpdateWithoutSubmissionInput;
};

export type TeamUpsertWithoutTeam_MembersInput = {
  create: TeamCreateWithoutTeam_MembersInput;
  update: TeamUpdateWithoutTeam_MembersInput;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  created_by_id?: InputMaybe<IntNullableFilter>;
  disabled?: InputMaybe<BoolFilter>;
  event?: InputMaybe<EventRelationFilter>;
  event_slug?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  submission?: InputMaybe<SubmissionRelationFilter>;
  team_members?: InputMaybe<TeamMemberListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type TravelInformationCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<TravelInformationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TravelInformationCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<TravelInformationCreateWithoutUsersInput>;
};

export type TravelInformationCreateOrConnectWithoutUsersInput = {
  create: TravelInformationCreateWithoutUsersInput;
  where: TravelInformationWhereUniqueInput;
};

export type TravelInformationCreateWithoutUsersInput = {
  citizenship_country?: InputMaybe<Scalars["String"]>;
  closest_airport?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  current_city?: InputMaybe<Scalars["String"]>;
  expiry_date?: InputMaybe<Scalars["DateTime"]>;
  issue_date?: InputMaybe<Scalars["DateTime"]>;
  passport_number?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  visa_country?: InputMaybe<Scalars["String"]>;
  visa_type?: InputMaybe<Scalars["String"]>;
};

export type TravelInformationRelationFilter = {
  is?: InputMaybe<TravelInformationWhereInput>;
  isNot?: InputMaybe<TravelInformationWhereInput>;
};

export type TravelInformationUpdateOneWithoutUsersInput = {
  connect?: InputMaybe<TravelInformationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TravelInformationCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<TravelInformationCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<TravelInformationUpdateWithoutUsersInput>;
  upsert?: InputMaybe<TravelInformationUpsertWithoutUsersInput>;
};

export type TravelInformationUpdateWithoutUsersInput = {
  citizenship_country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  closest_airport?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  current_city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expiry_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  issue_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  passport_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  visa_country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  visa_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type TravelInformationUpsertWithoutUsersInput = {
  create: TravelInformationCreateWithoutUsersInput;
  update: TravelInformationUpdateWithoutUsersInput;
};

export type TravelInformationWhereInput = {
  AND?: InputMaybe<Array<TravelInformationWhereInput>>;
  NOT?: InputMaybe<Array<TravelInformationWhereInput>>;
  OR?: InputMaybe<Array<TravelInformationWhereInput>>;
  citizenship_country?: InputMaybe<StringNullableFilter>;
  closest_airport?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  current_city?: InputMaybe<StringNullableFilter>;
  expiry_date?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  issue_date?: InputMaybe<DateTimeNullableFilter>;
  passport_number?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserRelationFilter>;
  visa_country?: InputMaybe<StringNullableFilter>;
  visa_type?: InputMaybe<StringNullableFilter>;
};

export type TravelInformationWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type TypedClaimsResolver_Hackthenorth2021_Applications_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_APPLICATIONS_Output";
  accessibility_needs: StringFieldAnswerTypeWrapper;
  address_1: StringFieldAnswerTypeWrapper;
  address_2: StringFieldAnswerTypeWrapper;
  age_18: BooleanFieldAnswerTypeWrapper;
  boat_custom_accessory: StringFieldAnswerTypeWrapper;
  boat_custom_color: StringFieldAnswerTypeWrapper;
  boat_custom_expression: StringFieldAnswerTypeWrapper;
  canadian_citizen: BooleanFieldAnswerTypeWrapper;
  career_rsvp_stage: StringFieldAnswerTypeWrapper;
  city: StringFieldAnswerTypeWrapper;
  coffee_chat: StringArrayFieldAnswerTypeWrapper;
  country: StringFieldAnswerTypeWrapper;
  discord_id: StringFieldAnswerTypeWrapper;
  discord_tag: StringFieldAnswerTypeWrapper;
  event_rsvp_stage: StringFieldAnswerTypeWrapper;
  guardian_contact: StringFieldAnswerTypeWrapper;
  guardian_name: StringFieldAnswerTypeWrapper;
  interests: StringArrayFieldAnswerTypeWrapper;
  kitchener_waterloo: BooleanFieldAnswerTypeWrapper;
  legal_name: StringFieldAnswerTypeWrapper;
  location: StringFieldAnswerTypeWrapper;
  long_collaboration: StringFieldAnswerTypeWrapper;
  long_desire: StringFieldAnswerTypeWrapper;
  long_hacker_type: StringArrayFieldAnswerTypeWrapper;
  long_links: StringArrayFieldAnswerTypeWrapper;
  long_obstacle: StringFieldAnswerTypeWrapper;
  looking_for_fulltime: BooleanFieldAnswerTypeWrapper;
  looking_for_internships: BooleanFieldAnswerTypeWrapper;
  meetups: StringArrayFieldAnswerTypeWrapper;
  mentorship_expertise: StringArrayFieldAnswerTypeWrapper;
  mentorship_interest: BooleanFieldAnswerTypeWrapper;
  mlh_email_consent: BooleanFieldAnswerTypeWrapper;
  mlh_share_consent: BooleanFieldAnswerTypeWrapper;
  networking: StringArrayFieldAnswerTypeWrapper;
  onboarding_progress: StringFieldAnswerTypeWrapper;
  permanent_resident: BooleanFieldAnswerTypeWrapper;
  personal_rsvp_stage_fixed: StringFieldAnswerTypeWrapper;
  phone_number: StringFieldAnswerTypeWrapper;
  postal_code: StringFieldAnswerTypeWrapper;
  preferred_name: StringFieldAnswerTypeWrapper;
  pronouns: StringArrayFieldAnswerTypeWrapper;
  province_state_region: StringFieldAnswerTypeWrapper;
  recording_consent: BooleanFieldAnswerTypeWrapper;
  recruitment_consent: BooleanFieldAnswerTypeWrapper;
  resume: FileFieldAnswerTypeWrapper;
  reviewer_id: NumberFieldAnswerTypeWrapper;
  rsvp_deadline: StringFieldAnswerTypeWrapper;
  schedule_saved_events: StringArrayFieldAnswerTypeWrapper;
  second_dose_vaccine: BooleanFieldAnswerTypeWrapper;
  shirt_size: StringFieldAnswerTypeWrapper;
  shirt_type: StringFieldAnswerTypeWrapper;
  short_grad_level: StringFieldAnswerTypeWrapper;
  short_grad_year: NumberFieldAnswerTypeWrapper;
  short_hackathon_count: StringFieldAnswerTypeWrapper;
  short_location: StringFieldAnswerTypeWrapper;
  short_name: StringFieldAnswerTypeWrapper;
  short_program: StringFieldAnswerTypeWrapper;
  short_school: StringFieldAnswerTypeWrapper;
  survey_education: BooleanFieldAnswerTypeWrapper;
  survey_ethnicity: StringArrayFieldAnswerTypeWrapper;
  survey_family_experience: BooleanFieldAnswerTypeWrapper;
  survey_gender: StringArrayFieldAnswerTypeWrapper;
  survey_groups: StringArrayFieldAnswerTypeWrapper;
  survey_personal_experience: StringFieldAnswerTypeWrapper;
  survey_race: StringArrayFieldAnswerTypeWrapper;
  survey_tech_preferences: StringArrayFieldAnswerTypeWrapper;
  survey_underrep_groups: StringFieldAnswerTypeWrapper;
  survey_workshop_preferences: StringArrayFieldAnswerTypeWrapper;
  swag_pickup: BooleanFieldAnswerTypeWrapper;
  team_formation_about_me: StringFieldAnswerTypeWrapper;
  team_formation_airtable_id: StringFieldAnswerTypeWrapper;
  team_formation_competitiveness: StringFieldAnswerTypeWrapper;
  team_formation_devpost: StringFieldAnswerTypeWrapper;
  team_formation_discord_tag: StringFieldAnswerTypeWrapper;
  team_formation_facebook: StringFieldAnswerTypeWrapper;
  team_formation_github: StringFieldAnswerTypeWrapper;
  team_formation_interests: StringArrayFieldAnswerTypeWrapper;
  team_formation_linkedin: StringFieldAnswerTypeWrapper;
  team_formation_location: StringFieldAnswerTypeWrapper;
  team_formation_profile_pic: FileFieldAnswerTypeWrapper;
  team_formation_profile_pic_url: StringFieldAnswerTypeWrapper;
  team_formation_skills_and_technologies: StringArrayFieldAnswerTypeWrapper;
  team_formation_team_found: BooleanFieldAnswerTypeWrapper;
  tech_talks: StringArrayFieldAnswerTypeWrapper;
  terms_and_conditions: BooleanFieldAnswerTypeWrapper;
  terms_conditions: BooleanFieldAnswerTypeWrapper;
  version_number: NumberFieldAnswerTypeWrapper;
  visited_steps: StringArrayFieldAnswerTypeWrapper;
  waiver_consent: FileFieldAnswerTypeWrapper;
  wics_coffee_chat: BooleanFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Applications_OutputWrapper = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_APPLICATIONS_OutputWrapper";
  answers: TypedClaimsResolver_Hackthenorth2021_Applications_Output;
};

export type TypedClaimsResolver_Hackthenorth2021_Contact_Lists_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_CONTACT_LISTS_Output";
  description: StringFieldAnswerTypeWrapper;
  last_run_at: StringFieldAnswerTypeWrapper;
  mailjet_list_id: NumberFieldAnswerTypeWrapper;
  query: StringFieldAnswerTypeWrapper;
  transformer: StringFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Contact_Lists_OutputWrapper = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_CONTACT_LISTS_OutputWrapper";
  answers: TypedClaimsResolver_Hackthenorth2021_Contact_Lists_Output;
};

export type TypedClaimsResolver_Hackthenorth2021_Mentorship_Profiles_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_MENTORSHIP_PROFILES_Output";
  discord_id: StringFieldAnswerTypeWrapper;
  institution: StringFieldAnswerTypeWrapper;
  mentorship_profile_photo: FileFieldAnswerTypeWrapper;
  mentorship_topics: StringArrayFieldAnswerTypeWrapper;
  name: StringFieldAnswerTypeWrapper;
  pronouns: StringArrayFieldAnswerTypeWrapper;
  user_id: NumberFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Mentorship_Profiles_OutputWrapper =
  {
    __typename?: "TypedClaimsResolver_HACKTHENORTH2021_MENTORSHIP_PROFILES_OutputWrapper";
    answers: TypedClaimsResolver_Hackthenorth2021_Mentorship_Profiles_Output;
  };

export type TypedClaimsResolver_Hackthenorth2021_Mentorship_Requests_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_MENTORSHIP_REQUESTS_Output";
  category: StringArrayFieldAnswerTypeWrapper;
  description: StringFieldAnswerTypeWrapper;
  mentee_discord_tag: StringFieldAnswerTypeWrapper;
  mentee_id: NumberFieldAnswerTypeWrapper;
  mentee_name: StringFieldAnswerTypeWrapper;
  mentor_id: NumberFieldAnswerTypeWrapper;
  priority: NumberFieldAnswerTypeWrapper;
  reopened: BooleanFieldAnswerTypeWrapper;
  title: StringFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Mentorship_Requests_OutputWrapper =
  {
    __typename?: "TypedClaimsResolver_HACKTHENORTH2021_MENTORSHIP_REQUESTS_OutputWrapper";
    answers: TypedClaimsResolver_Hackthenorth2021_Mentorship_Requests_Output;
  };

export type TypedClaimsResolver_Hackthenorth2021_Reimbursements_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_REIMBURSEMENTS_Output";
  amount: NumberFieldAnswerTypeWrapper;
  currency: StringFieldAnswerTypeWrapper;
  date_purchased: StringFieldAnswerTypeWrapper;
  expense_category: StringFieldAnswerTypeWrapper;
  item_description: StringFieldAnswerTypeWrapper;
  receipts: FileFieldAnswerTypeWrapper;
  team_name: StringFieldAnswerTypeWrapper;
  transfer_id: NumberFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Reimbursements_OutputWrapper =
  {
    __typename?: "TypedClaimsResolver_HACKTHENORTH2021_REIMBURSEMENTS_OutputWrapper";
    answers: TypedClaimsResolver_Hackthenorth2021_Reimbursements_Output;
  };

export type TypedClaimsResolver_Hackthenorth2021_Reviews_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_REVIEWS_Output";
  accessed_sensitive_info: BooleanFieldAnswerTypeWrapper;
  application_id: NumberFieldAnswerTypeWrapper;
  baseline_skillset_score: NumberFieldAnswerTypeWrapper;
  finished_at: StringFieldAnswerTypeWrapper;
  nontraditional_tech_score: NumberFieldAnswerTypeWrapper;
  overall_score: NumberFieldAnswerTypeWrapper;
  reviewer_name: StringFieldAnswerTypeWrapper;
  time_spent: NumberFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Reviews_OutputWrapper = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_REVIEWS_OutputWrapper";
  answers: TypedClaimsResolver_Hackthenorth2021_Reviews_Output;
};

export type TypedClaimsResolver_Hackthenorth2021_Sponsor_Perks_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_SPONSOR_PERKS_Output";
  api_prize_description: StringFieldAnswerTypeWrapper;
  api_prize_due_date: StringFieldAnswerTypeWrapper;
  api_prize_judging_type: StringFieldAnswerTypeWrapper;
  api_prize_status: StringFieldAnswerTypeWrapper;
  api_prize_title: StringFieldAnswerTypeWrapper;
  api_workshop_accepted_hackers_only: BooleanFieldAnswerTypeWrapper;
  api_workshop_due_date: StringFieldAnswerTypeWrapper;
  api_workshop_recording_available: BooleanFieldAnswerTypeWrapper;
  api_workshop_representative: StringFieldAnswerTypeWrapper;
  api_workshop_representative_email: StringFieldAnswerTypeWrapper;
  api_workshop_representative_name: StringFieldAnswerTypeWrapper;
  api_workshop_status: StringFieldAnswerTypeWrapper;
  api_workshop_time_one: StringFieldAnswerTypeWrapper;
  api_workshop_time_three: StringFieldAnswerTypeWrapper;
  api_workshop_time_two: StringFieldAnswerTypeWrapper;
  api_workshop_video_link: StringFieldAnswerTypeWrapper;
  available_perks: StringArrayFieldAnswerTypeWrapper;
  career_accepted_hackers_only: BooleanFieldAnswerTypeWrapper;
  career_accepted_recording_available: BooleanFieldAnswerTypeWrapper;
  career_development_description: StringFieldAnswerTypeWrapper;
  career_development_due_date: StringFieldAnswerTypeWrapper;
  career_development_representative: StringFieldAnswerTypeWrapper;
  career_development_representative_email: StringFieldAnswerTypeWrapper;
  career_development_representative_name: StringFieldAnswerTypeWrapper;
  career_development_status: StringFieldAnswerTypeWrapper;
  career_development_time_one: StringFieldAnswerTypeWrapper;
  career_development_time_three: StringFieldAnswerTypeWrapper;
  career_development_time_two: StringFieldAnswerTypeWrapper;
  career_development_title: StringFieldAnswerTypeWrapper;
  coffee_chats_due_date: StringFieldAnswerTypeWrapper;
  coffee_chats_duration: StringFieldAnswerTypeWrapper;
  coffee_chats_favorited_hackers: StringArrayFieldAnswerTypeWrapper;
  coffee_chats_hackers: StringArrayFieldAnswerTypeWrapper;
  coffee_chats_representatives: StringArrayFieldAnswerTypeWrapper;
  coffee_chats_representatives_emails: StringArrayFieldAnswerTypeWrapper;
  coffee_chats_representatives_pronouns: StringArrayFieldAnswerTypeWrapper;
  coffee_chats_start_time: StringFieldAnswerTypeWrapper;
  coffee_chats_status: StringFieldAnswerTypeWrapper;
  discord_representatives_count: NumberFieldAnswerTypeWrapper;
  discord_representatives_due_date: StringFieldAnswerTypeWrapper;
  discord_representatives_emails: StringArrayFieldAnswerTypeWrapper;
  discord_representatives_pronouns: StringArrayFieldAnswerTypeWrapper;
  discord_representatives_representatives: StringArrayFieldAnswerTypeWrapper;
  discord_representatives_status: StringFieldAnswerTypeWrapper;
  hopin_representatives_count: NumberFieldAnswerTypeWrapper;
  hopin_representatives_due_date: StringFieldAnswerTypeWrapper;
  hopin_representatives_emails: StringFieldAnswerTypeWrapper;
  hopin_representatives_emails_fixed: StringArrayFieldAnswerTypeWrapper;
  hopin_representatives_pronouns: StringArrayFieldAnswerTypeWrapper;
  hopin_representatives_representatives: StringArrayFieldAnswerTypeWrapper;
  hopin_representatives_status: StringFieldAnswerTypeWrapper;
  meetup_event_details_breakout_rooms: StringFieldAnswerTypeWrapper;
  meetup_event_details_description: StringFieldAnswerTypeWrapper;
  meetup_event_details_due_date: StringFieldAnswerTypeWrapper;
  meetup_event_details_status: StringFieldAnswerTypeWrapper;
  meetup_event_details_title: StringFieldAnswerTypeWrapper;
  newsletter_feature_description: StringFieldAnswerTypeWrapper;
  newsletter_feature_due_date: StringFieldAnswerTypeWrapper;
  newsletter_feature_file: FileFieldAnswerTypeWrapper;
  newsletter_feature_status: StringFieldAnswerTypeWrapper;
  newsletter_feature_title: StringFieldAnswerTypeWrapper;
  newsletter_feature_website_link: StringFieldAnswerTypeWrapper;
  newsletter_opportunity_due_date: StringFieldAnswerTypeWrapper;
  newsletter_opportunity_input_due_date: StringFieldAnswerTypeWrapper;
  newsletter_opportunity_link: StringFieldAnswerTypeWrapper;
  newsletter_opportunity_name: StringFieldAnswerTypeWrapper;
  newsletter_opportunity_status: StringFieldAnswerTypeWrapper;
  newsletter_spotlight_description: StringFieldAnswerTypeWrapper;
  newsletter_spotlight_due_date: StringFieldAnswerTypeWrapper;
  newsletter_spotlight_file: FileFieldAnswerTypeWrapper;
  newsletter_spotlight_status: StringFieldAnswerTypeWrapper;
  newsletter_spotlight_title: StringFieldAnswerTypeWrapper;
  newsletter_spotlight_website_link: StringFieldAnswerTypeWrapper;
  pre_hack_contest_description: StringFieldAnswerTypeWrapper;
  pre_hack_contest_due_date: StringFieldAnswerTypeWrapper;
  pre_hack_contest_status: StringFieldAnswerTypeWrapper;
  pre_hack_contest_title: StringFieldAnswerTypeWrapper;
  social_media_assets_caption: StringFieldAnswerTypeWrapper;
  social_media_assets_due_date: StringFieldAnswerTypeWrapper;
  social_media_assets_files: StringArrayFieldAnswerTypeWrapper;
  social_media_assets_files_fixed: FileFieldAnswerTypeWrapper;
  social_media_assets_status: StringFieldAnswerTypeWrapper;
  social_media_assets_title_one: StringFieldAnswerTypeWrapper;
  social_media_assets_title_three: StringFieldAnswerTypeWrapper;
  social_media_assets_title_two: StringFieldAnswerTypeWrapper;
  social_media_assets_website_link_one: StringFieldAnswerTypeWrapper;
  social_media_assets_website_link_three: StringFieldAnswerTypeWrapper;
  social_media_assets_website_link_two: StringFieldAnswerTypeWrapper;
  social_media_promotion_consent: BooleanFieldAnswerTypeWrapper;
  social_media_promotion_due_date: StringFieldAnswerTypeWrapper;
  social_media_promotion_status: StringFieldAnswerTypeWrapper;
  social_media_takeover_date_contact_info: StringFieldAnswerTypeWrapper;
  social_media_takeover_date_due_date: StringFieldAnswerTypeWrapper;
  social_media_takeover_date_status: StringFieldAnswerTypeWrapper;
  social_media_takeover_date_takeover_date: StringFieldAnswerTypeWrapper;
  sponsor_company_id: NumberFieldAnswerTypeWrapper;
  stage_time_due_date: StringFieldAnswerTypeWrapper;
  stage_time_status: StringFieldAnswerTypeWrapper;
  stage_time_uploaded: BooleanFieldAnswerTypeWrapper;
  stage_time_video_link: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_description: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_description_optional: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_due_date: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_status: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_title: StringFieldAnswerTypeWrapper;
  tech_talk_proposal_title_optional: StringFieldAnswerTypeWrapper;
  tech_talk_time_accepted_hackers_only: BooleanFieldAnswerTypeWrapper;
  tech_talk_time_due_date: StringFieldAnswerTypeWrapper;
  tech_talk_time_recording_available: BooleanFieldAnswerTypeWrapper;
  tech_talk_time_representative: StringFieldAnswerTypeWrapper;
  tech_talk_time_representative_email: StringFieldAnswerTypeWrapper;
  tech_talk_time_representative_name: StringFieldAnswerTypeWrapper;
  tech_talk_time_status: StringFieldAnswerTypeWrapper;
  tech_talk_time_time_one: StringFieldAnswerTypeWrapper;
  tech_talk_time_time_three: StringFieldAnswerTypeWrapper;
  tech_talk_time_time_two: StringFieldAnswerTypeWrapper;
  website_feature_due_date: StringFieldAnswerTypeWrapper;
  website_feature_link_desc: StringFieldAnswerTypeWrapper;
  website_feature_message: StringFieldAnswerTypeWrapper;
  website_feature_status: StringFieldAnswerTypeWrapper;
  website_feature_website_link: StringFieldAnswerTypeWrapper;
  website_logo_due_date: StringFieldAnswerTypeWrapper;
  website_logo_file: FileFieldAnswerTypeWrapper;
  website_logo_status: StringFieldAnswerTypeWrapper;
  website_logo_website_link: StringFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Sponsor_Perks_OutputWrapper = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_SPONSOR_PERKS_OutputWrapper";
  answers: TypedClaimsResolver_Hackthenorth2021_Sponsor_Perks_Output;
};

export type TypedClaimsResolver_Hackthenorth2021_Technical_Jargon_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2021_TECHNICAL_JARGON_Output";
  definition: StringFieldAnswerTypeWrapper;
  source: StringFieldAnswerTypeWrapper;
  term: StringFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2021_Technical_Jargon_OutputWrapper =
  {
    __typename?: "TypedClaimsResolver_HACKTHENORTH2021_TECHNICAL_JARGON_OutputWrapper";
    answers: TypedClaimsResolver_Hackthenorth2021_Technical_Jargon_Output;
  };

export type TypedClaimsResolver_Hackthenorth2022_Contact_Lists_Output = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2022_CONTACT_LISTS_Output";
  description: StringFieldAnswerTypeWrapper;
  last_run_at: StringFieldAnswerTypeWrapper;
  mailjet_list_id: NumberFieldAnswerTypeWrapper;
  query: StringFieldAnswerTypeWrapper;
  transformer: StringFieldAnswerTypeWrapper;
};

export type TypedClaimsResolver_Hackthenorth2022_Contact_Lists_OutputWrapper = {
  __typename?: "TypedClaimsResolver_HACKTHENORTH2022_CONTACT_LISTS_OutputWrapper";
  answers: TypedClaimsResolver_Hackthenorth2022_Contact_Lists_Output;
};

/** Update an event's data */
export type UpdateEventInput = {
  description?: InputMaybe<Scalars["String"]>;
  end_time?: InputMaybe<Scalars["DateTime"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  start_time?: InputMaybe<Scalars["DateTime"]>;
};

export type UpdatePasswordSuccess = {
  __typename?: "UpdatePasswordSuccess";
  email: Scalars["String"];
  message: Scalars["String"];
};

export type UpdateSponsorCompanyInput = {
  coc_accepted?: InputMaybe<Scalars["Boolean"]>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutSponsor_CompaniesInput>;
  invite_code?: InputMaybe<Scalars["String"]>;
  logo?: InputMaybe<Scalars["String"]>;
  primary_contact_email?: InputMaybe<Scalars["String"]>;
  primary_contact_name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutSponsor_CompanyInput>;
  stage?: InputMaybe<Scalars["String"]>;
  tc_accepted?: InputMaybe<Scalars["Boolean"]>;
  tier?: InputMaybe<Scalars["String"]>;
};

export type UrlCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<UrlWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UrlCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<UrlCreateWithoutUsersInput>;
};

export type UrlCreateOrConnectWithoutUsersInput = {
  create: UrlCreateWithoutUsersInput;
  where: UrlWhereUniqueInput;
};

export type UrlCreateWithoutUsersInput = {
  behance?: InputMaybe<Scalars["String"]>;
  bitbucket?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  deviantart?: InputMaybe<Scalars["String"]>;
  devpost?: InputMaybe<Scalars["String"]>;
  dribbble?: InputMaybe<Scalars["String"]>;
  facebook?: InputMaybe<Scalars["String"]>;
  flickr?: InputMaybe<Scalars["String"]>;
  github?: InputMaybe<Scalars["String"]>;
  instagram?: InputMaybe<Scalars["String"]>;
  jsfiddle?: InputMaybe<Scalars["String"]>;
  linkedin?: InputMaybe<Scalars["String"]>;
  portfolio?: InputMaybe<Scalars["String"]>;
  resume?: InputMaybe<Scalars["String"]>;
  soundcloud?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UrlRelationFilter = {
  is?: InputMaybe<UrlWhereInput>;
  isNot?: InputMaybe<UrlWhereInput>;
};

export type UrlUpdateOneWithoutUsersInput = {
  connect?: InputMaybe<UrlWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UrlCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<UrlCreateWithoutUsersInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UrlUpdateWithoutUsersInput>;
  upsert?: InputMaybe<UrlUpsertWithoutUsersInput>;
};

export type UrlUpdateWithoutUsersInput = {
  behance?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bitbucket?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviantart?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  devpost?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  dribbble?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  facebook?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  flickr?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  github?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  instagram?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  jsfiddle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  linkedin?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resume?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  soundcloud?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  twitter?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UrlUpsertWithoutUsersInput = {
  create: UrlCreateWithoutUsersInput;
  update: UrlUpdateWithoutUsersInput;
};

export type UrlWhereInput = {
  AND?: InputMaybe<Array<UrlWhereInput>>;
  NOT?: InputMaybe<Array<UrlWhereInput>>;
  OR?: InputMaybe<Array<UrlWhereInput>>;
  behance?: InputMaybe<StringNullableFilter>;
  bitbucket?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  deviantart?: InputMaybe<StringNullableFilter>;
  devpost?: InputMaybe<StringNullableFilter>;
  dribbble?: InputMaybe<StringNullableFilter>;
  facebook?: InputMaybe<StringNullableFilter>;
  flickr?: InputMaybe<StringNullableFilter>;
  github?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  instagram?: InputMaybe<StringNullableFilter>;
  jsfiddle?: InputMaybe<StringNullableFilter>;
  linkedin?: InputMaybe<StringNullableFilter>;
  portfolio?: InputMaybe<StringNullableFilter>;
  resume?: InputMaybe<StringNullableFilter>;
  soundcloud?: InputMaybe<StringNullableFilter>;
  twitter?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserRelationFilter>;
};

export type UrlWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  address_id?: Maybe<Scalars["Int"]>;
  allergies: Array<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  claims: Array<Claim>;
  created_at: Scalars["DateTime"];
  date_of_birth?: Maybe<Scalars["DateTime"]>;
  discord_registered: Scalars["Boolean"];
  email: Scalars["String"];
  email_hashes: Array<Scalars["String"]>;
  emergency_contact_address_id?: Maybe<Scalars["Int"]>;
  emergency_contact_email?: Maybe<Scalars["String"]>;
  emergency_contact_name?: Maybe<Scalars["String"]>;
  emergency_contact_phone_number?: Maybe<Scalars["String"]>;
  emergency_contact_relationship?: Maybe<Scalars["String"]>;
  ethnicity?: Maybe<Scalars["String"]>;
  food_restrictions: Array<Scalars["String"]>;
  gender?: Maybe<Gender>;
  hacker_education_id?: Maybe<Scalars["Int"]>;
  hacker_hackathons: Array<Scalars["String"]>;
  hacker_school_email?: Maybe<Scalars["String"]>;
  hacker_skills: Array<Scalars["String"]>;
  hacker_travel_id?: Maybe<Scalars["Int"]>;
  hacker_urls_id?: Maybe<Scalars["Int"]>;
  hopin_magic_link?: Maybe<Scalars["String"]>;
  hopin_registered?: Maybe<Scalars["Boolean"]>;
  id: Scalars["Int"];
  legal_name?: Maybe<Scalars["String"]>;
  mentor_location?: Maybe<Scalars["String"]>;
  mentor_skills: Array<Scalars["String"]>;
  name: Scalars["String"];
  native_language?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  phone_number?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["Int"]>;
  shipping_address_id?: Maybe<Scalars["Int"]>;
  shirt_size?: Maybe<Scalars["Int"]>;
  sponsor_company_id?: Maybe<Scalars["Int"]>;
  sponsor_personal_email?: Maybe<Scalars["String"]>;
  sponsor_role?: Maybe<Scalars["String"]>;
  sponsor_skills: Array<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type UserCreateManyAddressInput = {
  allergies?: InputMaybe<UserCreateManyallergiesInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateManyemail_HashesInput>;
  emergency_contact_address_id?: InputMaybe<Scalars["Int"]>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  food_restrictions?: InputMaybe<UserCreateManyfood_RestrictionsInput>;
  gender?: InputMaybe<Gender>;
  hacker_education_id?: InputMaybe<Scalars["Int"]>;
  hacker_hackathons?: InputMaybe<UserCreateManyhacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreateManyhacker_SkillsInput>;
  hacker_travel_id?: InputMaybe<Scalars["Int"]>;
  hacker_urls_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_skills?: InputMaybe<UserCreateManymentor_SkillsInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone_number?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address_id?: InputMaybe<Scalars["Int"]>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_company_id?: InputMaybe<Scalars["Int"]>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_skills?: InputMaybe<UserCreateManysponsor_SkillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateManyAddressInputEnvelope = {
  data: Array<UserCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreateManyEducationInput = {
  address_id?: InputMaybe<Scalars["Int"]>;
  allergies?: InputMaybe<UserCreateManyallergiesInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateManyemail_HashesInput>;
  emergency_contact_address_id?: InputMaybe<Scalars["Int"]>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  food_restrictions?: InputMaybe<UserCreateManyfood_RestrictionsInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreateManyhacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreateManyhacker_SkillsInput>;
  hacker_travel_id?: InputMaybe<Scalars["Int"]>;
  hacker_urls_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_skills?: InputMaybe<UserCreateManymentor_SkillsInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone_number?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address_id?: InputMaybe<Scalars["Int"]>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_company_id?: InputMaybe<Scalars["Int"]>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_skills?: InputMaybe<UserCreateManysponsor_SkillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateManyEducationInputEnvelope = {
  data: Array<UserCreateManyEducationInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreateManyEmergency_Contact_AddressInput = {
  address_id?: InputMaybe<Scalars["Int"]>;
  allergies?: InputMaybe<UserCreateManyallergiesInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateManyemail_HashesInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  food_restrictions?: InputMaybe<UserCreateManyfood_RestrictionsInput>;
  gender?: InputMaybe<Gender>;
  hacker_education_id?: InputMaybe<Scalars["Int"]>;
  hacker_hackathons?: InputMaybe<UserCreateManyhacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreateManyhacker_SkillsInput>;
  hacker_travel_id?: InputMaybe<Scalars["Int"]>;
  hacker_urls_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_skills?: InputMaybe<UserCreateManymentor_SkillsInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone_number?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address_id?: InputMaybe<Scalars["Int"]>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_company_id?: InputMaybe<Scalars["Int"]>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_skills?: InputMaybe<UserCreateManysponsor_SkillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateManyEmergency_Contact_AddressInputEnvelope = {
  data: Array<UserCreateManyEmergency_Contact_AddressInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreateManyShipping_AddressInput = {
  address_id?: InputMaybe<Scalars["Int"]>;
  allergies?: InputMaybe<UserCreateManyallergiesInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateManyemail_HashesInput>;
  emergency_contact_address_id?: InputMaybe<Scalars["Int"]>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  food_restrictions?: InputMaybe<UserCreateManyfood_RestrictionsInput>;
  gender?: InputMaybe<Gender>;
  hacker_education_id?: InputMaybe<Scalars["Int"]>;
  hacker_hackathons?: InputMaybe<UserCreateManyhacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreateManyhacker_SkillsInput>;
  hacker_travel_id?: InputMaybe<Scalars["Int"]>;
  hacker_urls_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_skills?: InputMaybe<UserCreateManymentor_SkillsInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phone_number?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["Int"]>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_company_id?: InputMaybe<Scalars["Int"]>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_skills?: InputMaybe<UserCreateManysponsor_SkillsInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UserCreateManyShipping_AddressInputEnvelope = {
  data: Array<UserCreateManyShipping_AddressInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserCreateManyallergiesInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManyemail_HashesInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManyfood_RestrictionsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManyhacker_HackathonsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManyhacker_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManymentor_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateManysponsor_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateNestedManyWithoutAddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAddressInput>>;
  createMany?: InputMaybe<UserCreateManyAddressInputEnvelope>;
};

export type UserCreateNestedManyWithoutEducationInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutEducationInput>>;
  create?: InputMaybe<Array<UserCreateWithoutEducationInput>>;
  createMany?: InputMaybe<UserCreateManyEducationInputEnvelope>;
};

export type UserCreateNestedManyWithoutEmergency_Contact_AddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutEmergency_Contact_AddressInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutEmergency_Contact_AddressInput>>;
  createMany?: InputMaybe<UserCreateManyEmergency_Contact_AddressInputEnvelope>;
};

export type UserCreateNestedManyWithoutShipping_AddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutShipping_AddressInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutShipping_AddressInput>>;
  createMany?: InputMaybe<UserCreateManyShipping_AddressInputEnvelope>;
};

export type UserCreateNestedOneWithoutClaimsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<UserCreateWithoutClaimsInput>;
};

export type UserCreateNestedOneWithoutCollaboratorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollaboratorsInput>;
  create?: InputMaybe<UserCreateWithoutCollaboratorsInput>;
};

export type UserCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<UserCreateWithoutCompanyInput>;
};

export type UserCreateNestedOneWithoutEvent_Activity_Redemptions_EventInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_Activity_Redemptions_EventInput>;
  create?: InputMaybe<UserCreateWithoutEvent_Activity_Redemptions_EventInput>;
};

export type UserCreateNestedOneWithoutEvent_Activity_Redemptions_UserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_Activity_Redemptions_UserInput>;
  create?: InputMaybe<UserCreateWithoutEvent_Activity_Redemptions_UserInput>;
};

export type UserCreateNestedOneWithoutEvent_AttendeesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_AttendeesInput>;
  create?: InputMaybe<UserCreateWithoutEvent_AttendeesInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutMentor_Request_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentor_Request_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutMentor_Request_CommentsInput>;
};

export type UserCreateNestedOneWithoutMentor_RequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<UserCreateWithoutMentor_RequestsInput>;
};

export type UserCreateNestedOneWithoutMentorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentorsInput>;
  create?: InputMaybe<UserCreateWithoutMentorsInput>;
};

export type UserCreateNestedOneWithoutRepresentativesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRepresentativesInput>;
  create?: InputMaybe<UserCreateWithoutRepresentativesInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateNestedOneWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<UserCreateWithoutSponsor_IndividualsInput>;
};

export type UserCreateNestedOneWithoutSponsor_ScansInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSponsor_ScansInput>;
  create?: InputMaybe<UserCreateWithoutSponsor_ScansInput>;
};

export type UserCreateNestedOneWithoutTeam_MembersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<UserCreateWithoutTeam_MembersInput>;
};

export type UserCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
};

export type UserCreateNestedOneWithoutUser_SubmissionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_SubmissionsInput>;
  create?: InputMaybe<UserCreateWithoutUser_SubmissionsInput>;
};

export type UserCreateOrConnectWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClaimsInput = {
  create: UserCreateWithoutClaimsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCollaboratorsInput = {
  create: UserCreateWithoutCollaboratorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCompanyInput = {
  create: UserCreateWithoutCompanyInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEducationInput = {
  create: UserCreateWithoutEducationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEmergency_Contact_AddressInput = {
  create: UserCreateWithoutEmergency_Contact_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEvent_Activity_Redemptions_EventInput = {
  create: UserCreateWithoutEvent_Activity_Redemptions_EventInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEvent_Activity_Redemptions_UserInput = {
  create: UserCreateWithoutEvent_Activity_Redemptions_UserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEvent_AttendeesInput = {
  create: UserCreateWithoutEvent_AttendeesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMentor_Request_CommentsInput = {
  create: UserCreateWithoutMentor_Request_CommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMentor_RequestsInput = {
  create: UserCreateWithoutMentor_RequestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMentorsInput = {
  create: UserCreateWithoutMentorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRepresentativesInput = {
  create: UserCreateWithoutRepresentativesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutShipping_AddressInput = {
  create: UserCreateWithoutShipping_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSponsor_IndividualsInput = {
  create: UserCreateWithoutSponsor_IndividualsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSponsor_ScansInput = {
  create: UserCreateWithoutSponsor_ScansInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeam_MembersInput = {
  create: UserCreateWithoutTeam_MembersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUser_SubmissionsInput = {
  create: UserCreateWithoutUser_SubmissionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAddressInput = {
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutClaimsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCollaboratorsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutCompanyInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutEducationInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutEmergency_Contact_AddressInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutEvent_Activity_Redemptions_EventInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutEvent_Activity_Redemptions_UserInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutEvent_AttendeesInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutFilesInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutMentor_Request_CommentsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutMentor_RequestsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutMentorsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRepresentativesInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutReviewsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutShipping_AddressInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSponsor_IndividualsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSponsor_ScansInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTeam_MembersInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTeamsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUser_SubmissionsInput = {
  address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserCreateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  claims?: InputMaybe<ClaimCreateNestedManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUsersInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  education?: InputMaybe<EducationCreateNestedOneWithoutUsersInput>;
  email: Scalars["String"];
  email_hashes?: InputMaybe<UserCreateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<Scalars["String"]>;
  emergency_contact_name?: InputMaybe<Scalars["String"]>;
  emergency_contact_phone_number?: InputMaybe<Scalars["String"]>;
  emergency_contact_relationship?: InputMaybe<Scalars["String"]>;
  ethnicity?: InputMaybe<Scalars["String"]>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionCreateNestedManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenCreateNestedManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserCreatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordCreateNestedManyWithoutUserInput>;
  gender?: InputMaybe<Gender>;
  hacker_hackathons?: InputMaybe<UserCreatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<Scalars["String"]>;
  hacker_skills?: InputMaybe<UserCreatehacker_SkillsInput>;
  legal_name?: InputMaybe<Scalars["String"]>;
  mentor_location?: InputMaybe<Scalars["String"]>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentCreateNestedManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestCreateNestedManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserCreatementor_SkillsInput>;
  mentors?: InputMaybe<MentorCreateNestedManyWithoutUserInput>;
  name: Scalars["String"];
  native_language?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  person?: InputMaybe<PersonCreateNestedManyWithoutUserInput>;
  phone_number?: InputMaybe<Scalars["String"]>;
  representatives?: InputMaybe<RepresentativeCreateNestedManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Scalars["Int"]>;
  shipping_address?: InputMaybe<AddressCreateNestedOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<Scalars["Int"]>;
  sponsor_individuals?: InputMaybe<SponsorIndividualCreateNestedManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<Scalars["String"]>;
  sponsor_role?: InputMaybe<Scalars["String"]>;
  sponsor_scans?: InputMaybe<SponsorScanCreateNestedManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserCreatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  teams?: InputMaybe<TeamCreateNestedManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationCreateNestedOneWithoutUsersInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  urls?: InputMaybe<UrlCreateNestedOneWithoutUsersInput>;
};

export type UserCreateallergiesInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreateemail_HashesInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreatefood_RestrictionsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreatehacker_HackathonsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreatehacker_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreatementor_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserCreatesponsor_SkillsInput = {
  set: Array<Scalars["String"]>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  address_id?: InputMaybe<SortOrder>;
  allergies?: InputMaybe<SortOrder>;
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  email_hashes?: InputMaybe<SortOrder>;
  emergency_contact_address_id?: InputMaybe<SortOrder>;
  emergency_contact_email?: InputMaybe<SortOrder>;
  emergency_contact_name?: InputMaybe<SortOrder>;
  emergency_contact_phone_number?: InputMaybe<SortOrder>;
  emergency_contact_relationship?: InputMaybe<SortOrder>;
  ethnicity?: InputMaybe<SortOrder>;
  food_restrictions?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  hacker_education_id?: InputMaybe<SortOrder>;
  hacker_hackathons?: InputMaybe<SortOrder>;
  hacker_school_email?: InputMaybe<SortOrder>;
  hacker_skills?: InputMaybe<SortOrder>;
  hacker_travel_id?: InputMaybe<SortOrder>;
  hacker_urls_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  legal_name?: InputMaybe<SortOrder>;
  mentor_location?: InputMaybe<SortOrder>;
  mentor_skills?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  native_language?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone_number?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  shipping_address_id?: InputMaybe<SortOrder>;
  shirt_size?: InputMaybe<SortOrder>;
  sponsor_company_id?: InputMaybe<SortOrder>;
  sponsor_personal_email?: InputMaybe<SortOrder>;
  sponsor_role?: InputMaybe<SortOrder>;
  sponsor_skills?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AddressId = "address_id",
  Allergies = "allergies",
  Avatar = "avatar",
  Bio = "bio",
  CreatedAt = "created_at",
  DateOfBirth = "date_of_birth",
  Email = "email",
  EmailHashes = "email_hashes",
  EmergencyContactAddressId = "emergency_contact_address_id",
  EmergencyContactEmail = "emergency_contact_email",
  EmergencyContactName = "emergency_contact_name",
  EmergencyContactPhoneNumber = "emergency_contact_phone_number",
  EmergencyContactRelationship = "emergency_contact_relationship",
  Ethnicity = "ethnicity",
  FoodRestrictions = "food_restrictions",
  Gender = "gender",
  HackerEducationId = "hacker_education_id",
  HackerHackathons = "hacker_hackathons",
  HackerSchoolEmail = "hacker_school_email",
  HackerSkills = "hacker_skills",
  HackerTravelId = "hacker_travel_id",
  HackerUrlsId = "hacker_urls_id",
  Id = "id",
  LegalName = "legal_name",
  MentorLocation = "mentor_location",
  MentorSkills = "mentor_skills",
  Name = "name",
  NativeLanguage = "native_language",
  Password = "password",
  PhoneNumber = "phone_number",
  Role = "role",
  ShippingAddressId = "shipping_address_id",
  ShirtSize = "shirt_size",
  SponsorCompanyId = "sponsor_company_id",
  SponsorPersonalEmail = "sponsor_personal_email",
  SponsorRole = "sponsor_role",
  SponsorSkills = "sponsor_skills",
  UpdatedAt = "updated_at",
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  address_id?: InputMaybe<IntNullableFilter>;
  allergies?: InputMaybe<StringNullableListFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  date_of_birth?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  email_hashes?: InputMaybe<StringNullableListFilter>;
  emergency_contact_address_id?: InputMaybe<IntNullableFilter>;
  emergency_contact_email?: InputMaybe<StringNullableFilter>;
  emergency_contact_name?: InputMaybe<StringNullableFilter>;
  emergency_contact_phone_number?: InputMaybe<StringNullableFilter>;
  emergency_contact_relationship?: InputMaybe<StringNullableFilter>;
  ethnicity?: InputMaybe<StringNullableFilter>;
  food_restrictions?: InputMaybe<StringNullableListFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  hacker_education_id?: InputMaybe<IntNullableFilter>;
  hacker_hackathons?: InputMaybe<StringNullableListFilter>;
  hacker_school_email?: InputMaybe<StringNullableFilter>;
  hacker_skills?: InputMaybe<StringNullableListFilter>;
  hacker_travel_id?: InputMaybe<IntNullableFilter>;
  hacker_urls_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  legal_name?: InputMaybe<StringNullableFilter>;
  mentor_location?: InputMaybe<StringNullableFilter>;
  mentor_skills?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  native_language?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone_number?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<IntNullableFilter>;
  shipping_address_id?: InputMaybe<IntNullableFilter>;
  shirt_size?: InputMaybe<IntNullableFilter>;
  sponsor_company_id?: InputMaybe<IntNullableFilter>;
  sponsor_personal_email?: InputMaybe<StringNullableFilter>;
  sponsor_role?: InputMaybe<StringNullableFilter>;
  sponsor_skills?: InputMaybe<StringNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserSubmissionCreateManySubmissionInput = {
  dummy?: InputMaybe<Scalars["String"]>;
  user_id: Scalars["Int"];
};

export type UserSubmissionCreateManySubmissionInputEnvelope = {
  data: Array<UserSubmissionCreateManySubmissionInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSubmissionCreateManyUserInput = {
  dummy?: InputMaybe<Scalars["String"]>;
  submission_id: Scalars["Int"];
};

export type UserSubmissionCreateManyUserInputEnvelope = {
  data: Array<UserSubmissionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSubmissionCreateNestedManyWithoutSubmissionInput = {
  connect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSubmissionCreateOrConnectWithoutSubmissionInput>
  >;
  create?: InputMaybe<Array<UserSubmissionCreateWithoutSubmissionInput>>;
  createMany?: InputMaybe<UserSubmissionCreateManySubmissionInputEnvelope>;
};

export type UserSubmissionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSubmissionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UserSubmissionCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSubmissionCreateManyUserInputEnvelope>;
};

export type UserSubmissionCreateOrConnectWithoutSubmissionInput = {
  create: UserSubmissionCreateWithoutSubmissionInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionCreateOrConnectWithoutUserInput = {
  create: UserSubmissionCreateWithoutUserInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionCreateWithoutSubmissionInput = {
  dummy?: InputMaybe<Scalars["String"]>;
  user: UserCreateNestedOneWithoutUser_SubmissionsInput;
};

export type UserSubmissionCreateWithoutUserInput = {
  dummy?: InputMaybe<Scalars["String"]>;
  submission: SubmissionCreateNestedOneWithoutUser_SubmissionsInput;
};

export type UserSubmissionListRelationFilter = {
  every?: InputMaybe<UserSubmissionWhereInput>;
  none?: InputMaybe<UserSubmissionWhereInput>;
  some?: InputMaybe<UserSubmissionWhereInput>;
};

export type UserSubmissionScalarWhereInput = {
  AND?: InputMaybe<Array<UserSubmissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserSubmissionScalarWhereInput>>;
  OR?: InputMaybe<Array<UserSubmissionScalarWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  submission_id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type UserSubmissionUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserSubmissionUpdateManyWithWhereWithoutSubmissionInput = {
  data: UserSubmissionUpdateManyMutationInput;
  where: UserSubmissionScalarWhereInput;
};

export type UserSubmissionUpdateManyWithWhereWithoutUserInput = {
  data: UserSubmissionUpdateManyMutationInput;
  where: UserSubmissionScalarWhereInput;
};

export type UserSubmissionUpdateManyWithoutSubmissionInput = {
  connect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSubmissionCreateOrConnectWithoutSubmissionInput>
  >;
  create?: InputMaybe<Array<UserSubmissionCreateWithoutSubmissionInput>>;
  createMany?: InputMaybe<UserSubmissionCreateManySubmissionInputEnvelope>;
  delete?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserSubmissionUpdateWithWhereUniqueWithoutSubmissionInput>
  >;
  updateMany?: InputMaybe<
    Array<UserSubmissionUpdateManyWithWhereWithoutSubmissionInput>
  >;
  upsert?: InputMaybe<
    Array<UserSubmissionUpsertWithWhereUniqueWithoutSubmissionInput>
  >;
};

export type UserSubmissionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserSubmissionCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<UserSubmissionCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserSubmissionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserSubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSubmissionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserSubmissionUpdateWithWhereUniqueWithoutUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UserSubmissionUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<
    Array<UserSubmissionUpsertWithWhereUniqueWithoutUserInput>
  >;
};

export type UserSubmissionUpdateWithWhereUniqueWithoutSubmissionInput = {
  data: UserSubmissionUpdateWithoutSubmissionInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionUpdateWithWhereUniqueWithoutUserInput = {
  data: UserSubmissionUpdateWithoutUserInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionUpdateWithoutSubmissionInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUser_SubmissionsInput>;
};

export type UserSubmissionUpdateWithoutUserInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneRequiredWithoutUser_SubmissionsInput>;
};

export type UserSubmissionUpsertWithWhereUniqueWithoutSubmissionInput = {
  create: UserSubmissionCreateWithoutSubmissionInput;
  update: UserSubmissionUpdateWithoutSubmissionInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionUpsertWithWhereUniqueWithoutUserInput = {
  create: UserSubmissionCreateWithoutUserInput;
  update: UserSubmissionUpdateWithoutUserInput;
  where: UserSubmissionWhereUniqueInput;
};

export type UserSubmissionUser_IdSubmission_IdCompoundUniqueInput = {
  submission_id: Scalars["Int"];
  user_id: Scalars["Int"];
};

export type UserSubmissionWhereInput = {
  AND?: InputMaybe<Array<UserSubmissionWhereInput>>;
  NOT?: InputMaybe<Array<UserSubmissionWhereInput>>;
  OR?: InputMaybe<Array<UserSubmissionWhereInput>>;
  dummy?: InputMaybe<StringNullableFilter>;
  submission?: InputMaybe<SubmissionRelationFilter>;
  submission_id?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type UserSubmissionWhereUniqueInput = {
  user_id_submission_id?: InputMaybe<UserSubmissionUser_IdSubmission_IdCompoundUniqueInput>;
};

export type UserUpdateManyMutationInput = {
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutAddressInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutEducationInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutEmergency_Contact_AddressInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutShipping_AddressInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutAddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAddressInput>>;
  createMany?: InputMaybe<UserCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type UserUpdateManyWithoutEducationInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutEducationInput>>;
  create?: InputMaybe<Array<UserCreateWithoutEducationInput>>;
  createMany?: InputMaybe<UserCreateManyEducationInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutEducationInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutEducationInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutEducationInput>>;
};

export type UserUpdateManyWithoutEmergency_Contact_AddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutEmergency_Contact_AddressInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutEmergency_Contact_AddressInput>>;
  createMany?: InputMaybe<UserCreateManyEmergency_Contact_AddressInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserUpdateWithWhereUniqueWithoutEmergency_Contact_AddressInput>
  >;
  updateMany?: InputMaybe<
    Array<UserUpdateManyWithWhereWithoutEmergency_Contact_AddressInput>
  >;
  upsert?: InputMaybe<
    Array<UserUpsertWithWhereUniqueWithoutEmergency_Contact_AddressInput>
  >;
};

export type UserUpdateManyWithoutShipping_AddressInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutShipping_AddressInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutShipping_AddressInput>>;
  createMany?: InputMaybe<UserCreateManyShipping_AddressInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserUpdateWithWhereUniqueWithoutShipping_AddressInput>
  >;
  updateMany?: InputMaybe<
    Array<UserUpdateManyWithWhereWithoutShipping_AddressInput>
  >;
  upsert?: InputMaybe<
    Array<UserUpsertWithWhereUniqueWithoutShipping_AddressInput>
  >;
};

export type UserUpdateOneRequiredWithoutClaimsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClaimsInput>;
  create?: InputMaybe<UserCreateWithoutClaimsInput>;
  update?: InputMaybe<UserUpdateWithoutClaimsInput>;
  upsert?: InputMaybe<UserUpsertWithoutClaimsInput>;
};

export type UserUpdateOneRequiredWithoutCollaboratorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCollaboratorsInput>;
  create?: InputMaybe<UserCreateWithoutCollaboratorsInput>;
  update?: InputMaybe<UserUpdateWithoutCollaboratorsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCollaboratorsInput>;
};

export type UserUpdateOneRequiredWithoutEvent_Activity_Redemptions_EventInput =
  {
    connect?: InputMaybe<UserWhereUniqueInput>;
    connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_Activity_Redemptions_EventInput>;
    create?: InputMaybe<UserCreateWithoutEvent_Activity_Redemptions_EventInput>;
    update?: InputMaybe<UserUpdateWithoutEvent_Activity_Redemptions_EventInput>;
    upsert?: InputMaybe<UserUpsertWithoutEvent_Activity_Redemptions_EventInput>;
  };

export type UserUpdateOneRequiredWithoutEvent_AttendeesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_AttendeesInput>;
  create?: InputMaybe<UserCreateWithoutEvent_AttendeesInput>;
  update?: InputMaybe<UserUpdateWithoutEvent_AttendeesInput>;
  upsert?: InputMaybe<UserUpsertWithoutEvent_AttendeesInput>;
};

export type UserUpdateOneRequiredWithoutMentor_Request_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentor_Request_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutMentor_Request_CommentsInput>;
  update?: InputMaybe<UserUpdateWithoutMentor_Request_CommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMentor_Request_CommentsInput>;
};

export type UserUpdateOneRequiredWithoutMentor_RequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentor_RequestsInput>;
  create?: InputMaybe<UserCreateWithoutMentor_RequestsInput>;
  update?: InputMaybe<UserUpdateWithoutMentor_RequestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMentor_RequestsInput>;
};

export type UserUpdateOneRequiredWithoutMentorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMentorsInput>;
  create?: InputMaybe<UserCreateWithoutMentorsInput>;
  update?: InputMaybe<UserUpdateWithoutMentorsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMentorsInput>;
};

export type UserUpdateOneRequiredWithoutRepresentativesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRepresentativesInput>;
  create?: InputMaybe<UserCreateWithoutRepresentativesInput>;
  update?: InputMaybe<UserUpdateWithoutRepresentativesInput>;
  upsert?: InputMaybe<UserUpsertWithoutRepresentativesInput>;
};

export type UserUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneRequiredWithoutSponsor_IndividualsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSponsor_IndividualsInput>;
  create?: InputMaybe<UserCreateWithoutSponsor_IndividualsInput>;
  update?: InputMaybe<UserUpdateWithoutSponsor_IndividualsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSponsor_IndividualsInput>;
};

export type UserUpdateOneRequiredWithoutSponsor_ScansInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSponsor_ScansInput>;
  create?: InputMaybe<UserCreateWithoutSponsor_ScansInput>;
  update?: InputMaybe<UserUpdateWithoutSponsor_ScansInput>;
  upsert?: InputMaybe<UserUpsertWithoutSponsor_ScansInput>;
};

export type UserUpdateOneRequiredWithoutTeam_MembersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeam_MembersInput>;
  create?: InputMaybe<UserCreateWithoutTeam_MembersInput>;
  update?: InputMaybe<UserUpdateWithoutTeam_MembersInput>;
  upsert?: InputMaybe<UserUpsertWithoutTeam_MembersInput>;
};

export type UserUpdateOneRequiredWithoutUser_SubmissionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_SubmissionsInput>;
  create?: InputMaybe<UserCreateWithoutUser_SubmissionsInput>;
  update?: InputMaybe<UserUpdateWithoutUser_SubmissionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUser_SubmissionsInput>;
};

export type UserUpdateOneWithoutCompanyInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<UserCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UserUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<UserUpsertWithoutCompanyInput>;
};

export type UserUpdateOneWithoutEvent_Activity_Redemptions_UserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEvent_Activity_Redemptions_UserInput>;
  create?: InputMaybe<UserCreateWithoutEvent_Activity_Redemptions_UserInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UserUpdateWithoutEvent_Activity_Redemptions_UserInput>;
  upsert?: InputMaybe<UserUpsertWithoutEvent_Activity_Redemptions_UserInput>;
};

export type UserUpdateOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateOneWithoutTeamsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UserUpdateWithoutTeamsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTeamsInput>;
};

export type UserUpdateWithWhereUniqueWithoutAddressInput = {
  data: UserUpdateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutEducationInput = {
  data: UserUpdateWithoutEducationInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutEmergency_Contact_AddressInput = {
  data: UserUpdateWithoutEmergency_Contact_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutShipping_AddressInput = {
  data: UserUpdateWithoutShipping_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAddressInput = {
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutClaimsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutCollaboratorsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutCompanyInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutEducationInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutEmergency_Contact_AddressInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutEvent_Activity_Redemptions_EventInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutEvent_Activity_Redemptions_UserInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutEvent_AttendeesInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutFilesInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutMentor_Request_CommentsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutMentor_RequestsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutMentorsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutRepresentativesInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutReviewsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutShipping_AddressInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSponsor_IndividualsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSponsor_ScansInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTeam_MembersInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTeamsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
  user_submissions?: InputMaybe<UserSubmissionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUser_SubmissionsInput = {
  address?: InputMaybe<AddressUpdateOneWithoutUsers_As_AddressInput>;
  allergies?: InputMaybe<UserUpdateallergiesInput>;
  auth_tokens?: InputMaybe<AuthTokenUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claims?: InputMaybe<ClaimUpdateManyWithoutUserInput>;
  collaborators?: InputMaybe<CollaboratorUpdateManyWithoutUserInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUsersInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date_of_birth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  education?: InputMaybe<EducationUpdateOneWithoutUsersInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  email_hashes?: InputMaybe<UserUpdateemail_HashesInput>;
  emergency_contact_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Emergency_Contact_AddressInput>;
  emergency_contact_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emergency_contact_relationship?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ethnicity?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionUpdateManyWithoutVolunteerInput>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionUpdateManyWithoutUserInput>;
  event_attendees?: InputMaybe<EventAttendeeUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  firebase_tokens?: InputMaybe<FirebaseTokenUpdateManyWithoutUserInput>;
  food_restrictions?: InputMaybe<UserUpdatefood_RestrictionsInput>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordUpdateManyWithoutUserInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  hacker_hackathons?: InputMaybe<UserUpdatehacker_HackathonsInput>;
  hacker_school_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  hacker_skills?: InputMaybe<UserUpdatehacker_SkillsInput>;
  legal_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentUpdateManyWithoutUserInput>;
  mentor_requests?: InputMaybe<MentorRequestUpdateManyWithoutUserInput>;
  mentor_skills?: InputMaybe<UserUpdatementor_SkillsInput>;
  mentors?: InputMaybe<MentorUpdateManyWithoutUserInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  native_language?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateManyWithoutUserInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  representatives?: InputMaybe<RepresentativeUpdateManyWithoutUserInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  shipping_address?: InputMaybe<AddressUpdateOneWithoutUsers_As_Shipping_AddressInput>;
  shirt_size?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sponsor_individuals?: InputMaybe<SponsorIndividualUpdateManyWithoutUserInput>;
  sponsor_personal_email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_role?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sponsor_scans?: InputMaybe<SponsorScanUpdateManyWithoutUserInput>;
  sponsor_skills?: InputMaybe<UserUpdatesponsor_SkillsInput>;
  team_members?: InputMaybe<TeamMemberUpdateManyWithoutUserInput>;
  teams?: InputMaybe<TeamUpdateManyWithoutUserInput>;
  travel_information?: InputMaybe<TravelInformationUpdateOneWithoutUsersInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  urls?: InputMaybe<UrlUpdateOneWithoutUsersInput>;
};

export type UserUpdateallergiesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdateemail_HashesInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdatefood_RestrictionsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdatehacker_HackathonsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdatehacker_SkillsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdatementor_SkillsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpdatesponsor_SkillsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserUpsertWithWhereUniqueWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  update: UserUpdateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutEducationInput = {
  create: UserCreateWithoutEducationInput;
  update: UserUpdateWithoutEducationInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutEmergency_Contact_AddressInput = {
  create: UserCreateWithoutEmergency_Contact_AddressInput;
  update: UserUpdateWithoutEmergency_Contact_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutShipping_AddressInput = {
  create: UserCreateWithoutShipping_AddressInput;
  update: UserUpdateWithoutShipping_AddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutClaimsInput = {
  create: UserCreateWithoutClaimsInput;
  update: UserUpdateWithoutClaimsInput;
};

export type UserUpsertWithoutCollaboratorsInput = {
  create: UserCreateWithoutCollaboratorsInput;
  update: UserUpdateWithoutCollaboratorsInput;
};

export type UserUpsertWithoutCompanyInput = {
  create: UserCreateWithoutCompanyInput;
  update: UserUpdateWithoutCompanyInput;
};

export type UserUpsertWithoutEvent_Activity_Redemptions_EventInput = {
  create: UserCreateWithoutEvent_Activity_Redemptions_EventInput;
  update: UserUpdateWithoutEvent_Activity_Redemptions_EventInput;
};

export type UserUpsertWithoutEvent_Activity_Redemptions_UserInput = {
  create: UserCreateWithoutEvent_Activity_Redemptions_UserInput;
  update: UserUpdateWithoutEvent_Activity_Redemptions_UserInput;
};

export type UserUpsertWithoutEvent_AttendeesInput = {
  create: UserCreateWithoutEvent_AttendeesInput;
  update: UserUpdateWithoutEvent_AttendeesInput;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
};

export type UserUpsertWithoutMentor_Request_CommentsInput = {
  create: UserCreateWithoutMentor_Request_CommentsInput;
  update: UserUpdateWithoutMentor_Request_CommentsInput;
};

export type UserUpsertWithoutMentor_RequestsInput = {
  create: UserCreateWithoutMentor_RequestsInput;
  update: UserUpdateWithoutMentor_RequestsInput;
};

export type UserUpsertWithoutMentorsInput = {
  create: UserCreateWithoutMentorsInput;
  update: UserUpdateWithoutMentorsInput;
};

export type UserUpsertWithoutRepresentativesInput = {
  create: UserCreateWithoutRepresentativesInput;
  update: UserUpdateWithoutRepresentativesInput;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
};

export type UserUpsertWithoutSponsor_IndividualsInput = {
  create: UserCreateWithoutSponsor_IndividualsInput;
  update: UserUpdateWithoutSponsor_IndividualsInput;
};

export type UserUpsertWithoutSponsor_ScansInput = {
  create: UserCreateWithoutSponsor_ScansInput;
  update: UserUpdateWithoutSponsor_ScansInput;
};

export type UserUpsertWithoutTeam_MembersInput = {
  create: UserCreateWithoutTeam_MembersInput;
  update: UserUpdateWithoutTeam_MembersInput;
};

export type UserUpsertWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  update: UserUpdateWithoutTeamsInput;
};

export type UserUpsertWithoutUser_SubmissionsInput = {
  create: UserCreateWithoutUser_SubmissionsInput;
  update: UserUpdateWithoutUser_SubmissionsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntNullableFilter>;
  allergies?: InputMaybe<StringNullableListFilter>;
  auth_tokens?: InputMaybe<AuthTokenListRelationFilter>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  claims?: InputMaybe<ClaimListRelationFilter>;
  collaborators?: InputMaybe<CollaboratorListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  date_of_birth?: InputMaybe<DateTimeNullableFilter>;
  education?: InputMaybe<EducationRelationFilter>;
  email?: InputMaybe<StringFilter>;
  email_hashes?: InputMaybe<StringNullableListFilter>;
  emergency_contact_address?: InputMaybe<AddressRelationFilter>;
  emergency_contact_address_id?: InputMaybe<IntNullableFilter>;
  emergency_contact_email?: InputMaybe<StringNullableFilter>;
  emergency_contact_name?: InputMaybe<StringNullableFilter>;
  emergency_contact_phone_number?: InputMaybe<StringNullableFilter>;
  emergency_contact_relationship?: InputMaybe<StringNullableFilter>;
  ethnicity?: InputMaybe<StringNullableFilter>;
  event_activity_redemptions_event?: InputMaybe<EventActivityRedemptionListRelationFilter>;
  event_activity_redemptions_user?: InputMaybe<EventActivityRedemptionListRelationFilter>;
  event_attendees?: InputMaybe<EventAttendeeListRelationFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  firebase_tokens?: InputMaybe<FirebaseTokenListRelationFilter>;
  food_restrictions?: InputMaybe<StringNullableListFilter>;
  forgotten_passwords?: InputMaybe<ForgottenPasswordListRelationFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  hacker_education_id?: InputMaybe<IntNullableFilter>;
  hacker_hackathons?: InputMaybe<StringNullableListFilter>;
  hacker_school_email?: InputMaybe<StringNullableFilter>;
  hacker_skills?: InputMaybe<StringNullableListFilter>;
  hacker_travel_id?: InputMaybe<IntNullableFilter>;
  hacker_urls_id?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  legal_name?: InputMaybe<StringNullableFilter>;
  mentor_location?: InputMaybe<StringNullableFilter>;
  mentor_request_comments?: InputMaybe<MentorRequestCommentListRelationFilter>;
  mentor_requests?: InputMaybe<MentorRequestListRelationFilter>;
  mentor_skills?: InputMaybe<StringNullableListFilter>;
  mentors?: InputMaybe<MentorListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  native_language?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  person?: InputMaybe<PersonListRelationFilter>;
  phone_number?: InputMaybe<StringNullableFilter>;
  representatives?: InputMaybe<RepresentativeListRelationFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  role?: InputMaybe<IntNullableFilter>;
  shipping_address?: InputMaybe<AddressRelationFilter>;
  shipping_address_id?: InputMaybe<IntNullableFilter>;
  shirt_size?: InputMaybe<IntNullableFilter>;
  sponsor_company_id?: InputMaybe<IntNullableFilter>;
  sponsor_individuals?: InputMaybe<SponsorIndividualListRelationFilter>;
  sponsor_personal_email?: InputMaybe<StringNullableFilter>;
  sponsor_role?: InputMaybe<StringNullableFilter>;
  sponsor_scans?: InputMaybe<SponsorScanListRelationFilter>;
  sponsor_skills?: InputMaybe<StringNullableListFilter>;
  team_members?: InputMaybe<TeamMemberListRelationFilter>;
  teams?: InputMaybe<TeamListRelationFilter>;
  travel_information?: InputMaybe<TravelInformationRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  urls?: InputMaybe<UrlRelationFilter>;
  user_submissions?: InputMaybe<UserSubmissionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  hacker_travel_id?: InputMaybe<Scalars["Int"]>;
  hacker_urls_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  sponsor_company_id?: InputMaybe<Scalars["Int"]>;
};

export type EventListQueryVariables = Exact<{ [key: string]: never }>;

export type EventListQuery = {
  __typename?: "Query";
  sampleEvents: Array<{
    __typename?: "TEvent";
    id: number;
    name: string;
    event_type: string;
    permission?: string | null;
    start_time: number;
    end_time: number;
    description?: string | null;
    public_url?: string | null;
    private_url: string;
    related_events: Array<number>;
    speakers: Array<{
      __typename?: "TSpeaker";
      name: string;
      profile_pic?: string | null;
    }>;
  }>;
};

export type EventProfileQueryVariables = Exact<{
  id: Scalars["Float"];
}>;

export type EventProfileQuery = {
  __typename?: "Query";
  sampleEvent: {
    __typename?: "TEvent";
    id: number;
    name: string;
    event_type: string;
    permission?: string | null;
    start_time: number;
    end_time: number;
    description?: string | null;
  };
};

export const EventListDocument = gql`
  query EventList {
    sampleEvents {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
      speakers {
        name
        profile_pic
      }
      public_url
      private_url
      related_events
    }
  }
`;

/**
 * __useEventListQuery__
 *
 * To run a query within a React component, call `useEventListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventListQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventListQuery(
  baseOptions?: Apollo.QueryHookOptions<EventListQuery, EventListQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EventListQuery, EventListQueryVariables>(
    EventListDocument,
    options
  );
}
export function useEventListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EventListQuery,
    EventListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EventListQuery, EventListQueryVariables>(
    EventListDocument,
    options
  );
}
export type EventListQueryHookResult = ReturnType<typeof useEventListQuery>;
export type EventListLazyQueryHookResult = ReturnType<
  typeof useEventListLazyQuery
>;
export type EventListQueryResult = Apollo.QueryResult<
  EventListQuery,
  EventListQueryVariables
>;
export const EventProfileDocument = gql`
  query EventProfile($id: Float!) {
    sampleEvent(id: $id) {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
    }
  }
`;

/**
 * __useEventProfileQuery__
 *
 * To run a query within a React component, call `useEventProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventProfileQuery(
  baseOptions: Apollo.QueryHookOptions<
    EventProfileQuery,
    EventProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EventProfileQuery, EventProfileQueryVariables>(
    EventProfileDocument,
    options
  );
}
export function useEventProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    EventProfileQuery,
    EventProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EventProfileQuery, EventProfileQueryVariables>(
    EventProfileDocument,
    options
  );
}
export type EventProfileQueryHookResult = ReturnType<
  typeof useEventProfileQuery
>;
export type EventProfileLazyQueryHookResult = ReturnType<
  typeof useEventProfileLazyQuery
>;
export type EventProfileQueryResult = Apollo.QueryResult<
  EventProfileQuery,
  EventProfileQueryVariables
>;
