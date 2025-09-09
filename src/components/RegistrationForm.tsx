import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface FormData {
  companyName: string;
  memberCode: string;
  applicationType: string;
  title: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  nationality: string;
  birthDate: string;
  address: string;
  village: string;
  road: string;
  subDistrict: string;
  district: string;
  province: string;
  postalCode: string;
  phone: string;
  mobile: string;
  email: string;
  bankAccount: string;
  accountNumber: string;
  bank: string;
  branch: string;
  sponsorName: string;
  sponsorCode: string;
  networkSide: string;
  agreement: boolean;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: 'บริษัท เวิลด์ คลาส อินโนเวชั่น จำกัด',
    memberCode: '',
    applicationType: '',
    title: '',
    firstName: '',
    lastName: '',
    idNumber: '',
    nationality: '',
    birthDate: '',
    address: '',
    village: '',
    road: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    phone: '',
    mobile: '',
    email: '',
    bankAccount: '',
    accountNumber: '',
    bank: '',
    branch: '',
    sponsorName: '',
    sponsorCode: '',
    networkSide: '',
    agreement: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'memberCode', 'applicationType', 'title', 'firstName', 'lastName', 
      'idNumber', 'nationality', 'birthDate', 'address', 'phone', 'email'
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        return false;
      }
    }
    return formData.agreement;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setModalMessage('กรุณากรอกข้อมูลให้ครบถ้วนและยอมรับข้อตกลงก่อนส่ง');
      setShowModal(true);
      return;
    }

    // Success case
    setModalMessage('ข้อมูลถูกส่งเรียบร้อยแล้ว!');
    setShowModal(true);
    
    // Show success toast
    toast({
      title: "สำเร็จ",
      description: "ข้อมูลการสมัครถูกส่งเรียบร้อยแล้ว",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-2xl border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground text-center rounded-t-lg">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">WCI WORLD CLASS INNOVATION</h1>
              <p className="text-sm opacity-90">บริษัท เวิลด์ คลาส อินโนเวชั่น จำกัด</p>
              <p className="text-xs opacity-80">277 ถนนโอเอิ์แอเบิ์น และรีวิวกาเก็บ เอยธินมเอ ทรท. 10400</p>
            </div>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ใบสมัครสมาชิกผู้ร่วมธุรกิจ */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-primary mb-4">ใบสมัครสมาชิกผู้ร่วมธุรกิจ / Business Associate Application</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">ชื่อบริษัท</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="memberCode">รหัสสมาชิก/Member Code</Label>
                    <Input
                      id="memberCode"
                      value={formData.memberCode}
                      onChange={(e) => handleInputChange('memberCode', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Label>ประเภทการสมัคร / Contact Information of Applicant</Label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="applicationType"
                        value="individual"
                        checked={formData.applicationType === 'individual'}
                        onChange={(e) => handleInputChange('applicationType', e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span>บุคคลธรรมดา</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="applicationType"
                        value="company"
                        checked={formData.applicationType === 'company'}
                        onChange={(e) => handleInputChange('applicationType', e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span>ห้างหุ้นส่วน/บริษัท</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* ข้อมูลผู้สมัคร */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">ข้อมูลผู้สมัคร / Partnership of Applicant</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <Label htmlFor="title">คำนำหน้า</Label>
                    <Select value={formData.title} onValueChange={(value) => handleInputChange('title', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="เลือกคำนำหน้า" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">นาย</SelectItem>
                        <SelectItem value="mrs">นาง</SelectItem>
                        <SelectItem value="miss">นางสาว</SelectItem>
                        <SelectItem value="other">อื่นๆ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="firstName">ชื่อ / First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">นามสกุล / Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="nationality">สัญชาติ</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="idNumber">เลขบัตรประชาชนฯ / Passport ID</Label>
                    <Input
                      id="idNumber"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange('idNumber', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthDate">วัน เดือน ปีเกิด / Date of Birth</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* ข้อมูลที่อยู่ */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">ข้อมูลที่อยู่สิ่งพึงสิ่งสำคัญการส่งโครร / Shipping Address</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="address">เลขที่</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="village">หมู่บ้าน</Label>
                    <Input
                      id="village"
                      value={formData.village}
                      onChange={(e) => handleInputChange('village', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="road">ถนน</Label>
                    <Input
                      id="road"
                      value={formData.road}
                      onChange={(e) => handleInputChange('road', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="subDistrict">ตำบล/แขวง</Label>
                    <Input
                      id="subDistrict"
                      value={formData.subDistrict}
                      onChange={(e) => handleInputChange('subDistrict', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="district">อำเภอ/เขต</Label>
                    <Input
                      id="district"
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="province">จังหวัด</Label>
                    <Input
                      id="province"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="postalCode">รหัสไปรษณีย์</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">โทรศัพท์บ้าน/Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* ข้อมูลการรับค่าคอมมิชชั่น */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">ข้อมูลบัญชีรับค่าคอมมิชชั่น / Please fill in your bank account for commission transfer</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bankAccount">ชื่อบัญชี</Label>
                    <Input
                      id="bankAccount"
                      value={formData.bankAccount}
                      onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="accountNumber">เลขที่บัญชี</Label>
                    <Input
                      id="accountNumber"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bank">ธนาคาร</Label>
                    <Input
                      id="bank"
                      value={formData.bank}
                      onChange={(e) => handleInputChange('bank', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="branch">สาขา</Label>
                    <Input
                      id="branch"
                      value={formData.branch}
                      onChange={(e) => handleInputChange('branch', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* ข้อมูลผู้แนะนำ */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">ข้อมูลผู้แนะนำ / Sponsor use only</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="sponsorName">ชื่อผู้แนะนำ</Label>
                    <Input
                      id="sponsorName"
                      value={formData.sponsorName}
                      onChange={(e) => handleInputChange('sponsorName', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sponsorCode">รหัสผู้แนะนำ</Label>
                    <Input
                      id="sponsorCode"
                      value={formData.sponsorCode}
                      onChange={(e) => handleInputChange('sponsorCode', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label>ต่อสายงาน / of Sponsor</Label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="networkSide"
                        value="left"
                        checked={formData.networkSide === 'left'}
                        onChange={(e) => handleInputChange('networkSide', e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span>ซ้าย (Left)</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="networkSide"
                        value="right"
                        checked={formData.networkSide === 'right'}
                        onChange={(e) => handleInputChange('networkSide', e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <span>ขวา (Right)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* ข้อตกลง */}
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => handleInputChange('agreement', !!checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="agreement" className="text-sm leading-relaxed">
                    ข้าพเจ้าได้อ่านเงื่อนไขและข้อตกลงใน WCI และยอมรับ เงื่อนไข ข้อกำหนด อินโนเวชั่น จำกัด 
                    ข้าพเจ้าได้ตรวจสอบและคำตอบที่ได้ใว้วิธีการค้นไว้ในสินค้าในใบน บริษัท WCl จัดสินค้าบริการนิสิตกิจ WCI จนเข้านิสิตผมครั้งจองเว็บแบบ
                    การคาดทิล ปิว การเร่บอบการชี่สิน การคำนึ่ปจนที่ไว้ด้วยวิธีการอื่นฯซายง์ที่ไม่ให้การฯทุฎไว้ รับรองข้าพไซไทิกิจ WCl ปรตานกี
                  </Label>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  className="px-8 py-3 text-lg bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  ส่งข้อมูล
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>การแจ้งเตือน</DialogTitle>
            <DialogDescription className="text-lg pt-4">
              {modalMessage}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrationForm;