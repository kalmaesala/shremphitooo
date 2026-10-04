# Special Robot Addon

هذه الحزمة تحتوي على ملفات الإضافة البسيطة وواجهة إدارة تجريبية لإرسال أكواد التفعيل والتقارير (hit) عبر Telegram Bot API.

المطلوب بعد الدمج:
- ضبط المتغيرات في `.env` أو عبر إعدادات المشروع:
  - TELEGRAM_BOT_TOKEN=...
  - TELEGRAM_GROUP_ID=... (اختياري)
- تشغيل السيرفر الموجود في المشروع (server/index.ts) على الفرع special-robot-addon.
- فتح صفحة الإدارة: `/static/special-robot-main/admin/addon_admin.html` (أو نسخها لمكان الاستاتيك المستخدم)

ملاحظة: هذا فرع تجريبي؛ راجع الملفات وجربها قبل الدمج إلى main.
