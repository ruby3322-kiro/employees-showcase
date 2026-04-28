// 生成100名员工数据
function generateEmployees() {
    const firstNames = ['张', '李', '王', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '朱', '马', '胡', '郭', '何', '高', '林', '郑', '谢', '韩', '唐', '冯', '潘', '曾', '程', '戴', '夏', '钟'];
    const lastNames = ['明', '华', '强', '军', '磊', '鹏', '俊', '涛', '杰', '伟', '超', '建', '祥', '辉', '宇', '峰', '龙', '飞', '云', '海', '光', '生', '成', '康', '力', '达', '新', '红', '美', '娜', '丽', '英', '芳', '燕', '静', '敏', '文', '艳', '琳', '娟'];
    
    const employees = [];
    for (let i = 1; i <= 100; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        employees.push({
            id: i,
            name: firstName + lastName,
            avatar: `https://via.placeholder.com/200?text=${i}`
        });
    }
    return employees;
}

// 创建员工卡片 HTML
function createEmployeeCard(employee) {
    return `
        <div class="employee-card">
            <div class="employee-avatar-wrapper">
                <div class="employee-avatar">
                    <img src="${employee.avatar}" alt="${employee.name}">
                </div>
                <div class="employee-number">${employee.id}</div>
            </div>
            <div class="employee-name">${employee.name}</div>
        </div>
    `;
}

// 初始化页面
function initPage() {
    const employees = generateEmployees();
    const grid = document.getElementById('employeesGrid');
    
    // 添加员工卡片
    employees.forEach((employee, index) => {
        setTimeout(() => {
            grid.innerHTML += createEmployeeCard(employee);
        }, index * 30); // 延迟加载，产生波浪效果
    });

    // 更新总人数
    document.getElementById('totalEmployees').textContent = employees.length;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', initPage);

// 鼠标悬停效果
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.employee-card')) {
        const card = e.target.closest('.employee-card');
        card.style.transform = 'translateY(-10px) scale(1.05)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.employee-card')) {
        const card = e.target.closest('.employee-card');
        card.style.transform = 'translateY(0) scale(1)';
    }
});